var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];
var day1 = [], day2 = [], day3 = [], day4 = [];
var forecast = new Object();

forecast.show = function(arr){
    var str = "";
    for(var i = 0; i < arr.length; i++){
        str += arr[i] + forecast.unit(arr); // 혹은 this.unit(arr)
    }
    return str;
};

forecast.avgShow = function(arr){
    var num = 0;
    for(var i = 0; i < arr.length; i++){
        num += arr[i];
    }

    var avg = num / arr.length;
    return avg + forecast.unit(arr); // 혹은 this.unit(arr)
}

/* 단위 붙이기 */
forecast.unit = function(arr){
    switch(arr) {
        case temp: return "℃";
        break;
        case rain: return "mm";
        break;
        case dust: return "㎍/㎥"
        break;
    }
}

/* 함수호출 */

document.getElementById("show_temp").innerHTML = forecast.show(temp);
document.getElementById("show_rain").innerHTML = forecast.show(rain);
document.getElementById("show_dust").innerHTML = forecast.show(dust);

document.getElementById("show_temp_avg").innerHTML = forecast.avgShow(temp);
document.getElementById("show_rain_avg").innerHTML = forecast.avgShow(rain);
document.getElementById("show_dust_avg").innerHTML = forecast.avgShow(dust);



/* 날씨 데이터 재배열화 */

var days = [day1, day2, day3, day4];

for(var i = 0; i < 4; i++) {
    var arr = days[i]; // 임시변수 arr 지정
    
    for(var j = 0; j < 4; j++){
        switch(j){
            case 0: arr[j] = date[i]; // 혹은 days[i][j] = date[i]; 
            break;
            case 1: arr[j] = temp[i];
            break;
            case 2: arr[j] = rain[i];
            break;
            case 3: arr[j] = dust[i];
            break;
        }
    }

    days[i] = arr;
        
}


console.log(days);


// var day1 = [date[0], temp[0], rain[0], dust[0]];
// var day2 = [date[1], temp[1], rain[1], dust[1]];
