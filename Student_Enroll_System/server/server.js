const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser');

mongoose.connect('mongodb://localhost:27017/StudentSystem')
.then(()=>console.log("Connected to the MongoDb sucessfully"))
.catch(()=>console.log('Error in connecting to mongodb'));

const studentSchema=new mongoose.Schema({
    Name:String,
    ID:{type:String,unique:true},
    
});

const Student=mongoose.model('Student',studentSchema);

const app=express();
app.use(cors());
app.use(bodyParser.json());

app.post('/add-student',async(req,res)=>{
    const data=req.body;
    try{
        const user=new Student(data);
        await user.save();
        res.status(201).send("Success");
    }
    catch(error){
        res.status(400).send("Failure");
    }
});

app.get('/search-student/:ID',async(req,res)=>{
    try{
        const stud=await Student.findOne({ID:req.params.ID});
        if(stud){
            res.status(200).json(stud);
        }
        else{
            res.status(400).send("Failure");
        }
    }
    catch(error){
        res.status(400).send("Failure");
    }
});

app.get('/view-student',async(req,res)=>{
    try{
        const student=await Student.find();
        res.status(200).json(student);
    }
    catch(error){
        res.status(400).send("Failure");
    }
});
app.delete('/delete-student/:ID',async(req,res)=>{
    try{
        const stud=await Student.findOneAndDelete({ID:req.params.ID});
        if(stud){
            res.status(200).send("Success");
        }
        else{
            res.status(404).send("Failure");
        }
    }
    catch(error){
        res.status(400).send("Failure");
    }
    
});

app.put('/update-student/:ID',async(req,res)=>{
    const {Name}=req.body;
    try{
        const stud=await Student.findOneAndUpdate({ID:req.params.ID},{Name},{new:true});
        if(stud){
            res.status(200).send("Success");
        }
        else{
            res.status(404).send("Failure");
        }
    }
    catch(error){
        res.status(400).send("Failure");
    }
    
});
const port=3001;
app.listen(port,()=>console.log(`Sever on port ${port}`));

