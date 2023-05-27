module.exports = function(request,  response, next){
    const queryString = request.query;
    for(const key in queryString){
        const length = queryString[key].length;
        const isValid = length > 20 ? false : !isNaN(parseInt(queryString[key]));
        if(!isValid){
            queryString[key] = parseInt(queryString[key]);
        }
    }
    request.query = queryString;
    next();
};