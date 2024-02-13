const alternatives = [
  {text:"please rachu ma ,i am pavam & my phone's feeling lonely! Just one call and it might stop giving me the silent treatment!  Just one call please ", images:"images/cat-01.gif"},
  {text:"If hazelnut chocolate were as sweet as your smile, every candy shop would be out of business by now!, my phone bill's on a diet. It needs just one call to feel full again ...", images:"images/cat-02.gif"},
  {text:"Are you a Nic ice cream? Because every time I see you, I melt a little inside! ,  if my phone could cry, it would! Let's dial away its tears with just one call...", images:"images/cat-03.gif"},
  {text:"If hazelnut chocolate and Nic ice cream had a lovechild, it would be you – irresistibly sweet , even my ringtone's gone on strike! It needs one call to get back to work! Just one call please ", images:"images/cat-04.gif"},
  {text:"If I could write a song, it'd be as beautiful as 'Vizhiyil Un Vizhiyil' and it would be all about you. , my phone's like a plant in a drought! It needs just one call to feel the rain of conversation!", images:"images/cat-05.gif"},
]
const ohyes = {text:"Fantastic! You're my Valentine; brace for laughter and love :) , my phone's getting rusty from the lack of calls! It's time to oil up those conversation gears...Just one call please", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "Yes"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'No'){
          let randomIndex = Math.floor(Math.random() * alternatives.length);
          let alternative = alternatives[randomIndex];
          updateDisplay(alternative);

      }
  })
})