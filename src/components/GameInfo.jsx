import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { GameContext } from 'providers/GameProvider';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  flex: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  margin: {
    marginRight: '.5rem'
  }
});

const GameInfo = (props) => {
  const { classes, } = props;
  return (<GameContext.Consumer>
      {
        (context) => <div>
        <div className={classes.flex}>
          <Typography color="primary" variant="h6" className={classNames(classes.margin)}>Generación:</Typography>
          <Typography variant="h6">{context.generation}</Typography>
        </div>
        <div className={classes.flex}>
          <Typography color="primary" variant="h6" className={classNames(classes.margin)}>Población:</Typography>
          <Typography variant="h6">{context.population}</Typography>
        </div>
        </div>
      }
    </GameContext.Consumer>);
};

export default withStyles(styles, { withTheme: true })(GameInfo);
