/*
 * Create and export configuration variables
 */

//Container for all the environments
var environments = {};

// Staging  (default) environment
environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging",
};

//Production environment
environments.production = {
  httpPort: 4000,
  httpsPort: 4001,
  envName: "production",
};

//Determine which environment was passed in as a command-line argument
var currentEnvironment =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLocaleLowerCase()
    : "";

//Check that the current environment is one of the environments above, if not default to staging
var environmentToExport =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.staging;

//Export the module

module.exports = environmentToExport;
