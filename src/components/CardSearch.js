import React from 'react';
import PropTypes from 'prop-types';

class CardSearch extends React.Component {
  render() {
    const { searchCard, search } = this.props;
    return (
      <div>
        <label htmlFor="search">
          <input
            className="search-bar"
            name="search"
            value={ search }
            onChange={ searchCard }
            data-testid="name-filter"
          />
        </label>
      </div>
    );
  }
}

CardSearch.propTypes = {
  search: PropTypes.string.isRequired,
  searchCard: PropTypes.func.isRequired,
};

export default CardSearch;
