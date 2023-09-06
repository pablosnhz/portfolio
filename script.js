//HEADER// 

// function([string1, string2],target id,[color1,color2])    
consoleText(['Pablo Sanhueza.', 'Road to FullStack', 'Mi web'], 'text',['tomato','white','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//FIN DEL HEADER

//FUNCIONAMIENTO DEL SLIDER//

var counter = 2;
var interval;

function nextSlide() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}

function startSlider() {
    interval = setInterval(nextSlide, 64000); // Cambiar cada 4 segundos
}

function stopSlider() {
    clearInterval(interval);
}

startSlider(); // Inicia la animación

const slider = document.querySelector('.slider');

slider.addEventListener('mouseenter', () => {
    stopSlider(); // Detiene la animación cuando el cursor entra en el slider
});

slider.addEventListener('mouseleave', () => {
    startSlider(); // Reanuda la animación cuando el cursor sale del slider
});

//FIN DEL FUNCIONAMIENTO DEL SLIDER//

