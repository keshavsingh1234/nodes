const http=require("http");
const express=require("express")
const app=express();

const fs=require("fs");
const alert=require("alert");
const serverless=require("serverless-http")
//console.log(popup.alert("hh"))
var requests=require("requests");
const conn=require("../conn.js");
const path=require("path")
const ejs=require("ejs")
const PORT=process.env.PORT || 8000;
//const alert=require("alert")
const temp=path.join(__dirname,"../temp/views")
//console.log(temp)
const nodemailer=require("nodemailer");
//const Sendmail=require("../nodeapi/Sendmail.js")
app.use(express.json())
app.set("view engine","ejs")
const multer=require("multer");
//app.set("views",temp);
app.use("/uploads",express.static('uploads'));   //this line image show kr rhi ha bta rahi hai ki uploads folder ko b access kro
//app.set("views",template_path)

const mongoose=require("mongoose")
const Registerdatas=require("../register.js")
//const img=require("./uploads/hey.png")

app.use(express.urlencoded({extended:false}));
//console.log(Registerdatas)
app.use(express.json());

app.post("/insert/users" , async(req,res) =>{
  try{
      console.log(req.body.name)
/*
const storage=multer.diskStorage({
  destination:"uploads",
  filename:(req,file,cb)=>{
    cb(null.file.originalname);
  },
});
const upload=multer({
  storage:storage
}).single('testimage')
upload(req,res,(err)=>{
  if(err){
    console.log(err)
  }*/
//const req.body.joindate)


//console.log(req.body.email,req.body.address,req.body.phone,req.body.class,req.body.fee,req.body.date)
//console.log(req.body.email)
const joindate=jdate;
const submit=req.body.submit;
const classes = req.body.class;


const registeremp=new Registerdatas({
              
  name:req.body.name,
  email:req.body.email,
  address:req.body.address,
  phone:req.body.phone,
  class:req.body.class,
  fee:req.body.fee,
  status:"unpaid",
  date:req.body.date,
  
  
 
 
})


//console.log(registeremp)

//console.log(registeremp)
/*const datas=await registeremp.save();
console.log(`success ${datas}`)*/

}
catch(e){
  res.render("error ")
}
})

app.get("/users/add",(req,res)=>{
  res.render("api")
})


app.get("/l",async(req,res)=>{
  try{
  const data= await Registerdatas.find({})
  //console.log(data)
         res.render("index",{data})
//aisa b kar skte h isse jo niche likha h
        /* try{
          await MensRanking.find({})
           .then((x)=>{
             res.render("index",{x})
             console.log(x)
           } )
  //  const a=[read];
    
   /* read.forEach(function(table){
      const tn=table.name;
      console.log(tn)
   
      res.render("index",{
        name:read
       /* dob:table.dob,
        country:table.country,
        score:table.score*/
     // })
      
}

    
    
   
  //  console.log(a[0].name)
  /*  for(i=0;i<a.length;i++){
     const e= a[i].name;
      console.log(a[i])
    }
   // const realtime=map(a);
//console.log(realtime)
      /*  const name=read[0].name
     /* res.render("index",{
        name:read[0].name,
        dob:read[0].dob,
        country:read[0].country,
        score:read[0].score
      })*/
     // 
  catch(e){
    console.log("error aa gya")
  }
  
})

app.get("/student",async(req,res)=>{
  try{
  const data= await Registerdatas.find({})
  
         res.render("student",{data})

      
}

  catch(e){
    console.log("error aa gya")
  }
  
})

//router for getting fees income
app.get("/income",async(req,res)=>{
  try{
    const fee=await Registerdatas.aggregate([ { $group: { _id: null, fee: { $sum: '$fee' } } }]);
    const fees=fee[0].fee;
         res.render("fees",{fees})
        }

  catch(e){
    console.log("error aa gya bc")
  }
  
})
const upload=multer({dest:'uploads/'})



