"use strict";

// 1. select bill input
const billInput = document.querySelector("#billInput");

// 2. select tip input
const tipInput = document.querySelector("#tipInput");

// 3. select calculate button
const calculate = document.querySelector(".calculate");

const reset = document.querySelector(".reset");

// select display of total
const perPersonTotal = document.querySelector(".perPersonTotal");

// 9.1 grab number of people text
const numberOfPeople = document.querySelector("#numberOfPeople");

let people = 1;

// 9.2 grab + button add event listener and onclick increment number of people
const increasePeople = document.querySelector(".increasePeople");

// 9.3 grab - button add event listener and onclick decrement number of people
const decreasePeople = document.querySelector(".decreasePeople");

reset.addEventListener("click", function () {
  // clear bill input field
  billInput.value = "";

  //   clear tip input field
  tipInput.value = "";

  people = 1;

  numberOfPeople.innerText = people;

  perPersonTotal.innerText = `$0.00`;
});

// increase amount of people paying when clicking '+'
increasePeople.addEventListener("click", function () {
  numberOfPeople.innerText = people += 1;
});

// Decrease amount of people paying when clicking '-'
decreasePeople.addEventListener("click", function () {
  if (people > 1) {
    numberOfPeople.innerText = people -= 1;
  }
});

// 4. create function that calculates everything to get total amount
const totalAmount = function () {
  // 5. grab bill amount (convert into a number and grab value)
  const bill = Number(billInput.value);

  // 6. grab tip amount (convert into a number, grab value, divide in 100 to get percent)
  const tipPercent = Number(tipInput.value) / 100;

  // 7. multiply bill amount by tip percentage
  const tipAmount = bill * tipPercent;

  // 8. add  bill to tip amount and divide total by amount of people to get total per person
  const total = (tipAmount + bill) / people;

  // update per person total display to calculated amount
  perPersonTotal.innerText = `$${total.toFixed(2)}`;

  console.log(total);
};

// 12. add event listener to calculate button and add function so it can run the calculations.
calculate.addEventListener("click", function () {
  // use function to calculate total amount
  totalAmount();
});

// (optional: Make it dynamic so it updates without calculate button by using 'onkeyup' with functions in html. Also option to round up or down for an even number)
