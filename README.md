# Weather-Journal App Project

Weather app for Udacity that uses asynchronous functions, openWeatherMap API and user data to dynamically update the UI.

## Table of Contents

* [Project Title](#Weather-Journal-App-Project)
* [Dependencies](#dependencies)
* [Getting Started](#getting-started)
* [Development](#development)
* [Helping Resources](#helping-resources)
* [Credits](#credits)
* [License](#License)

## Dependencies

First you need to have node.js, express, cors, body-parser installed .

* To install node you can download form the wesite [nodeJs](https://nodejs.org/en/) or install from your package manger [nodeJs Package Manger](https://nodejs.org/en/download/package-manager/) npm included

* Then you have to download dependencies with npm from the command line (installs system wide) :

```bash
npm install express
npm install cors
npm install body-parser
```

## Getting Started

server.js file is where you can start the server with node.js

navigate to server.js directory in your pc then in the terminal use:

```bash
node server.js
```

you should get a response like this

```text
runnning on local host: 5000
```

then in your browser navigate to

```link
http://localhost:5000/
```

![weather_app_1](/weather_app_1.png)

from there you can enter your city zip code and how you are feeling today and click generate and you would get a reponse like this :

![weather_app_1](/weather_app_2.png)

## Development

* server is built locally with node and express.

* all files are available in the /website folder with the exception of server.js (available in root directory) .

* weather data is fetched from [OpenWeatherMap](https://openweathermap.org) API .

* server includes an asynchronous get route to fetch data and an asynchronous post route to save data to the server from client side .

* server logs data fetched to the console .

* UI updates dynamically when the data is received from the server .

* custom style added in style.css .

## Helping Resources

* Maryna Dymovich [project](https://github.com/MarynaDymovich/Weather-API)

* [FWD online community](https://nfpdiscussions.udacity.com)

---

### Credits

[Ahmed Moussa](https://github.com/Mindirix)

[Original template](https://github.com/udacity/fend/tree/refresh-2019) is provided by [Udacity](https://github.com/udacity).

#### License

This project is Licensed under the [MIT License](https://github.com/Mindirix/Weather-Journal-App/blob/6915d2cca2d9bc68250fdf8b67a6b01c607a4149/LICENSE#L1)
