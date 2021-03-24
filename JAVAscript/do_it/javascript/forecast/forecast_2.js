var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];
var day1 = [], day2 = [], day3 = [], day4 = [];
var days = [day1, day2, day3, day4];
var forecast = new Object();


forecast.show = function(arr) {
    var str = "";
    for(var i = 0; i < arr.length; i++){
        str += arr[i] + forecast.unit(arr) + " "; 
    }
    return str;
};

forecast.avgShow = function(arr) {
    var num = 0;
    for(var i = 0; i < arr.length; i++){
        num += arr[i];
    }

    var avg = num / arr.length;

    return avg.toFixed(1) + forecast.unit(arr);
};

forecast.unit = function(arr) {
    switch (arr) {
        case temp : return "℃ ";
            break;
        case rain : return "mm ";
            break;
        case dust : return "㎍/㎥ ";
            break;
    }
}

forecast.innerHTML = function(arr) {
    var str = "" ;
    switch (arr) {
        case temp : str = "temp";
            break;
        case rain : str = "rain";
            break;
        case dust : str = "dust";
            break;
    }

    var showId = "show_" + str;
    var showAvgId = "show_" + str + "_avg";

    document.getElementById(showId).innerHTML = forecast.show(arr);
    document.getElementById(showAvgId).innerHTML = forecast.avgShow(arr);
}
    

/* 함수호출 */

forecast.innerHTML(temp);
forecast.innerHTML(rain);
forecast.innerHTML(dust);

// var day1 = [date[0], temp[0], rain[0], dust[0]];
// var day2 = [date[1], temp[1], rain[1], dust[1]];
