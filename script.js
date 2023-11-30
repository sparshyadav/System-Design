const os = require("os");
const express = require("express");
const cluster = require("cluster");

let app = express();

// console.log(os.cpus().length);
if (cluster.isPrimary) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }
}