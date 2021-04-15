/* 객체 선언 */
function Forecast() {
    this.url = "http://api.openweathermap.org/data/2.5/weather"; 
    this.url += "?units=" + "metric"; //처음은 ? 그 다음부터는 &
    this.url += "&lang=" + "kr";
    this.url += "&APPID=" + "d3737381ef6ababa2bd02c9677d79367"; //본인의 API key
    this.url += "&q=";
}

/* 현재 날씨의 모든 정보 얻어오기 */

Forecast.prototype.getCurrentWeather = function(city) {
    var dataObj;
    var openWeatherAPI = this.url; //q가 계속 붙으므로 url 초기화를 위해 반드시 넣어준다
    
    $.ajax({
        type:"GET",
        url:openWeatherAPI += city,
        dataType:"json",
        async: false, //동기형식으로 지정(data값을 return해주기 위해)
        success:function(data) {
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

Forecast.prototype.getTomorrowWeather = function() {
    //...
};

/* 현재 날씨 온도 얻어오기 */

Forecast.prototype.getCurrentTemp = function(city) {
    var temp;
    var openWeatherAPI = this.url;//city가 게속 붙으므로 url 초기화를 위해 반드시 넣어준다.

    $.ajax({
        type:"GET",
        url:openWeatherAPI += city, 
        dataType:"json",
        async: false, // return해주기 위해
        success:function(data) {
            temp = Math.floor(data.main.temp); //소수점 버림
        },
        error:function(request,status,error) { //에러떴을때를 대비하여
            console.log("code:" + request.status + "\n" + "message:" + request.responseText + "\n" + "error:" + error);
        },
        complete:function(data,textStatus) {
            //작업 완료 후 처리

        }
    });

    return temp;
}

/* Forecast.prototype.함수명 = function() */