const buildResponseKey = (methodKey, dataId) => {
  return methodKey + dataId;
}

module.exports = {
  buildResponseKey
}