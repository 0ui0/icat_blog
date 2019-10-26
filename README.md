# 预览
![预览图](https://github.com/0ui0/project1/blob/master/preview.png)
# 介绍
这是一个超级超级简单滴静态博客项目<(￣︶￣)>
不过需要服务器环境才能运行╮(╯▽╰)╭
把整个项目项目丢在服务器上就行啦．<{=．．．．（嘎~嘎~嘎~）

# 使用
通过配置“根目录/data/data.js”里面的数据内容来添加文章，
我们通过创建oDatabase对象并调用它的create方法来生成文章，格式是酱紫滴
```
new oDatabase.create({
    data:"日期",
    author:"作者",
    title:"标题",
    summary:"摘要",
    text:`正文内容（Markdown语法格式）`
})
```

# 用到的框架
mirthil.js => 页面渲染框架
less.css => css框架
HyperDown => 解析Markdown语法
还用到了必应搜索的每日图片嗯！

# 结语
这是我在边学习js边完成的项目，也许里面有很多不成熟的写法（不过问题不大 划掉）


