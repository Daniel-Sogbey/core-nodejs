/*
 * Create and export configuration variables
 */

//Container for all the environments
var environment = {};

// Staging  (default) environment
environment.staging = {
  port: 3000,
  envName: "staging",
};

//Production environment
environment.production = {
  port: 5000,
  envName: "production",
};
