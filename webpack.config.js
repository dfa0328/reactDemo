var webpack = require('webpack');
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
	         },
	         {
				test:/\.css$/,
				loader: "style-loader!css-loader",
	         },
	         {
	         	test:/\.less$/,
				loader:"style-loader!css-loader!less-loader"
	         },
	         {
	         	test:/\.(png|jpg|gif)$/,
				loader:"url?limit=25000"
	         },

        ]
    },
     //webpack-dev-server配置
    devServer: {
        contentBase: './public',//默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录（本例设置到"build"目录）
       	port: 8082,//设置默认监听端口，如果省略，默认为"8080"
        
    }

    
}

module.exports=config;