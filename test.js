
var request = require('request');

var url = "https://api.juspay.in/v2/pay/start/TUL_TMP/eul4hHsjftjf3asmMmk";
url="https://api.juspay.in/v2/pay/start/purplle.com/eulkfDpi2sASRK1D4VC";
let time1=new Date();
console.log(time1);
request( url, function (err, res, body) {

  console.log(res.body);
  let bod=res.body;
  let start=bod.indexOf("https://www.paypal.com/cgi-bin/webscr");
  end=bod.indexOf("'",start);
  console.log(bod.substring(start,end));  
  let time2=new Date();
  console.log(time2);
  console.log(time1-time2);
  //responds the PayPal URL https://www.paypal.com/cgi-bin/webscr?cmd=_express-checkout&token=EC-2FU30004N3893354H&locale.x=en_IN&country.x=IN

 
});

/*
request("https://www.paypal-proserv.com/testingamr_bak.php?url=https://google.com?query=asdf", function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

*/

