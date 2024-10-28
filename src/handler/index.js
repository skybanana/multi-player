import { HANDLER_IDS } from "../constants/handlerIds.js"

const handlers = {
    [HANDLER_IDS.INITIAL] : {
        handler: 1,
        protoType : 'initial.InitialPacket'
    },
    [HANDLER_IDS.CREATE_GAME]: {
        handler: 1,
        protoType: 'game.CreateGamePayload',
    },
    [HANDLER_IDS.JOIN_GAME]: {
        handler: 1,
        protoType: 'game.JoinGamePayload',
    },
    [HANDLER_IDS.UPDATE_LOCATION]: {
        handler: 1,
        protoType: 'game.LocationUpdatePayload',
    },
}

export const getProtoTypeByHandlerId = (handlerId) => {
    if(!handlers[handlerId]){
        console.log("handlerId : " + handlerId)
        throw Error();
    }

    return handlers[handlerId].protoType;
}