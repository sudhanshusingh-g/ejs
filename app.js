const express=require("express");
const bodyParser=require("body-parser");

const app=express();
let items=[];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res) {

    let today=new Date();
    let options={
        weekday:"long",
        month:"long",
        day:"numeric",
    };
    let day=today.toLocaleDateString("en-US",options);
    res.render("lists",{kindOfDay:day,newListItems:items});
});
app.post("/",function(req,res){
   let item=req.body.newItem;
   items.push(item);
    res.redirect("/");
});
app.listen(3000,function(){
    console.log("Server started on 3000 port");
})