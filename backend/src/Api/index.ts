import express, { Application, json } from "express";
import { RouteHandlerItem } from "../Interfaces";
import { readdirSync } from "fs";
import { join } from "path";
import chalk from "chalk";
import cors from "cors";

export class ApiRest {
    private api: Application;
    private port: number;

    constructor(portConstructor: number) {
        this.port = Number(process.env.PORT) || portConstructor;
        this.api = express();
        this.config();
        this.routes();
    }

    start() {
        this.api.listen(this.port, () => {
            console.log(
                `${chalk.greenBright(
                    "Server en linea en el puerto"
                )} ${chalk.magentaBright(`http://localhost:${this.port}`)} ✅`
            );
        });
    }

    private config() {
        const baseURL = "http://localhost:5173";
        this.api.use(json());
        this.api.use(cors({ origin: baseURL }));
    }

    private routes() {
        readdirSync(join(__dirname, "..", "Routes"))
            .filter((routeFile) => routeFile.endsWith(".routes.ts"))
            .forEach(async (routeItem) => {
                const { route } = (await import(
                    join(join(__dirname, "..", "Routes", routeItem))
                )) as RouteHandlerItem;
                const { method, path, run } = route;
                switch (method) {
                    case "get":
                        this.api.get(`${path}`, run);
                        break;
                    case "post":
                        this.api.post(`${path}`, run);
                        break;
                    case "put":
                        this.api.put(`${path}`, run);
                        break;
                    case "delete":
                        this.api.delete(`${path}`, run);
                        break;
                }
            });
    }
}
