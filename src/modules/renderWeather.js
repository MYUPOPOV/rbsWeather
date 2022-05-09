import { animate } from './helpers';

const renderWeather = (time = 2000) => {
	const string1 = document.querySelector('.main-block__string-1');
	const string2 = document.querySelector('.main-block__string-2');
	const string3 = document.querySelector('.main-block__string-3');
	const map = document.getElementById('map');

	const weekArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	const monthArray = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
	const dayBlocks = document.querySelectorAll('.weather-block__day');

	let coords;
	let lat = 56.143063;
	let lon = 40.410934;
	let place = 'город Владимир';

	function init() {
		var myPlacemark,
			myMap = new ymaps.Map(
				'map',
				{
					center: [56.143063, 40.410934],
					zoom: 9,
				},
				{
					searchControlProvider: 'yandex#search',
				}
			);
		// Слушаем клик на карте.
		myMap.events.add('click', function (e) {
			coords = e.get('coords');
			console.log('~ coords', coords); // ПОКАЗЫВАЕМ КООРДИНАТЫ
			// Если метка уже создана – просто передвигаем ее.
			if (myPlacemark) {
				myPlacemark.geometry.setCoordinates(coords);
			}
			// Если нет – создаем.
			else {
				myPlacemark = createPlacemark(coords);
				myMap.geoObjects.add(myPlacemark);
				// Слушаем событие окончания перетаскивания на метке.
				myPlacemark.events.add('dragend', function () {
					getAddress(myPlacemark.geometry.getCoordinates());
				});
			}
			getAddress(coords);
		});
		// Создание метки.
		function createPlacemark(coords) {
			return new ymaps.Placemark(
				coords,
				{
					iconCaption: 'поиск...',
				},
				{
					preset: 'islands#violetDotIconWithCaption',
					draggable: true,
				}
			);
		}
		// Определяем адрес по координатам (обратное геокодирование).
		function getAddress(coords) {
			myPlacemark.properties.set('iconCaption', 'поиск...');
			ymaps.geocode(coords).then(function (res) {
				var firstGeoObject = res.geoObjects.get(0);

				myPlacemark.properties.set({
					// Формируем строку с данными об объекте.
					iconCaption: [
						// Название населенного пункта или вышестоящее административно-территориальное образование.
						firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
						// Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
						firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
					]
						.filter(Boolean)
						.join(', '),
					// В качестве контента балуна задаем строку с адресом объекта.
					balloonContent: firstGeoObject.getAddressLine(),
				});
			});
		}
	}

	// Анимация появления объектов
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

	// Рендерим приетственный блок
	const renderHello = () => {
		const stringArray = [string1, string2, map];

		stringArray.forEach((item) => {
			item.style.opacity = 0;
		});
		string1.textContent = 'Приветствую тебя, друг';
		string2.textContent = 'Выбери точку на карте, и я покажу тебе погоду на неделю для этого места';

		animateItemAppear(stringArray, 0, time);
	};

	// Рендерим блок погоды
	const renderWeatherBlock = (data, place) => {
		const daysArray = [string3, ...dayBlocks];

		daysArray.forEach((item) => {
			item.style.opacity = 0;
		});

		string3.textContent = `Сейчас выбран: ${place}`;

		for (let i = 0; i < 8; i++) {
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
		}

		setTimeout(() => {
			animateItemAppear(daysArray, 0, time);
		}, time * 3);
	};

	// Получаем прогноз от openweathermap.org
	const getData = (lat, lon) => {
		return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&lang=ru&appid=2b669c7a2dd43a321c1f550c222bf37b`, {
			method: 'GET',
		});
	};

	// Блок выполнения
	ymaps.ready(init);

	renderHello();

	getData(lat, lon, place)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			renderWeatherBlock(data, place);
		})
		.catch((error) => {
			console.log(error);
		});
};

export default renderWeather;
