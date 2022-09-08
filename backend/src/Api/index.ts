import express, { Express, json, Request, Response } from "express";
export default class Api {
    private api: Express;
    private port: number;
    constructor(portConstructor: number) {
        this.port = portConstructor;
        this.api = express();
        this.api.use(json());
    }
    start() {
        this.api.listen(this.port, () =>
            console.log(`Api en linea por el puerto ${this.port}`)
        );
        this.api.get("/status", (_req: Request, res: Response) =>
            res.json({
                message: "Api en linea",
            })
        );
    }
}
