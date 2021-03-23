var date = ["21-03-22", "21-03-23", "21-03-24", "21-03-25"];
var temp = [10.2, 14.3, 17.2, 18.0];
var rain = [10, 50, 10, 5];
var dust = [40, 60, 70, 90];
var day1 = [], day2 = [], day3 = [], day4 = [];
var forecast = new Object();

forecast.tempShow = function(){
    var str = "";
    for(var i = 0; i < temp.length; i++){
        str += temp[i] + "℃ "; 
        document.getElementById("show_temp").innerHTML = str;
    }
};

forecast.tempAvgShow = function(){
    var num = 0;
    for(var i = 0; i < temp.length; i++){
        num += temp[i];
    }

    var avg = num / temp.length;
    document.getElementById("show_temp_avg").innerHTML = avg + "℃ ";
};

forecast.rainShow = function(){
    var str = "";
    for(var i = 0; i < rain.length; i++){
        str += rain[i] + "mm "; 
        document.getElementById("show_rain").innerHTML = str;
    }
};

forecast.rainAvgShow = function(){
    var num = 0;
    for(var i = 0; i < rain.length; i++){
        num += rain[i];
    }

    var avg = num / rain.length;
    document.getElementById("show_rain_avg").innerHTML = avg + "mm ";

};

forecast.dustShow = function(){
    var str = "";
    for(var i = 0; i < dust.length; i++){
        str += dust[i] + "㎍/㎥ "; 
        document.getElementById("show_dust").innerHTML = str;
    }
};

forecast.dustAvgShow = function(){
    var num = 0;
    for(var i = 0; i < dust.length; i++){
        num += dust[i];
    }

    var avg = num / dust.length;
    document.getElementById("show_dust_avg").innerHTML = avg + "㎍/㎥ ";

};


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


/* 함수호출 */

forecast.tempShow();
forecast.tempAvgShow();
forecast.rainShow();
forecast.rainAvgShow();
forecast.dustShow();
forecast.dustAvgShow();

// var day1 = [date[0], temp[0], rain[0], dust[0]];
// var day2 = [date[1], temp[1], rain[1], dust[1]];
