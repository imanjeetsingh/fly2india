// hover style of cards
window.onload = function () {
  const $element = document.querySelector('.stagger_animation');
  if ($element) { 
    const eletop = $element.offsetTop;
    const $ele_child = document.querySelectorAll('.stagger_animation > *');
    const winmidheight = window.innerHeight / 2;
    let runonce = true;
    $ele_child.forEach(e => {
      e.style.opacity = '0';
    })

    // $element.style.opacity = 0;
    window.addEventListener('scroll', function (event) {
      if (window.pageYOffset + winmidheight >= eletop && runonce) {
        animateStagger($ele_child);
        runonce = false;
      }
    })
  }
};

function animateStagger($ele_child) {
  TweenMax.staggerFromTo($ele_child, 1, { y: 30, opacity: 0 }, {
    y: 0, opacity: 1, onComplete: function (e) {
      // this.target.className += ' animated shake'
    }
  }, 0.2);
}
// end of hover style of cards
// start home page carousel
