import {Page} from 'puppeteer';
import {Durations} from './types/Durations';
import {Notes} from './types/Notes';

export class Play {
    public static sleep(timeInMilliseconds: number): Promise<{}> {
        return new Promise((resolve) => setTimeout(
            resolve,
            timeInMilliseconds,
        ));
    }

    public durations: Durations = {
        eighth: 100,
        quarter: 200,
        dottedQuarter: 300,
        half: 400,
        whole: 800,
    };

    public notes: Notes = {
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

    public async note(which: string, duration: 'eighth' | 'quarter' | 'dottedQuarter' | 'half' | 'whole') {
        which = which.toUpperCase();
        await this.page.click(this.notes[which]);
        await Play.sleep(this.durations[duration]);
    }

    public async rest(duration: string) {
        await Play.sleep(this.durations[duration]);
    }
}
