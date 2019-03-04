import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  height: {
    height: '5%',
    padding: '5px'
  },
  font: {
    fontFamily: 'Josefin Sans, sans-serif'
  }
});

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classNames(classes.height)}>
        <Typography className={classNames(classes.font)} variant="h4" align="center" color="secondary">
          Game of Life
        </Typography>
      </AppBar>
    );
  }
}

export default withStyles(styles, { theme: true })(Header);
