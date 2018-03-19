import ClientModel from '../models/client.model';

class ClientController {
  async getAll(req, res) {
    try {
      const allClients = await ClientModel.getAll();
      res.json(allClients);
    } catch (e) {
      console.error("Could not retrieve all clients", e);
      res.status(500).send("Error occurred while querying db")
    }
  }

  async get(req, res, next) {
    try {
      const id = req.params.id;
      const client = await ClientModel.get(id);
      if (client)
        res.json(client);
      else
        res.status(404).send();
    } catch (e) {
      next(e);
    }
  }

  async create(req, res) {
    try {
      const model = await ClientModel.add(req.body);
      res.status(200).json(model)
    } catch (e) {
      console.error(e);
      res.status(500).send("Error occurred when inserting a customer")
    }
  }

  async update(req, res) {
    try {
      const model = await ClientModel.update(req.body);
      res.status(200).json(model)
    } catch (e) {
      console.log(e);
      res.status(500).send("Error while updating customer")
    }
  }

  async delete(req, res) {
    try {
      const clientId = req.params.id;
      const model = await ClientModel.delete(clientId);
      res.status(200).json(model)
    } catch (e) {
      console.log(e);
      res.status(500).send("Error while updating customer")
    }
  }
}

const clientController = new ClientController();

export default clientController;