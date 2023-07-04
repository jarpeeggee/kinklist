module.exports = {
  devServer: {
    disableHostCheck: true
  },
  ...(() => {
    if (process.env.GITHUB_ACTION) {
      return {
        publicPath: '/kinklist/',
      };
    }
    return {};
  })(),
}
