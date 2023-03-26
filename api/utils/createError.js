// create error
const createError = (msg, errStatus) => {
  let err = new Error();
  err.message = msg;
  err.status = errStatus;
  return err;
};

//export
export default createError;
