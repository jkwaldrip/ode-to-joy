import {Options} from './types/Options';

export class Defaults {

    public static browserOptions: Options = {
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

}
