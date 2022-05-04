import { animate } from './helpers';

const renderWeather = () => {
	const string1 = document.querySelector('.main-block__string-1');
	const string2 = document.querySelector('.main-block__string-2');
	const stringArray = [string1, string2];
	const time = 2000;
	string1.style.opacity = 0;
	string2.style.opacity = 0;
	string1.textContent = 'Приветствую тебя, друг';
	string2.textContent = 'Давай я расскажу тебе какая погода будет во Владимире';
	const weekArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	const monthArray = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

	// Появление надписей
	const animateItemAppear = (item, index, time = 2000) => {
		animate({
			duration: time,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				item[index].style.opacity = progress;
				if (item[index].style.opacity >= 1 && index + 1 < stringArray.length) {
					index++;
					animateItemAppear(item, index, time);
				}
			},
		});
	};

	const renderWeatherBlock = (data) => {
		data.daily.forEach((item) => {
			let date = new Date(parseInt(`${item.dt}000`));
			let sunrise = new Date(parseInt(`${item.sunrise}000`));
			let sunset = new Date(parseInt(`${item.sunset}000`));

			console.log(`${weekArray[date.getDay()]}, ${date.getDate()} ${monthArray[date.getMonth()]}`);
			console.log(`${Math.ceil(item.temp.night)} — ${Math.ceil(item.temp.day)} °C`);
			console.log(item.weather[0].description[0].toUpperCase() + item.weather[0].description.slice(1));
			console.log(`Ветер: ${Math.ceil(item.wind_speed)} — ${Math.ceil(item.wind_gust)} м/с`);
			let sunriseMinutes = sunrise.getMinutes() < 10 ? `0${sunrise.getMinutes()}` : sunrise.getMinutes();
			let sunsetMinutes = sunset.getMinutes() < 10 ? `0${sunset.getMinutes()}` : sunset.getMinutes();
			console.log(`Светло: ${sunrise.getHours()}:${sunriseMinutes} — ${sunset.getHours()}:${sunsetMinutes}`);
			console.log(`   `);
		});
	};

	// Получаем прогноз от openweathermap.org
	const getData = () => {
		return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=56.143063&lon=40.410934&exclude=hourly,minutely&units=metric&lang=ru&appid=2b669c7a2dd43a321c1f550c222bf37b', {
			method: 'GET',
		});
	};
	getData()
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			renderWeatherBlock(data);
		})
		.catch((error) => {
			console.log(error);
		});

	animateItemAppear(stringArray, 0, time);
};

export default renderWeather;
