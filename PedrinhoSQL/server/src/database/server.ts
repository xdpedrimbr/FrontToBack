import express, { response } from 'express'; 
import cors from 'cors'; 
import path from 'path'
import routes from './routes';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

//carrega alguma coisa estatica dentro de uma pasta

app.listen(3333)