// import app from './app';
// import config from './app/config';
// import mongoose from 'mongoose';
// main().catch((err) => console.log(err));

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string);
//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// main();

import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    // Connect to MongoDB
    await mongoose.connect(config.database_url as string);

    // Start the Express server
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

process.on('SIGINT', async () => {
  console.log('Gracefully shutting down...');
  await mongoose.connection.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('Gracefully shutting down...');
  await mongoose.connection.close();
  process.exit(0);
});

main().catch((err) => console.log('Unexpected error:', err));
