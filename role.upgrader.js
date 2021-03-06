var randomNum = Math.floor(Math.random() * (1 - 0 + 1)) + 0;

var roleUpgrader = {

    /** @param {Creep} creep **/


    run: function(creep) {

        if(creep.memory.upgrading && creep.carry.energy == 0) {
            creep.memory.upgrading = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
            creep.memory.upgrading = true;
            creep.say('⚡ upgrade');
        }

        if(creep.memory.upgrading) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[randomNum]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[randomNum], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleUpgrader;