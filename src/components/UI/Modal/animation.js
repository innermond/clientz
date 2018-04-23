const pos = {
	ns: {
		start: {opacity: 0, transform: 'translate(-50%,-100vh)'},
		end: {opacity: 1, transform: 'translate(-50%,-50%)'},
	},
	sn: {
		start: {opacity: 0, transform: 'translate(-50%,100vh)'},
		end: {opacity: 1, transform: 'translate(-50%,-50%)'},
	},
	ve: {
		start: {opacity: 0, transform: 'translate(-100vh,-50%)'},
		end: {opacity: 1, transform: 'translate(-50%,-50%)'},
	},
	ev: {
		start: {opacity: 0, transform: 'translate(100vh,-50%)'},
		end: {opacity: 1, transform: 'translate(-50%,-50%)'},
	},
};

const times = ['.3s', 300];
const tpl =  `${times[0]} ease-out`;
const transCss = `opacity ${tpl}, transform ${tpl}`;

export default {
	pos, 
	times, 
	transCss
};
