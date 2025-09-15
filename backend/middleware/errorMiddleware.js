const notFound = (req, res, next) => {
    const error = new Error(`Not Found ~ ${req.orginalURL}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, next) => {
    let statusCode =  res.statusCode === 200 ?  500 :res.statusCode
    let message = err.message

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 400
        message = 'Resource Error'

    }
    res.status(statusCode).json({
        status:statusCode, 
        message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}


export{notFound, errorHandler}