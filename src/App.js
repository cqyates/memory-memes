import React, { Component } from "react";
import ImageCard from "./Components/ImageCard";
import Container from "./Components/Container";
import Jumbotron from "./Components/Jumbotron";
import Nav from "./Components/Nav";
import cards from "./data.json";

let cardsClicked = []

class App extends Component {
  state = {
    cards,
    topScore: 0,
    score: 0
  };
  //FIXME there might be an issue here with shuffleCards vs cardShuffle 
  shuffleCards = id => {
    const cardShuffle = this.state.cards.sort(() => Math.random() - 0.5);
    this.setState({
      cards: cardShuffle
    });
    if (cardsClicked.includes(id)) {
      if (this.state.topScore < this.state.score) {
        this.setState({
          topScore: this.state.score
        });
      }
      this.setState({
        score: 0
      });
      cardsClicked = [];
    } else {
      cardsClicked.push(id);
      this.setState({
        score: this.state.score + 1
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <Container>
        <Nav topScore={this.state.topScore} score={this.state.score} />
        <Jumbotron>Memory Memes Futurama Edition</Jumbotron>
        {this.state.cards.map(cards => (
          <ImageCard
            shuffleCards={this.shuffleCards}
            id={cards.id}
            key={cards.id}
            image={cards.image}
          />
        ))}
      </Container>
    );
  }
}

export default App;