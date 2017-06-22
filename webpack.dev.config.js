var path=require('path');



var config={
	entry:'./src/main.js',
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'bundle.js'
	}



}

module.exports=config;