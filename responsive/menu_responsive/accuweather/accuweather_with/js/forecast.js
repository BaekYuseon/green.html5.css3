/* 객체 선언 */
function Forecast() {
}

/* 현재 날씨 얻어오기 */

Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj = "data";
    var url = "http://api.openweathermap.org/data/2.5/weather";
        url += "?q=" + "city";
        url += "&units=" + "metric";
        url += "&lang=" + "kr";
        url += "&APPID=" + "d3737381ef6ababa2bd02c9677d79367"; //본인의 API key

    $.ajax({
        type:"GET",
        url:url,
        dataType:"json",
        async: false, //동기형식으로 지정(data값을 return해주기)
        success:function(data) {
            console.log("현재온도: " + data.main.temp);
            dataObj = data;
        },
        error:function(request,status,error) { //에러떴을때를 대비하여
            console.log("code:" + request.status);
            console.log("message:" + request.responseText);
            console.log("error:" + error);
        }
    });

    return dataObj;
};

/* 내일 날씨 얻어오기 */

// Forecast.prototype.getTomarrowWeather = function() {
//     //...
// }

/* Forecast.prototype.함수명 = function() */