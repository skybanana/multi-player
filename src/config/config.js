import { PORT, HOST, CLIENT_VERSION } from '../constants/env.js';
import { TOTAL_LENGTH, PACKET_TYPE_LENGTH, PACKET_TYPE } from '../constants/header.js';

export const config = {
  server: {
    port: PORT,
    host: HOST,
  },
  client: {
    version: CLIENT_VERSION,
  },
  packet: {
    totalLength: TOTAL_LENGTH,
    typeLength: PACKET_TYPE_LENGTH,
  },
  packetType: {
    ping: PACKET_TYPE.PING,
    nomal: PACKET_TYPE.NORMAL,
    location: PACKET_TYPE.LOCATION,
  }
};