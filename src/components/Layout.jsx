import React, { PureComponent, Fragment } from 'react';
import Header from 'components/Header';

class Layout extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header/>
        {this.props.children}
      </Fragment>
    );
  }

}

export default Layout;
