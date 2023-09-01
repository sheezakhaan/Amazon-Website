const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.poxfa.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{ 
    useCreateIndex: true ,
    useNewUrlParser: true ,
    useUnifiedTopology: true ,
    useFindAndModify: false })
.then(() => {
    console.log("Database connected")
})
.catch((err) => {
    console.log(err)
});