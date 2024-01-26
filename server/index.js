import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managementRoutes from "./routes/management.js";
import revenuesRoutes from "./routes/revenues.js";
import AffiliateStat from "./models/AffiliateStat.js";

/* data imports*/
import User from "./models/User.js";
import Project from "./models/Project.js";
import ProjectStat from "./models/ProjectStat.js";
import Allocation from "./models/Allocation.js";
import OverallStat from "./models/OverallStat.js";
import {
  dataUser,
  dataProject,
  dataProjectStat,
  dataTransaction,
  dataAffiliateStat,
  dataOverallStat,
} from "./data/index.js";

/* configs */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* routes */
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);

// sales -> revenue
app.use("/revenues", revenuesRoutes);

/* Mongo db setup */
const PORT = process.env.PORT || 9000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

    // Posso apagar no banco, vir aqui, descomentar, salvar uma vez e comentar após as modificações
    // O DB já possui os dados de usuário, então não é necessário inserir novamente
    
    // OverallStat.insertMany(dataOverallStat);
    // Project.insertMany(dataProject);
    // ProjectStat.insertMany(dataProjectStat);
    // Allocation.insertMany(dataTransaction);
    // AffiliateStat.insertMany(dataAffiliateStat)
    // User.insertMany(dataUser);
  })
  .catch((error) => console.log(`${error} did not connect`));
