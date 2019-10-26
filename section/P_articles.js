// 定义多级文章页面
var pageFunctions
var createArticlePage = function () {
    pageFunctions = oDataBase.articles.map(function (value, index) {
        return function () {
            return {
                oncreate: function () {
                    let oTitle = document.getElementsByClassName("title")[0]
                    let oText = document.getElementsByClassName("text")[0]
                    let oMessage = document.getElementsByClassName("message")[0]
                    oText.innerHTML = value.html
                    let oCode = document.getElementsByTagName("code")[0]
                    let conver = new HyperDown
                    oTitle.innerHTML = value.title
                    oText.innerHTML = conver.makeHtml(oCode.innerHTML)
                    oMessage.innerHTML = `<strong>作者：</strong>${value.author}&nbsp;&nbsp;<strong>时间：</strong>${value.date}`
                },
                view: () => m(".page_body", [m(".title"), m(".message"), m(".text")])
            }
        }

    })
    return pageFunctions
}
