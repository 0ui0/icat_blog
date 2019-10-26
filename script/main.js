// 应用程序入口点
createArticlePage()
m.route(document.body, "/index",{
    "/index": {
        render:function(){
            return m("main",[m(G_head),m(P_index),m(G_foot)])
        }
    },
    "/gallery": {
        render:function(){
            return m("main",[m(G_head),m(P_gallery),m(G_foot)])
        }
    },
    "/article_0":{
        render:function(){
            return m("main",[m(G_head),m(pageFunctions[0]),m(G_foot)])
        }
    },
    "/article_1":{
        render:function(){
            return m("main",[m(G_head),m(pageFunctions[1]),m(G_foot)])
        }
    }
})
