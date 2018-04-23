const pos = {
	ns: {
		start: {transform: 'translate(-50%,-100vh)'},
		end: {transform: 'translate(-50%,-50%)'},
	},
	sn: {
		start: {transform: 'translate(-50%,100vh)'},
		end: {transform: 'translate(-50%,-50%)'},
	},
	ve: {
		start: {borderRadius: '0px 5px 5px 0px', transform: 'translate(-100vh,0%)'},
		end: {borderRadius: '0px 5px 5px 0px', transform: 'translate(0%,0%)'},
	},
	ev: {
		start: {left: 'auto', right: 0, borderRadius: '5px 0px 0px 5px', transform: 'translate(100vh,0%)'},
		end: {left: 'auto', right: 0, borderRadius: '5px 0px 0px 5px', transform: 'translate(0%,0%)'},
	},
};

const times = ['.3s', 300];
const tpl =  `${times[0]} ease-out`;
const transCss = `transform ${tpl}`;

export default {
	pos, 
	times, 
	transCss
};
