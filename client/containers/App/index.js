import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCard, removeCard, removeAllCards} from "../../reducers/deck";

import Button from '../../components/Button';
import Card from '../../components/Card';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="play-area">

          <div className="play-area-cards">
            <div className="play-area-cards__deck">
              <Card deck value={52} />
            </div>

            <div className="play-area-cards__items">
              {this.props.cards.map((card) => {
                return <Card key={card.id}
                             value={card.value}
                             click={this.props.removeCard.bind(this, card.id)} />
              })}
            </div>
          </div>

          <div className="play-area__actions">
            <Button title="Add" click={this.props.addCard} />
            <Button title="Remove" click={this.props.removeAllCards} />
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addCard, removeCard, removeAllCards}, dispatch);
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
