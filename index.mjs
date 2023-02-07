import dotenv from 'dotenv';
dotenv.config({ path: './config/.env' });
import express from 'express';
import { createServer } from 'http';
import db from './config/db.mjs';
import error from './middlewires/error/error.mjs';
import routers from './routes/index.mjs';
const app = express();

const middleware = [express.json(), express.urlencoded({ extended: true })];
app.use(middleware);
app.use('/api/v1/', routers);

const server = createServer(app);
const PORT = process.env.PORT || 2001;

app.use('*', (req, res) =>
  res.status(404).json({
    message: `NOT FOUND`,
  })
);
app.use(error);
db().then(({ connection }) => {
  console.log(connection.host);
  server.listen(PORT, () =>
    console.log(`Server is listening on Port: ${PORT}`)
  );
});
