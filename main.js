const temp = document.querySelector('#temp'); 
const inputEl = document.querySelector('#input')
const condition = document.querySelector('#condition')
const locationEl = document.querySelector('#location');
const weatherIconEl = document.querySelector('img')
weatherIconEl.src = './assets/sunny.png'; //default icon for weather condition


const weatherIcons = { //for each weather condition this object contains an icon respectively
    'Clear': './assets/sunny.png',
    'Partially cloudy': './assets/weather02-512.webp',
    'Cloudy':'./assets/cloudy.png',
    'Overcast':'./assetscloudy.png',
    'Rain' : './assets/rainy.png',
    'Thunderstorm': './assets/thunderstorm.png',
    'Snow': './assets/snow.png',
}

const main = async () => {
    const input = inputEl.value;
    if(input === ''){
        alert('Please fill in the location')
        return;
    }
    try{
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=&contentType=json`, {mode:'cors'})
    const weatherData = await response.json();
        temp.textContent = `${weatherData.currentConditions.temp}°C`; //getting temperature from the api
        const currentCondition = weatherData.currentConditions.conditions;
        condition.textContent = currentCondition;
        locationEl.textContent = weatherData.resolvedAddress;

        if(weatherIcons[currentCondition]){ //if weather conditions fetched from api match any object it displays the icon for that object
            weatherIconEl.src = weatherIcons[currentCondition];
        }
    }
    catch(e){
        console.error('error:', e)
    }
}


const button = document.querySelector('#btn')
button.addEventListener('click', main)