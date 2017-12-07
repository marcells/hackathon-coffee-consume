"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        // this.express.use("/", (req,res) => res.send("I like types"))
        // this.express.use(express.static('/public'))
        this.express.use(express.static(path.join(__dirname, 'public')));
    }
}
let app = new App();
exports.default = app.express;
//# sourceMappingURL=app.js.map