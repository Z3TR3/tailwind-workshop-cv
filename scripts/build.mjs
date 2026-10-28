import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist/assets', { recursive: true });
await copyFile('index.html', 'dist/index.html');
await copyFile('assets/styles.css', 'dist/assets/styles.css');
console.log('Static site ready in dist/');
