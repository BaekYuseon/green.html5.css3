/* 객체 선언 */
function Map() {
}

/* 카카오맵 로드 */

Map.prototype.getKakaoMap = function() {
    var container = document.getElementById('map');
	var options = {
		center: new kakao.maps.LatLng(37.45240609242665, 126.69966965577291),
		level: 3
	};

	var map = new kakao.maps.Map(container, options);
};