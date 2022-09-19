import { envConstant } from "./core/constant";
import { createRestApiServer } from "./core/servers";

const restApiServer = createRestApiServer();


restApiServer.use(async (req, res, next)=>{
    console.log(req.url);
    next();
})


restApiServer.get('/', (req, res)=>{
    res.send({msg: 'hola mundo express'})
})


restApiServer.use(async (error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
});

restApiServer.listen(envConstant.PORT,()=>{
    console.log(`server listen on port ${envConstant.PORT}`);
    
})
