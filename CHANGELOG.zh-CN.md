## 更新日志

### 2.12.0

*2019-10-01*

#### 新特性

- SuperForm
  - 新增SuperForm组件
  - 新增文档说明
  - 支持Typescript

#### 优化

- Docs
  - 更新 changelog 
  - 更新 SuperForm 文档
- Test
  - 优化 SuperForm 的单元测试
- Types
  - 修复 SuperForm 的类型声明文件

##
<i><sup>*</sup> 在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此请在 `dangerouslyUseHTMLString` 打开的情况下，确保 `message` 的内容是可信的，**永远不要**将用户提交的内容赋值给 `message` 属性。</i>
