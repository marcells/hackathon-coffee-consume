import * as express from 'express'
import * as core from "express-serve-static-core";
import * as path from 'path'

class App {
    public express: core.Express  
  
    constructor () {
      this.express = express()                                          
      this.mountRoutes()
    }
  
    private mountRoutes (): void {      
      // this.express.use("/", (req,res) => res.send("I like types"))
      // this.express.use(express.static('/public'))
      this.express.use(express.static(path.join(__dirname, 'public')))
    }
  }
  
  let app = new App()
  export default app.express