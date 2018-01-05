//===============Create an Array, and add Units==========================================

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

var soldier = new Unit("soldier", 50, 100, 40, 100, 500, 100, 500);
var horseMan = new Unit("horseMan", 75, 200, 40, 100, 500);
var bot = new Unit("bot", 60, 300, 40, 100, 500);
var panzer = new Unit("panzer", 90, 400, 40, 100, 500);
console.log(squad);

//==========Distance per Day==================================================

function distancePerDay(distancePerDay) {
    var isReadyToWalk = squad.forEach(function(x, y, z) {
        for (key in x) {
            if (key === "distance") {
                if (x[key] - distancePerDay > 0) {
                    return console.log(x.name + " - может еще идти");
                } else {
                    return console.log(x.name + " - не может больше идти");
                }
            }
        }
    })
    return isReadyToWalk;
}
console.log(distancePerDay(200));


//============Healing===================================================

function healing(numberOfUnit) {
    squad.filter(function(x, y, z) {
        if (y === numberOfUnit) {
            for (key in x) {
                if (key === "health") {
                    x[key] = x.maxHealth;
                    return console.log("Здоровье Unit " + x.name + " востановлено до максимума.");
                }

            }
        }

    })
}
console.log(healing(2));

//============Restore distance==============================================

function restoreDistance(numberOfUnit) {
    squad.filter(function(x, y, z) {
        if (y === numberOfUnit) {
            for (key in x) {
                if (key === "distance") {
                    x[key] = x.maxDistance;
                    return console.log("Теперь Unit " + x.name + " восстановил все силы.");
                }
            }
        }
    })
}
console.log(restoreDistance(3));

//============Is Ready to Move (with aray.filter)===========================================

function isReadyToMove(travel) {
    var unitReadyToMove = squad.filter(function(x, y, z) {
        for (key in x) {
            if (key === "distance") {
                if (x[key] >= travel) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    })
    return unitReadyToMove;
}
console.log(isReadyToMove(200));

//=========Array's Concat====================================================

function glueArray(arr) {
    var glueArray = squad.concat(arr);
    return glueArray;
}
var airPlane = [{
    name: "airplane",
    health: 80,
    distance: 400,
    damage: 90,
    maxHealth: 100,
    maxDistance: 500
}];
console.log(glueArray(airPlane));

//=========Is Ready to Fight (with array.forEach)============================================

function isReadyToFight(damage) {
    var a = squad.forEach(function(x, y, z) {
        for (key in x) {
            if (key === "health") {
                if (x[key] >= damage) {
                    return console.log(x.name + " - может идти в бой");
                } else {
                    return console.log(x.name + " - не может идти в бой");
                }
            }
        }
    })
    return a;
}
console.log(isReadyToFight(200));

//==============Clone object======================================================
function clone(arg) {
    var alternativeSquat = squad[arg];
    return alternativeSquat;
}
console.log(clone(1))


//============================DOM=================================

function divAdder(x) {

    var adder = x.forEach(function(x, y, z) {
        for (key in x) {
            if (key === "name") {
                var color = rand();
                var newDiv = document.createElement('div');
                newDiv.id = x.name;
                newDiv.style.backgroundColor = '#' + color;
                newDiv.innerHTML = x.name;
                my_div = document.getElementById("f");
                document.body.insertBefore(newDiv, my_div);
            }
        }
    })
}
divAdder(squad);

function rand() {
    var rand = Math.round(Math.random() * 999999);
    return rand;
}