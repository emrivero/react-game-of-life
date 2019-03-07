import React from 'react';
import Board from 'components/Board';
import Layout from 'components/Layout';
import Toolbar from 'components/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import GameProvider, { GameContext } from 'providers/GameProvider';
import GameInfo from 'components/GameInfo';

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
  return (<GameProvider numRows={35} numCols={50}>
      <Layout>
      <GameContext.Consumer>
        {
          (context) =>
          <div className={classes.flex}>
          <div className={classes.main}>
              <Toolbar/>
              <Board/>
              <GameInfo/>
            </div>
          </div>
        }
      </GameContext.Consumer>
    </Layout>
    </GameProvider>);
};


export default withStyles(styles, { withTheme: true })(Main);
