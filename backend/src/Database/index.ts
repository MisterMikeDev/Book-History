import { connect } from "mongoose";
import chalk from "chalk";
export class DatabaseConnection {
    connectToDB() {
        connect(`${process.env.MONGO_URI}`)
            .then(() =>
                console.log(
                    `${chalk.greenBright("Conectado a la base de datos")} ✅`
                )
            )
            .catch((e: Error) =>
                console.error(
                    "Hubo un error al conectar con la base de datos\n",
                    e
                )
            );
    }
}
