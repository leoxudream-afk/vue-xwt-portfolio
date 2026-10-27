export const galleryWorks = [
  {
    id: 0,
    title: '拂过柔软绿意',
    img: '/work-01.webp', // 封面图
    gallery: ['/work-01-detail-1.webp', '/work-01-detail-2.webp', '/work-01-detail-3.webp'],
    tags: ['插画', '自然'],
    year: '2026',
    role: '视觉设计',
    desc: '绿意主题插画，柔和低饱和配色，营造安静治愈的氛围。',
  },
  {
    id: 1,
    title: '青柠开心果酥塔',
    img: '/work-08.webp',
    gallery: ['/work-08-detail-1.webp', '/work-08-detail-2.webp'],
    tags: ['美食摄影', '品牌'],
    year: '2026',
    role: '摄影&修图',
    desc: '甜品商业拍摄，突出食物质感，清新明亮色调。',
  },
  {
    id: 2,
    title: '微风轻轻耳畔',
    img: '/work-02.webp',
    gallery: [], // 没有详情图就放空数组，弹窗会自动隐藏图集区域
    tags: ['海报'],
    year: '2025',
    role: '平面设计',
    desc: '氛围感海报设计。',
  },
  {
    id: 3,
    title: '草莓云朵绒绒糕',
    img: '/work-09.webp',
    gallery: ['/work-09-detail-1.webp'],
    tags: ['美食摄影'],
    year: '2026',
    role: '摄影',
    desc: '草莓甜品拍摄，柔和柔光。',
  },
  {
    id: 4,
    title: '漫步光影之间',
    img: '/work-03.webp',
    gallery: [],
    tags: ['摄影'],
    year: '2025',
    role: '拍摄后期',
    desc: '风光人像摄影。',
  },
  {
    id: 5,
    title: '榛果黑巧慕斯塔',
    img: '/work-10.webp',
    gallery: [],
    tags: ['美食摄影'],
    year: '2026',
    role: '摄影',
    desc: '巧克力甜品商业图。',
  },
  {
    id: 6,
    title: '穿过静谧林海',
    img: '/work-04.webp',
    gallery: [],
    tags: ['摄影'],
    year: '2025',
    role: '拍摄后期',
    desc: '森林氛围感摄影。',
  },
  {
    id: 7,
    title: '黄桃焦糖布丁糕',
    img: '/work-11.webp',
    gallery: [],
    tags: ['美食摄影'],
    year: '2026',
    role: '摄影',
    desc: '黄桃布丁甜品拍摄。',
  },
  {
    id: 8,
    title: '为乐而连',
    img: '/work-05.webp',
    gallery: ['/work-05-detail-1.webp', '/work-05-detail-2.webp', '/work-05-detail-3.webp'],
    tags: ['UI', '品牌'],
    year: '2025',
    role: 'UI设计师',
    desc: '线上社交小程序界面设计，包含首页、消息、个人中心模块。',
  },
  {
    id: 9,
    title: '青柠集饮',
    img: '/work-12.webp',
    gallery: [],
    tags: ['包装设计'],
    year: '2026',
    role: '平面设计',
    desc: '茶饮品牌包装方案。',
  },
  {
    id: 10,
    title: '为乐而写',
    img: '/work-06.webp',
    gallery: ['/work-06-detail-1.webp'],
    tags: ['UI'],
    year: '2025',
    role: 'UI设计师',
    desc: '笔记类App界面设计。',
  },
  {
    id: 11,
    title: '金色花漾',
    img: '/work-13.webp',
    gallery: [],
    tags: ['插画'],
    year: '2026',
    role: '插画师',
    desc: '花卉主题装饰插画。',
  },
  {
    id: 12,
    title: '为乐而聚',
    img: '/work-07.webp',
    gallery: ['/work-07-detail-1.webp', '/work-07-detail-2.webp'],
    tags: ['UI', '活动页'],
    year: '2025',
    role: 'UI设计师',
    desc: '线下活动落地页、报名表单设计。',
  },
  {
    id: 13,
    title: '桃色梦境',
    img: '/work-14.webp',
    gallery: [],
    tags: ['插画'],
    year: '2026',
    role: '插画师',
    desc: '梦幻粉色系插画。',
  },
  {
    id: 14,
    title: '水晶蓝调',
    img: '/work-15.webp',
    gallery: [],
    tags: ['抽象视觉'],
    year: '2026',
    role: '视觉设计',
    desc: '蓝色流体抽象视觉作品。',
  },
]

