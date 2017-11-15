import React from 'react';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {value: 5},
        {value: 10},
      ]
    };

    this.onAddCard = this.onAddCard.bind(this);
    this.onRemoveCard = this.onRemoveCard.bind(this);

    this.onRemoveAllCards = this.onRemoveAllCards.bind(this);
  }

  onAddCard() {
    let value = Math.floor(Math.random() * 52) + 1;

    this.setState(prevState => ({
      cards: [...prevState.cards, {value}]
    }));
  }

  onRemoveCard(i) {
    debugger;
    this.setState(prevState => ({
      cards: [...prevState.cards.slice(0, i - 1), ...prevState.cards.slice(i, -1)]
    }));
  }

  onRemoveAllCards() {
    this.setState({ cards: []});
  }

  render() {
    return (
      <div className="app-container">
        <div className="play-area">

          <div className="play-area-cards">
            <div className="play-area-cards__deck">
              <Card deck value={52} />
            </div>

            <div className="play-area-cards__items">
              {this.state.cards.map((card, i) => <Card key={i} value={card.value} click={this.onRemoveCard.bind(this, i)} /> )}
            </div>
          </div>

          <div className="play-area__actions">
            <Button title="Add" click={this.onAddCard} />
            <Button title="Remove" click={this.onRemoveAllCards} />
          </div>

        </div>
      </div>
    );
  }
}
