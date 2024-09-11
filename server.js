const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connections successful !!!');
  });

// const testTour = new Tour({
//   name: 'The new Hiker',
//   rating: 4.7,
//   price: 497,
// });

// testTour
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log('ERROR🔥:', err);
//   });

// console.log(process.env);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App running on port ${port}!`));

// const x = 23;
// x = 66;
