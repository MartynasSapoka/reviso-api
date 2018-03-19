import mongoose from 'mongoose';

const ClientSchema = mongoose.Schema({
  name: String,
  billings: [{
    hours: Number,
    timestamp: {
      type: Date,
      default: Date.now
    },
    hourlyRate: Number
  }],
  _isDeleted: {type: Boolean, default: 'false', select: false}
});

let ClientModel = mongoose.model('Client', ClientSchema);

ClientModel.getAll = () => ClientModel.find({_isDeleted: false});

ClientModel.get = (id) => ClientModel.findOne({"_id": id, _isDeleted: false});

ClientModel.add = (clientToAdd) => new ClientModel(clientToAdd).save();

ClientModel.delete = async (clientId) => {
  const model = await ClientModel.findOne({_id: clientId});
  return model.set({_isDeleted: true}).save();
};

ClientModel.update = async (client) => {
  await ClientModel.findOneAndUpdate({_id: client._id}, client);
  return await ClientModel.get(client._id);
};

export default ClientModel;