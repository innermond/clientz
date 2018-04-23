import React, {Component, Fragment} from 'react';

import styles from './Modal.scss';
import Backdrop from 'Components/UI/Backdrop/Backdrop';
import Header from './Header';
import Footer from './Footer';
import animation from './animation';
import withAnimation from 'Hoc/withAnimation';

class Modal extends Component {
	
	static Header = Header;
	static Footer = Footer;

	render() {
		let {header, footer, children} = this.props;

		header = <Header>{header}</Header>;
		header = React.cloneElement(header, {closed: this.props.closed});
		
		footer = <Footer>{footer}</Footer>;
		
		if(children) {
			children = React.Children.map(this.props.children, child => {
				if(child.type.name === 'header') {
					const cloned = React.cloneElement(child, {closed: this.props.closed});
					header = cloned;
					return;
				} else if (child.type.name === 'footer') {
					footer = child;
					return;
				}
				return child;
			});
		}

		return (
			<Fragment>
				<Backdrop 
					show={this.props.show} 
					clicked={this.props.closed}
				/>
				<div
					className={styles.Container}
					style={this.props.styling}	
				>
				{header}
				<div className={styles.Scrollable}>
					{children}
				</div>
				{footer}
				</div>
			</Fragment>
		);
	};

}

export default withAnimation(Modal, animation);
