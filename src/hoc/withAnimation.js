import React from 'react';
import Transition from 'react-transition-group/Transition';

function withAnimation(WrappedComponent, animation) {
	return class extends React.Component {
		constructor(props) {
			super(props);

			animation.ns = {
				'exited': animation.pos.ns.start,
				'entering': animation.pos.ns.end,
				'entered': animation.pos.ns.end,
				'exiting': animation.pos.ns.start,
			};

			animation.sn = {
				'exited': animation.pos.sn.start,
				'entering': animation.pos.sn.end,
				'entered': animation.pos.sn.end,
				'exiting': animation.pos.sn.start,
			};

			animation.ve = {
				'exited': animation.pos.ve.start,
				'entering': animation.pos.ve.end,
				'entered': animation.pos.ve.end,
				'exiting': animation.pos.ve.start,
			};

			animation.ev = {
				'exited': animation.pos.ev.start,
				'entering': animation.pos.ev.end,
				'entered': animation.pos.ev.end,
				'exiting': animation.pos.ev.start,
			};
		}

		styler = phase => {
			const gravity = this.props.gravity || 'ns';
			const start = animation.pos[gravity].start;
			const defaultStyle = {
				...start,
				transition: animation.transCss,
			};
		
			const posPhase = animation[gravity][phase];
			const p = {
				...defaultStyle,
				...posPhase
			};

			return p;
		}

		returnAnimated = phase => {
			return <WrappedComponent
				{...this.props} 
				styling={this.styler(phase)}	
			/>;	
		};

		render() {
			return (
				<Transition 
					in={this.props.show} 
					timeout={animation.times[1]} 
					mountOnEnter
					unmountOnExit
					// https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171; force reflow here that exited->entering phase works corectly when unmountOnExit
					onEnter={node => node && node.scrollTop}
				>
				{this.returnAnimated}
				</Transition>
			);
		}
	}
};

export default withAnimation;
