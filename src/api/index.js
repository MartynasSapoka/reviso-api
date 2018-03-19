import {version} from '../../package.json';
import {Router} from 'express';
import ClientRoutes from "../routes/ClientRoutes";

export default ({config, db}) => {
  let api = Router();

  api.use('*', (req, res, next) => {
    res.type('application/json');
    next();
  });

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({version});
  });

  api.use('/clients', ClientRoutes());

  return api;
}
