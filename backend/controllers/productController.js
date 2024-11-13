exports.getProducts = async (req, res, next) => {
    
    res.json({
        success: true,
        message:'get products'
    })
}

exports.getSingleProducts = async (req, res, next) => {
    
    res.json({
        success: true,
        message:'get single products'
    })
}