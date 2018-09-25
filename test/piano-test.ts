import {expect} from 'chai';
import * as puppeteer from 'puppeteer';
import {Browser, Page} from 'puppeteer';
import {Defaults} from '../src/Defaults';
import {Play} from '../src/Play';
import './support/Helper';

describe('Piano', function() {
    let browser: Browser;
    let play: Play;
    let page: Page;

    beforeEach(async function() {
        this.enableTimeouts(false);
        browser = await puppeteer.launch(Defaults.browserOptions);
        const pages = await browser.pages();
        page = pages[0];
        play = new Play(page);
    });

    afterEach(async function() {
        this.enableTimeouts(false);
        await browser.close();
    });

    it('opens', async function() {
        this.enableTimeouts(false);
        await page.goto('https://virtualpiano.net/',
            {waitUntil: 'domcontentloaded'});
        const title = await page.title();
        expect(title).to.contain('Virtual Piano');
    });

    it('opens and plays a middle C', async function() {
        this.enableTimeouts(false);
        await page.goto('https://virtualpiano.net',
            {waitUntil: 'networkidle2'});
        await play.note('C4', 'whole');
    });

    it('plays the first line of Ode to Joy', async function() {
        this.enableTimeouts(false);
        await page.goto('https://virtualpiano.net',
            {
                waitUntil: 'networkidle2',
                timeout: Defaults.browserOptions.timeout,
            });
        await play.rest('whole');
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
        await play.rest('whole');
    });
});
