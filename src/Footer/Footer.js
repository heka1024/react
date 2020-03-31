import React from 'react';
import './Footer.scss'

const Footer = () => {
	const items = ['샤밥', '|', 'heka1024'].map((item, i) =>
		(<span key={i} className = "footer-item"> { item } </span>)
	)
	
	return (
		<div className = "footer">
			<hr/>
			<center>
				{ items }
			</center>
		</div>
	)
}

export default Footer;