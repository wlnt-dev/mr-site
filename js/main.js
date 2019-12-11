// $(document).ready(function(){
//   $('.nav-button').click(function(){
// 	$('body').toggleClass('nav-open');
//   });
// });

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
  });
