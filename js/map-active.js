

    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    
    if ( $('#mapBox').length ){
        var $lat = $('#mapBox').data('lat');
        var $lon = $('#mapBox').data('lon');
        var $zoom = $('#mapBox').data('zoom');
        var $marker = $('#mapBox').data('marker');
        var $info = $('#mapBox').data('info');
        var $markerLat = $('#mapBox').data('mlat');
        var $markerLon = $('#mapBox').data('mlon');
        var map = new GMaps({
        el: '#mapBox',
        lat: $lat,
        lng: $lon,
        scrollwheel: false,
        scaleControl: true,
        streetViewControl: false,
        panControl: true,
        disableDoubleClickZoom: true,
        mapTypeControl: false,
        zoom: $zoom,
            styles: [
				{
					"stylers": [
						{
							"hue": "#2c3e50"
						},
						{
							"saturation": 250
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "geometry",
					"stylers": [
						{
							"lightness": 50
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				}
			]
        });

        map.addMarker({
            lat: $markerLat, 
            lng: $markerLon,
            icon: $marker,    
            infoWindow: {
              content: $info
            }
        })
    }



    /*----------------------------------------------------*/
    /*  Google map js
    /*----------------------------------------------------*/
    
//    if ( $('#mapBox2').length ){
//        var $lat = $('#mapBox2').data('lat');
//        var $lon = $('#mapBox2').data('lon');
//        var $zoom = $('#mapBox2').data('zoom');
//        var $marker = $('#mapBox2').data('marker');
//        var $info = $('#mapBox2').data('info');
//        var $markerLat = $('#mapBox2').data('mlat');
//        var $markerLon = $('#mapBox2').data('mlon');
//        var map = new GMaps({
//        el: '#mapBox2',
//        lat: $lat,
//        lng: $lon,
//        scrollwheel: false,
//        scaleControl: true,
//        streetViewControl: false,
//        panControl: true,
//        disableDoubleClickZoom: true,
//        mapTypeControl: false,
//        zoom: $zoom,
//            styles: [
//				{
//					"featureType": "administrative.country",
//					"elementType": "geometry",
//					"stylers": [
//						{
//							"visibility": "simplified"
//						},
//						{
//							"hue": "#ff0000"
//						}
//					]
//				}
//			]
//        });
//
//        map.addMarker({
//            lat: $markerLat, 
//            lng: $markerLon,
//            icon: $marker,    
//            infoWindow: {
//              content: $info
//            }
//        })
//    }