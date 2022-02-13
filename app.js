const express = require('express');
const studentData = require('./sr/mode/studentdata');

const cors = require('cors');
var bodyparser=require('body-parser');

var app = new express();
app.use(cors());
const port = process.env.PORT || 3000; 
app.use(bodyparser.json());





app.post('/insert',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE,OPTIONS');
    console.log(req.body);
   
    var student = {       
        
       
        email : req.body.student.email,
        name : req.body.student.name
   }       
   var student = new studentData(student);
   student.save();
});

app.get('/students',function(req,res){
  res.header("Access-Control-Allow-Origin","*")
  res.header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE,OPTIONS');

    studentData.find()
                .then(function(students){
                    res.send(students);
                });
});

app.get('/:id',  (req, res) => {
  
  const id = req.params.id;
    studentData.findOne({"_id":id})
    .then((student)=>{
        res.send(student);
    });
})


app.put('/approve',(req,res)=>{   
  console.log(req.body)
 let id=req.body._id;
  emptype=req.body.emptype;
  console.log(emptype);


  studentData.findByIdAndUpdate({"_id":id},{$set:{
      "present":"true",
      "emptype":emptype
    }})
    .then(function(){
      res.send()
     
    })
})


   
     

   app.listen(port,()=>{console.log("server ready at" + port)});
