import express from 'express';
import { config } from './serverConfig';
import path from 'path';
import nodeSassMiddleware from 'node-sass-middleware';

const server = express();

server.use(
  nodeSassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
  })
);
server.use(express.static('public'));
server.set('view engine', 'ejs');

server.get('/main', (req, res) => {
  console.log('main');
  res.render('index', { initialTitle: 'Welcome' });
});
server.listen(config.port, () => {
  console.info('listener started..');
});
