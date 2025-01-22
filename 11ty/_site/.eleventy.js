module.exports = function (eleventyConfig) {
	eleventyConfig.addLiquidFilter(
		"wrap",
		function (arg1, arg2, arg3) {
			if(arg3 == ""){
				return "<" + arg2 + ">" + arg1;
			}else if(arg2 == ""){
				return arg1 + "</" + arg3 + ">";
			}else{
				return "<" + arg2 + ">" + arg1 + "</" + arg3 + ">";
			}
		}
	);
};