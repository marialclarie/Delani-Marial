$(document).ready(function(){
   $('.info1').click(function(){
       $('.info1-sub').toggle();
       $('#hide1').toggle();
   })
   $('.info2').click(function(){
    $('.info2-sub').toggle();
    $('#hide2').toggle();
    })
    $('.info3').click(function(){
        $('.info3-sub').toggle();
        $('#hide3').toggle();
    })  
});

// Portfolio Hoover effects
$(document).ready(function(){
    // Portfolio 1
    $('.work1').mouseenter(function(){
        $('#p1txt').show()
        $('.p1img').hide()
        $('.work1').css('background','url(./assets/portfolio/work4.jpg)')
    })
        $('.work1').mouseleave(function(){
        $('#p1txt').hide()
        $('.p1img').show()
        $('.work1').css('background','#ffffff')
        
    })
    // Portfolio 2
    $('.work2').mouseenter(function(){
        $('#p2txt').show()
        $('.p2img').hide()
        $('.work2').css('background','url(./assets/portfolio/work3.jpg)')
    })
    $('.work2').mouseleave(function(){
        $('#p2txt').hide()
        $('.p2img').show()
        $('.work2').css('background','#ffffff')
    })
    // portfolio 3
    $('.work3').mouseenter(function(){
        $('#p3txt').show()
        $('.p3img').hide()
        $('.work3').css('background','url(./assets/portfolio/work2.jpg)')
    })
    $('.work3').mouseleave(function(){
        $('#p3txt').hide()
        $('.p3img').show()
        $('.work3').css('background','#ffffff')
    })
    // Portfolio 4
    $('.work4').mouseenter(function(){
        $('#p4txt').show()
        $('.p4img').hide()
        $('.work4').css('background','url(./assets/portfolio/work1.jpg)')
    })
    $('.work4').mouseleave(function(){
        $('#p4txt').hide()
        $('.p4img').show()
        $('.work4').css('background','#ffffff')
    })
    // Portfolio 5
    $('.work5').mouseenter(function(){
        $('#p5txt').show()
        $('.p5img').hide()
        $('.work5').css('background','url(./assets/portfolio/work5.jpg)')
    })
    $('.work5').mouseleave(function(){
        $('#p5txt').hide()
        $('.p5img').show()
        $('.work5').css('background','#ffffff')
    })
    // Portfolio 6
    $('.work6').mouseenter(function(){
        $('#p6txt').show()
        $('.p6img').hide()
        $('.work6').css('background','url(./assets/portfolio/work6.jpg)')
    })
    $('.work6').mouseleave(function(){
        $('#p6txt').hide()
        $('.p6img').show()
        $('.work6').css('background','#ffffff')
    })

    // Portfolio 7
    $('.work7').mouseenter(function(){
        $('#p7txt').show()
        $('.p7img').hide()
        $('.work7').css('background','url(./assets/portfolio/work7.jpg)')
    })
    $('.work7').mouseleave(function(){
        $('#p7txt').hide()
        $('.p7img').show()
        $('.work7').css('background','#ffffff')
    })


    // Portfolio 8
    $('.work8').mouseenter(function(){
        $('#p8txt').show()
        $('.p8img').hide()
        $('.work8').css('background','url(./assets/portfolio/work8.jpg)')
    })
    $('.work8').mouseleave(function(){
        $('#p8txt').hide()
        $('.p8img').show()
        $('.work8').css('background','#ffffff')
    })



})

//Form Validation
// Validating form
function val(){
    var username=document.getElementById('cname').value;
    var email=document.getElementById('cemail').value;
    var message=document.getElementById('cmessage').value
    if(username==''){
        alert('Kindly input a valid name');
        username.focus();
        return false;
        
    }else
    if(email==''){
        alert('Dear '+username+'\n  Kindly input a valid email address');
        email.focus();
        return false
    }else
    if(message==''){
        alert('Dear '+username+' Please leave us a message')
        message.focus()
        return false;
        
    }else
    alert('Hey '+username+'\n  Thank you for filling this form.')
    }