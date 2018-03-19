import ClientsController from "../controllers/ClientController";
import {Router} from 'express';

export default () => {
  const router = Router();
  
  router.get('/', ClientsController.getAll);

  router.get('/:id', ClientsController.get);

  router.post('/', ClientsController.create);

  router.put('/:id', ClientsController.update);

  router.delete('/:id', ClientsController.delete);

  router.use((err, req, res, next) => {
    if (err.kind === 'ObjectId')
      res.status(404).send();
    else
      res.status(500).send();
  });
  return router;
}