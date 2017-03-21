import React from 'react';

//Home Page Title Header
class Header extends React.Component {
	
	render () {
		return (
			<div id='home' className='header'>
        <div className='name'>
          <h1>Scott Spence</h1>
          <p>Software Developer<span> |</span></p>
        </div>
			</div>
		);
	}
}

export default Header;
