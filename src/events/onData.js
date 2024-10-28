import { config } from '../config/config.js';
import { packetParser } from '../utils/parser/packetParser.js';

export const onData = (socket) => async (data) => {
  socket.buffer = Buffer.concat([socket.buffer, data])
  const totalHeaderLength = config.packet.totalLength + config.packet.typeLength;

  while(socket.buffer.length > totalHeaderLength){
    const length = socket.buffer.readUInt32BE(0);
    const packetType = socket.buffer.readUInt8(config.packet.totalLength);

    if(socket.buffer.length >= length){
      const packet = socket.buffer.subarray(totalHeaderLength, length);
      socket.buffer = socket.buffer.subarray(length);
      try{
        const result = packetParser(socket);
        console.log(result)
      }catch(e) {
        console.error(e)
      }
    } else{

    }
  }

  console.log(data)
};
