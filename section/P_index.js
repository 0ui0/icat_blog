// 定义首页
var P_index = function () {
    return {
        view: function () {
            return m(".index_body", oDataBase.articles.map(function (value, index) {
                return m(".b_block", [
                    m(".b_block_left", m("img", {
                        src: "./image/face_01.png"
                    })),
                    m(".b_block_right", [
                        m(".b_block_right_title", [m("span"), m("a.title", { href: `#!/article_${index}` }, value.title)]),
                        m(".b_block_right_text", value.summary)
                    ])
                ])
            }))
        }
    }
}


