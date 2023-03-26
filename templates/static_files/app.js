//Cusom JS entry point.

// console.log('JS entrypoint loaded!');
//test

function setScrollBar() {
    const container = document.getElementById('scroll-container');

    const scrollBtns = document.getElementById('scroll-btns');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    
    const scrollLeftFarBtn = document.querySelector('.scroll-left-far');
    const scrollRightFarBtn = document.querySelector('.scroll-right-far');

    const scrollLeftAllBtn = document.querySelector('.scroll-left-all');
    const scrollRightAllBtn = document.querySelector('.scroll-right-all');

    scrollBtns.style.width = `${container.offsetWidth}px`;
    
    container.addEventListener('scroll', () => {
      scrollBtns.style.left = `${container.scrollLeft + container.offsetWidth - scrollBtns.offsetWidth}px`;
    });
    //
    function easeInOutCubic(t) {
        return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;
    }
    
    // Define the scroll function with custom easing
    function scrollContainer(x, duration) {
        const start = container.scrollLeft;
        const change = x - start;
        let currentTime = 0;
        const increment = 20;
    
        function animateScroll() {
        currentTime += increment;
        const val = easeInOutCubic(currentTime/duration) * change + start;
        container.scrollLeft = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
        }
    
        animateScroll();
    }

    //

    
    scrollLeftBtn.addEventListener('click', () => {
      container.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    });
    
    scrollRightBtn.addEventListener('click', () => {
      container.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    });
    
    scrollLeftFarBtn.addEventListener('click', () => {
        container.scrollBy({
          left: -1000,
          behavior: 'smooth'
        });
      });
      
      scrollRightFarBtn.addEventListener('click', () => {
        container.scrollBy({
          left: 1000,
          behavior: 'smooth'
        });
      });



      scrollLeftAllBtn.addEventListener('click', () => {
        scrollContainer(0, 500);
      });
      
      scrollRightAllBtn.addEventListener('click', () => {
        scrollContainer(container.scrollWidth, 500);
      });
}

window.onload = setScrollBar;

