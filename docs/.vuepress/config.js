module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        logo: '/assets/images/logo.png',
        nav: [
            { text: '介绍', link: '/' },
            { text: '指南', link: '/guides/install' },
            { text: '组件', link: '/sss' },
            { text: '1.01', link: 'https://google.com' }
        ],
        sidebar: [
            {
                title: '指南',   // 必要的
                path: '/guides/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    {
                        title:'安装',
                        path:'/guides/install'
                    }
                ]
            },

        ]
    }
}
