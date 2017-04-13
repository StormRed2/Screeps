/**
 * Created by Florian on 4/13/2017.
 */

var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');


var board = {

    printInfos: function() {

        var d = new Date();
        var m = d.getMinutes();
        var s = d.getSeconds();


        if (s == 0 || s == 1 || s == 2 || s == 3 || s == 4 || s == 5 || s == 6) {
            console.log();
            console.log();
            console.log("Harvesters" + harvesters.length);
            console.log("Upgraders" + upgraders.length);
            console.log("Builders" + builders.length);


        }

    }
}
module.exports = board;