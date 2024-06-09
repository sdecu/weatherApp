import './style.css';


let input = 'paris';

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
    windMPH}
}


let foo = logWeather('paris').then(resolve =>  {console.log(resolve.country)});

console.log(foo)