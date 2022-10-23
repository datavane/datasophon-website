export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '关于DataSophon',
        children: [
          {
            title: 'DataSophon简介',
            link: '/zh-cn/docs/demo1.html',
          },
          {
            title: '建议配置',
            link: '/zh-cn/docs/dir/advice_config.html',
          },
          {
            title: '名称解释',
            link: '/zh-cn/docs/dir/explan.html',
          }
        ],
      },
      {
        title: '快速开始',
        children: [
          {
            title: '环境配置',
            link: '/zh-cn/docs/dir/environment.html',
          },
          {
            title: '快速部署',
            link: '/zh-cn/docs/dir/deploy.html',
          }
        ],
      },
    ],
    barText: '文档',
  },
};
