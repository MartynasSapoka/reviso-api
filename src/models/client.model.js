import mongoose from 'mongoose';

const ClientSchema = mongoose.Schema({
  name: String,
  billings: [{hours: Number, timestamp: Date}],
  isDeleted: {type: Boolean, default: false, select: false}
});

let ClientModel = mongoose.model('Client', ClientSchema);

ClientModel.getAll = () => ClientModel.find({isDeleted: false});
ClientModel.addClient = (clientToAdd) => clientToAdd.save();
ClientModel.removeClient = (id) => ClientModel.findOneAndRemove({_id: id});
ClientModel.updateClient = (client) => ClientModel.findOneAndUpdate({_id: client._id}, client);


export default ClientModel;