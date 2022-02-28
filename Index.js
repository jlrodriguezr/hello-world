const express = require('express');
const cors = require('cors')
const app = express();
const morgan =  require('morgan');


//port
app.set('port', process.env.PORT || 3000);

//dev // combined
//to see what happen in the console
app.use(morgan('combined'));
//it is to understand with forms - not support iamges or files in general onli plain text
app.use(express.urlencoded({extende:false}))
//it is to understand with json and to recibe json format
app.use(express.json());


app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    /*if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }*/
    return callback(null, true);
  }
}));

app.use('/',(req, res) => {
  res.json({"Say": "Hello world!!"})
});



app.listen(app.get('port'), ()=>{
			console.log(`server on port ${app.get('port')}`);
})