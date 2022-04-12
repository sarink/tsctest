import moduleAlias from 'module-alias';
import path from 'path';

const rootDir = path.resolve(__dirname, '../../');
const aliases = {
  '#api': path.join(rootDir, 'api'),
  '#common': path.join(rootDir, 'common'),
};
moduleAlias.addAliases(aliases);

console.log('aliases are', aliases);
