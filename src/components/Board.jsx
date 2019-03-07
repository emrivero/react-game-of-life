import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Cell from 'components/Cell';
import { GameContext } from 'providers/GameProvider';

const styles = theme => ({
  cellsContainer: {
    borderRight: '1px solid black',
    borderBottom: '1px solid black',
    display: 'flex',
    flexWrap: 'wrap',
  }
});

const Board = (props) => {
  const { classes } = props;
  return (<GameContext.Consumer>
      {
        (context) => <Fragment>
            <div className={classes.cellsContainer} style={{
                width: `${context.boardWidth}px`,
                height: `${context.boardHeight}px`
              }}>
              {context.gameState.map((array, i) => array.map((element, j) => <Cell key={Math.random()} alive={element} posX={i} posY={j}/>))}
            </div>
          </Fragment>
      }
    </GameContext.Consumer>);
};

export default withStyles(styles, { withTheme: true })(Board);
