import express from 'express';
import dotenv from 'dotenv'
import db from './db/db.js'
dotenv.config();
import cors from 'cors'

const port = process.env.PORT || 8080
const app = express();


app.use(cors());
app.use(express.json({ extended: false }))

app.get('/', (req, res) => {
    res.status(200).json({ msg: 'Hello World' })
})


import flightRoutes from './Routes/flights.js'
import hotelRoutes from './Routes/hotels.js'
import user from './Routes/user.js'

// FLIGHTS
app.use('/api/flights', flightRoutes)

// Hotels
app.use('/api/hotels', hotelRoutes)

// User Registration
app.use('/api/user', user);


app.get('/',(req,res)=>{
    res.status(200).json({msg:'Hello world'})
});


function database() {
    try {
        const node = server
        db(node)
    } catch (error) {
        console.log(error);
    }
}

database()

function server() {
    app.listen(port, () => { console.log('Server Listening on PORT: ', port) })
}

// server();
