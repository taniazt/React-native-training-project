module.exports = api => {
  api.cache(false);

  const presets = ['module:metro-react-native-babel-preset'];

  return {
    presets,
    plugins,
  };
};
