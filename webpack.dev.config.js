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
		
	},
	plugins: [
	   
	]
}

module.exports=config;