const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyparser=require('body-parser');

mongoose.connect("mongodb://localhost:27017/Book")
.then(()=>console.log("Connected to MongoDb Succesfully"))
.catch(()=>console.log("Error in Connection to Mongo"));

const BookSchema=mongoose.Schema({
    Name: String,
    ISBN: {type:String,unique:true},
    Author: String,
    Category:String,
    Quantity:Number

});

const Book=mongoose.model('Book',BookSchema);

const app=express();
app.use(cors());
app.use(bodyparser.json());

app.post('/add-book',async(req,res)=>{
    const bookdata=req.body;
    try{
        const user=new Book(bookdata);
        await user.save();
        res.status(201).send("Book Added Successfully");
    }
    catch(error){
        res.status(400).send("Error: cant be added into the Database");
    }
});
app.get('/search-book/:ISBN', async (req, res) => {
    try {
    const book = await Book.findOne({ ISBN: req.params.ISBN });
    if (book) {
    res.status(200).json(book);
    } else {
    res.status(404).send("Book not found");
    }
    } catch (error) {
    res.status(400).send("Error searching for book");
    }
    });

app.put('/update-book/:ISBN',async(req,res)=>{
    const {Quantity}=req.body;
    try{
        const book=await Book.findOneAndUpdate({ISBN:req.params.ISBN},{Quantity},{new:true});
        if (book) {
            res.status(200).json(book);
        } 
        else 
        {
            res.status(404).send("Book not found");
        }
    } 
    catch (error) {
        res.status(400).send("Error updating for book");
    }
    
});

app.delete('/delete-book/:ISBN',async(req,res)=>{
    try{
        const book=await Book.findOneAndDelete({ISBN:req.params.ISBN});
        if(book){
            res.status(200).send("The book successfully deleted");
        }
        else{
            res.status(201).send("The book not found ");
        }
    }
    catch(error){
        res.status(400).send("Error");
    }
});

app.get('/books',async(req,res)=>{
    try{
        const user= await Book.find();
        res.status(200).json(user);
    }
    catch(error){
        res.status(401).send("error ...No data");
    }
});
const port=3001;

app.listen(port,()=>console.log(`Server running at ${port}`));

