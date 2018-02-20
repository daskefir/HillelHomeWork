
var frame = document.createElement('div');

main.appendChild(frame);
frame.id = "clock";

var frames = document.createElement('div'); 
main.appendChild(frames);
frames.id = "message";

(function()
{
    
    setInterval(function(){
        var date = new Date();
        var hour = date.getHours();
        hour = (hour < 10) ? "0" + hour : hour;
        var minute = date.getUTCMinutes();
        minute = (minute < 10) ? "0" + minute : minute;
        var second = date.getSeconds();
        second = (second < 10) ? "0" + second : second;
        var day = date.getDay();
        var time = hour + ":" + minute + ":" + second; 
     
var partOfDay = hour;
        function showClock(){
            frame.innerHTML = time;
            this.partOfDay  = partOfDay;
         if (partOfDay > 8 && partOfDay <= 11) {
frame.className = "morning";
         }
         else if(partOfDay > 11 && partOfDay <= 16){
            frame.className = "day";
         }
 
         else if(partOfDay > 16 && partOfDay <= 23){
            frame.className = "evening";
         }
         else{
            frame.className = "night";
         }
         
         
if (hour === 16 && minute >=25 && minute <30){
    frames.innerHTML = "Собирайся на планёрку";
}
else if (hour === 16 && minute ===30)
{
    frames.innerHTML = "Планёрка";
}

else if (hour >= 12 && hour <=13)
{
    frames.innerHTML = "Пора обедать";
}
else if (hour === 17 && minute >= 27)
{
    alert("Пора выходить на автобус");
}

        }
        showClock();
},1000);})();

var newTask = []; 
/*
function task(name, dateOfBegin, dateOfFinish){

var x = {name, dateOfBegin, dateOfFinish};
this.name = name;
this.dateOfBegin = dateOfBegin;
this.dateOfFinish = dateOfFinish;
newTask.push(x);
return newTask;
}*/


var form = document.createElement("form");
var input = document.createElement("input");

var submit = input.cloneNode();

input.setAttribute("name","task", "value");
input.id = "input";

submit.setAttribute("type", "submit");
submit.id = "submit";
submit.value = "Добавить";


fom.appendChild(form);
form.appendChild(input);

form.appendChild(submit);


var y = document.getElementById("submit");
y.addEventListener("onclick", getValue(), false);

function getValue(){
    var input = document.getElementById("input");
var x = input.value;
     alert(x);
}
//input.addEventListener("click", task(value));
