var express = require('express');
var router = express.Router();
var Todo = require('../models/todo')
router.get('/', function(req, res, next) {
   Todo.find().then((result)=>{
       res.json(result)
   })
   .catch((err)=>{
       console.log(err)
       console.log("erororrr")
   })
  });
  router.post("/", function(req, res, next){
 
    new Todo({
      title: req.body.title,
      date: req.body.date,
      completed: req.body.completed,
    }).save().then(() => {
        res.json("Kaydetme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Kaydetme İşleminde Hata Oluştu.");
    });
  
});
/* Todo Guncelleme Islemi Burada Yapilacak. */
router.put("/:id", function(req, res, next){
  
    var id = req.params.id;

    Todo.findByIdAndUpdate({"_id": id}, req.body).then((newTodo) => {
        res.json("Güncelleme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Güncelleme İşleminde Hata Oluştu.");
    });
  
});

router.delete("/:id", function(req, res, next){
  
    var id = req.params.id;
    Todo.findByIdAndRemove(id).then(() => {
        res.json("Silme İşlemi Başarılı.");
    }).catch((err) => {
        res.json("Silme İşleminde Hata Oluştu.");
    });
  
});
module.exports = router