import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { GameContext } from 'providers/GameProvider';

const styles = theme => ({
  border: {
    borderTop: '1px solid black',
    borderLeft: '1px solid black'
  },
  dead: {
    backgroundColor: '#eee',
    '&:hover': {
      backgroundColor: theme.palette.orange[200],
    }
  },
  alive: {
    backgroundColor: theme.palette.orange[400]
  }
});

const Cell = (props) => {
  const { alive, classes, posX, posY } = props;
  return (<GameContext.Consumer>
      {
        (context) => <div style={{
              width: `${context.cellSize}px`,
              height: `${context.cellSize}px`
            }} onMouseUp={() => context.editGameState(posX, posY, alive)} className={classNames(
              classes.border, classes.cellSize, alive === true
              ? classes.alive
              : classes.dead)}></div>
      }
    </GameContext.Consumer>);
};

export default withStyles(styles, { withTheme: true })(Cell);
