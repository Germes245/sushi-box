import { join } from 'node:path';
import { readFileSync } from 'node:fs';
import { currentDir } from '../utils/currentDir.js';
const dataFileName = join(currentDir, 'data', 'catalog.json');
const dataFile = readFileSync(dataFileName, 'utf8');
const database = JSON.parse(dataFile);
export { database };