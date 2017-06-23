var config = {
	entry:[__dirname+'/src/main.js'],
	output:{
		path:__dirname+'/public',
		filename:'bundle.js'
	},

	module: {
        loaders: [
	         { 
	            test: /\.js$/,
	            loader: "babel-loader" 
	         }

        ]
    }
    
}

module.exports=config;