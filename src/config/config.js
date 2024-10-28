import { PORT, HOST, CLIENT_VERSION } from '../constants/env.js';

export const config = {
  server: {
    port: PORT,
    host: HOST,
  },
  client: {
    version: CLIENT_VERSION,
  }
};