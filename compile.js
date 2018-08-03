const phenome = require('phenome');

const startTime = Date.now();
phenome({
  paths: ['./src/**/*.jsx', './src/**/*.js'],
  react: {
    out: './dist/react/',
  },
  vue: {
    out: './dist/vue/',
  },
}).then(() => {
  console.log(`Phenome compiled in ${Date.now() - startTime}ms`);
}).catch((error) => {
  console.log('Error happened');
  console.log(error);
});