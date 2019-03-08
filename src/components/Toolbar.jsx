import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { GameContext } from 'providers/GameProvider';
import IconButton from '@material-ui/core/IconButton';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Stop from '@material-ui/icons/Stop';
import Auto from '@material-ui/icons/Autorenew';
import Delete from '@material-ui/icons/Delete';
import SkipNext from '@material-ui/icons/SkipNext';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';

const styles = theme => ({
  itemSpeed: {
    color: theme.palette.primary.main
  }
});

const Toolbar = (props) => {
  const { classes } = props;
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
        <Select
            className={classNames(classes.itemSpeed)}
            value={context.speed}
            onChange={context.editSpeed}
            inputProps={{
              id: 'game-speed',
            }}
          >
            <MenuItem  value={2000}>0.5x</MenuItem>
            <MenuItem  value={1000}>1x</MenuItem>
            <MenuItem  value={300}>1.5x</MenuItem>
            <MenuItem  value={50}>2x</MenuItem>
          </Select>
      </div>
      }
    </GameContext.Consumer>);
};

export default withStyles(styles, { withTheme: true })(Toolbar);
