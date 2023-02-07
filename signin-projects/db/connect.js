const mongoose = require("mongoose");


const uri = "mongodb+srv://sohal_r:sohal1305@cluster0.f056fqx.mongodb.net/?retryWrites=true&w=majority"
mongoose.set('strictQuery', true);


const signupDataSchema = new mongoose.Schema({
    name : String ,
    phone : Number ,
    email : String ,
    password : Number   
});

const Signupdata = mongoose.model("Signupdata" ,signupDataSchema);

const userOne = new Signupdata ({
    name : "sohal rahaman" ,
    phone : 9933717360 ,
    email : "sokilgmailcom" ,
    password : 123456 ,
});

//userOne.save();

const userTwo = new Signupdata ({
    name : "Aniqah rahaman" ,
    phone : 9933717359 ,
    email : "Aniqahgmailcom" ,
    password : 1256 ,
});

//userTwo.save();

async function connect() {
  try{
    await mongoose.connect(uri);
    console.log("connected to mongoDB")
  }catch(error){
    console.error(error);
  }
}

connect();


