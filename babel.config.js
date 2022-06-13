module.exports = (api) => {
  var env = api.cache(() => process.env.NODE_ENV);

  return {
    plugins: ['macros']
  };
};
