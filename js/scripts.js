// My Scripts

// Store & Generate Number
var maxRand = 3;
var numRand = Math.floor( Math.random() * maxRand );
//console.log(numRand);

// Store images
var img0 = '/img/fullsize/logo.jpg';
var img1 = '/img/fullsize/collgraph.jpg';
var img2 = '/img/fullsize/MUJI5.jpg';

// Show Images
$('header img').attr('src', eval('img' + numRand) );


//activate gallery
$('figure').lightGallery ({
    selector:'a'
});
