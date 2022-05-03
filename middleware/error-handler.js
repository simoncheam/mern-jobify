const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ message: "A server errors occurred" });
}

export default errorHandlerMiddleware