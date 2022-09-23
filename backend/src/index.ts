console.clear();
import { DatabaseConnection } from "./Database";
import { ApiRest } from "./Api";
import { config } from "dotenv";
config();
new DatabaseConnection().connectToDB();
new ApiRest(9000).start();
