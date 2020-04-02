export default class ApiService {
	constructor(apiKey) {
		this.apiKey = apiKey;
	}

	async getWeaterByCityName(city, country) {
		const q = country ? `${city},${country}` : city;
		const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${this.apiKey}`);

		return await response.json();
	}

	async getWeaterByPosition(position) {
		const { lat, lng } = position;
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.apiKey}`
		);

		return await response.json();
	}

	getWeatherIconLink(iconCode) {
		return `http://openweathermap.org/img/w/${iconCode}.png`;
	}
}
