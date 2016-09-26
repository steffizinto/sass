window.onload = function() {

	var container = document.querySelector( '.container' );

	var content = container.querySelector( '.content' ),
		confirmBtn = container.querySelector( '.confirmation .confirmBtn' ),
		denyBtn = container.querySelector( '.confirmation .denyBtn' );

	content.addEventListener( 'click', function( event ) {
		var mx = event.clientX - container.offsetLeft,
			my = event.clientY - container.offsetTop;

		var w = container.offsetWidth,
			h = container.offsetHeight;

		var directions = [
			{ id: 'top', x: w/2, y: 0 },
			{ id: 'right', x: w, y: h/2 },
			{ id: 'bottom', x: w/2, y: h },
			{ id: 'left', x: 0, y: h/2 }
		];

		directions.sort( function( a, b ) {
			return distance( mx, my, a.x, a.y ) - distance( mx, my, b.x, b.y );
		} );

		container.setAttribute( 'data-direction', directions.shift().id );
		container.classList.add( 'is-open' );
	} );

	confirmBtn.addEventListener( 'click', function( event ) {
		container.classList.remove( 'is-open' );
	} );

	denyBtn.addEventListener( 'click', function( event ) {
		container.classList.remove( 'is-open' );
	} );

	function distance( x1, y1, x2, y2 ) {
		var dx = x1-x2;
		var dy = y1-y2;
		return Math.sqrt( dx*dx + dy*dy );
	}

};