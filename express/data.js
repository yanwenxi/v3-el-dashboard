let treedata = [
  {
    name: '一级菜单',
    cList: [
      { name: '1-1' },
      {
        name: '1-2',
        cList: [{ name: '1-2-1', cList: [{ name: '1-2-1-1' }] }]
      }
    ]
  },
  { name: '二级菜单' },
  {
    name: '三级菜单',
    cList: [{ name: '3-1' }, { name: '3-2' }]
  }
]
module.exports = {
  treedata
}
