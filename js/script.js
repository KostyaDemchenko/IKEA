$(document).ready(function () {
  
 //save big images
   var $bigItem = $('.img-slider');
 //save small images
   var $smallItem = $('.sellect-items');
 //click and moseenter function on small image
 //you could delete one eventlistener
   $smallItem.on('mouseenter click', function () {
     //remove active class from all items
       $bigItem.removeClass('active');
       $smallItem.removeClass('active');
     //add active class to item as small item's index
       $bigItem.eq($(this).index()).addClass('active');
       $smallItem.eq($(this).index()).addClass('active');
   });
});