const docHeight = document.documentElement.scrollHeight;

let text = document.getElementById('text');
let sun = document.getElementById('sun');
let moon = document.getElementById('moon');
let hill1 = document.getElementById('hill1');
let hill2 = document.getElementById('hill2');
let hill3 = document.getElementById('hill3');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

let welcome = document.getElementById('welcome');
let scrollBtn = document.getElementById('scroll');

let author = document.getElementById('author');
let botName = document.getElementById('bot-name');
let botName2 = document.getElementById('bot-name2');

let home = document.getElementById('home');
let about = document.getElementById('about');



/* Functions */

function scrollPage() {
  window.scroll({
    top: docHeight/2.3,
    behavior: 'smooth'
  });
}


function scrollToTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth'
  });
  text.textContent = "";
  home.disabled = true;
  setTimeout(function() {
     helloWorld("Hello, World!", text, 100, () => {
       home.disabled = false;
     });
  }, 300);
}


function scrollBottom() {
  let element = document.documentElement;
  element.scroll({
    top: docHeight,
    behavior: "smooth"
  });
}

function helloWorld(title, element, speed, callback = null) {
  let i = 0;
  let typingIntervalId = setInterval(type, speed);
  
  function type() {
    if (i === title.length) {
      clearInterval(typingIntervalId);
      element.style.filter = "none";
      if (callback) {
        callback();
      }
      return;
    }
    element.textContent += title[i];
    element.style.filter = `hue-rotate(${i*30}deg)`;
    i++;
  }
}


/*Event Listeners */

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  let view = window.innerHeight;

  if (value === 0) {
    scrollBtn.style.opacity = "1";
    scrollBtn.disabled = false;
  }
  else {
    scrollBtn.style.opacity = "0";
    scrollBtn.disabled = true;
  }

  if (value >= view/1.1) {
    welcome.textContent = "Violet Courtyard";
    welcome.style.color = "gold";
  }
  else if (value >= view/1.5) {
    welcome.textContent = "To";
    welcome.style.color = "purple";
  }
  else {
    welcome.textContent = "Welcome";
    welcome.style.color = "white";
  }

  author.style.filter = `hue-rotate(${value-docHeight/2.3}deg)`;
  botName.style.filter = `hue-rotate(${value-docHeight/2.3}deg)`;
  botName2.style.filter = `hue-rotate(${value-docHeight/2.3}deg)`;

  
  sun.style.marginTop = value*2.5 + 'px';
  sun.style.filter = `hue-rotate(${value}deg)`;
  sun.style.transform = `translate(30vw, -20vh) rotate(${value}deg)`;
  moon.style.marginTop = value*0.7 + 'px';
  text.style.marginTop = value*1.2 + 'px';
  hill2.style.marginTop = value*0.1 + 'px';
  hill3.style.marginTop = value*0.3 + 'px';
  hill4.style.marginTop = value*0.5 + 'px';
  hill5.style.marginTop = value*0.7 + 'px';


  if (value >= docHeight/2.04) {
    about.style.background = "#342580";
    about.style.color = "white";
    home.style.background = "none";
    home.style.color = "#342580";
  }
  else {
    about.style.background = "none";
    about.style.color = "#342580";
    home.style.background = "#342580";
    home.style.color = "white";
  }

  
});


window.addEventListener("load", () => {
  helloWorld("Hello, World!",text,100, () => {
    sun.style.opacity = "1";
    scrollBtn.style.opacity = "1";
    scrollBtn.disabled = false;
  });
});         


window.addEventListener('resize', () => {
  if (window.innerHeight < window.innerWidth) {
    alert('This website is not designed for landscape mode');
  }
});
