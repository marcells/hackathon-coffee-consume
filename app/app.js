"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        // this.express.use("/", (req,res) => res.send("I like types"))
        // this.express.use(express.static('/public'))
        this.express.use(express.static(path.join(__dirname, 'public')));
    };
    return App;
}());
var app = new App();
exports.default = app.express;
//# sourceMappingURL=app.js.map