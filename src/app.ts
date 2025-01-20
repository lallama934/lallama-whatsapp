import "dotenv/config"
import express from "express"
import cors from "cors"
import routes from "./infrastructure/router"
// const image = require("../tmp/qr.svg");
const port = process.env.PORT || 3001
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static('tmp'))
app.use(`/post/`,routes)
app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
    res.send('Hola mi server en express');
});
// app.get('/qr', (req: any, res: { send: (arg0: string) => void }) => {
//     res.send(image);
// });
app.listen(port, () => console.log(`Ready...${port}`))