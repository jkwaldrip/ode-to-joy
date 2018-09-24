import * as puppeteer from 'puppeteer';
import {Defaults} from './src/Defaults';
import {Play} from './src/Play';

async function run() {
    const browser = await puppeteer.launch(Defaults.browserOptions);
    const pages = await browser.pages();
    const page = pages[0];
    const play = new Play(page);
    const url = 'https://virtualpiano.net';
    try {
        global.console.info('Loading ' + url);
        await page.goto(url,
            {
                waitUntil: 'networkidle2',
                timeout: Defaults.browserOptions.timeout,
            });
        await play.rest(800);
        // First Phrase
        await play.note('E4', 200);
        await play.note('E4', 200);
        await play.note('F4', 200);
        await play.note('G4', 200);
        await play.note('G4', 200);
        await play.note('F4', 200);
        await play.note('E4', 200);
        await play.note('D4', 200);
        await play.note('C4', 200);
        await play.note('C4', 200);
        await play.note('D4', 200);
        await play.note('E4', 200);
        await play.note('E4', 300);
        await play.note('D4', 100);
        await play.note('D4', 400);
        // Second Phrase
        await play.note('E4', 200);
        await play.note('E4', 200);
        await play.note('F4', 200);
        await play.note('G4', 200);
        await play.note('G4', 200);
        await play.note('F4', 200);
        await play.note('E4', 200);
        await play.note('D4', 200);
        await play.note('C4', 200);
        await play.note('C4', 200);
        await play.note('D4', 200);
        await play.note('E4', 200);
        await play.note('D4', 300);
        await play.note('C4', 100);
        await play.note('C4', 400);
        // Third Phrase
        await play.note('D4', 200);
        await play.note('D4', 200);
        await play.note('E4', 200);
        await play.note('C4', 200);
        await play.note('D4', 200);
        await play.note('E4', 100);
        await play.note('F4', 100);
        await play.note('E4', 200);
        await play.note('C4', 200);
        await play.note('D4', 200);
        await play.note('E4', 100);
        await play.note('F4', 100);
        await play.note('E4', 200);
        await play.note('D4', 200);
        await play.note('C4', 200);
        await play.note('D4', 200);
        await play.note('G3', 400);
        // Fourth Phrase
        await play.note('E4', 200);
        await play.note('E4', 200);
        await play.note('F4', 200);
        await play.note('G4', 200);
        await play.note('G4', 200);
        await play.note('F4', 200);
        await play.note('E4', 200);
        await play.note('D4', 200);
        await play.note('C4', 200);
        await play.note('C4', 200);
        await play.note('D4', 200);
        await play.note('E4', 200);
        await play.note('D4', 300);
        await play.note('C4', 100);
        await play.note('C4', 400);
        // Done
        await play.rest(800);
        await browser.close();
    } catch (error) {
        if (browser) {
            await browser.close();
        }
        throw error;
    }
}

run().then(() => {
        global.console.info('Done!');
        global.process.exit();
    },
).catch((error: Error) => {
        global.console.error(error);
        global.process.exit(1);
    },
);
