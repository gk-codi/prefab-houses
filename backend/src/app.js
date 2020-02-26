import express from 'express';;
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/../public'))
export default app;

