/* 지도 */

var map = new Map();
map.getKakaoMap();

/* 날씨 */

var forecast = new Forecast();
var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"];

$(function(){
    $(".temp").each(function(i) {
        $(this).text(forecast.getCurrentTemp(cityList[i]) + "°C");
    });

    $(".location").on({
        "click" : function() {
            location.href = "pages/weather_location.html";
        }
    });
});
