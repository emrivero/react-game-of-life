import React, {Component, createContext} from 'react';
import {getCellSize, getBoardWidth} from 'style/sizes';

/**
 * Game context.
 * @const
 */
export const GameContext = createContext();

/**
 * @function
 */
const createGameState = (boardSize) => {
  const gameState = [];
  const rowState = [];
  for (let j = 0; j < boardSize; j += 1) {
    rowState.push(false);
  }
  for (let i = 0; i < boardSize; i += 1) {
    gameState.push([...rowState]);
  }
  return gameState;
};

/**
 * @function
 */
const isAlive = (i, j, gameState, boardSize) => {
  const rows = [
    i - 1,
    i,
    i + 1
  ].filter(element => element >= 0 && element < boardSize);
  const cols = [
    j - 1,
    j,
    j + 1
  ].filter(element => element >= 0 && element < boardSize);
  let aliveAdjacents = 0;

  rows.forEach(x => {
    cols.forEach(y => {
      if (x === i) {
        if (y !== j && gameState[x][y] === true) {
          aliveAdjacents += 1;
        }
      } else if (gameState[x][y] === true) {
        aliveAdjacents += 1;
      }
    });
  });
  return aliveAdjacents === 3;
};

/**
 * @function
 */
const getNextState = (gameState, boardSize) => {
  return gameState.map((rowState, i) => {
    return rowState.map((colState, j) => {
      return isAlive(i, j, gameState, boardSize);
    });
  });
};

/**
 * @class
 */
class GameProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      boardSize: props.boardSize,
      gameState: createGameState(props.boardSize)
    }
  }

  randomGame = () => {
    const {gameState} = this.state;

    const newGameState = gameState.map(row => row.map(element => {
      const el = [true, false];
      return el[Math.floor(Math.random() * 2)]
    }));

    this.setGameState(newGameState);
  };

  nextGameState = () => {
    setTimeout(() => {
      const {gameState, boardSize} = this.state;
      const nextGameState = getNextState(gameState, boardSize);
      this.setState({
        ...this.state,
        gameState: nextGameState
      }, this.nextGameState);
    }, 200);
  };

  play = () => {
    this.nextGameState();
  };

  setGameState = (gameState) => {
    this.setState({
      ...this.state,
      gameState
    });
    return gameState;
  };

  editGameState = (i, j, boolean) => {
    const {gameState} = this.state;

    gameState[i][j] = !boolean;

    this.setState({
      ...this.state,
      gameState
    });
  };

  nextState = () => {
    const {gameState, boardSize} = this.state;

    this.setState({
      ...this.state,
      gameState: getNextState(gameState, boardSize)
    });
  };

  render() {
    return (<GameContext.Provider value={{
        boardSize: this.props.boardSize,
        gameState: this.state.gameState,
        nextState: this.nextState,
        editGameState: this.editGameState,
        cellSize: getCellSize(this.props.boardSize, 0.9),
        boardWidth: getBoardWidth(this.props.boardSize, 0.9),
        play: this.play,
        stop: this.stop,
        randomGame: this.randomGame
      }}>
      {this.props.children}
    </GameContext.Provider>);
  }

}

export default GameProvider;
