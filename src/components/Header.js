import React from 'react';

//Home Page Title Header
class Header extends React.Component {
	
	render () {
		return (
			<div id='home' className='header'>
        <div className='nameLogo'>
          <p>Scott Spence</p>
          <p>Front-End Web Developer<span> |</span></p>
        </div>
			</div>
		);
	}
}

export default Header;