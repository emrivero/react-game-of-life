import React, { Component } from 'react';
import Board from 'components/Board';
import Layout from 'components/Layout';
import { withStyles } from '@material-ui/core/styles';
import GameProvider, { GameContext } from 'providers/GameProvider';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import Auto from '@material-ui/icons/Autorenew';

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5%',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    marginTop: '5%'
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;
    return (<GameProvider boardSize={40}>
      <Layout>
      <GameContext.Consumer>
        {
          (context) =>
          <div className={classes.flex}>
          <div className={classes.main}>
              <div>
              <IconButton disabled={context.isRunning} onClick={context.play}>
                <PlayArrow color={context.isRunning ? "disabled" : "primary"}/>
              </IconButton>
              <IconButton disabled={!context.isRunning} onClick={() => context.stop(context.idTimeout)}>
                <Stop color={!context.isRunning ? "disabled" : "primary"}/>
              </IconButton>
              <IconButton color="primary" onClick={context.randomGame}>
                <Auto/>
              </IconButton>
            </div>
              <div>
                <Board/>
              </div>
            </div>
          </div>
        }
      </GameContext.Consumer>
    </Layout>
    </GameProvider>);
  }

}

export default withStyles(styles, { withTheme: true })(Main);