app.post("/student" ,async(req,res) =>{
    try{
     console.log(req.body.name);
      //console.log(req.)
     // console.log(req.body.myfile)
  //below code for joining date conversion to string
  const jdate = req.body.joindate;
  const joind=new Date(jdate);
  const days=joind.getDate() +1;
 // console.log(jdate.getDate());
  /**const getdate=new Date(jdate)
  const dee=getdate.setDate(getdate.getDate() + 1);
  const  dateee = new Date(dee);
  const joindat=dateee.toString("MMM dd");*/
//below code shows that expiry date logic from joining date
       const joindate=new Date(jdate);
      
       const d=joindate.setDate(joindate.getDate() + 30); // Set now + 30 days as the new date
       const  datee = new Date(d);
       const expirydate=datee.toString("MMM dd");
       const du = new Date(d).toString();
       const index = du.lastIndexOf(':') +3;
      const currentt= du.substring(0, index);
      const getmonth=joindate.getMonth() ;
      console.log(getmonth)
       var weekday= new Array(12);
            weekday[1]="jan";
            weekday[2]="feb";
            weekday[3]="mar";
            weekday[4]="april";
            weekday[5]="may";
            weekday[6]="june";
            weekday[7]="july";
            weekday[8]="aug";
            weekday[9]="sept";
            weekday[10]="oct";
            weekday[11]="nov";
            weekday[12]="dec";
            const monthh = weekday[getmonth];         
  const classes = req.body.class;
  //console.log(classes)
  if(classes <=4){
    classfee='400';
  }
  else if(classes==5){
    classfee='500';
  }
  else if(classes==6) {
    classfee='600';
  }
  else if(classes==7){
    classfee='700';
  }
  else if(classes==8){
    classfee='800';
  }
  else if(classes==9){
    classfee='900';
  }
  else if(classes==10){
    classfee='1000';
  }
  else if(classes=='jnv'){
    classfee='600';
  }
  else if(classes=='C'){
    classfee='600';
  }
  
  else{
    classfee='950';
  }
  
  
  const registeremp=new Registerdatas({
                
    name:req.body.name,
    email:req.body.email,
    address:req.body.address,
    phone:req.body.phone,
    class:req.body.class,
    monthly:req.body.monthly,
    fee:classfee,
    status:"unpaid",
    date:jdate,
    expirydate:currentt,
    days:days,
    notifystatus:"not notify yet",
    month:monthh,
 })
 
  
// console.log(registeremp)

//console.log(registeremp)
//.log(registeremp);


const datas=await registeremp.save();
//console.log(`success ${datas}`)

const data= await Registerdatas.find({})


 // console.log(data) 
// Count the total documents

//console.log(data)
      // res.render("index",{data}) 
       res.render('student', {data});
       
}
catch(e){
    res.render("error ")
}
})




