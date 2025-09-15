import asyncHandler from 'express-async-handler'

//  @desc   Get All Book
// route    GET /api/books
// @access  Public

const getBooks = asyncHandler(async(req, res)=> {
    res.send('Get All Books')
})