// 工作经历：一个数组，每条是一段经历
export const careerList = [
  {
    time: '时间',
    company: '公司名称',
    role: '职位',
    desc: '岗位职责',
  },
  {
    time: '时间',
    company: '公司名称',
    role: '职位',
    desc: '岗位职责',
  },
  {
    time: '时间',
    company: '公司名称',
    role: '职位',
    desc: '岗位职责',
  },
]

// 数据亮点：三个数字
export const stats = [
  { num: '8', unit: '年+', label: 'UI/UX设计经验' },
  { num: '3', unit: '端协同', label: '大屏/PC/小程序' },
  { num: '200', unit: '+', label: '项目经验' },
]

// 个性标签：一组文字
export const tags = ['产品设计师', 'UI/UX设计师', 'UI工程师', 'AI设计师', '前端工程师', '产品经理']

// 个人作品：3 张卡片
export const personalWorks = [
  {
    id: '01',
    tag: ' B端管理平台',
    title: '企业级后台系统',

    desc: '消防安全管理平台 /业务管理系统 /流程审批与台账管理',
    img: '/public/ai-video-cover.webp',
    // link: 'https://anmaai.cn/video.html',
  },
  {
    id: '02',
    tag: '移动端产品',
    title: 'APP与小程序设计',
    desc: '企业APP /政务小程序 /移动办公与巡检应用',
    img: '/public/ai-design-cover.webp',
    // link: 'https://anmaai.cn/design.html',
  },
  {
    id: '03',
    tag: '数据可视化',
    title: '可视化大屏与看板',
    desc: '运营数据大屏 /监控指挥看板 /统计分析面板',
    img: '/public/ai-design-cover.webp',
    // link: 'https://anmaai.cn/design.html',
  },
]

// 个人优势：5 张卡片，wide 表示是否占两列
export const strengths = [
  {
    id: '01',
    tag: 'CORE',
    title: 'B端后台系统产品UI设计',
    details: ['业务需求拆解与原型输出', '后台界面与表单组件设计', '高保真交付与开发对接'],
    img: '/public/strength-1.webp',
    wide: true,
  },
  {
    id: '02',
    tag: 'CORE',
    title: '数据可视化大屏设计',
    details: ['指挥看板布局规划', '图表组件视觉设计', '大屏适配与动效设计'],
    img: '/public/strength-2.webp',
    wide: true,
  },
  {
    id: '03',
    tag: 'SYSTEM',
    title: '移动端APP/小程序设计',
    details: ['移动端交互流程设计', '巡检类功能界面设计', '多端组件规范输出'],
    img: '/public/strength-3.webp',
    wide: false,
  },
  {
    id: '04',
    tag: 'SYSTEM',
    title: '政企项目标书与方案撰写',
    details: ['数字化项目方案编写', '项目功能清单梳理', '投标材料配图制作'],
    img: '/public/strength-4.webp',
    wide: false,
  },
  {
    id: '05',
    tag: 'SYSTEM',
    title: '前端Vue3页面实现',
    details: ['HTML+CSS页面搭建', 'Vue3基础业务开发', 'ElementPlus组件应用'],
    img: '/public/strength-5.webp',
    wide: false,
  },
]

//联系方式
export const contactInfo = {
  phone: '18213560021',
  wechat: 'XWTa0o',
  email: 'leoxudream@gmail.com',
  qr: '/public/contact-qr.png',
}
