const da = Array(55).join('-');
function cd() {console.log(da)}
function c(i, d){if(d)console.log(da+'\n'+i+'\n'+da); else console.log(i);}
function cc(desc, arg, d){
  if(d) cd()
  console.log(desc);console.log('typeof: ', typeof arg);console.dir(arg);
  if(d) cd()
}


var https = require('https');

var options = {
  host: 'www.example.org',
  path: '/'
};

var callback = function(response) {
  c('In response handler callback!');
  console.log('response: ', response)
}

c('making the request');

https.request(options, callback).end();

c('made the request');


































