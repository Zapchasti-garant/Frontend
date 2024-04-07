import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const source = join(__dirname, '..', '.htaccess');
const destination = join(__dirname, '..', 'public', '.htaccess');
const nginx = join(__dirname, '..', 'nginx.conf');
const target = join(__dirname, '..', 'public', 'nginx.conf');

import { copyFileSync } from 'fs';
copyFileSync(source, destination);
copyFileSync(nginx, target);
