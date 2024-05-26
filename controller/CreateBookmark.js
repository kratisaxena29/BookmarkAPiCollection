const { CreateBookmark } = require('../models/createBookmark');

const createBookmark = async (req, res) => {
    let bookmark = req.body;
    try {
        let bookmarkData = new CreateBookmark(bookmark);
        // console.log("...bookmark..",bookmarkData)
        await bookmarkData.save(); 
        res.status(200).json({
            "response": bookmarkData,
            "Message": "Bookmark is created",
            "ErrorCode": null
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            "Error": "Details not save",
            "Message": "DataBase Issue",
            "ErrorCode": 308
        });
    }
};

const getBookMarkByFolderName = async () => {
    
}

module.exports = {
    createBookmark
};
