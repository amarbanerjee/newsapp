import express from 'express';
//import sqlite from 'better-sqlite3';
import { db } from '@vercel/postgres';
import cors from 'cors';



//const db = sqlite('data.db');



const app = express();

app.use(cors())

app.get('/news', (req, res) => {
  const client = db.connect();
  const { news, fields } = client.sql`SELECT * FROM news;`;
  console.log("app"+news);
  res.json(news);
});

//initDb();

app.listen(8080);
