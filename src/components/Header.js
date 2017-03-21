import React from 'react';
import Headroom from 'react-headroom'; // Headroom is header that hides on scroll

//Home Page Title Header
class Header extends React.Component {
	
	render () {
		return (
			<Headroom className='headroom'>
				<ul>
					<li>About</li>
					<li>Portfolio</li>
					<li>Contact</li>
				</ul>
			</Headroom>
		);
	}
}

export default Header;
