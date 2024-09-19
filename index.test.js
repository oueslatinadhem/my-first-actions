const additionner = require('./index'); // Importer la fonction depuis index.js

test('additionne 1 + 2 pour égaler 3', () => {
  expect(additionner(1, 2)).toBe(3);
});