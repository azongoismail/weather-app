const searchBar = document.getElementById('search-bar');
const button = document.getElementById('button');
const form = document.querySelector('.form');

function getWeather(city) {
	fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city +'&units=metric&appid=72270f48fae8db286b16a50283379f2d')
.then(response => {
	return response.json()
})
.then(data =>{
	console.log(data);
	let temperature = document.getElementById('temp');
	 	temperature.innerText = 'Temperature in ' + data.name+ " " + data.main.temp.toFixed(0);
	 let himuidity = document.getElementById('humidity');
	 	himuidity.innerText = 'Humidity ' + data.main.humidity + '%';
	 document.querySelector('.wind-speed').textContent = 'Wind Speed: ' + data.wind.speed + 'Km/h';

})
.catch(error =>{
	alert(error);
})
}

form.addEventListener('click', function(e) {
	e.preventDefault();
})

function search() {
	getWeather(searchBar.value);
}

button.addEventListener('click', search);

searchBar.addEventListener('keypress', function(e){
	if (e.key === 'enter') {
		search();
	}
})