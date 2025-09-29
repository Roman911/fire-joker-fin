const path = require("path");
const HtmlBundlerPlugin = require("html-bundler-webpack-plugin");

let mode = "production";
console.log(mode + " mode");

module.exports = {
	mode: mode,
	devtool: mode === "development" ? "inline-source-map" : false,
	output: {
		path: path.resolve(__dirname, "dist"),
		clean: true,
		publicPath: ""
	},
	optimization: {
		splitChunks: false,
		runtimeChunk: false,
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	plugins: [
		new HtmlBundlerPlugin({
			entry: {
				index: {
					import: "src/index.html",
					filename: "index.html",
				},
			},
			js: {
				inline: true,
				filename: false,
				chunk: {
					vendor: false,
				},
			},
			css: {
				inline: true,
			},
			preload: false,
			prefetch: false,
		}),
	],
	module: {
		rules: [
			{
				test: /\.html$/,
				loader: HtmlBundlerPlugin.loader,
			},
			{
				test: /\.(s?css)$/,
				use: ["css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(png|svg|jpe?g|gif|ico|webp|woff|woff2|eot|ttf|otf|mp3|ogg|wav)$/i,
				type: "asset/inline",
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
				parser: {
					javascript: {
						// Примусово збираємо ВСІ dynamic import() як звичайні (без окремих чанків)
						dynamicImportMode: "eager",
					},
				},
			},
		],
	},
	// Налаштування для dev-сервера
	devServer: {
		static: path.resolve(__dirname, "dist"),
		watchFiles: ["src/**/*.*"],
		hot: true,
	},
};
