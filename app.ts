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
        await play.rest('whole');
        // First Phrase
        await play.note('E4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('F4', 'quarter');
        await play.note('G4', 'quarter');
        await play.note('G4', 'quarter');
        await play.note('F4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('E4', 'dottedQuarter');
        await play.note('D4', 'eighth');
        await play.note('D4', 'half');
        // Second Phrase
        await play.note('E4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('F4', 'quarter');
        await play.note('G4', 'quarter');
        await play.note('G4', 'quarter');
        await play.note('F4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('D4', 'dottedQuarter');
        await play.note('C4', 'eighth');
        await play.note('C4', 'half');
        // Third Phrase
        await play.note('D4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('E4', 'eighth');
        await play.note('F4', 'eighth');
        await play.note('E4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('E4', 'eighth');
        await play.note('F4', 'eighth');
        await play.note('E4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('G3', 'half');
        // Fourth Phrase
        await play.note('E4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('F4', 'quarter');
        await play.note('G4', 'quarter');
        await play.note('G4', 'quarter');
        await play.note('F4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('C4', 'quarter');
        await play.note('D4', 'quarter');
        await play.note('E4', 'quarter');
        await play.note('D4', 'dottedQuarter');
        await play.note('C4', 'eighth');
        await play.note('C4', 'half');
        // Done
        await play.rest('whole');
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
