import "dotenv/config"
import express from "express"
import cors from "cors"
import routes from "./infrastructure/router"


const createApp = async () => {
    const app = express()
    app.get('/', (req: any, res: { send: (arg0: string) => void }) => {
        res.send('Hola mi server en express');
    });
    app.use(cors())
    app.use(express.json())
    app.use(express.static('tmp'))
    app.use(`/`, routes)

    return app;
}

export {createApp};

