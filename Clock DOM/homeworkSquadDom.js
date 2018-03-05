var squad = [];

function Unit(name, health, distance, damage, maxHealth, maxDistance) {
    var x = { name, health, distance, damage, maxHealth, maxDistance };
    this.name = name;
    this.health = health;
    this.maxHealth = maxHealth;
    this.distance = distance;
    this.maxDistance = maxDistance;
    this.damage = damage;
    squad.push(x);
}

var trLine = [1, 2, 3, 4, 5];

var tdColumn = ["cell", "cell", "cell", "cell", "cell", "cell"];


var soldier = new Unit("Soldier", 50, 100, 40, 100, 500, 100, 500);
var horseMan = new Unit("HorseMan", 75, 200, 40, 100, 500);
var bot = new Unit("Bot", 60, 300, 40, 100, 500);
var panzer = new Unit("Panzer", 90, 400, 40, 100, 500);
console.log(squad);

var resource = document.createElement('div');
var legion = document.createElement("div");
var resourceBlock = resource.cloneNode();
var field = document.createElement("table");
var score = document.createElement("table");
var scoreList = document.createElement("tr");
var tables = document.createElement("div");

land.appendChild(legion);
legion.id = "legion";
field.id = "field";
score.id = "score";
tables.id = "tables";
land.appendChild(tables);
tables.appendChild(field);
tables.appendChild(score);
score.appendChild(scoreList);
scoreList.innerHTML = "Scorelist";
scoreList.id = "list";

squad.forEach(function(res) {

    var listOfWarriors = document.createElement("div");
    var warriors = document.createElement("div");
    var warriorHealth = document.createElement("div");


    listOfWarriors.classList.add("list");


    warriors.classList.add("name");
    warriorHealth.classList.add('healthPoints');
    listOfWarriors.innerHTML = res.name;

    warriorHealth.innerHTML = res.health + " of " + res.maxHealth;
    listOfWarriors.style.backgroundColor = "blue";

    legion.appendChild(listOfWarriors);
    listOfWarriors.appendChild(warriors);
    listOfWarriors.appendChild(warriorHealth);

})

trLine.forEach(function(line) {

    var fieldCellLine = document.createElement("tr");
    fieldCellLine.id = "line";
    field.appendChild(fieldCellLine);

    tdColumn.forEach(function(col) {
        var fieldCellColumn = document.createElement("td");
        fieldCellColumn.id = "column";
        fieldCellLine.appendChild(fieldCellColumn);
        fieldCellColumn.innerHTML = col;

    })




})