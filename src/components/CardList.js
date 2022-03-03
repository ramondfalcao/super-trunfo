import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { cardList, buttonDelete } = this.props;
    const enableButton = true;

    return (
      <section className="list-container">
        {cardList.map((card, i) => (
          <div className="card-saves" key={ i }>
            <Card
              className="card-save"
              classImg="img-save"
              key={ i }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              enableButton={ enableButton }
              buttonDelete={ buttonDelete }
            />
            <button
              type="button"
              className="button-delete"
              data-testid="delete-button"
              value={ card.cardName }
              onClick={ buttonDelete }
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    );
  }
}

CardList.propTypes = {
  cardList: PropTypes.arrayOf(PropTypes.object).isRequired,
  buttonDelete: PropTypes.func.isRequired,
};

export default CardList;
