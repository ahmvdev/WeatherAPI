const text = document.querySelector('#text')
const inputEl = document.querySelector('#input')
async function main(){
    const input = inputEl.value;
    if(input === ''){
        alert('please fill in the location')
    }
    try{
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?unitGroup=metric&key=apikeyhere&contentType=json`, {mode:'cors'})
    const weatherData = await response.json();
        console.log(weatherData);
    }
    catch(e){
        console.error('error:', e)
    }
}
const button = document.querySelector('#btn')
button.addEventListener('click', main)