import {expect} from 'chai';
import * as puppeteer from 'puppeteer';
import {Browser, Page} from 'puppeteer';
import {Defaults} from '../src/Defaults';
import './support/Helper';

describe('Puppeteer', function() {

    let browser: Browser;
    let page: Page;

    beforeEach(async function() {
        this.enableTimeouts(false);
        browser = await puppeteer.launch(Defaults.browserOptions);
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
