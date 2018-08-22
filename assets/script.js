$(function () {
  var $navbarHeigth = 85;
  $(document).scroll(function () {
    let $nav = $(".navbar");
    let $icons = $(".icone");
    $icons.toggleClass('scrolled', $(this).scrollTop() > $icons.height() + 200);
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height() + 50);
  });


  $('.burger').on('click', function () {
    $(this).toggleClass('is-active');
    $('#navbarMenuHeroC').toggleClass('is-active');
    $('.navbar-end .navbar-item').toggleClass('is-active');
  });

  $('.button').on('click', function () {
    let hash = $(this)[0].hash;
    $("html, body").animate({ scrollTop: $(hash).offset().top - $navbarHeigth }, 1000);
  });
  
  $('.btn-arrow-bottom').on('click', function () {
    console.log('sdfd');
    $("html, body").animate({ scrollTop: $("#animation").offset().top - $navbarHeigth }, 1000);
  });

//btnContato
  $('#btnContato').on('click', function () {
    console.log('quero mostrar o modal de contato');
    $('.contato').addClass('is-active');
  });

  $('.modal-close').on('click', function () {
    console.log('quero fechar o modal');
    $('.contato').removeClass('is-active');
  });
//FIM btnContato

//btnLogin
$('#btnLogin').on('click',function (){
  console.log('quero mostrar o modal de login e cadastro');
  $('.login').addClass('is-active');
});
$('.modal-close').on('click',function (){
  console.log('quero fechar o modal de login e cadastro');
  $('.login').removeClass('is-active');
});
//FIM btnLogin

});










