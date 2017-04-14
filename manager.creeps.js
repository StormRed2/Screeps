/**
 * Created by Florian on 4/14/2017.
 * manages the creeps and their tasks
 */


var manager ={

run: function ( ) {


    var harvesterCount = factoryWorkload.getDynamicHarvestersCount();
    var minersCount = factoryWorkload.getDynamicMinersCount();
    var upgraderCount = factoryWorkload.getDynamicUpgradersCount();
    var buildersCount = factoryWorkload.getDynamicBuildersCount();
    var repairerCount = factoryWorkload.getDynamicRepairersCount();

console.log("Test: am I'm running?");

}



}

module.exports = manager;