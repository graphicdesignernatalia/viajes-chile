
//smooth scrolling
$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
});

//desaparece barra celeste y el texto es protagonista
$(document).ready(function(){
    $("i.icono-guia").dblclick(function(){
    $(this).hide(5000);
    });
//con doble click el texto se convierte a azul
    $("h5.card-title").click(function(){
    $(this).css({
    "color": "blue",
    "font-size": "1em"
      })
  });
  });