const getList = (author, keyword) => {
    //先返回假数据（格式是正确的）
    return [{
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: Date.now(),
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: Date.now(),
            author: 'Sakura2'
        }
    ]
}

const getDetail = (id) => {
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1557988182619,
        author: 'zhangsan'
    }

}

const newBlog =(blogData)=>{
    //blogData 是一个博客对象，包含 titile content 属性
    console.log(blogData)
    return{
        id:3//新建博客，插入到数据表里面的 id
        
    }
}

const updateBlog = (id,blogData)=>{
    //id 就是要更新博客的id
    //blogData 是一个博客对象，包含 titile content 属性
    console.log('updatablog.....'+blogData.title+blogData.content)
    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}