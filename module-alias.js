const { addAliases } = require('module-alias');

addAliases({
  '@': __dirname,
  '@api': `${__dirname}/api`,
  '@images': `${__dirname}/assets/images`,
  '@atoms': `${__dirname}/components/atoms`,
  '@molecules': `${__dirname}/components/molecules`,
  '@organisms': `${__dirname}/components/organisms`,
  '@pages': `${__dirname}/pages`,
  '@plugins': `${__dirname}/plugins`,
});