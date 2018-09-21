import * as BlueBird from 'bluebird';
import {expect} from 'chai';
import * as puppeteer from 'puppeteer';
import {Browser, Page} from 'puppeteer';
import {Options} from '../src/types/Options';

BlueBird.config( {
    longStackTraces: true,
});
global.Promise = BlueBird;
const options: Options = {
    args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
    ],
    dumpio: false,
    headless: false,
    ignoreHTTPSErrors: false,
    slowMo: 25,
    timeout: 30000,
};

describe('Puppeteer', function() {

    let browser: Browser;
    let page: Page;

    beforeEach(async function() {
        this.enableTimeouts(false);
        browser = await puppeteer.launch(options);
        const pages = await browser.pages();
        page = pages[0];
    });

    afterEach(async function() {
        this.enableTimeouts(false);
        await browser.close();
    });

    it('can reach Google', async function() {
        this.enableTimeouts(false);
        await page.goto('https://www.google.com', {waitUntil: 'networkidle0'});
        const title = await page.title();
        expect(title).to.equal('Google');
    });
});
