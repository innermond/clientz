import React from 'react';
import stylesModal from './Modal.scss';

const footer = props => (
	<div className={stylesModal.Footer}>
		<h3>{props.children}</h3>
	</div>
);

export default footer;
