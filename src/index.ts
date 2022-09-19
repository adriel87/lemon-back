import express from 'express'

const app = express()


app.get('/', (req, res)=>{
    res.send({msg: 'hola mundo express'})
})

app.listen(8088,()=>{
    console.log('server listen on port 8088');
    
})
