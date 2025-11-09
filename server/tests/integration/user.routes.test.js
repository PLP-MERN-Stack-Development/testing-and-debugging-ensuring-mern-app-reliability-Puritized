const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let app; // require after db connects

describe('User routes integration', () => {
  let mongod;

  beforeAll(async () => {
    mongod = await MongoMemoryServer.create();
    const uri = mongod.getUri();
    process.env.MONGO_URI = uri;
    // require the app after setting env (app connects to process.env.MONGO_URI)
    app = require('../../src/app'); // express app
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongod.stop();
  });

  afterEach(async () => {
    // clear db between tests
    const collections = Object.keys(mongoose.connection.collections);
    for (const name of collections) {
      await mongoose.connection.collections[name].deleteMany({});
    }
  });

  it('registers a user and returns 201', async () => {
    const res = await request(app)
      .post('/api/users/register')
      .send({ email: 'test@example.com', password: 'Password1' })
      .expect(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('email', 'test@example.com');
  });

  it('prevents duplicate registrations', async () => {
    await request(app).post('/api/users/register').send({ email: 'a@x.com', password: 'P4ssword' }).expect(201);
    await request(app).post('/api/users/register').send({ email: 'a@x.com', password: 'P4ssword' }).expect(400);
  });
});