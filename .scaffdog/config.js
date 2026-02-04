const crypto = require('node:crypto');

export default {
  files: ['*'],
  helpers: [
    {
      randomBytes: () => crypto.randomBytes(8).toString('hex'),
    },
  ],
};
