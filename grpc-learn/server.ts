const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");
const packageDef = protoLoader.loadSync("todo.proto", {}); // load the proto file and convert it to a package definition
// empty object is for options such as loading the proto file from a remote location, how to deal with case sensitivity, etc.

const grpcObj = grpc.loadPackageDefinition(packageDef); // we want this package as an object
const todoPackage = grpcObj.todoPackage; // we want the todoPackage object
