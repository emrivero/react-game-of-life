import React, { PureComponent } from 'react';
import Board from 'components/Board';
import Layout from 'components/Layout';
import { withStyles } from '@material-ui/core/styles';
import GameProvider, { GameContext } from 'providers/GameProvider';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import Auto from '@material-ui/icons/Autorenew';
import Delete from '@material-ui/icons/Delete';

const styles = theme => ({
  main: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '4%',
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    marginTop: '5%'
  }
});

const Main = (props) => {
  const { classes } = props;
  return (<GameProvider numRows={40} numCols={70}>
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
              <IconButton disabled={context.isRunning} color="primary" onClick={context.randomGame}>
                <Auto color={context.isRunning ? "disabled" : "primary"}/>
              </IconButton>
              <IconButton disabled={context.isRunning} color="primary" onClick={context.clear}>
                <Delete color={context.isRunning ? "disabled" : "primary"}/>
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
};


export default withStyles(styles, { withTheme: true })(Main);
