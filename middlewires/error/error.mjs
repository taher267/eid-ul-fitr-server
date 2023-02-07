export default (err, req, res) => {
  const status = err?.status || 500;
  const message = err.message;
  res.status(status).json({
    success: false,
    message,
  });
};
