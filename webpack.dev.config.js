var path=require('path');

var config={
	entry:[
		path:path.resolve(__dirname,'./dist'),
		filename:'bundle.js',//'./src/main.js',
	],
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'bundle.js'
	},
	module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    resolve: {
		extensions: ['', '.js', '.less', '.png', '.jpg', '.svg'],
		alias: {
			'kr-ui': path.join(process.cwd(), '/src/Components'),
			'kr': path.join(process.cwd(), '/src'),
			'redux': path.join(node_modules_dir, 'redux'),
			'react-redux': path.join(node_modules_dir, 'react-redux'),
			'mobx': path.join(node_modules_dir, 'mobx'),
			'mobx-react': path.join(node_modules_dir, 'mobx-react'),
			'react-router': path.join(node_modules_dir, 'react-router'),
			'material-ui': path.join(node_modules_dir, 'material-ui'),
			'lodash': path.join(node_modules_dir, 'lodash')
		},
	},
	plugins: [
	    new webpack.optimize.UglifyJsPlugin(),
	    new HtmlWebpackPlugin({template: './src/index.html'})
	]
}

module.exports=config;