'use strict';

const e = React.createElement;

const list =
  React.createElement('div', {},
    React.createElement('div', {className:'menu'}, 
		React.createElement('img', {src:'./img/CalamariWhite2.png', className:'menubutt', alt:'IRR', height:'80', width:'80', onClick:goHome()},
		)
	)
  );

ReactDOM.render(list, document.querySelector('#like_button_container'));
