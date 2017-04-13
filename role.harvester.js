var randomNum = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
var roleUpgrader = require('role.upgrader');
var harvestWorkAvailable = false;

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[randomNum]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[randomNum], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                        structure.energy < structure.energyCapacity;
                    if(structure.energy < structure.energyCapacity){
                        harvestWorkAvailable = true;
                    }
                }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
            //if no work is left, the harvester should upgrade the controller
        if(harvestWorkAvailable ==  false) {
            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
        }

    }
};

module.exports = roleHarvester;