
const asyncHandler = (controller) => (req,res,next ) =>{
    Promise.resolve(controller(req,res)).catch(next);
}

const asyncHandler2 = (controller) => async(req,res,next) =>{
    Promise.resolve(controller(req,res)).catch(err=>next(err));
}

const asyncHandler3 = (controller)=> async (req,res,next) =>{
    try {
        await controller(req,res)
    } catch (error) {
        return res.status(error.status || 500).json({
            success:false,
            message : error
        })
    }
}
const asyncHandler4 = (controller) => {
    return async (req, res, next) => {
        try {
            await controller(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

module.exports = asyncHandler;
module.exports.asyncHandler = asyncHandler;
module.exports.asyncHandler2 = asyncHandler2;
module.exports.asyncHandler3 = asyncHandler3;
module.exports.asyncHandler4 = asyncHandler4;