import {Page} from 'puppeteer';

export class Play {
    public static sleep(timeInMilliseconds: number): Promise<{}> {
        return new Promise((resolve) => setTimeout(
            resolve,
            timeInMilliseconds,
        ));
    }

    public notes = {
        C4: '#a84d',
        D4: '#a89d',
        E4: '#a85d',
        F4: '#a73d',
        G4: '#a79d',
        A4: '#a80d',
        B4: '#a65d',
        C5: '#a83d',
    };
    private page: Page;

    constructor(page) {
        this.page = page;
    }

    public async note(which: string, length: number = 3000) {
        which = which.toUpperCase();
        await this.page.click( this.notes[which] );
        await Play.sleep(length);
    }
}
