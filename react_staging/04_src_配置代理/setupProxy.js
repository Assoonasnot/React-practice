const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        createProxyMiddleware('/api1',{ //遇见/api1前缀的请求，就会触发该代理的配置
            target:'http://localhost/api1:5000', //请求转发给谁
            changeOrigin:true, //控制服务器收到的请求头中Host的值
            pathRewrite:{'^/api1':''} //去除请求前缀，保证交给后台服务器的是正常的请求地址（必须配置）
        }),
        createProxyMiddleware('/api2',{
            target:'http://localhost/api2:5001',
            changeOrigin:true,
            pathRewrite:{'^/api2':''} 
        })
    )
}