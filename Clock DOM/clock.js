var frame = document.createElement('div');

main.appendChild(frame);
frame.id = "clock";

var frames = document.createElement('div');
main.appendChild(frames);
frames.id = "message";

var list = document.createElement("ul");
frames.appendChild(list);

var quest = document.createElement("li");

(function() {

    setInterval(function() {
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

        function showClock() {
            frame.innerHTML = time;
            this.partOfDay = partOfDay;
            if (partOfDay > 8 && partOfDay <= 11) {
                frame.className = "morning";
            } else if (partOfDay > 11 && partOfDay <= 16) {
                frame.className = "day";
            } else if (partOfDay > 16 && partOfDay <= 23) {
                frame.className = "evening";
            } else {
                frame.className = "night";
            }

        }
        showClock();
    }, 1000);
})();


var lable = [{ "Task": "", "Start": "", "Finish": "", }];

var form = [];


function formAdd(task, timeStart, timeFinish) {
    var x = { task, timeStart, timeFinish };
    this.task = task;
    this.timeStart = timeStart;
    this.timeFinish = timeFinish;
    form.push(x);
};
var taskList = document.createElement("table");
tasks.appendChild(taskList);
var label = document.createElement("tr");

var column = document.createElement("td");
taskList.appendChild(label);

var input = document.getElementById("inputTask");
var inputStartTime = document.getElementById("inputStartTime");
var inputFinishTime = document.getElementById("inputFinishTime");

lable.forEach(function(x, y, z) {
    for (key in x) {
        var lineLabel = document.createElement("th");
        label.appendChild(lineLabel);
        lineLabel.innerHTML = key;

    }
});
button.onclick = function(){
    var q = document.getElementById("hidden");
    q.id = "show";
}

submit.onclick = function() {
    var a = input.value;
    var b = Number(inputStartTime.value);
    var c = Number(inputFinishTime.value);
    var insert = new formAdd(a, b, c);

    var line = document.createElement("tr");
    taskList.appendChild(line);
    line.id = insert.task + "done";
    var quest = document.createElement("li");
    list.appendChild(quest);
    quest.id = a;
    for (key in insert) {
        var column = document.createElement("td");
        line.appendChild(column);
        column.innerHTML = insert[key];

        console.log(form);
        console.log(insert);
    };

};
clear.onclick = function() {
    form.splice(0, form.length);
    console.log(form);
};

var a = setInterval(function() {

    var date = new Date();
    var hour = date.getHours();
    var target = [];

   function showTask() {
        var x = "timeStart";
        var y = "timeFinish";
        form.forEach(function(obj, num, arr) {
            
            for (key in obj) {
                
                if (key === x && obj[x] === hour) {
                    target.push(obj.task);
                    console.log(target);
                    var newtask = document.getElementById(obj.task);
                    newtask.innerHTML = obj.task;
                    var doneremove = document.getElementById(obj.task + "done");
                    doneremove.remove();
                } else if (key === y && obj[y] === hour) {
                    var donetask = document.getElementById(obj.task);
                    donetask.remove();
                }
            };
        });
    }
    showTask();
}, 1000);