app.get("/del/:id",async(req,res)=>{
  const id=req.params.id;
  console.log(id)
  const data=await Registerdatas.findByIdAndDelete({_id:id});
 //alert("deleted")
 res.redirect("/student");
 
  //alert("delete success")
  /*const time=setTimeout(alert,5000);
  function alert(){
    
  }*/
  
})
app.get("/edit/:id",async(req,res)=>{
  const id=req.params.id;
  //console.log(id)
  const idmilgayi=await Registerdatas.findById({_id:id});
  
  res.render("update",{idmilgayi});
 //alert("deleted")
 //res.redirect("/l");
 
  //alert("delete success")
  /*const time=setTimeout(alert,5000);
  function alert(){
    
  }*/
  
})
app.get("/sendsms",async(req,res)=>{
  
  res.render("sendsms");
 //alert("deleted")
 //res.redirect("/l");
 
  //alert("delete success")
  /*const time=setTimeout(alert,5000);
  function alert(){
    
  }*/
  
})
app.post("/sendsmss",async(req,res)=>{
  try{
  console.log(req.body.name);
  const number=req.body.name;
  const num='+91'+number;
  
  // Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure
const accountSid = "ACd72fbf6313816868eb6d63d32f4d42a4";
const authToken = "1b0f720295689dec787b194b36c7b36e";
const client = require("twilio")(accountSid, authToken);
client.messages
  .create({ body: "Fee pending of your course/class", from: "+19785816022", to: num })
    .then(message => console.log(message.sid));
 // res.render("sendsms");
 //alert("deleted")
 //res.redirect("/l");
 
  //alert("delete success")
  /*const time=setTimeout(alert,5000);
  function alert(){
    
  }*/
  res.render("sendsms");
}catch(error){
  res.send.status(404)
}
})
app.post("/save/:id",async(req,res)=>{
  const _id=req.params.id;
  const name=req.body.name;
  const email=req.body.email;
 // console.log(email)
  const phone=req.body.phone;
  const address=req.body.address;
  


         
  //below code for joining date conversion to string
  const jdate = req.body.joindate;
  
  
//below code shows that expiry date logic from joining date
       const joindate=new Date(jdate);
       const days=joindate.getDate() +1;
       const getmonth=joindate.getMonth()+1 ;
     
       var weekday= new Array(12);
            weekday[1]="jan";
            weekday[2]="feb";
            weekday[3]="mar";
            weekday[4]="april";
            weekday[5]="may";
            weekday[6]="june";
            weekday[7]="july";
            weekday[8]="aug";
            weekday[9]="sept";
            weekday[10]="oct";
            weekday[11]="nov";
            weekday[12]="dec";
            const monthh = weekday[getmonth];         
       const d=joindate.setDate(joindate.getDate() + 30); // Set now + 30 days as the new date
       const  datee = new Date(d);
       
       const exp=datee.toString("MMM dd");
       const du = new Date(d).toString();
       const index = du.lastIndexOf(':') +3;
      const currentt= du.substring(0, index);
   


     const  notifystatus="not notify yet";
  const classes=req.body.class;
  //console.log(classes)
  if(classes <=4){
    classfee='400';
  }
  else if(classes==5){
    classfee='500';
  }
  else if(classes==6){
    classfee='600';
  }
  else if(classes==7){
    classfee='700';
  }
  else if(classes==8){
    classfee='800';
  }
  else if(classes==9){
    classfee='900';
  }
  else if(classes==10){
    classfee='1000';
  }
  else if(classes=='jnv'){
    classfee='400';
  }
  else if(classes=='C'){
    classfee='600';
  }
  
  else{
    classfee='950';
  }
  
  const ide=await Registerdatas.findByIdAndUpdate(_id,{name:name,email:email,phone:phone,address:address,class:classes,fee:classfee,date:jdate,expirydate:currentt,days:days,notifystatus:notifystatus,month:monthh});
 // console.log(ide)
  res.redirect("/student");
})


//for editing status

/*app.get("/e:ide" , async(req,res) =>{
  try{
  const id=req.params.ide;
  console.log(id)   
/*const name=req.body.phone;
//const submit=req.body.submit;
console.log(name)
const registeremp=new Registerdatas({
              
  name:req.body.name,
  email:req.body.email,
  address:req.body.address,
  phone:req.body.phone
  
 
})

//console.log(registeremp)



const datas=await registeremp.save();
//console.log(`success ${datas}`)

const data= await Registerdatas.find({})
//console.log(data)
     res.render("index",{data}) */
//}
/*catch(e){
  res.render("error ")
}
})*/



app.get("/users/api" , async(req,res) =>{
  try{
    // const adding= new MensRanking(req.body)
     const read=await Registerdatas.find({})
        
       res.send([read])
       
 
     }catch(e){
        res.status(404).send(e)
     }
     
 
 
 })  
