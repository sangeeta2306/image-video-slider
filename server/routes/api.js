const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var fs = require('fs');
var data ;

var connection = mysql.createConnection({
	host: 'localhost',
	user : 'root',
	password : 'Newuser123',
	database: 'image_database'
});

//no need to call connection.connect() and connection.end(). This is implicitly called 
//by the node server itself.

router.get('/',(req,res)=>{
   res.sendFile('./index.html',{root: __dirname})
});

router.get('/fileNames/',async function(req,res){
  var id= req.params.id;
  const testFolder = '/home/pcadmin/Pictures/test/';
  const fs = require('fs');



function readFiles(){
  fs.readdir(testFolder, (err, files) => {
  /*files.forEach(file => {
    console.log(file);
  });*/
  return res.send(files);
})  
};
setInterval(readFiles,3000);

})


module.exports = router;
      