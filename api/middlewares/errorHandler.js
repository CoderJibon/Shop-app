//error handler middleware
const errorHandler = (error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "unknown Error";
  return res.status(errorStatus).json({
    massage: errorMessage,
    status: errorStatus,
    stack: error.stack,
  });
};

//export
export default errorHandler;
