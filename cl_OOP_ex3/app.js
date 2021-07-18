const foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
}

function logSubmit(event) {
  log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
  event.preventDefault();
}

const form = document.getElementsByName('form');
console.log(form)
const log = document.getElementById('log');
form[0].addEventListener('submit', logSubmit);

