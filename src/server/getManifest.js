import fs from 'fs';

// eslint-disable-next-line consistent-return
export default () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
  } catch (error) {
    console.log(error);
  }
};
