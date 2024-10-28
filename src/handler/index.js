import { HANDLER_IDS } from "../constants/handlerIds.js"

const handlers = {
    [HANDLER_IDS.INITIAL] : {
        protoType : 'initial.InitialPacket'
    }
}

export const getProtoTypeByHandlerId = (handlerId) => {
    if(!handlers[handlerId]){
        throw Error();
    }

    return handlers[handlerId].protoType;
}