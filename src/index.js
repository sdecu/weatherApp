import './style.css';

const docEl = (function() {
  let input = document.querySelector('input');
  const todaysDate = document.querySelector('#todaysDate');
  const temp = document.querySelector('#temp');
  const rain = document.querySelector('#rain');
  const dailyLow = document.querySelector('#dailyLow');
  const dailyHigh = document.querySelector('#dailyHigh');

  const tomDate = document.querySelector('#tomDate');
  const tomTemp = document.querySelector('#tomTemp');
  const tomRain = document.querySelector('#tomRain');
  const tomDailyLow = document.querySelector('#tomDailyLow');
  const tomDailyHigh = document.querySelector('#tomDailyHigh');

  const overDate = document.querySelector('#overDate');
  const overTemp = document.querySelector('#overTemp');
  const overRain = document.querySelector('#overRain');
  const overDailyLow = document.querySelector('#overDailyLow');
  const overDailyHigh = document.querySelector('#overDailyHigh');

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
    todaysDate,
    temp,
    rain,
    dailyLow,
    dailyHigh,
    tomDate,
    tomTemp,
    tomRain,
    tomDailyLow,
    tomDailyHigh,
    overDate,
    overTemp,
    overRain,
    overDailyLow,
    overDailyHigh,
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

async function logForecast(location) {
  let query = location;
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7696cbc4355444c4bc1221226240606&q=${query}&days=3`, {mode: 'cors'});
  let data = await response.json();
  let loc = data.location;
  let cur = data.current;
  let today = data.forecast.forecastday[0].day;
  let tomorrow = data.forecast.forecastday[1].day;
  let overmorrow = data.forecast.forecastday[2].day;

  const todayPrecip = today.daily_chance_of_rain;
  const tomPrecip = tomorrow.daily_chance_of_rain;
  const overPrecip = overmorrow.daily_chance_of_rain;
  const todayDate = data.forecast.forecastday[0].date;
  const tomDate = data.forecast.forecastday[1].date;
  const overDate = data.forecast.forecastday[2].date;
  const todayHigh = today.maxtemp_f;
  const tomHigh = tomorrow.maxtemp_f;
  const overHIgh = overmorrow.maxtemp_f;
  const todayLow = today.mintemp_f;
  const tomLow = today.mintemp_f;
  const overLow = overmorrow.mintemp_f;

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
      overLow,
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

logForecast('paris').then(resolve =>  {PrintPage(resolve)})

docEl.input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    logForecast(docEl.input.value).then(resolve =>  {
      PrintPage(resolve)
      docEl.input.value = '';
    })
  }
});


function PrintPage (input) {
  docEl.feelsLike.textContent = 'Feels like: ' + input.feelF + '°F';
  docEl.windSpeed.textContent = 'Wind Speed: ' + input.windMPH + ' mph';
  docEl.gust.textContent = 'Gust: ' + input.gustMPH + ' mph';
  docEl.windChill.textContent = 'Wind Chill: ' + input.feelF + '°F';
  docEl.precipitation.textContent = 'Precipitation: ' + input.todayPrecip + '%';
  docEl.country.textContent = 'Country: ' + input.country;
  docEl.city.textContent = 'City: ' + input.city;
  docEl.region.textContent = 'Region: ' + input.region;
  docEl.humidity.textContent = 'Humidity: ' + input.humidity + '%';

  docEl.todaysDate.textContent = 'Date: ' + input.todayDate;
  docEl.temp.textContent = 'Temperature: ' + input.tempF + '°F';
  docEl.rain.textContent = 'Chance of Rain: ' + input.todayPrecip + '%';
  docEl.dailyLow.textContent = 'Low: ' + input.todayLow + '°F';
  docEl.dailyHigh.textContent = 'High: ' + input.todayHigh + '°F';

  docEl.tomDate.textContent = 'Date: ' + input.tomDate;
  docEl.tomTemp.textContent = 'Temperature: ' + input.tomHigh + '°F';
  docEl.tomRain.textContent = 'Chance of Rain: ' + input.tomPrecip + '%';
  docEl.tomDailyLow.textContent = 'Low: ' + input.tomLow + '°F';
  docEl.tomDailyHigh.textContent = 'High: ' + input.tomHigh + '°F';

  docEl.overDate.textContent = 'Date: ' + input.overDate;
  docEl.overTemp.textContent = 'Temperature: ' + input.overHIgh + '°F';
  docEl.overRain.textContent = 'Chance of Rain: ' + input.overPrecip + '%';
  docEl.overDailyLow.textContent = 'Low: ' + input.overLow + '°F';
  docEl.overDailyHigh.textContent = 'High: ' + input.overHIgh + '°F';
}


(function ()  {
const foo = document.querySelector('header')
const bar = document.querySelector('#middle')
const weekly = document.querySelector('.weekly') 
weekly.style.marginTop = window.innerHeight - foo.offsetHeight - bar.offsetHeight - weekly.offsetHeight - 50 + 'px'
})();