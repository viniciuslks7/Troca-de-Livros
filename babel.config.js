module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-styled-components',
        {
          ssr: false,
          displayName: true,
          fileName: false,
        },
      ],
    ],
  };
};