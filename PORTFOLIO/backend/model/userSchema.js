import mongoose from 'mongoose';
mongoose.connect("mongodb://localhost:27017/ashishdb")
.then(()=>{
    console.log('connected to mongoos');
})
.catch((e)=>{
    console.log('failed');
})

const signupSchema = new mongoose.Schema({
 name:{
    type: String,
    required: true,
    trim: true,
    min: 5,
    max: 20
 },
 email:{
    type:String,
    required: true,
    trim: true
 },
 password: {
    type : String ,
    required: true
 }
});

const usermodel = mongoose.model('portpholioCollection', signupSchema);

export default usermodel;