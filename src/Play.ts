import {Page} from 'puppeteer';

export class Play {
    public static sleep(timeInMilliseconds: number): Promise<{}> {
        return new Promise((resolve) => setTimeout(
            resolve,
            timeInMilliseconds,
        ));
    }

    public notes = {
        C3: '#a56d',
        D3: '#a57d',
        E3: '#a48d',
        F3: '#a81d',
        G3: '#a87d',
        A3: '#a69d',
        B3: '#a82d',
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

    public async note(which: string, duration: number = 200) {
        which = which.toUpperCase();
        await this.page.click( this.notes[which] );
        await Play.sleep(duration);
    }
    
    public async rest(duration: number = 200) {
        await Play.sleep(duration);
    }
}
