module.exports = class HttpError extends Error {
  constructor(statusCode, message) {
    super(message);
    Error.captureStackTrace(this, HttpError);
    this.statusCode = statusCode;
  }
};
