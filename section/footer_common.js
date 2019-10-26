 // 定义公共尾部
 var G_foot = function(){
    let oLeft = "a.o-o.space"
    let oRight = "©2018"
    return {
        view:function(){
            return m(".f_main",[m(".f_left",m("a",{href:"#!/index"},oLeft)),m(".f_right",oRight)])
        }
    }
}