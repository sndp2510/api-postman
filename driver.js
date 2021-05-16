var newman = require('newman');

console.log('hello')

newman.run({
    collection: require('./testCollection001.json'),
    reporters: ['htmlextra','cli','html'],
    reporter: {
        html: {
            export: './report/htmlResults.html', // If not specified, the file will be written to `newman/` in the current working directory.
           // template: './customTemplate.hbs' // optional, this will be picked up relative to the directory that Newman runs in.
        }
    }
    ,reporter: {
        htmlextra: {
            export: './report/htmlExtraResults.html', // If not specified, the file will be written to `newman/` in the current working directory.
            // template: './template.hbs'
            // logs: true,
            // showOnlyFails: true,
            // noSyntaxHighlighting: true,
            // testPaging: true,
            // browserTitle: "My Newman report",
            // title: "My Newman Report",
            // titleSize: 4,
            // omitHeaders: true,
            // skipHeaders: "Authorization",
            // omitRequestBodies: true,
            // omitResponseBodies: true,
            // hideRequestBody: ["Login"],
            // hideResponseBody: ["Auth Request"],
            // showEnvironmentData: true,
            // skipEnvironmentVars: ["API_KEY"],
            // showGlobalData: true,
            // skipGlobalVars: ["API_TOKEN"],
            // skipSensitiveData: true,
            // showMarkdownLinks: true,
            // showFolderDescription: true,
            // timezone: "Australia/Sydney"

        }
    }

}, function (err) {
    if (err) {
        throw err;
    }

    console.log('Collection Run Complete!');
}

)


console.log('bye')