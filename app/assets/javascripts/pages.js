$(document).ready(function() {



  // Change photos from banner
  $('#photos').cycle({
    fx: 'shuffle',
    speed: 4000,
    speedIn: 1000,
    speedOut: 1000,
    after: function() {
      $('#caption').html(this.alt);
    }
  });
  


  // Smooth anchor
  $('.question-list a').click(function(e){
    $.scrollTo($(this).attr('href'),800);
    // Prevent default behavior
    e.preventDefault();
  });
  
  // Smooth ovni
  $('#ovni').click(function(e){
    $.scrollTo(0,800)
  });
  
  
  



  // Prehide all services 
  $('.service').each(function(){
    $(this).hide();
  });

  // Onclick of a service link
  $("a.know-more").click(function(e) {
    
    //Resize banner
    $('#top_section').slideUp('slow');
    
    // Eliminate ul descriptions
    $('.service-description').each(function(){
      $(this).find('.learn-more').each(function(){
        $(this).slideUp();
      });
    });

    
    // Change services size
    $('.services').animate({
      height: '100px',
      paddingTop: '50px',
      paddingBottom: '20px'
    }, 1000);
    
    var service = $(this).attr('data-service');
    
    //Hide all except the service (double clicked)
    $('.service').each(function(){
      if('#' + $(this).attr('id') != service){
        $(this).slideUp();
      }
    });
    
    //Show the service
    $(service).slideDown('fast');
    
    // Prevent default behavior
    e.preventDefault();
  });
});
