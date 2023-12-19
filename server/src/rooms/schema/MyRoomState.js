const schema = require('@colyseus/schema');

class MyRoomState extends schema.Schema {
  constructor(){
    super();
    this.mySynchronizedProperty = "Hello world";
    this.name=''
  }
}

schema.defineTypes(MyRoomState, {
  mySynchronizedProperty: "string",
  name:"string",
});

exports.MyRoomState = MyRoomState;