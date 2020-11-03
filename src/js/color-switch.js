import colors from '../colors.json';

const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');
const bodyRef = document.querySelector(`body`);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; 

btnStartRef.addEventListener(`click`, onClickStart);
btnStopRef.addEventListener(`click`, onClickStop);

let switchId = null;


function onClickStart() {
 
  switchId = setInterval(() => {
  const index = randomIntegerFromInterval(0, colors.length-1);
  bodyRef.style.backgroundColor = colors[index];
  }, 1000);
 btnStartRef.disabled = true;
 
};

function onClickStop() {
  
  clearInterval(switchId);
btnStartRef.disabled = false;
};




