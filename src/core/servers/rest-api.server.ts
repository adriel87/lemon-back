import  express  from 'express';
import cors from 'cors';
import path from 'path'
import { envConstant } from '../constant';

export const createRestApiServer = ()=>{
    const restApiServer = express();

    //middleware
    restApiServer.use(express.json());
    restApiServer.use(cors({
        methods: envConstant.CORS_METHODS,
        origin: envConstant.CORS_ORIGIN,
        credentials: Boolean( envConstant.CORS_CREDENTIAL )
    }));


    //server static content
    restApiServer.use('/', express.static(path.resolve(__dirname, envConstant.STATIC_FILES_PATH)))

    return restApiServer;
}

