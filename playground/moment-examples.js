var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log(`Currnet timestamp: ${now.unix()}`)

var timestamp = 1481923498;

var currentMoment = moment.unix(timestamp);

console.log(`Current moment ${currentMoment.format(' MMMM Do, YYYY @ h:mm A')}`)
