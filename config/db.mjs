import mg from 'mongoose';
mg.set('strictQuery', false);
export default () => mg.connect(process.env.MONGO_STR);
