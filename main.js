const temp = document.querySelector('#temp');
const inputEl = document.querySelector('#input')
const condition = document.querySelector('#condition')
const locationEl = document.querySelector('#location');
const weatherIconEl = document.querySelector('img')
weatherIconEl.src = './sunny.png';


const weatherIcons = {
    'Clear': 'sunny.png',
    'Partially cloudy': 'weather02-512.webp',
    'Cloudy':'cloudy.png',
    'Overcast':'cloudy.png',
    'Rain' : 'rainy.png',
    'Thunderstorm': 'thunderstorm.png',
    'Snow': 'snow.png',
}

const main = async () => {
    const input = inputEl.value;
    if(input === ''){
        alert('Please fill in the location')
        return;
    }
    try{
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=API_KEY_HERE&contentType=json`, {mode:'cors'})
    const weatherData = await response.json();
        temp.textContent = `${weatherData.currentConditions.temp}°C`;
        const currentCondition = weatherData.currentConditions.conditions;
        condition.textContent = currentCondition;
        locationEl.textContent = weatherData.resolvedAddress;

        if(weatherIcons[currentCondition]){
            weatherIconEl.src = weatherIcons[currentCondition];
        }
    }
    catch(e){
        console.error('error:', e)
    }
}


const button = document.querySelector('#btn')
button.addEventListener('click', main)