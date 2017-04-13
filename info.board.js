/**
 * Created by Florian on 4/13/2017.
 */




var board = {

    printInfos: function() {

        var d = new Date();
        var m = d.getMinutes();
        var s = d.getSeconds();


        if (s == 0 || s == 1 || s == 2 || s == 3 || s == 4 || s == 5 || s == 6) {
            console.log();
            console.log();
            console.log("TEST");


        }

    }
}
module.exports = board;