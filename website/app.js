
/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
//personal API Key
let apiKey = '&units=metric&appid=96caabaa384249b2f564e0b4fba24dfb';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', ()=> {
   // console.log("generate"); //test
    const userZip = document.getElementById('zip').value;
   // console.log(userZip); //test
    const feeling = document.getElementById('feelings').value;
   // console.log(feeling); //test
   //api call
   getWeather(baseURL, userZip, apiKey)
   //new syntax
   .then((data)=>{
       postWeather('/add', {temp: data, date: newDate, feeling: feeling})
   })
   .then(()=>updateUI());
});

const getWeather = async (baseURL, userZip, Key) => {
   // console.log("get Weather") //test
    const res = await fetch(`${baseURL + userZip}${Key}`)
    try{
        const receivedData = await res.json();
        const temp = receivedData.main.temp;
        console.log(temp);
        return(temp)
    }
    catch(error){
        console.log("error",error);
        // appropriately handle the error
    }
}

const postWeather = async (url = '', data = {})=>{
   // console.log("postWeather"); //test
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
        // appropriately handle the error
    }
}

const updateUI = async ()=> {
  // console.log("updateUI"); //test
    const req = await fetch('/all');
    try{
        const updatedData = await req.json();
        console.log("data returned from the server"); //test
        console.log(updatedData);
        document.getElementById('date').textContent = updatedData.date;
        document.getElementById('temp').textContent = updatedData.temp;
        document.getElementById('content').textContent = updatedData.feeling;
    }
    catch(error){
        console.log("error", error);
        // appropriately handle the error
    }
}
// TODO - clear all tests