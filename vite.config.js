import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig(({mode}) => {
  return {
   resolve: process.env.VITEST
    ? {
     conditions: ['browser']
    }
    : undefined,
   css: {
     preprocessorOptions: {
       scss: {
         quietDeps: true,
         quiet: true,
       }
     }
   },
   plugins: [
    sveltekit()
   ],
   server: {
    https: (fs.existsSync(path.resolve(__dirname, 'server.key')) ?
     {
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
     } : null),
     allowedHosts: true,
     host: true,
    port: 7000
   }
  }
 }
);
