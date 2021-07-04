const express = require('express');
var bodyParser = require('body-parser');

// Initialize App
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

//callling the sign-in page
app.get('/signin',function(req,res){
  res.render('signin');
});

//callling the sign-up page
app.get('/signup',function(req,res){
  res.render('signup');
});

//after the user sumbit the signup page
app.post('/signin',function(req,res){
  res.render('signin');
});

//for calling the dashboard page that displays the recommended movies
app.post("/dashboard",function(req,res){
    //For running R file in background 
    const R = require('r-integration');
    const user_id=req.body.userid;
    let result = R.callMethod("Main.R", "Main", [user_id]);

    // Function to split string
    function splitStr(str) {
      var string = str.split(/(\")/);
      return string;
    }

    // Function call
    result=splitStr(String(result));

    //Calling dashboard file for result
    res.render("dashboard",{data:result});
});

app.listen(5000, () => {
  console.log('Website live on port 5000');
  });
