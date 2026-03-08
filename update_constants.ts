import fs from 'fs';
import path from 'path';

const filePath = path.resolve('constants.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Remove w_1200 from f_auto,q_auto,w_1200
// We replace 'f_auto,q_auto,w_1200' with 'f_auto,q_auto'
content = content.replace(/f_auto,q_auto,w_1200/g, 'f_auto,q_auto');

// 2. Add q_auto to f_auto if missing (specifically upload/f_auto/)
// This handles cases like '.../upload/f_auto/v...' -> '.../upload/f_auto,q_auto/v...'
content = content.replace(/upload\/f_auto\//g, 'upload/f_auto,q_auto/');

fs.writeFileSync(filePath, content);
console.log('Updated constants.tsx');
