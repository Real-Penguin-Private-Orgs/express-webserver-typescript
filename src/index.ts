import app from './app';
let port: number  = 8080;

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
})