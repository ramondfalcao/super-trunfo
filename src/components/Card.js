import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      className,
      classImg,
    } = this.props;

    return (
      <div className={`card-preview ${className}`}>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" className={ classImg } id="img-preview" src={ cardImage } alt={ cardName } />
        <p className="description" data-testid="description-card">{ cardDescription }</p>
        <p className="skills" data-testid="attr1-card">{`Velocidade: ${ cardAttr1 }`}</p>
        <p className="skills" data-testid="attr2-card">{`Inteligencia: ${ cardAttr2 }`}</p>
        <p className="skills" data-testid="attr3-card">{`Força: ${ cardAttr3 }`}</p>
        <p id="rarity" data-testid="rare-card">{`Rarity: ${ cardRare }`}</p>
        {cardTrunfo && (
          <p id="super-trunfo" data-testid="trunfo-card">Super Trunfo ⭐</p>
        )}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
