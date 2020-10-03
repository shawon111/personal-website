// mixItUp plugin
var mixer = mixitup('.grid-portfolio-container');

//scrollify plugin
$(function() {
          $.scrollify({
            section : ".scrollify",
            setHeights: false,
            updateHash: false,
            scrollSpeed: 500,  
          });
        });


//Humburger menu

function showMenu(){
    document.getElementById('navbar').style.height = "100vh";
};

function closeMenu(){
    document.getElementById('navbar').style.height = "0";
};

//scroll behavior

$(function(){
    $('.menu-items a, .scroll-down a').on('click', function(){
        $('html, body, #about').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false
    });
});

