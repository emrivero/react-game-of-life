import React, { Component, Fragment } from 'react';
import Board from '../components/Board';
import { withStyles } from '@material-ui/core/styles';
import GameProvider from '../providers/GameProvider';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import Auto from '@material-ui/icons/Autorenew';
import { GameContext } from '../providers/GameProvider';



const styles = theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center'
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (
      <GameProvider boardSize={40}>
        <GameContext.Consumer>
        {(context) =>
          <Fragment>
            <IconButton onClick={context.play}>
              <PlayArrow color="primary"/>
            </IconButton>
            <IconButton onClick={()=> context.stop(context.idTimeout)}>
              <Stop color="primary"/>
            </IconButton>
            <IconButton color="primary" onClick={context.randomGame}>
              <Auto/>
            </IconButton>
            <div className= {classes.container}>
              <Board/>
            </div>
          </Fragment>
      }
      </GameContext.Consumer>
      </GameProvider>);
  }

}

export default withStyles(styles, { withTheme: true })(Main);
