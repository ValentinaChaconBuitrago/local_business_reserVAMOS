const WebSocket = require("ws");

function WSUtils() {
  const wsu = {};
  let clients = [];
  wsu.setWS = (server) => {
    console.log("Setting un WS");
    const wss = new WebSocket.Server({ server });
    wss.on("connection", (ws) => {
      clients.push(ws);
      console.log("socket conectado");
    });
  };
  wsu.notifyAll = (msj) => {
    console.log("Notify ALL", clients.length);
    clients.forEach((ws) => {
      ws.send(msj);
    });
  };
  return wsu;
}

module.exports = WSUtils();
