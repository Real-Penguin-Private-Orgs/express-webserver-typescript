import express from 'express';
const app: express.Express = express();
import cors from 'cors' 
import helmet from 'helmet'
import router from './routes';

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//GET ALL
app.get('/', (req: express.Request, res: express.Response) => {
    res.send("Hi")
})

app.use(router)

export default app;