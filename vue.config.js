module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changOrigin:true
      }
    }
  }
}



















/*const express = require('express')
const app = express()
 
var singer = require('data/data.json')  //本地json文件数据
//var recommend=require('./src/db/data/recommend.json')
 
var apiRoutes = express.Router();
app.use('/api',apiRoutes)
 
module.exports = {
   devServer:{      
	 before(app) {
       app.post('/api/singer', (req, res) => {
            res.json({              
                errno: 0,   // 这里是你的json内容
                data: singer
            })
        })
        // app.get('/api/recommend', (req, res) => {
        //     res.json({              
        //         errno: 0,   // 这里是你的json内容
        //         data: recommend
        //     })
        // })
    },
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null      //设置跨域，即将本文件内任何没有匹配到的静态文件，都指向跨域地址
   },
}
*/