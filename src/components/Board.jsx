import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Cell from './Cell';
import { GameContext } from '../providers/GameProvider';

const styles = theme => ({
  cellsContainer: {
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    display: 'flex',
    flexWrap: 'wrap',
  }
});

class Board extends Component {

  render() {
    const { classes } = this.props;
    return (
      <GameContext.Consumer>
        {(context) =>
          <Fragment>
            <div className={classes.cellsContainer} style={{width: `${context.boardWidth}px`, height: `${context.boardWidth}px`}} >
              {context.gameState.map((array, i) => array.map((element, j) => <Cell key={Math.random()} alive={element} posX={i} posY={j}/>))}
            </div>
        </Fragment>
        }
      </GameContext.Consumer>
    );
  }

}

export default withStyles(styles, { withTheme: true })(Board);
