var i = 0; // start point
var images = [];

//define images' paths
images[0] = 'images/gallery/eparxia/antheon/8.JPG'
images[1] = 'images/gallery/eparxia/korovagkou/6.JPG';
images[2] = 'images/gallery/eparxia/mirtias/10.JPG';
images[3] = 'images/gallery/athina/13oktovriou/8.JPG'
images[4] = 'images/gallery/athina/13oktovriou2/4.JPG';
images[5] = 'images/gallery/athina/anthGazi/2.JPG';
images[6] = 'images/gallery/athina/galinou/17.JPG'
images[7] = 'images/gallery/athina/kalinikou/12.JPG';
images[8] = 'images/gallery/athina/kanari/8.JPG';
images[9] = 'images/gallery/athina/kasou/7.JPG';



//change image
function changeImg(){
   document.slides.src = images[i];

   if(i < images.length - 1){
      i++
   }
   else{
      i = 0;
   }

   setTimeout("changeImg()", 4000);
}

window.onload = changeImg;