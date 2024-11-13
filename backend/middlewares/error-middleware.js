const errorMiddleware = (err, req, res, next) =>{
    console.statuss=err.statuss || 500;
    const message=err.message || "BACKEND ERROR";
    const extraDetails=err.extraDetails || "Error from backend";
    return res.status(statuss).json({message,extraDetails});
}
module.exports=errorMiddleware;