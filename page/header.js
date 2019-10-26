// 定义公共头部
var G_head = function () {
    let h_title = "Hello World!"
    let h_text = "当睡眠的意象向开始渲染，徒留下一只耳朵，藏在呼吸的胸口，假装聆听那些不属于我的故事。"
    // let h_nav_li = ["主页", "插画集", "留言板"]
    let h_nav_li = [
        {
            name: "主页",
            url: "#!/index"
        },
        {
            name: "插画集",
            url: "#!/gallery"
        },
        {
            name: "留言板",
            url: "#!/board"
        }
    ]
    let h_nav_focus = "主页";
    let h_img_url_num = Math.floor(1+Math.random()*5)
    
    return {
        
        view: function () {
            return m(".h_main", [
                m(".h_img",{
                    style:`background-image:url(./image/h_img_0${h_img_url_num}.jpg);`
                }, [
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