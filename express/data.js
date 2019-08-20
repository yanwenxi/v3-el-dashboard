let recursiondata = [
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
let myTreeData = {
  parent: [
    { name: '文件夹1', pid: 0, id: 1 },
    { name: '文件夹2', pid: 0, id: 2 },
    { name: '文件夹3', pid: 0, id: 3 },
    { name: '文件夹1-1', pid: 1, id: 4 },
    { name: '文件夹2-1', pid: 2, id: 5 }
  ],
  child: [
    { name: '文件1', pid: 1, id: 101 },
    { name: '文件2', pid: 1, id: 102 },
    { name: '文件2-1', pid: 2, id: 103 },
    { name: '文件2-2', pid: 2, id: 104 },
    { name: '文件1-1-1', pid: 4, id: 105 },
    { name: '文件2-1-1', pid: 5, id: 106 }
  ]
}
module.exports = {
  recursiondata,
  myTreeData
}
