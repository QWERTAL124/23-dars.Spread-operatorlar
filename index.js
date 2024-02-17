'use strict'

const calc = [1,2,3];
function logger(x,y,z){
    console.log(x+y+z);
}

// logger(1,2,3)
// logger(calc) <---- ushbu holatda biz aniqlanmagn javobini olamiz
// Yuqoridagi funksiyni to'g'rilash metodi

logger(...calc); //Massivni SPread operatori yordamida argumentlarga aylantirish

const arr = ['x','t','f'];
const newArr = [...arr];

// Obe'ktlar bilan ishlash

const numbers = {
    x : 10,
    y : 5,
}
const  newNumbers = {...numbers}; // yangi obe'ktga ozlashtirish

console.log(numbers);
console.log(newNumbers);