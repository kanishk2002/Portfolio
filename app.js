const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
//mongoose.connect("mongodb://localhost:27017/portfolio",{ useNewUrlParser: true,useUnifiedTopology: true })
mongoose.connect("mongodb+srv://admin-db:sabhi2002@cluster0.ahl20.mongodb.net/PortfolioMessages?retryWrites=true&w=majority" , { useNewUrlParser: true,useUnifiedTopology: true } )
const portfolioSchema = {
    name: String,
    email:String,
    message:String
  };
  
const Item = mongoose.model("Item", portfolioSchema);

app.post("/form", function(req, res){

    const itemName = req.body.name;
    const itemEmail = req.body.email;
    const itemMeassage = req.body.message;
  
    const item = new Item({
      name: itemName,
      email: itemEmail,
      message: itemMeassage
    })
    item.save();
    res.redirect("/");
})
app.get("/work",(req,res)=>{
    res.render("work")
})
app.post('/work',(req,res)=>{
  res.redirect("/work")
})


app.listen(process.env.PORT,3000);

