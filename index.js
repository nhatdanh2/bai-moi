const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=Hanoi&days=3';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8760081934msh45dd28c7ab3605dp15faebjsn06cd803e3be9',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
  }
};

// Define an async function to make the API request
async function getWeatherData() {
  try {
    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const result = await response.json(); // Parse the response as JSON
    console.log(result.forecast.forecastday[1].date_epoch);
  } catch (error) {
    console.error(error);
  }
}