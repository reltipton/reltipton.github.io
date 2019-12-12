module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === 'production'
    ? '/src/my-app/dist/'
    : '/'
};


