const colyseus = require('colyseus');
const { MyRoomState } = require('./schema/MyRoomState');

exports.MyRoom = class extends colyseus.Room {
  maxClients = 10;

  onCreate (options) {
    this.setState(new MyRoomState());

    this.onMessage("type", (client, message) => {
      //
      // handle "type" message.
      //
      this.broadcast('onMessage',message)
    });
   
  }

  onJoin (client, options) {
    console.log(client.sessionId, "joined!");

  }

  onLeave (client, consented) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }

  onAuth(client,options,request){
    console.log(client,options,request)
  }

}
