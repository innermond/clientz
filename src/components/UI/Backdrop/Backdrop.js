import React from 'react';

import styles from './Backdrop.scss';

const backdrop = props => (props.show ? <div className={styles.Container} onClick={props.clicked}/> : null);

export default backdrop;
