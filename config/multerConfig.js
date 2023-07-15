const multer = require("multer");
const path = require("path");

// declare path for bill files
const BILL_FILE_PATH = "/ebill_files/";


// create a destination for multer to store files
const storage = multer.diskStorage({
    //destination for files
    destination: function(req, file, callBack){
        callBack(null, path.join(__dirname, "../", BILL_FILE_PATH));
    },

    // filename for bill files
    filename: function(req, file, callBack){
        let date = new Date();
        let dateString = ""+date.getDate()+(date.getMonth()+1)+date.getFullYear()+
        "_"+date.getHours()+"_"+date.getMinutes()+"_"+date.getSeconds()+"_"+date.getMilliseconds();
        callBack(null, "ebill"+req.body.username+dateString+path.extname(file.originalname));
    }
});


// initiate multer with above cerated storage
const uploadBill = multer({ storage }).single("eBillFile");


module.exports = {
    BILL_FILE_PATH,
    uploadBill
};