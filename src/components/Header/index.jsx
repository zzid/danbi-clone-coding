import React from 'react';
import { NavBar } from 'components';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className='Header__container'>
        <div className='Header__header'>
          <img src='' alt='logo' />
        </div>
        <NavBar />
      </div>
    );
  }
}
export default Header;
