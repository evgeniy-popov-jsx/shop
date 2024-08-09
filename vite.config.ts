import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';
import path from 'path';
import { createRequire } from 'node:module';

const WRONG_CODE = `import { bpfrpt_proptype_WindowScroller } from "../WindowScroller.js";`;
const require = createRequire( import.meta.url );

function reactVirtualized() {
  return {
    name: 'my:react-virtualized',
    configResolved() {
      const file = require
        .resolve('react-virtualized')
        .replace(
          path.join('dist', 'commonjs', 'index.js'),
          path.join('dist', 'es', 'WindowScroller', 'utils', 'onScroll.js')
        );
      const code = fs.readFileSync(file, 'utf-8');
      const modified = code.replace(WRONG_CODE, '');
      fs.writeFileSync(file, modified);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    reactVirtualized(),
  ],
  resolve: {
    alias: {
      application: "/src/application",
      domain: "/src/domain",
      infrastructure: "/src/infrastructure",
      presentation: "/src/presentation",
    }
  }
})
