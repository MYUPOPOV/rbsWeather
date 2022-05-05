import { animate } from './helpers';

const renderWeather = (time = 2000) => {
	const string1 = document.querySelector('.main-block__string-1');
	const string2 = document.querySelector('.main-block__string-2');
	const stringArray = [string1, string2];
	// const time = 2000;
	string1.style.opacity = 0;
	string2.style.opacity = 0;
	string1.textContent = 'Приветствую тебя, друг';
	string2.textContent = 'Давай я расскажу тебе какая погода будет во Владимире';
	const weekArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	const monthArray = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
	const dayBlocks = document.querySelectorAll('.weather-block__day');
	dayBlocks.forEach((item) => {
		item.style.opacity = 0;
	});

	// Появление надписей
	const animateItemAppear = (item, index, time = 2000) => {
		animate({
			duration: time,
			timing(timeFraction) {
				return timeFraction;
			},
			draw(progress) {
				item[index].style.opacity = progress;
				if (item[index].style.opacity >= 1 && index + 1 < item.length) {
					index++;
					animateItemAppear(item, index, time);
				}
			},
		});
	};

	const renderWeatherBlock = (data) => {
		for (let i = 0; i < 7; i++) {
			const item = data.daily[i];

			const date = new Date(parseInt(`${item.dt}000`));
			const sunrise = new Date(parseInt(`${item.sunrise}000`));
			const sunset = new Date(parseInt(`${item.sunset}000`));
			const sunriseMinutes = sunrise.getMinutes() < 10 ? `0${sunrise.getMinutes()}` : sunrise.getMinutes();
			const sunsetMinutes = sunset.getMinutes() < 10 ? `0${sunset.getMinutes()}` : sunset.getMinutes();

			dayBlocks[i].querySelector('.weather-block__day__string1').innerHTML = `<u>${weekArray[date.getDay()]}, ${date.getDate()} ${monthArray[date.getMonth()]}</u>`;

			dayBlocks[i].querySelector('.weather-block__day__string2').innerHTML = `<img src="./images/temperature.png"><span>${Math.ceil(item.temp.night)} — ${Math.ceil(item.temp.day)} °C</span>`;

			dayBlocks[i].querySelector('.weather-block__day__string3').innerHTML = item.weather[0].description[0].toUpperCase() + item.weather[0].description.slice(1);

			dayBlocks[i].querySelector('.weather-block__day__string4').innerHTML = ` <img src="./images/wind.png"><span>${Math.ceil(item.wind_speed)} — ${Math.ceil(item.wind_gust)} м/с</span>`;

			dayBlocks[i].querySelector(
				'.weather-block__day__string5'
			).innerHTML = ` <img src="./images/sunrise.png"><span>${sunrise.getHours()}:${sunriseMinutes} — ${sunset.getHours()}:${sunsetMinutes}</span>`;

			console.log(`${weekArray[date.getDay()]}, ${date.getDate()} ${monthArray[date.getMonth()]}`);
			console.log(`${Math.ceil(item.temp.night)} — ${Math.ceil(item.temp.day)} °C`);
			console.log(item.weather[0].description[0].toUpperCase() + item.weather[0].description.slice(1));
			console.log(`Ветер: ${Math.ceil(item.wind_speed)} — ${Math.ceil(item.wind_gust)} м/с`);
			console.log(`Светло: ${sunrise.getHours()}:${sunriseMinutes} — ${sunset.getHours()}:${sunsetMinutes}`);
			console.log(`   `);
		}
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
	setTimeout(() => {
		animateItemAppear(dayBlocks, 0, time);
	}, time * 2);
};

export default renderWeather;
