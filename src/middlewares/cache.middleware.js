const memoryCache = require("memory-cache");
const { CACHE_KEY } = require("../config");
module.exports = function( duration ){
    return (request, response, next)=>{
        const key = CACHE_KEY + request.originUrl || request.url;
        const catchBody = memoryCache.get(key);

        if( catchBody ) {
            return response.send(
                JSON.parse( catchBody )
            );
        } else {
            response.sendResponse = response.send;
            response.send = body =>  {
                memoryCache.put(
                    key,
                    body,
                    duration * 100
                );
                response.sendResponse(body);
            };
            next();
        }
    }
};