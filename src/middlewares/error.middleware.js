module.exports = (error, request, response, next)=>{
    const http_status = error.status || 500;
    return response.status(http_status). send(
        {
            status: http_status,
            message: error.message || 'Internal server error'
        }
    )
}
