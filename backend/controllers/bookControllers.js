import asyncHandler from 'express-async-handler'


//  @desc   Get All Book
// route    GET /api/books
// @access  Public

const getBooks = asyncHandler(async(req, res)=> {
    res.send('Get All Books')
})

//  @desc   CREATE New Book
// route    POST /api/books
// @access  Public
const createBooks = asyncHandler(async(req, res)=> {
    res.send('Create New Books')
})


//  @desc   Get Book Detail
// route    GET /api/books
// @access  Public

const getBookDetail = asyncHandler(async(req, res)=> { // harusnya pakai id
    res.send(`Get Book Detail ${req.params.id}`)
})

//  @desc   Update Book 
// route    PUT /api/books/:id
// @access  Public


const updateBook = asyncHandler(async(req, res)=> {
    res.send(`Updates Books with id ${req.params.id}`)
})

//  @desc   Delete Book 
// route    PUT /api/books/:id
// @access  Public
const deleteBook = asyncHandler(async(req, res)=> {
    res.send(`Delete Books with id ${req.params.id}`)
})

export{
    getBooks, 
    createBooks,
    getBookDetail,
    deleteBook, 
    updateBook,
}