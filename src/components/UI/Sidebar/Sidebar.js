import React from 'react';
import styles from './Sidebar.scss';
import animation from './animation';
import withAnimation from 'Hoc/withAnimation';

const sidebar = props => (<div
className={styles.Container}
style={props.styling}
>
{props.children}
</div>);

export default withAnimation(sidebar, animation);
