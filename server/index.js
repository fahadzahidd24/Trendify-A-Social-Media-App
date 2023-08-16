import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDb from './database/connectDb.js';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

// Configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use("/public/assets", express.static(path.join(__dirname, "public/assets")));

// routes 
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/post', postRoutes)

//starting server
const PORT = process.env.PORT;
const startServer = async () => {
    try {
        await connectDb();
        app.listen(PORT, () => {

            console.log("Server running on ", `http://localhost:${PORT}`)
        })
    } catch (err) {
        console.log(err);
    }
}

startServer();