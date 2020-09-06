"use strict";
exports.__esModule = true;
var events_1 = require("./events");
var fs_1 = require("fs");
function main2() {
    var ditherTimes = events_1["default"]
        .filter(function (e) { return e.label.includes('Shooting'); })
        .map(function (e, i, shootEvents) {
        var _a;
        var prevEvent = shootEvents[i - 1];
        var cycleTime = e.time - ((_a = prevEvent === null || prevEvent === void 0 ? void 0 : prevEvent.time) !== null && _a !== void 0 ? _a : e.time);
        var ditherTime = cycleTime / 1000 - 60;
        return ditherTime;
    });
    //const blocksMarkup = 
    console.log(ditherTimes);
    fs_1.writeFileSync('./times.json', JSON.stringify(ditherTimes));
}
function main() {
    var totalDitherTime = 0;
    var blocksMarkup = events_1["default"]
        .filter(function (e) { return e.label.includes('Shooting'); })
        .map(function (e, i, shootEvents) {
        var nextShot = shootEvents[i + 1];
        var ditherTime = ((nextShot === null || nextShot === void 0 ? void 0 : nextShot.time) || e.time) - e.time - 60 * 1000;
        totalDitherTime += ditherTime;
        return "\n                <div class=\"cycle\">\n                    <div class=\"shot\"></div>\n                    <div class=\"dither\" style=\"height: " + ditherTime / 1000 / 60 + "em\"></div>\n                </div>\n            ";
    })
        .join('');
    var doc = "\n        <!doctype html><html><body>\n        <style>\n            body {\n                \n            }\n            .cycle {\n                width: 200px;\n                display: flex;\n                flex-direction: column;\n            }\n            .shot {\n                height: 1em;\n                background: blue;\n            }\n            .dither {\n                background: orange;\n            }\n        </style>\n\n        <div>Total dither time = " + totalDitherTime / 1000 / 60 + " minutes</div>\n\n        " + blocksMarkup + "\n\n        </body></html>\n    ";
    fs_1.writeFileSync('./markup.html', doc);
}
main();
//# sourceMappingURL=index.js.map