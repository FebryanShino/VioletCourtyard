let text = document.getElementById('text');
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');


window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let scroll = document.getElementById('scroll');

  if (value === 0) {
    scroll.style.opacity = "1";
    scroll.disabled = false;
  }
  else {
    scroll.style.opacity = "0";
    scroll.disabled = true;
  }
  sun.style.marginTop = value*2.5 + 'px';
  moon.style.marginTop = value*0.85 + 'px';
  sun.style.transform = `rotate(${value}deg)`;
  text.style.marginTop = value*1.2 + 'px';
  hill2.style.marginTop = value*0.1 + 'px';
  hill3.style.marginTop = value*0.3 + 'px';
  hill4.style.marginTop = value*0.5 + 'px';
  hill5.style.marginTop = value*0.7 + 'px';
});

function scrollPage() {
  window.scroll({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}


function scrollBottom() {
  let element = document.documentElement;
  let bottom = element.scrollHeight - element.clientHeight;
  element.scroll({
    top: bottom,
    behavior: "smooth"
  });
}