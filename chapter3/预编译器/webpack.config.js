module.exports = {
    mode: 'development',
    module: {
        rules: [{ test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }]

    },
    
}