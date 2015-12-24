/*
 * File         :   setProcessArgs.js
 * Description  :   Adds / resets arguments passed on the command line.
 * ------------------------------------------------------------------------------------------------ */
module.exports = function setProcessArgs() {
  // first two arguments are 'node' and the script name, we need to preserve these.
  if (process.argv.length > 2) { process.argv.splice(2 - process.argv.length); }
  for (var i = 0; i < arguments.length; i += 1) { process.argv.push(arguments[i]); }
};