module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
          {
            rootPathPrefix: '~config',
            rootPathSuffix: 'src/config/index',
          },
          {
            rootPathPrefix: '~navigation',
            rootPathSuffix: 'src/navigation/index',
          },
          {
            rootPathPrefix: '~redux',
            rootPathSuffix: 'src/redux/index',
          },
          {
            rootPathPrefix: '~modules',
            rootPathSuffix: 'src/modules/index',
          },
          {
            rootPathPrefix: '~screens',
            rootPathSuffix: 'src/screens/index',
          },
          {
            rootPathPrefix: '~utils',
            rootPathSuffix: 'src/utils/index',
          },
        ],
      },
    ],
  ],
};
