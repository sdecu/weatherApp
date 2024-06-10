import './style.css';

const docEl = (function() {
  let input = document.querySelector('input');
  const todayDate = document.getElementById('today\'s date');
  const todayTemp = document.getElementById('Temp');
  const todayRain = document.getElementById('Rain');
  const todayLow = document.getElementById('Daily Low');
  const todayHigh = document.getElementById('Daily High');
  
  const tomorrowDate = document.getElementById('today\'s date');
  const tomorrowTemp = document.getElementById('Temp');
  const tomorrowRain = document.getElementById('Rain');
  const tomorrowLow = document.getElementById('Daily Low');
  const tomorrowHigh = document.getElementById('Daily High');
  
  const dayAfterDate = document.getElementById('today\'s date');
  const dayAfterTemp = document.getElementById('Temp');
  const dayAfterRain = document.getElementById('Rain');
  const dayAfterLow = document.getElementById('Daily Low');
  const dayAfterHigh = document.getElementById('Daily High');
  const feelsLike = document.querySelector('#feelsLike');
  const windSpeed = document.querySelector('#windSpeed');
  const gust = document.querySelector('#gust');
  const windChill = document.querySelector('#windChill');
  const precipitation = document.querySelector('#precipitation');
  const country = document.querySelector('#country');
  const city = document.querySelector('#city');
  const region = document.querySelector('#region');
  const humidity = document.querySelector('#humidity');

  return{
    input,    
    todayDate,
    todayTemp,
    todayRain,
    todayLow,
    todayHigh,
    tomorrowDate,
    tomorrowTemp,
    tomorrowRain,
    tomorrowLow,
    tomorrowHigh,
    dayAfterDate,
    dayAfterTemp,
    dayAfterRain,
    dayAfterLow,
    dayAfterHigh,
    feelsLike,
    windSpeed,
    gust,
    windChill,
    precipitation,
    country,
    city,
    region,
    humidity
  }
})();

async function logWeather(location) {
  let query = location;
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=7696cbc4355444c4bc1221226240606&q=${query}`, {mode: 'cors'});
  let data = await response.json();
  let loc = data.location;
  let cur = data.current;

  let country = loc.country;
  let city = loc.name;
  let region = loc.region;
  let condition = cur.condition.text;
  let tempF = cur.temp_f;
  let tempC = cur.temp_c;
  let feelF = cur.feelslike_f;
  let feelC = cur.feelslike_c;
  let humidity = cur.humidity;
  let windMPH = cur.wind_mph;
  let windKPH = cur.wind_kph;
  let gustMPH = cur.gust_mph;




    return {
    country,
    city,
    region,
    condition,
    tempC,
    tempF,
    feelC,
    feelF,
    humidity,
    windKPH,
    windMPH,
    gustMPH

  }
}

async function logForecast(location) {
  let query = location;
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7696cbc4355444c4bc1221226240606&q=${query}&days=3`, {mode: 'cors'});
  let data = await response.json();
  let today = data.forecast.forecastday[0].day;
  let tomorrow = data.forecast.forecastday[1].day;
  let overmorrow = data.forecast.forecastday[2].day;

  const todayPrecip = today.daily_chance_of_rain;
  const tomPrecip = tomorrow.daily_chance_of_rain;
  const overPrecip = overmorrow.daily_chance_of_rain;
  const todayDate = data.forecast.forecastday[0].date;
  const tomDate = data.forecast.forecastday[1].date;
  const overDate = data.forecast.forecastday[2].date;
  const todayHigh = today.maxtemp_F;
  const tomHigh = tomorrow.maxtemp_F;
  const overHIgh = overmorrow.maxtemp_F;
  const todayLow = today.mintemp_F;
  const tomLow = today.mintemp_F;
  const overLow = overmorrow.mintemp_F;


console.log(data)

    return {
      data,
      todayPrecip,
      tomPrecip,
      overPrecip,
      todayDate,
      tomDate,
      overDate,
      todayHigh,
      tomHigh,
      overHIgh,
      todayLow,
      tomLow,
      overLow
}
}




let foo1 = logForecast('paris').then(resolve =>  {console.log(resolve.data.forecast.forecastday[0].day)});


docEl.input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    logWeather(docEl.input.value).then(resolve =>  {
      console.log(docEl.feelsLike);
      PrintPage(resolve)
      docEl.input.value = '';
    })
  }
});


function PrintPage (input) {
  console.log(input.country)
  docEl.feelsLike.textContent = `${input.country}`;
}

(function ()  {
const foo = document.querySelector('header')
const bar = document.querySelector('#middle')
const weekly = document.querySelector('.weekly') 
weekly.style.marginTop = window.innerHeight - foo.offsetHeight - bar.offsetHeight - weekly.offsetHeight - 50 + 'px'
})();