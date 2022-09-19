import express from 'express';
import cors from 'cors';


const app = express()



// basics middlewares

app.use(express.json())
app.use(cors());



app.get('/', (req, res)=>{
    res.send({msg: 'hola mundo express'})
})

app.listen(8088,()=>{
    console.log('server listen on port 8088');
    
})
