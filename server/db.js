const mongoose=require('mongoose');

module.exports=()=>{
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedTopology:true,
    };

        try {

            mongoose.connect(process.env.DB,connectionParams);
            console.log("Connection Successfully")
            
        } catch (error) {
            console.log(error)
            console.log("Could not able to connect..........")
            
        }
    
}