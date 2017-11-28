import React from 'react';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Card from '../../components/Card';
import {removeAllCards, removeCard, requestCard} from '../../core/modules/cards/cardsActions';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="play-area">

          <div className="play-area-cards">
            <div className="play-area-cards__deck">
              <Card deck value={52}/>
            </div>

            <div className="play-area-cards__items">
              {this.props.cards ?
                this.props.cards.map(card => (
                  <Card
                    key={card.id}
                    value={card.value}
                    image={card.image}
                    click={this.props.onRemoveCard.bind(this, card)}
                  />
                ))
                : null
              }
            </div>
          </div>

          <div className="play-area__actions">
            <Button title="Add card" click={() => this.props.onRequestCard()}/>
            <Button title="Remove cards" click={this.props.onRemoveAllCards}/>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: state.cards
});

const mapDispatchToProps = dispatch => ({
  onRequestCard: (card) => dispatch(requestCard(card)),
  onRemoveCard: (card) => dispatch(removeCard(card)),
  onRemoveAllCards: () => dispatch(removeAllCards()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
