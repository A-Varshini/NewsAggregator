import mongoose from "mongoose";



const Connection =async(username, password) => {
const URL=`mongodb+srv://${username}:${password}@crud-application.l5uja0q.mongodb.net/?retryWrites=true&w=majority`;
    try{

      await  mongoose.connect(URL ,{useUnifiedTopology: true, useNewUrlParser: true});
      console.log('Databaseee aa Connecteddee successfullyie');
    }catch(error){
        console.log("Error while connecting with the database", error);

    }

    

}

export default Connection;