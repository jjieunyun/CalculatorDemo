module.exports = {
  presets: ['module:@react-native/babel-preset','nativewind/babel'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@': './src',
          '@assets': './src/assets',
          '@images': './src/assets/images',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@types': './src/types',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};




