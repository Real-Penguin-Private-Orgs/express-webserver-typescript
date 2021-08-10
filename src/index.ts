import app from './app';
import * as dotenv from 'dotenv';
dotenv.config();
let port: number  = 8080 || process.env.PORT;

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})