const crypto = require('crypto');

export default {
  files: ['*'],
  helpers: [
    {
      randomBytes: () => crypto.randomBytes(8).toString('hex'),
    },
  ],
};
