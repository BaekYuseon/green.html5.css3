/* 지도 */

var map = new Map();
map.getKakaoMap();

/* 날씨 */

var forecast = new Forecast();
console.log(forecast.getCurrentWeather("incheon")); //지역 날씨 호출
console.log(forecast.getCurrentWeather("seoul")); //지역 날씨 호출
console.log(forecast.getCurrentWeather("gwangju")); //지역 날씨 호출
console.log(forecast.getCurrentWeather("jeju")); //지역 날씨 호출
