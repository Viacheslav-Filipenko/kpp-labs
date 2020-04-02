export default class MapService {
	constructor(map) {
		this.map = map;
	}

	addMarker(position, options = {}) {
		return new google.maps.Marker({
			position,
			map: this.map,
			...options
		});
	}
}
