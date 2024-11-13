const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');

mongoose.connect("mongodb://localhost:27017/TicketSystem")
.then(()=>console.log("Connected to the MongoDB"))
.catch((error)=>console.log(error));

const ticketSchema=new mongoose.Schema({
    ID:{type:Number,unique:true},
    Name:String,
    Status:{type:String,default:'open'},
    CreatedDate:{type:Date,default:Date.now}
});

const Ticket=mongoose.model('Ticket',ticketSchema);

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/add-ticket',async(req,res)=>{
    const data=req.body;
    try{
        const ticket=new Ticket(data);
        await ticket.save();
        res.status(201).send("Successfully Inserted");
    }
    catch(error){
        res.status(401).send("Error!!");
    }
});

app.get('/view-ticket/:ID',async(req,res)=>{
    try{
        const user=await Ticket.findOne({ID:req.params.ID});
        if(user){
            res.status(200).json(user);
        }else{
            res.status(400).send("fail");
        }
        
    }
    catch(error){
        res.status(401).send("Error!!");
    }
});

app.put('/update-ticket/:ID',async(req,res)=>{
    const {Status}=req.body;
    try{
        const user=await Ticket.findOneAndUpdate({ID:req.params.ID},{Status},{new:true});
        if(user){
            res.status(201).send("Success");
        }else{
            res.status(400).send("fail");
        }
        
    }
    catch(error){
        res.status(401).send("Error!!");
    }
});

app.delete('/delete-ticket/:ID',async(req,res)=>{
    try{
        const user=await Ticket.findOneAndDelete({ID:req.params.ID});
        if(user){
            res.status(200).send("Success");
        }else{
            res.status(400).send("fail");
        }
        
    }
    catch(error){
        res.status(401).send("Error!!");
    }
    
});
app.get('/get-ticket',async(req,res)=>{
    try{
        const view=await Ticket.find();
        res.status(200).json(view);
    }
    catch(error){
        res.status(400).send("Error");
    }
});
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));