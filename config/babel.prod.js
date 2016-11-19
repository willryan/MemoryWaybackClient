module.exports = {
  // Don't try to find .babelrc because we want to force this configuration.
  babelrc: false,
  presets: [
    // let, const, destructuring, classes, modules
    require.resolve('babel-preset-es2015'),
    // exponentiation
    require.resolve('babel-preset-es2016'),
    // JSX, Flow
    require.resolve('babel-preset-react'),

    require.resolve('babel-preset-stage-0')
  ],
  plugins: [
    // function x(a, b, c,) { }
    require.resolve('babel-plugin-syntax-trailing-function-commas'),
    // class { handleClick = () => { } }
    require.resolve('babel-plugin-transform-class-properties'),
    // @connect
    require.resolve('babel-plugin-transform-decorators-legacy'),
    // { ...todo, completed: true }
    require.resolve('babel-plugin-transform-object-rest-spread'),
    // html attrs
    require.resolve('babel-plugin-react-html-attrs'),
    // Polyfills the runtime needed for generators
    [require.resolve('babel-plugin-transform-runtime'), {
      helpers: false,
      polyfill: false,
      regenerator: true
    }],
    // Optimization: hoist JSX that never changes out of render()
    require.resolve('babel-plugin-transform-react-constant-elements')
  ],
};
