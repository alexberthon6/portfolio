(function($) {
    
    $(document).ready(function(){
    $(this).scrollTop(0);
    });
    
    "use strict";
    
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
