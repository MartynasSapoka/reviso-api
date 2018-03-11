import mongoose from 'mongoose';

export default callback => {
  const db = mongoose.connect('mongodb://localhost/reviso');
	callback(db);
}
