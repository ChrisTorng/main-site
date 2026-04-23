interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Tamermonkey 腳本',
    description: `個人常用的 Tampermonkey 腳本，包含多項網頁自動化功能，特別是手機瀏覽體驗改善方面。`,
    // imgSrc: '/static/images/google.png',
    href: 'https://github.com/ChrisTorng/TampermonkeyScripts',
  },
  {
    title: 'eBird 網站腳本',
    description: `改善使用 eBird 網站的體驗。`,
    href: 'https://github.com/ChrisTorng/eBirdScripts',
  },
  {
    title: 'eBird 工具',
    description: `包括 eBird 最近熱門地點及鳥訊快報整理功能。`,
    href: 'https://github.com/ChrisTorng/eBird',
  },
  {
    title: 'InfoProcess',
    description: `包括剪貼簿檢視器等幾個小功能。`,
    href: 'https://github.com/ChrisTorng/InfoProcess',
  },
]

export default projectsData
