import { connect } from "mongoose";
import { MONGODB_URI } from "../config";

connect(MONGODB_URI,{family:4})
.then(res => console.log("Base de datos Conectada en ",res.connection.name))
.catch(err => console.log(err))