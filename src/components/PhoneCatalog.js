import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { cashedFilteredPhones, cashedSorteredPhones } from '../helpers';

class PhoneCatalog extends React.Component {
  state={
    perPage: 20,
    currentPage: 1,
  }

  handleFilter = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: +value, currentPage: 1 });

    const params = new URLSearchParams(this.props.location.search);

    if (name === 'filterValue') {
      params.set('filter', value);
    } else if (name === 'sortValue') {
      params.set('sort', value);
    }

    this.props.history.push({
      pathname: '/phones',
      search: `?${params.toString()}`,
    });
  }

  handlePagination = (event) => {
    const { value } = event.target;

    this.setState({ currentPage: +value });
  }

  handlePaginationButtons = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'back':
        return this.state.currentPage > 1
          ? (this.setState(prevState => (
            { currentPage: prevState.currentPage - 1 })))
          : this.state.currentPage;

      case 'next':
        return this.state.currentPage < value
          ? (this.setState(prevState => (
            { currentPage: prevState.currentPage + 1 })))
          : this.state.currentPage;

      default: return this.state.currentPage;
    }
  }

  render() {
    const { perPage, currentPage } = this.state;
    const { location } = this.props;

    const params = new URLSearchParams(location.search);

    const filterValue = params.get('filter') ? params.get('filter') : '';
    const sortValue = params.get('sort') ? params.get('sort') : '';

    const { phones, chandgeBasketItems, basketPhones } = this.props;
    const filterPhones = cashedFilteredPhones(phones, filterValue);

    const sortedAndFilteredPhones = cashedSorteredPhones(
      filterPhones, sortValue
    );

    const pageQuantity = Math.ceil(sortedAndFilteredPhones.length / perPage);

    const pagButtons = Array.from(Array(pageQuantity), (b, i) => i + 1);
    const firsShownIndex = (currentPage * perPage) - perPage;
    const lastShownIndex = (currentPage * perPage);
    const lastShownPhone = currentPage === pageQuantity
      ? lastShownIndex - (lastShownIndex - sortedAndFilteredPhones.length)
      : lastShownIndex;

    const shownPhones = sortedAndFilteredPhones.filter((phone, index) => (
      index >= firsShownIndex && index < lastShownIndex));

    return (
      <main className="main-container">
        <h1>
          Phones Quantity:
          {' '}
          {sortedAndFilteredPhones.length}
        </h1>

        <div className="catalog__sort-filter-container">
          <input
            name="filterValue"
            value={filterValue}
            onChange={this.handleFilter}
            className="catalog__filter"
            placeholder="Filter phones by names"
          />

          <select
            name="sortValue"
            value={sortValue}
            onChange={this.handleFilter}
            className="catalog__sort-select"
          >
            <option value="abc">Alphabet</option>
            <option value="newest">Newest</option>
          </select>

          <select
            name="perPage"
            value={perPage}
            onChange={this.handleFilter}
            className="catalog__items-per-page"
          >
            <option value="3">Per Page: 3</option>
            <option value="4">Per Page: 4</option>
            <option value="5">Per Page: 5</option>
            <option value="10">Per Page: 10</option>
            <option value="20">Per Page: 20</option>
          </select>
        </div>

        <ul className="phone__card-list">
          {shownPhones.map(phone => (
            <li key={phone.id} className="phone__card-item">
              <div>
                <div>
                  <Link to={`/phones/${phone.id}`}>
                    <img src={phone.imageUrl} alt="phone" width="100" />
                  </Link>
                </div>

                <h4 className="phone__card-header">
                  <Link to={`/phones/${phone.id}`}>
                    {phone.name}
                  </Link>
                </h4>

                <p>{phone.snippet}</p>
              </div>

              <button
                name={phone.id}
                type="button"
                className={
                  basketPhones.some(bp => bp.id === phone.id)
                    ? 'button button--added'
                    : 'button'
                }

                onClick={() => {
                  if (basketPhones
                    .some(basketPhone => basketPhone.id === phone.id)) {
                    return basketPhones;
                  }

                  localStorage.setItem('basketPhones', JSON.stringify([
                    ...basketPhones,
                    {
                      id: phone.id,
                      quantity: 1,
                      name: phone.name,
                      imageUrl: phone.imageUrl,
                    },
                  ]));

                  return chandgeBasketItems([
                    ...basketPhones,
                    {
                      id: phone.id,
                      quantity: 1,
                      name: phone.name,
                      imageUrl: phone.imageUrl,
                    },
                  ]);
                }}
              >
                {
                  basketPhones.some(bp => bp.id === phone.id)
                    ? `Added to Basket`
                    : 'Add to Basket'
                }
              </button>
            </li>

          ))}
        </ul>

        {pagButtons.length > 1
          && (
            <div className="pagination">
              <p className="pagination__description">
              Shown
                {' '}
                {' '}
                {firsShownIndex + 1}
                {' '}
                -
                {' '}
                {lastShownPhone}
                {' '}
                {' '}
                of
                {' '}
                {' '}
                {sortedAndFilteredPhones.length}
              </p>

              <ul className="pagination__list">
                <li>
                  <button
                    name="back"
                    onClick={this.handlePaginationButtons}
                    type="button"
                    className={currentPage <= 1
                      ? 'button button--pugination button--pugination-disabled'
                      : 'button button--pugination'}
                  >
                    {'<'}
                  </button>
                </li>

                {pagButtons.map(pagButton => (
                  <li key={pagButton}>
                    <button
                      name="currentPage"
                      value={pagButton}
                      onClick={this.handlePagination}
                      type="button"
                      className={pagButton === currentPage
                        ? 'button button--pugination button--pugination-active'
                        : 'button button--pugination'}
                    >
                      {pagButton}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    name="next"
                    value={pageQuantity}
                    onClick={this.handlePaginationButtons}
                    type="button"
                    className={currentPage >= pageQuantity
                      ? 'button button--pugination button--pugination-disabled'
                      : 'button button--pugination'}
                  >
                    {'>'}
                  </button>
                </li>
              </ul>
            </div>
          )
        }
      </main>
    );
  }
}

PhoneCatalog.propTypes = {
  basketPhones: PropTypes.arrayOf(PropTypes.object).isRequired,
  phones: PropTypes.arrayOf(PropTypes.object).isRequired,
  chandgeBasketItems: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default PhoneCatalog;
