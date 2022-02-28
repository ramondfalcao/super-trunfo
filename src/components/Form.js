import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <form className="form-card">
        <label htmlFor="cardName">
          Name:
          <input
            data-testid="name-input"
            id="cardName"
            name="cardName"
            type="text"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardDescription">
          description:
          <input
            data-testid="description-input"
            id="cardDescription"
            name="cardDescription"
            type="text"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr1">
          Atributo 1:
          <input
            data-testid="attr1-input"
            id="cardAttr1"
            name="cardAttr1"
            type="number"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          Atributo 2:
          <input
            data-testid="attr2-input"
            id="cardAttr2"
            name="cardAttr2"
            type="number"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardAttr3">
          Atributo 3:
          <input
            data-testid="attr3-input"
            id="cardAttr3"
            name="cardAttr3"
            type="number"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardImage">
          Url da imagem:
          <input
            data-testid="image-input"
            id="cardImage"
            name="cardImage"
            type="text"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="cardRare">
          Rarity:
          <select
            id="cardRare"
            name="cardRare"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        {hasTrunfo
          ? 'Você já tem um Super Trunfo em seu baralho'
          : (
            <label htmlFor="cardTrunfo">
              <input
                data-testid="trunfo-input"
                id="cardTrunfo"
                type="checkbox"
                name="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
