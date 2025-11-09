const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

(async () => {
  const mongod = await MongoMemoryServer.create();
  const uri = mongod.getUri();
  console.log('TEST_MONGO_URI=' + uri);
  // Optionally write to .env.test or print for CI to pick up.
  // Keep server running if you want manual inspection; otherwise, used by tests themselves.
  process.exit(0);
})();