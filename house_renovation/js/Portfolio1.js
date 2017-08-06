imageDescriptions = {
	"img/IMG_1284.jpg": "The living room before the knock-through",
	"img/IMG_1290.jpg": "The old kitchen",
	"img/1336.jpg": "This shows the living room ceiling supported by props while the beam was being put in",
	"img/IMG_1314.jpg": "There used to be a back door here...",
	"img/IMG_1465.jpg": "...until we had it bricked up",
	"img/IMG_1432.jpg": "The living room after the knock-through, showing the insulation that went in against the single brick wall",
	"img/IMG_1477.jpg": "Here's the same wall after more insulation and plasterboarding",
	"img/IMG_8559.jpg": "We installed a VELUX window to bring more light into the kitchen area",
	"img/IMG_1497.jpg": "The new kitchen during assembly",
	"img/IMG_9213.jpg": "New kitchen 1",
	"img/IMG_9214.jpg": "New kitchen 2",
	"img/IMG_9218.jpg": "New kitchen 3",
	"img/IMG_9219.jpg": "New kitchen 4",
	"img/IMG_9220.jpg": "New kitchen 5",
 	"img/bathroom_before.jpg": "The original bathroom before we got started on it",	
	"img/bathroom1.jpg": "We removed the old tiles and prepared the walls for retiling",
	"img/bathroom2.jpg": "The shower and bath valves installed in the stud wall",
	"img/bathroom3.jpg": "We put an aqua panel over the shower controls, and large white tiles round the walls",
	"img/bathroom5.jpg": "Measuring out the luxury vinyl tiles for the floor.  We wanted a dark floor, these ones are Karndean Van Gogh Ebony",
	"img/bathroom7.jpg": "The completed bathroom",
	"img/bathroom8.jpg": "New sink",
	"img/bathroom4.jpg": "The showerhead and the new extractor fan",
	"img/bathroom9.jpg": "The completed floor",
	
	
} ;


function moveToNextImage( element ) {
	carousel = $( element ).parent() ;
	currentImage = carousel.children( 'img:visible' ) ;
	nextImage = currentImage.next( 'img' ) ;
	if( nextImage.length == 0 ) {
		nextImage = carousel.children( 'img:first' ) ;
	}
	currentImage.hide() ;
	nextImage.show() ;

	processFilename( nextImage ) ;
}

function moveToPreviousImage( element ) {
	carousel = $( element ).parent() ;
	currentImage = carousel.children( 'img:visible' ) ;
	nextImage = currentImage.prev( 'img' ) ;
	if( nextImage.length == 0 ) {
		nextImage = carousel.children( 'img' ).last() ;
	}
	currentImage.hide() ;
	nextImage.show() ;
	
	processFilename( nextImage ) ;
}

function processFilename( element ) {
	captionElement = $(element).closest( '.carousel').children( '.caption' ) ;
	filename = $(element).attr( 'src' ) ;
	captionElement.html( imageDescriptions[ filename ] ) ;
	console.log( filename ) ;
}

$( document ).ready( function() {
	$.each(
		$( '.carousel img:visible' ),
		function( index, value ) {
			processFilename( value ) ;
		}
	) ;
})



var menuActive = false;

$( document ).on( 'click', '[href="#menu"]', function(e) {
	// Stop the page jumping to the position of #menu
	e.preventDefault();

	// Is the menu active?
	if (menuActive) {
		// Yes! Remove the active class.
		$( '#menu' ).removeClass( 'active' ) ;
		$(e.currentTarget).removeClass( 'on' ) ;
	}
	else {
		// No! Add the active class.
		$( '#menu' ).addClass( 'active' ) ;
		$(e.currentTarget).addClass( 'on' ) ;
	}

	// Make sure our active flag is up-to-date with the state of the menu
	menuActive = !menuActive;
});

