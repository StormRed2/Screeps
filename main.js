var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var managerCreeps = require('manager.creeps');

var board = require('info.board');

module.exports.loop = function () {



    managerCreeps.run();

    board.printInfos();



}