import { config } from '../config/config.js';
import { PACKET_TYPE } from '../constants/header.js';
import { packetParser } from '../utils/parser/packetParser.js';
import { getHandlerById } from '../handler/index.js';

export const onData = (socket) => async (data) => {
  socket.buffer = Buffer.concat([socket.buffer, data])
  const totalHeaderLength = config.packet.totalLength + config.packet.typeLength;

  while(socket.buffer.length >= totalHeaderLength){
    const length = socket.buffer.readUInt32BE(0);
    const packetType = socket.buffer.readUInt8(config.packet.totalLength);

    if(socket.buffer.length >= length){
      const packet = socket.buffer.subarray(totalHeaderLength, length);
      socket.buffer = socket.buffer.subarray(length);
      try{
        switch (packetType) {
          case PACKET_TYPE.NORMAL: {
            const { handlerId, userId, payload } = packetParser(packet);
            const handler = getHandlerById(handlerId);

            handler( { socket, userId, payload })
          }
        }
      }catch(e) {
        console.error(e)
      }
    } else{

    }
  }
};
