
var frame = document.createElement('div');

main.appendChild(frame);
frame.id = "clock";

(function()
{
    
    setInterval(function(){
        var date = new Date();
        var time = date.getHours() + ":" + date.getUTCMinutes() + ":" + date.getSeconds(); 
var partOfDay = date.getHours();
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
        }
        showClock();
},1000);})();


