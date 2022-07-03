import * as fs from 'node:fs/promises';
import glob from 'glob';
import YAML from 'yaml';

Promise.all(
  glob
    .sync('modules/**/*.{yml,yaml}')
    .map(async (file) => YAML.parse(await fs.readFile(file, 'utf-8')))
).then(async (mods) => {
  await fs.mkdir('dist', { recursive: true });
  await fs.writeFile('dist/index.json', JSON.stringify(mods));
});
