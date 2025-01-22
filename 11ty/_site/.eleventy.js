module.exports = function (eleventyConfig) {
	eleventyConfig.addLiquidFilter(
		"wrap",
		function (arg1, arg2, arg3) {
			return "<" + arg2 + ">" + arg1 + "</" + arg3 + ">";
		}
	);
};