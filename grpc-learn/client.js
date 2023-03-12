import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
const packageDef = protoLoader.loadSync("proto/todo.proto", {}); // load the proto file and convert it to a package definition
// empty object is for options such as loading the proto file from a remote location, how to deal with case sensitivity, etc.

const grpcObj = grpc.loadPackageDefinition(packageDef); // we want this package as an object
const todoPackage = grpcObj.todoPackage; // we want the todoPackage object

const client = new todoPackage.Todo("localhost:40000", grpc.credentials.createInsecure()); 
// create a client object of todo service, takes 2 arguments - port and credentials

// client can call methods defined in the proto file
client.createTodo({
  "id": -1, // -1 means the server will generate the id
  "text": "My first todo",
}, (err, response) => { // 1st parameter is the request object, 2nd is the callback
  if (err) {
    return console.log(err);
  }
  console.log("recieves from server: " + response);
});