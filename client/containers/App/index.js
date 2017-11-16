import React from 'react';
import uniqid from 'uniqid';
import Button from '../../components/Button';
import Card from '../../components/Card';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cards: [
        {id: uniqid(), value: 5},
        {id: uniqid(), value: 4},
      ],
      sortAscending: true
    };

    this.onAddCard = this.onAddCard.bind(this);
    this.onSort = this.onSort.bind(this);
    this.onRemoveAllCards = this.onRemoveAllCards.bind(this);
  }

  onAddCard() {
    this.setState(prevState => {
      const cards = prevState.cards.concat().sort((a, b) => a.value - b.value);
      const nextValue = 0 !== cards.length ? cards[cards.length - 1].value + 1 : 1;

      return {
        cards: [...prevState.cards, {id: uniqid(), value: nextValue}]
      }
    });
  }

  onRemoveCard(index) {
    this.setState(prevState => ({
      cards: prevState.cards.filter((card) => card.id !== index)
    }));
  }

  onRemoveAllCards() {
    this.setState({ cards: [], sortAscending: false});
  }

  onSort() {
    this.setState(prevState => {
      const cards = prevState
        .cards
        .concat()
        .sort((a, b) => prevState.sortAscending ? a.value - b.value : b.value - a.value);

      return {
        cards,
        sortAscending: !prevState.sortAscending
      }
    });
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
              {this.state.cards.map((card) => {
                return <Card key={card.id} value={card.value} click={this.onRemoveCard.bind(this, card.id)} />
              })}
            </div>
          </div>

          <div className="play-area__actions">
            <Button title="Add" click={this.onAddCard} />
            <Button title="Remove" click={this.onRemoveAllCards} />
            <Button title={this.state.sortAscending ? 'Sort' : 'Reverse'} click={this.onSort} />
          </div>

        </div>
      </div>
    );
  }
}
