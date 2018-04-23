import React from 'react';
import stylesModal from './Modal.scss';

const header = props => {
	return (
		<div className={stylesModal.Header}>
		{props.closed && <span className={stylesModal.Close} onClick={props.closed}>&times;</span>}
			<h2>{props.children}</h2>
		</div>
	)
};

export default header;
