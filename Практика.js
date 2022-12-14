////Модули
import { sumTwoNums } from "./someFunction.js";
import { cal } from "./someFunction.js";
console.log(sumTwoNums(50, 50));

let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let select = document.querySelector("#select");
let btn = document.querySelector("#button");
let h3 = document.querySelector("#h3");

btn.addEventListener('click', ()=> cal(input1, select, input2, h3))

h3.textContent = cal()