app.get("/mailedd/:id",async(req,res)=>{
  
  const id=req.params.id;
  //console.log(id)
  const idmilgayi=await Registerdatas.findById({_id:id});
  const _id=idmilgayi._id;
  const mail=idmilgayi.email;
  

  const date=new Date();
  const msg={
    from:"keshavsingh7837@gmail.com",
    to:mail,
    subject:`Fee Paid Successfull`,
    
    html:`
    
   <img src='https://cdn.pixabay.com/photo/2020/04/10/13/23/paid-5025785__480.png'>
    Dear ${idmilgayi.name} your fees has been successfully paid total paid  ${idmilgayi.fee} rupees from  ${idmilgayi.date} to ${idmilgayi.expirydate}`
};


  nodemailer.createTransport({
    service:'gmail',
    secure: true, // true for 465, false for other ports
                //logger: true,
                debug: true,
                secureConnection: false,
    auth:{
        user:"keshavsingh7837@gmail.com",
        pass:"xuhlzymrybsqdjfd"
    },
    port:456,
    host:'smtp.gmail.com'
}).sendMail (msg,(err)=>{
    if(err){
        return res.render("emailsend2")

    }else{
     // const ide=Registerdatas.findByIdAndUpdate(_id,{status:"paid"})
     //Registerdatas.findByIdAndUpdate(_id,{status:"paid"});
    
    
     async function name() {

      const status=await Registerdatas.findByIdAndUpdate(_id,{status:"paid"});








      res.render("emailsend") 
    }
    name();
      // return console.log("send")
    }
   

})

 
})
app.get("/notify/:id/:days",async(req,res)=>{
//  console.log(req.params.days)
  const _id=req.params.id;
console.log(_id)
  const daysremain=req.params.days;
  console.log(daysremain)
  const data=await Registerdatas.findById({_id});
   console.log(data);
   
   const msg={
    from:"keshavsingh7837@gmail.com",
    to:data.email,
    subject:`Fee Pending only ${daysremain} days left `,
    
    html: `<div style='background-image: #85FFBD;color:red;
    background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
    '>Dear <span style='font-weight:bold;'> ${data.name} <span style='color:red;font-weight:bold;'>Only ${daysremain} days left</span></span> <br>your fee is pending of course ${data.class} ${data.fee} rupees from  ${data.date} to ${data.expirydate} </div>`,
};


  nodemailer.createTransport({
    service:'gmail',
    secure: true, // true for 465, false for other ports
                //logger: true,
                debug: true,
                secureConnection: false,
    auth:{
        user:"keshavsingh7837@gmail.com",
        pass:"xuhlzymrybsqdjfd"
    },
    port:456,
    host:'smtp.gmail.com'
}).sendMail (msg,(err)=>{
    if(err){
        return res.render("msg1");

    }
    else{
     // const ide=Registerdatas.findByIdAndUpdate(_id,{status:"paid"})
    // Registerdatas.findByIdAndUpdate(_id,{status:"paid"});
    
     // res.redirect("/l")
     //alert("success");
     
    
     async function n() {
      const d = new Date().toString();
      const index = d.lastIndexOf(':') +3;
     const currentt= "notified on " + d.substring(0, index);
            const status=await Registerdatas.findByIdAndUpdate(_id,{notifystatus:currentt});
       console.log(status);







      
    }
    n();
   res.render("msg");
       
      // return console.log("send")
    }
   
})
 
})
app.get("/overday/:id/:days",async(req,res)=>{
  //  console.log(req.params.days)
    const _id=req.params.id;
    
    const daysremain=req.params.days;
    const data=await Registerdatas.findById({_id});
   //  console.log(data);
     
     const msg={
      from:"keshavsingh7837@gmail.com",
      to:data.email,
      subject:`overday ${daysremain} days `,
      
      html: `<div style='background-image: #85FFBD;color:red;
      background-image: linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%);
      '>Dear <span style='font-weight:bold;'> ${data.name} <span style='color:red;font-weight:bold;'> ${daysremain} overdays please pay your fee asap</span></span> <br>your fee is pending of course ${data.class} ${data.fee} rupees from  ${data.date} to ${data.expirydate} </div>`,
  };
  
  
    nodemailer.createTransport({
      service:'gmail',
      secure: true, // true for 465, false for other ports
                  //logger: true,
                  debug: true,
                  secureConnection: false,
      auth:{
          user:"keshavsingh7837@gmail.com",
          pass:"xuhlzymrybsqdjfd"
      },
      port:456,
      host:'smtp.gmail.com'
  }).sendMail (msg,(err)=>{
      if(err){
          return res.render("msg1");
  
      }
      else{
       
       async function n() {
        const d = new Date().toString();
        const index = d.lastIndexOf(':') +3;
       const currentt= "notified on " + d.substring(0, index);
              const status=await Registerdatas.findByIdAndUpdate(_id,{notifystatus:currentt});
         console.log(status);
  
  
  
  
  
  
  
        
      }
      n();
     res.render("msg");
         
        // return console.log("send")
      }
     
  })
   
  })
app.listen(PORT,()=>{
  console.log("running")
});
