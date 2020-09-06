import events from './events';
import { writeFileSync } from 'fs';

function main2() {
    const ditherTimes = events
        .filter(e => e.label.includes('Shooting'))
        .map((e, i, shootEvents) => {
            const prevEvent = shootEvents[i - 1];
            const cycleTime = e.time - (prevEvent?.time ?? e.time);
            const ditherTime = cycleTime / 1000 - 60;
            return ditherTime;
        });

    //const blocksMarkup = 

    console.log(ditherTimes);

    writeFileSync('./times.json', JSON.stringify(ditherTimes));
}

function main() {
    let totalDitherTime = 0;
    const blocksMarkup = events
        .filter(e => e.label.includes('Shooting'))
        .map((e, i, shootEvents) => {
            const nextShot = shootEvents[i + 1];
            const ditherTime = (nextShot?.time || e.time) - e.time - 60 * 1000;
            totalDitherTime += ditherTime;

            return `
                <div class="cycle">
                    <div class="shot"></div>
                    <div class="dither" style="height: ${ditherTime / 1000 / 60}em"></div>
                </div>
            `
        })
        .join('');

    const doc = `
        <!doctype html><html><body>
        <style>
            body {
                
            }
            .cycle {
                width: 200px;
                display: flex;
                flex-direction: column;
            }
            .shot {
                height: 1em;
                background: blue;
            }
            .dither {
                background: orange;
            }
        </style>

        <div>Total dither time = ${totalDitherTime / 1000 / 60} minutes</div>

        ${blocksMarkup}

        </body></html>
    `;

    writeFileSync('./markup.html', doc);
}

main();