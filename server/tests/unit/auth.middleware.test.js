const auth = require('../../src/middleware/auth');

describe('auth middleware', () => {
  it('calls next when token is valid', () => {
    const req = { headers: { authorization: 'test-token' } };
    const res = {};
    const next = jest.fn();
    auth(req, res, next);
    expect(next).toHaveBeenCalled();
  });

  it('returns 401 when token missing/invalid', () => {
    const req = { headers: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();
    auth(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({ error: 'unauthorized' });
    expect(next).not.toHaveBeenCalled();
  });
});