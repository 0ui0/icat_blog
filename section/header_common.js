// 定义公共头部
var G_head = function () {
    let h_title = "Hello World!"
    let h_text = "当睡眠的意象向开始渲染，徒留下一只耳朵，藏在呼吸的胸口，假装聆听那些不属于我的故事。"
    let h_nav_li = [
        {
            name: "Home",
            url: "#!/index"
        },
        {
            name: "✦",
            url:"javascript:history.go(-1)",
        },
        {
            name: "Gallery",
            url: "#!/gallery"
        }
    ]
    h_nav_focus = h_nav_li[0].name
    let h_img_url_num = Math.floor(1+Math.random()*6)
    if (h_img_url_num<10){
        h_img_url_num = "0"+h_img_url_num;
    }
   
    return {
        //${h_img_url_num}
        /* oncreate:function(vnode){              
            let oImg = document.getElementById("h_img")
            let timer = null
            let opacity = 100

            function startMove (target) {               
                clearInterval(timer)
                timer = setInterval(function(){
                    var speed = 0;
                    if(target - opacity > 0){
                        speed = 2
                    }else{
                        speed = -2
                    }
                    if (opacity == target) {
                        clearInterval(timer)
                    }else{
                        opacity += speed
                        oImg.style.opacity = opacity/100
                    }
                },30)
            }
            oImg.onmouseover = function () {
                startMove(70)
            }
            oImg.onmouseout = function () {
                startMove(100)
            }
        },  */
        view: function () {
            return m(".h_main", [
                m("#h_img.h_img",{
                    style:`background-image:url(./image/h_img_${h_img_url_num}.jpg)`
                },[
                    m(".h_title", h_title),
                    m(".h_text", h_text),
                    m(".nav", [
                        m("ul", h_nav_li.map((value, index) => m("li", m("a", {
                            class: h_nav_focus == value.name ? "h_nav_focus" : "",
                            href: value.url,
                            onclick: function () {
                                h_nav_focus = value.name
                            }
                        }, value.name))))
                    ]),
                ])

            ])
        }
    }
}

