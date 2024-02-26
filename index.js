import express from "express"
import accountsRouter from "./routes/account.routes.js"
import { promises as fs, readFileSync } from "fs"
import winston from "winston"
import cors from "cors"
import path from "path";


const { readFile, writeFile } = fs
const { combine, timestamp, label, printf } = winston.format
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} : ${message}}`
})


const app = express()
app.use(express.json())
app.use(cors())
app.use("/account", accountsRouter)


global.fileName = "accounts.json"
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "./logger/my-bank-api.log" })
    ],
    format: combine(
        label({ label: "my-bank-api" }),
        timestamp(),
        myFormat
    )
})


app.get("/logs", async (req, res) => {
    try {
        const logFilePath = path.resolve("logger/my-bank-api.log");
        const logContent = await readFile(logFilePath, "utf-8"); 
        res.send(`<pre>${logContent}</pre>`); 
    } catch (error) {
        res.status(500).send("Erro ao ler o arquivo de log.");
    }
});

app.listen(4001, async () => {
    try {
        await readFile(global.fileName)
        logger.info("API Started")
    } catch (error) {
        logger.error(error)
        const initialJson = {
            nextId: 1,
            accounts: []
        }
        writeFile(global.fileName, JSON.stringify(initialJson)).then(() => {
            logger.info("API Started and file created")
        }).catch(error => {
            logger.error(error)
        })
    }
})

