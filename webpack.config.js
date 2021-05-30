const webpack =require('webpack')
const path= require('path')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const nodeExternals= require('webpack-node-externals')
const browser ={
    entry: path.resolve(__dirname,'./browser/main.tsx'),

    module: {

      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
            test:/\.css?$/,
            use:['style-loader','css-loader']

        },
        {
        test:/\.html?$/,
        loader:'html-loader'
        },
        {
          test: /\.(png|jpe?g|svg|gif)$/,
          loader:'file-loader'
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath:'/'
    },

  plugins: [new webpack.DefinePlugin(
     {
         isBrowser:true
     }
   )/*,new HtmlWebpackPlugin({
     favicon:'./favicon.gif'
   })*/],
   watchOptions: {
    poll: true,
    ignored: /node_modules/
  },
  devtool:'eval'
  
}
const server={
  entry: './server/main.tsx',
  mode:'development',
  target:'node',
  module: {

    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test:/\.css?$/,
        use:['style-loader','css-loader']

    },
    {
    test:/\.html?$/,
    loader:'html-loader'
    },
    {
      test: /\.(png|jpe?g|svg)$/,
      loader:'file-loader'
    }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'distServer'),
    publicPath:'/'

  },
  externals:[
    nodeExternals()
  ]
 ,
 plugins: [new webpack.DefinePlugin(
  {
      isBrowser:false
  }
)]
 

}
module.exports=[server,browser]
