const shared_config = require("./wdio.conf");
const new_config = {
    services: [["lambdatest", {tunnel: false}]],
    user: "vagishd.sarraf@infobeans.com",
    key: "mo44krZxBolZoA2CdSUiQOXDM03x2oTZf2riITOw2hzg3grO8J",
    framework: 'cucumber',
    cucumberOpts: {
      // <string[]> (file/dir) require files before executing features
      require: ['./test/features/step-definitions/*.js'],
      // <boolean> show full backtrace for errors
      backtrace: false,
      // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
      requireModule: [],
      // <boolean> invoke formatters without executing steps
      dryRun: false,
      // <boolean> abort the run on first failure
      failFast: false,
      // <boolean> hide step definition snippets for pending steps
      snippets: true,
      // <boolean> hide source uris
      source: true,
      // <boolean> fail if there are any undefined or pending steps
      strict: false,
      // <string> (expression) only execute the features or scenarios with tags matching the expression
      tagExpression: '',
      // <number> timeout for step definitions
      timeout: 60000,
      // <boolean> Enable this config to treat undefined definitions as warnings.
      ignoreUndefinedDefinitions: false
  },
    specs: ["./test/features/*"],
    // commonCapabilities: {
    //   name: "Parallel Sample Test",
    //   build: "WebDriver Selenium Sample",
    // },

    capabilities: [
      {
        platfrom: "Windows 10",
        browserName: "Chrome",
        version: "latest",
      },
    ],
    path: "/wd/hub",
    hostname: "hub.lambdatest.com",
    port: 80,
};
exports.config = Object.assign(new_config, shared_config)

// // Code to support common capabilities
// exports.config.capabilities.forEach(function (caps) {
//   for (var i in exports.config.commonCapabilities)
//     caps[i] = caps[i] || exports.config.commonCapabilities[i];
// });
