
/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
//personal API Key
let apiKey = '&units=metric&appid=96caabaa384249b2f564e0b4fba24dfb';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getDate()+'.'+ d.getMonth()+'.'+ d.getFullYear();

//event listener on generate button
document.getElementById('generate').addEventListener('click', ()=> {
   // console.log("generate"); //test
    const userZip = document.getElementById('zip').value;
   // console.log(userZip); //test
    const feeling = document.getElementById('feelings').value;
   // console.log(feeling); //test
   //api call
   getWeather(baseURL, userZip, apiKey)
   //chain promises
   .then((data)=>{
       //call postWeather to send data to the server
       postWeather('/add', {temp: data, date: newDate, feeling: feeling})
   })
   //call update UI
   .then(()=>updateUI());
});

//api call method
const getWeather = async (baseURL, userZip, Key) => {
   // console.log("get Weather") //test
    //call the api with the url and wait response
    const res = await fetch(`${baseURL + userZip}${Key}`)
    try{
        //waith response and convert to json
        const receivedData = await res.json();
        const temp = receivedData.main.temp;
        const name = receivedData.name;
      //  console.log(temp); //test
        return({temp: temp, name: receivedData.name}) //return temp and city name
    }
    //catch errors
    catch(error){
        console.log("error",error);
        // appropriately handle the error
    }
}

//postWeather method to send to the server
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

//update the ui after receving response from the server
const updateUI = async ()=> {
  // console.log("updateUI"); //test
    // wait response from the server get route
    const req = await fetch('/all');
    try{
        const updatedData = await req.json();
        console.log("data returned from the server"); //test
        console.log(updatedData);
        //update elements with the received data
        document.getElementById('date').textContent = updatedData.date;
        document.getElementById('temp').textContent = updatedData.temp.temp;
        document.getElementById('city').textContent = updatedData.temp.name;
        document.getElementById('content').textContent = updatedData.feeling;
    }
    catch(error){
        console.log("error", error);
        // appropriately handle the error
    }
}
// TODO - clear all tests