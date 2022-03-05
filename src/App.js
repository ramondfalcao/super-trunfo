import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CardList from './components/CardList';
// import CardSearch from './components/CardSearch';
import './app.css'
import CardSearch from './components/CardSearch';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      enableButton: false,
      cardList: [],
      search: '',
      isSaveButtonDisabled: true,
      buttonDark: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.buttonDelete = this.buttonDelete.bind(this);
    this.searchCard = this.searchCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, this.validateForm);
  }

  onSaveButtonClick(event) {
    event.preventDefault();

    const newCard = { ...this.state };

    this.setState((prevState) => ({
      cardList: [...prevState.cardList, newCard],
      hasTrunfo: [...prevState.cardList, newCard].some((card) => card.cardTrunfo),
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    }));

    localStorage.setItem("mykey", event);
  }

  validateForm() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const limit = 210;
    const limitPoints = 90;
    const sum = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10)
    + parseInt(cardAttr3, 10);

    const checkedInputsNumbers = () => {
      if (
        sum <= limit
        && parseInt(cardAttr1, 10) <= limitPoints
        && parseInt(cardAttr2, 10) <= limitPoints
        && parseInt(cardAttr3, 10) <= limitPoints
        && parseInt(cardAttr1, 10) >= 0
        && parseInt(cardAttr2, 10) >= 0
        && parseInt(cardAttr3, 10) >= 0
      ) return true;
    };

    const inputsFields = [cardName, cardDescription, cardImage];
    const isNotEmpty = inputsFields.every((input) => input !== '');

    const isFormValid = checkedInputsNumbers() && isNotEmpty;

    if (isFormValid) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  buttonDelete({ target }) {
    const { cardList } = this.state;
    const name = target.value;
    const filterCard = (cardList.filter((el) => el.cardName !== name));
    console.log(filterCard);
    this.setState(() => ({
      cardList: filterCard,
      hasTrunfo: filterCard.some((card) => card.cardTrunfo),
    }));
  }

  searchCard({ target }) {
    const { cardList } = this.state;
    console.log(target.value);
    const inputLowerCase = target.value.toLowerCase();
    const result = cardList.filter(({ cardName }) => {
      const nameLowerCase = cardName.toLowerCase();
      return nameLowerCase.includes(inputLowerCase);
    });

    this.setState({
      [target.name]: target.value,
      filter: result,
    });
  }

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
      cardList,
      enableButton,
      isSaveButtonDisabled,
      buttonDelete,
      search,
    } = this.state;
    return (
      <main>
        <header className="header">
          <h1>Tryunfo</h1>
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/4072/4072251.png"/>
        </header>
        <section className="main-container">
          <section className="form-container">
            <Form
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              hasTrunfo={ hasTrunfo }
              isSaveButtonDisabled={ isSaveButtonDisabled }
              onSaveButtonClick={ this.onSaveButtonClick }
              onInputChange={ this.onInputChange }
            />
          </section>
          <aside className="preview-container">
            <Card
              classImg="img"
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
              enableButton={ enableButton }
              buttonDelete={ buttonDelete }
            />
          </aside>
        </section>
        <div className="search">
          <CardSearch
            searchCard={ this.searchCard }
            search={ search }
          />
        </div>
        <section className="list-container">
          <CardList
            cardList={ cardList }
            cardName={ cardName }
            cardTrunfo={ cardTrunfo }
            enableButton={ enableButton }
            buttonDelete={ this.buttonDelete }
          />
        </section>
      </main>
    );
  }
}

export default App;
