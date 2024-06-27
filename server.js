import express from 'express';
import connectDB from './db/db.js'
import dotenv from 'dotenv'
dotenv.config();
import cors from 'cors'

const port = process.env.PORT || 8080
const app = express();


app.use(cors());
app.use(express.json({ extended: false }))

app.get('/',(req,res)=>{
    res.status(200).json({msg:'Hello World'})
})


// FLIGHTS
import flightRoutes from './Routes/flights.js'
app.use('/api/flights', flightRoutes)



// function database() {
//     try {
//         const node = server
//         db(node)
//     } catch (error) {
//         console.log(error);
//     }
// }

// database()

function server() {
    app.listen(port, () => { console.log('Server Listening on PORT: ', port) })
}

server();
