import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { GameContext } from '../providers/GameProvider';

const styles = theme => ({
  cellSize: {
    height: '44px',
    width: '44px'
  },
  border: {
    borderTop: '1px solid black',
    borderLeft: '1px solid black'
  },
  dead: {
    backgroundColor: '#eee',
  },
  alive: {
    backgroundColor: '#f00'
  }
});

class Cell extends Component {

  render() {
    const { alive, classes, posX, posY } = this.props;
    return (
      <GameContext.Consumer>
        {(context) => <div style={{width: `${context.cellSize}px`, height: `${context.cellSize}px`}} onMouseUp={() => context.editGameState(posX, posY, alive)} className={classNames(classes.border, classes.cellSize, alive === true ? classes.alive : classes.dead)}></div>
        }
      </GameContext.Consumer>
    );
  }

}

export default withStyles(styles, { withTheme: true })(Cell);
