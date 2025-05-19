import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector('#excuse').innerHTML = generateExcuse();
  console.log('Hello Rigo from the console!');
};

let generateExcuse = () => {

  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let whoIndex = Math.floor(Math.random() * 4);
  let actionIndex = Math.floor(Math.random() * 4);
  let whatIndex = Math.floor(Math.random() * 3);
  let whenIndex = Math.floor(Math.random() * 5);

  return who[whoIndex] + ' ' + action[actionIndex] + ' ' + what[whatIndex] + ' ' + when[whenIndex];
};
