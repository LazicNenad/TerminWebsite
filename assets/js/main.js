$('document').ready(function () {
  // Scroll To Top Arrow
  $('.scrollTop').on('click', () => {
    window.scrollTo(0, 0);
  });

  // Initially scroll Link is not visible, after 200 it fades in
  $('.scrollTop').hide(); // Initally hidden
  $(document).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $('.scrollTop').fadeIn();
    } else {
      $('.scrollTop').fadeOut();
    }
  });
});
