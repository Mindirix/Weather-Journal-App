/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&units=metric&appid=96caabaa384249b2f564e0b4fba24dfb';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', ()=> {
    console.log("generate"); //test
    
})

// TODO - clear all tests