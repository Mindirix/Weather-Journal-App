
/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let apiKey = '&units=metric&appid=96caabaa384249b2f564e0b4fba24dfb';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', ()=> {
    console.log("generate"); //test
    const userZip = document.getElementById('zip').value;
    console.log(userZip); //test
    const feeling = document.getElementById('feelings').value;
    console.log(feeling); //test
   //api call
   getWeather(baseURL, userZip, apiKey)
   //new syntax
   .then((data)=>{
       postWeather('/add', {temp: data, date: d, feeling: feeling})
   })
});

const getWeather = async (baseURL, userZip, Key) => {
    console.log("get Weather") //test
    const res = await fetch(`${baseURL + userZip}${Key}`)
    try{
        const receivedData = await res.json();
        const temp = receivedData.main.temp;
        console.log(temp);
        return(temp)
    }
    catch(error){
        console.log("error",error);
    }
}

const postWeather = async (url = '', data = {})=>{
    console.log("postWeather"); //test
    const res = await fetch(url, {
        method : 'POST',
        credentials : 'same-origin',
        headers : {
            'Content-Type': 'application/json',
        },
        body : JSON.stringify(data),
    });
    try{
        const returnedData = await res.json();
        console.log("data returned by postWeather"); //test
        console.log(returnedData); //test
        return(returnedData);
    }
    catch(error){
        console.log("error", error);
    }
}

// TODO - clear all tests