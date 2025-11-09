const formatDate = require('../../src/utils/formatDate');

describe('formatDate', () => {
  it('returns ISO YYYY-MM-DD', () => {
    const out = formatDate('2024-01-15T12:00:00Z');
    expect(out).toBe('2024-01-15');
  });
  it('returns null for falsy input', () => {
    expect(formatDate(null)).toBeNull();
  });
});