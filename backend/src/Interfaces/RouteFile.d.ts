import { Request, Response } from "express";

interface Methods {
    get: string;
    post: string;
    put: string;
    delete: string;
}

interface RunFunction {
    (req: Request, res: Response);
}

export interface Route {
    path: string;
    method: keyof Methods;
    run: RunFunction;
}

export interface RouteHandlerItem {
    route: {
        path: string;
        method: keyof Methods;
        run: RunFunction;
    };
}
