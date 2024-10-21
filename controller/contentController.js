exports.createContent = (req, res) => {
    console.log("Posted");
    
    res.status(200).json({
        status: 'success',
        message: "Hello from the server"
    })
}