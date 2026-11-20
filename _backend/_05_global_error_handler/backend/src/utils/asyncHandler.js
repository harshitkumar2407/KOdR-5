
// const asyncHandler = (controller) => (req,res,next ) =>{
//     Promise.resolve(controller(req,res)).catch(next);
// }

const asyncHandler = (controller) => async(req,res,next) =>{
    Promise.resolve(controller(req,res)).catch(err=>next(err));
}

const asyncHandler2 = (controller)=> async (req,res,next) =>{
    try {
        await controller(req,res)
    } catch (error) {
        return res.status(error.status || 500).json({
            success:false,
            message : error
        })
    }
}
