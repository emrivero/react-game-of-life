import React, { Component, createContext } from 'react';
import { getCellSize, getBoardWidth } from 'style/sizes';

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
  const isAlive = gameState[i][j];
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
  return (!isAlive && aliveAdjacents === 3) || (isAlive && (aliveAdjacents === 2 || aliveAdjacents === 3));
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
      gameState: createGameState(props.boardSize),
      isRunning: false,
    }
  }

  randomGame = () => {
    const { gameState } = this.state;
    const newGameState = gameState.map(row => row.map(element => {
      const el = [true, false];
      return el[Math.floor(Math.random() * 2)]
    }));
    this.setGameState(newGameState);
  };

  nextGameState = () => {
    this.timeout = setTimeout(() => {
      const { gameState, boardSize } = this.state;
      const nextGameState = getNextState(gameState, boardSize);
      this.setState({
        ...this.state,
        isRunning: true,
        gameState: nextGameState
      }, this.nextGameState);
    }, 200);
  };

  play = () => {
    this.nextGameState();
  };

  stop = () => {
    clearTimeout(this.timeout);
    this.setState({
      isRunning: false,
    });
  }

  clear = () => {
    this.setGameState(createGameState(this.state.boardSize));
  };

  setGameState = (gameState) => {
    this.setState({
      ...this.state,
      gameState
    });
    return gameState;
  };

  editGameState = (i, j, boolean) => {
    const { gameState } = this.state;

    gameState[i][j] = !boolean;

    this.setState({
      ...this.state,
      gameState
    });
  };

  render() {
    return (<GameContext.Provider value={{
        editGameState: this.editGameState,
        play: this.play,
        stop: this.stop,
        clear: this.clear,
        randomGame: this.randomGame,
        cellSize: getCellSize(this.props.boardSize, 0.7),
        boardWidth: getBoardWidth(this.props.boardSize, 0.7),
        boardSize: this.props.boardSize,
        gameState: this.state.gameState,
        isRunning: this.state.isRunning,
      }}>
      {this.props.children}
    </GameContext.Provider>);
  }

}

export default GameProvider;
