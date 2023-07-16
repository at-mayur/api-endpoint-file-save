const path = require("path");
const multer = require("../config/multerConfig");


// file upload request controller
module.exports.uploadController = function(req, res){

    try {

        // allow server to serve cross origin requests
        res.set('Access-Control-Allow-Origin', '*');

        // if username or file is absent return response with failed status
        if(!req.file || !req.body.username){
            return res.status(400).json({
                fileUploaded: false,
                msg: "username or file not found...!!!"
            });
        }

        // if file is not of pdf format then return response with failed status
        if(req.file.mimetype!=="application/pdf"){
            return res.status(400).json({
                fileUploaded: false,
                msg: `Expected a PDF file.\nReceived another..!!`
            });
        }

        // get path for file
        let pathString = path.join(__dirname, "../", multer.BILL_FILE_PATH, req.file.filename);

        // return response with successful status and filepath
        return res.status(200).json({
            fileUploaded: true,
            filepath: path.resolve(pathString),
            msg: "File uploaded Successfully..!!!"
        });
        
    } catch (error) {
        // if any error occurs while serving requests return response with failed status and error msg.
        return res.status(500).json({
            fileUploaded: false,
            msg: `Error occured while uploading file...!!\n${error.name}\n${error.message}`
        });
    }

};