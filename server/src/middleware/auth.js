module.exports = function (req, res, next) {
  const token = req.headers['authorization'];
  if (token === 'test-token') return next();
  res.status(401).json({ error: 'unauthorized' });
};