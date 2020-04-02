import { Locations } from './consts/locations.conts.js';
import ApiService from './services/api.service.js';
import MapService from './services/map.service.js';

const API_KEY = '6448d29fd763a3d0e266d0100b828aa4';

const mapConfig = {
	center: { lat: 48, lng: 31 },
	zoom: 6
};

const main = async () => {
	const map = new google.maps.Map(document.getElementById('map'), mapConfig);

	const apiService = new ApiService(API_KEY);
	const mapService = new MapService(map);

	for (const position of Locations) {
		const data = await apiService.getWeaterByPosition(position);
		const weather = data.weather[0];

		const infowindow = new google.maps.InfoWindow({
			content: weather.description
		});

		const icon = apiService.getWeatherIconLink(weather.icon);
		const options = { icon, title: weather.main };

		const marker = mapService.addMarker(position, options);

		google.maps.event.addListener(marker, 'click', () => {
			infowindow.open(map, marker);
		});
	}
};

main();
