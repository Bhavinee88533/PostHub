const express=require("express");
const app=express();
const path=require("path");
const methodOverride=require("method-override");
let data=require("./data.json");
let {v4:uuidv4}=require("uuid");

const port=8080;
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(methodOverride("_method"))

app.listen(port,()=>{
    console.log (`app is listening at port ${port}`);
})

app.set("view engine","ejs");
app.use(express.static(path.join(__dirname, "public")));

//index ko render kiya with pushing unique id along with json

app.get("/posts",(req,res)=>{
    let posts=data.posts;
    console.log(data.posts);
     res.render("index.ejs",{posts});
})

//render kiya form

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs")
})

//form submit hone per redirect kiya

app.post("/posts",(req,res)=>{
    let id=uuidv4();
    let {username,content,image,tags}= req.body;
    const timestamp = new Date();
    let like_count=Math.floor(Math.random*100);
    let share_count=Math.floor(Math.random*100);
    let comment_count=Math.floor(Math.random*100);
    data.posts.push({id,username,content,image,timestamp,tags,like_count,share_count,comment_count});
    res.redirect("/posts")
})

//id se har ek post ki details dekhi

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let posts=data.posts;
    posts.forEach((p)=>{
        if(p.id===id){
            res.render("showDetail.ejs",{p});   
        }
    })
})

//form edit karne ko

app.get("/posts/:id/edit",(req,res)=>{
    let {id}=req.params;
    let posts=data.posts;
    posts.forEach((p)=>{
        if(p.id===id){
            res.render("editpost.ejs",{p});   
        }
    })
});

//editing form mei se aue content redirect krna

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let {newContent}=req.body;
    let posts=data.posts;
    posts.forEach((p)=>{
        if(p.id===id){
            p.detailed_content+=newContent;
        }
    })
     res.redirect("/posts/")
})

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    data.posts = data.posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});
