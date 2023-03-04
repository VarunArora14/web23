import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
const packageDef = protoLoader.loadSync("proto/todo.proto", {}); // load the proto file and convert it to a package definition
// empty object is for options such as loading the proto file from a remote location, how to deal with case sensitivity, etc.

const grpcObj = grpc.loadPackageDefinition(packageDef); // we want this package as an object
const todoPackage = grpcObj.todoPackage; // we want the todoPackage object

// create a server
const server = new grpc.Server();

// register the service
server.addService(todoPackage.Todo.service, {
  "createTodo": createTodo,
  "readTodos": readTodos,
});
// 1st parameter is the service definition from the proto file
// 2nd parameter is an object that contains the implementation of the methods defined in the proto file, map the methods with fns u create
// the methods in the proto file are the keys(string with quotes)  in the object


server.bindAsync("0.0.0.0:40000", grpc.ServerCredentials.createInsecure(),  (err, port) => {
  if (err!=null) {
    return console.log(err)
  }
  server.start(); // make sure to start the server after binding it to a port
});
// http/2 is the default protocol for grpc and needs credentials to be passed in, grpc allows to bypass this by passing in insecure credentials
// which means communication will be done over http/1.1 as pure text



// server.start(); // start listening for requests

// methods in grpc alwasys take 2 parameters, call(call that made, not the actual request, the tcp connection) and callback(u can use to send response)
// callback is a function client is listening to

function createTodo(call, callback) {
  // create a todo
  console.log(call);
}

function readTodos(call, callback) {}
