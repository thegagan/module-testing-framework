
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
  url: wsuri,
  realm: "realm1"
});
 
connection.onopen = function (session) {
  function marketEvent (args,kwargs) {
          console.log(args[0]);
  }
  function tickerEvent (args,kwargs) {
          console.log(args);
          document.getElementById(args[0]).innerHTML = args[0] + " Price:" + args[1] + " Change:" + args[4] + " Volume:" + args[5];
          storeTickerData(args);
  }
  function trollboxEvent (args,kwargs) {
          console.log(args);
          document.getElementById("trollbox").innerHTML += args[2] + "(" + args[4] +") " + args[3] + "<br>";
  }

  //session.subscribe('BTC_FCT', marketEvent);
  session.subscribe('ticker', tickerEvent);
  session.subscribe('trollbox', trollboxEvent);
  //session.subscribe('BTC_FCT', tickerEvent);

}


connection.onclose = function () {
  console.log("Websocket connection closed");
}
   
var storeTickerData = function (args) {
  this.data = {
    "ticker": args[0],
    "price": args[1],
    "change": args[4],
    "volume": args[5]
  };
};     

console.log(storeTickerData);               


function writeToScreen(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

connection.onmessage = function (event) {
  console.log(event.data);
  writeToScreen(self);
}


function connect()
{
  connection.open();
}

function disconnect()
{
  connection.close();
}