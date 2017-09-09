(function($) {
    
    $(document).ready(function(){
    $(this).scrollTop(0);
    });
    
    "use strict";
  
    //Zoom on hover
    $('.tile')
    // tile mouse actions
    .on('mouseover', function(){
      $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
    })
    .on('mouseout', function(){
      $(this).children('.photo').css({'transform': 'scale(1)'});
    })
    .on('mousemove', function(e){
      $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
    })
    // tiles set up
    .each(function(){
      $(this)
        // add a photo container
        .append('<div class="photo"></div>')
        // set up a background image for each tile based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    })

  
  
    
    // Carousel projets photo
    $('.fade-carousel p:gt(0)').hide();
    $('.fade-carousel').click(function(){$('.fade-carousel > :first-child').fadeOut().next('p').fadeIn().end().appendTo('.fade-carousel');});
    
    
    // Smooth scrolling
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 48)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
  
  
    // Magnific popup calls
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });
    
    
    // Envoyer email (désactivé)
    /*
    $("#contact-submit").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        $("#returnmessage").empty(); // To empty previous error/success message.
        // Checking for blank fields.
        if (name == '' || email == '' || contact == '') {
        //alert("Please Fill Required Fields");
        } else {
        // Returns successful data submission message when the entered information is stored in database.
        $.post("contact-form.php", {
        name1: name,
        email1: email,
        subject1: subject,
        message1: message
        }, function(data) {
        $("#returnmessage").append(data); // Append returned message to message paragraph.
        if (data == "Your Query has been received, We will contact you soon.") {
        $("#form")[0].reset(); // To reset form fields on success.
        }
        });
        }
        });
    */

  
})(jQuery);
