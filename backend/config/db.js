import mongoose from 'mongoose'


const connectDB = async () =>{
    // MONGO_URII = process.env.MONGO_URI.toString()
    try {
        const conn = await mongoose.connect("mongodb+srv://adnan3105:adnan4141@mohammadadnan.rsd6w.mongodb.net/Nile?retryWrites=true&w=majority", {

            useUnifiedTopology: true,
            useNewUrlParser: true,
            // useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB    