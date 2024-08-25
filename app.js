document.getElementById('fetch-weather-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6d319f9734mshb5c51113db9cf5dp1b7510jsn35df3436eaf3',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            document.getElementById('location-name').textContent = data.location.name;
            document.getElementById('weather-condition').textContent = data.current.condition.text;
            document.getElementById('temperature').textContent = `Temperature: ${data.current.temp_c}°C`;
            document.getElementById('region').textContent = `Region: ${data.location.region}`;
            document.getElementById('country').textContent = `Country: ${data.location.country}`;
            document.getElementById('weather-data').classList.remove('d-none');
        })
        .catch(error => console.error(error));
});
