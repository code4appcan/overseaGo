function isInChina (lat, lon) {
	function Rectangle(lat1, lon1, lat2, lon2) {
		this.west = lon1 < lon2 ? lon1 : lon2;
		this.north = lat1 > lat2 ? lat1 : lat2;
		this.east = lon1 > lon2 ? lon1 : lon2;
		this.south = lat1 < lat2 ? lat1 : lat2;

	};
	Rectangle.prototype.isInRectangle = function (lat, lon) {
		return this.west <= lon && this.east >= lon && this.north >= lat && this.south <= lat;
	};

	var region = [	
				new Rectangle(49.220400, 79.446200, 42.889900, 96.330000),
				new Rectangle(54.141500, 109.687200, 39.374200, 135.000200),
				new Rectangle(42.889900, 73.124600, 29.529700, 124.143255),
				new Rectangle(29.529700, 82.968400, 26.718600, 97.035200),
              	new Rectangle(29.529700, 97.025300, 20.414096, 124.367395),
              	new Rectangle(20.414096, 107.975793, 17.871542, 111.744104)
				 ];
	var exclude = [
				new Rectangle(25.398623, 119.921265, 21.785006, 122.497559),
	            new Rectangle(22.284000, 101.865200, 20.098800, 106.665000),
	            new Rectangle(21.542200, 106.452500, 20.487800, 108.051000),
	            new Rectangle(55.817500, 109.032300, 50.325700, 119.127000),
	            new Rectangle(55.817500, 127.456800, 49.557400, 137.022700),
	            new Rectangle(44.892200, 131.266200, 42.569200, 137.022700)
			];
	function isInside(lat, lon) {
		for (var i = 0; i < region.length; i ++) {
			if (region[i].isInRectangle(lat, lon)) {
				for (var j = 0; j < exclude.length; j ++) {
					if (exclude[j].isInRectangle(lat, lon)) {
						return false;
					}
				}
				return true;
			}
		}
		return false;
	}
	return isInside(lat, lon);
};


// var data={"results" : [
  // {
     // "address_components" : [
        // {
           // "long_name" : "277",
           // "short_name" : "277",
           // "types" : [ "street_number" ]
        // },
        // {
           // "long_name" : "Bedford Avenue",
           // "short_name" : "Bedford Ave",
           // "types" : [ "route" ]
        // },
        // {
           // "long_name" : "Williamsburg",
           // "short_name" : "Williamsburg",
           // "types" : [ "neighborhood", "political" ]
        // },
        // {
           // "long_name" : "Brooklyn",
           // "short_name" : "Brooklyn",
           // "types" : [ "sublocality_level_1", "sublocality", "political" ]
        // },
        // {
           // "long_name" : "Kings County",
           // "short_name" : "Kings County",
           // "types" : [ "administrative_area_level_2", "political" ]
        // },
        // {
           // "long_name" : "New York",
           // "short_name" : "NY",
           // "types" : [ "administrative_area_level_1", "political" ]
        // },
        // {
           // "long_name" : "美国",
           // "short_name" : "US ",
           // "types" : [ "country", "political" ]
        // },
        // {
           // "long_name" : "11211",
           // "short_name" : "11211",
           // "types" : [ "postal_code" ]
        // }
     // ],
     // "formatted_address" : "277 Bedford Ave, Brooklyn, NY 11211美国",
     // "geometry" : {
        // "location" : {
           // "lat" : 40.714232,
           // "lng" : -73.9612889
        // },
        // "location_type" : "ROOFTOP",
        // "viewport" : {
           // "northeast" : {
              // "lat" : 40.7155809802915,
              // "lng" : -73.9599399197085
           // },
           // "southwest" : {
              // "lat" : 40.7128830197085,
              // "lng" : -73.96263788029151
           // }
        // }
     // },
     // "place_id" : "ChIJd8BlQ2BZwokRAFUEcm_qrcA",
     // "types" : [ "street_address" ]
  // }
   // ],
   // "status" : "OK"
// };