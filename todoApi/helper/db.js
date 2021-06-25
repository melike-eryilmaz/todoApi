var mongoose = require('mongoose')

const dbUrl = 'mongodb+srv://melike:1234@todoapp.ct2rd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
module.exports = () =>{
    mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true ,useCreateIndex:true})
    mongoose.connection.on('open',()=>{
        console.log("mongodb:connected");
        // app.listen(3000)
    })
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
      });

    mongoose.Promise = global.Promise;
}
