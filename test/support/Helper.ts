import * as BlueBird from 'bluebird';

BlueBird.config( {
    longStackTraces: true,
});
global.Promise = BlueBird;
