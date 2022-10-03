"use strict";

window.onload = init;

function init() {
  const amountInput = document.querySelector("#amountInput").value;
  const interestInput = document.querySelector("#interestInput").value;
  const lengthInput = document.querySelector("#lengthInput").value;
  const calculateBtn = document.querySelector("#calculateBtn").value;
  calculateBtn.onclick = calculateBtnClicked;
}

function calculateBtnClicked() {
  let paymentOutput = document.querySelector("#paymentOutput");
  let interestOutput = document.querySelector("#interestOutput");
  let payment =
    amountInput * (interestInput / (1 - (1 + interestInput) ** -lengthInput));
  let interest = (payment * interestInput) / 12;
  paymentOutput.value = payment;
  interestOutput.value = interest;
}
