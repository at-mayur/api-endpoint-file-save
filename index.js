const express = require("express");

// import constants
const devEnv = require("./env");


// import routes
const routes = require("./routes/indexRoute");

// initialize app
const app = express();


// redirect all requests to router file
app.use("/", routes);


// make server to listen at provided port
app.listen(devEnv.PORT, function(error){
    if(error){
        console.log(error);
        return;
    }

    console.log(`Server running on port ${devEnv.PORT}`);
});