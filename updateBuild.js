const replace = require('replace-in-file');
const moment = require('moment');
const version = require('./package').version;
const timeStamp = moment().format("MM/DD/YYYY hh:mm:ss A z");
const options = {
    files: [
        'src/environments/environment.ts',
        'src/environments/environment.prod.ts',
    ],
    from: /timestamp: '(.*)',\n\s\s\s\sbuildNumber: '(.*)/g,
    to: "timestamp: '" + timeStamp + "',\n    buildNumber: '"+ version +"'",
    allowEmptyPaths: false,
};
try {
    let changedFiles = replace.sync(options);
    if (changedFiles === 0) {
        throw "Please make sure that the file '" + options.files + "' has \"timestamp: ''\" and \"buildNumber: ''\"";
    }
    console.log('Version and timestamp is set to: ' + version + ' and ' + timeStamp);
} catch (error) {
    console.error('Error occurred:', error);
    throw error
}
