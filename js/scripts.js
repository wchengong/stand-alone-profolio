// My Scripts

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/stand-alone-profolio/img/forheader.jpg';
var img1 = '/stand-alone-profolio/img/forheader 2.jpg';
var img2 = '/stand-alone-profolio/img/forheader 3.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );


//activate gallery
$('figure').lightGallery ({
    selector:'a'
});
