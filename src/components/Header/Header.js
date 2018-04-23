import React from 'react';

import styles from './Header.scss';

const header = props => (
	<React.Fragment>
	<div className={styles.title}>{props.title || 'Default title'}</div>
	{props.children ? <div>{props.children}</div> : null}
	</React.Fragment>
);

export default header;
