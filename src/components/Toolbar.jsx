import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { GameContext } from 'providers/GameProvider';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import Auto from '@material-ui/icons/Autorenew';
import Delete from '@material-ui/icons/Delete';
import SkipNext from '@material-ui/icons/SkipNext';

const styles = theme => ({});

const Toolbar = (props) => {
  return (<GameContext.Consumer>
      {
        (context) => <div>
        <IconButton disabled={context.isRunning} onClick={context.play}>
          <PlayArrow color={context.isRunning ? "disabled" : "primary"}/>
        </IconButton>
        <IconButton disabled={context.isRunning} onClick={context.next}>
          <SkipNext color={context.isRunning ? "disabled" : "primary"}/>
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
      }
    </GameContext.Consumer>);
};

export default withStyles(styles, { withTheme: true })(Toolbar);
