import mongose from 'mongose';

const connectDB = async()=>{
    try {
        const conn = await mongose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected : ${conn.conection.host}`)
    } catch (error) {
        console.error(`Error : ${error.message}`)
        process.exit(1)
    }
}

export default connectDB