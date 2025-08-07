# 项目文件浏览器

一个基于Web的纯前端项目文件浏览器，可以浏览项目目录结构并预览文件内容。无需服务器，可直接在浏览器中运行。

## 功能特性

- 📁 树形目录结构显示
- 📄 文件内容预览
- 🔍 支持多种文本文件类型
- 📱 响应式设计
- ⚡ 实时文件变化检测
- 🔄 自动刷新功能
- 🔒 安全的文件访问
- 🌐 纯前端实现，无需服务器

## 使用方法

### 直接使用

1. **打开文件浏览器**
   直接在浏览器中打开 `index.html` 文件

2. **浏览文件**
   - 点击文件夹前的箭头展开/折叠目录
   - 点击文件名查看文件内容
   - 使用"刷新目录"按钮手动更新
   - 启用"自动刷新"功能实时检测文件变化

### 部署到服务器

1. **上传文件**
   - 将 `index.html` 文件上传到您的服务器
   - 确保文件可以通过URL访问

2. **访问应用**
   - 通过URL直接访问：`https://your-domain.com/index.html`
   - 无需安装任何依赖或启动服务器

## 支持的文件类型

### 文本文件（可预览）
- HTML (.html, .htm)
- CSS (.css)
- JavaScript (.js)
- JSON (.json)
- XML (.xml)
- Markdown (.md, .markdown)
- 纯文本 (.txt)
- 日志文件 (.log)
- 配置文件 (.ini, .conf, .config, .yml, .yaml)
- 数据文件 (.csv, .tsv)
- 清单文件 (.manifest)

### 二进制文件（无法预览）
- 图片文件 (.png, .jpg, .jpeg, .gif, .ico)
- 压缩文件 (.zip, .rar, .7z)
- 可执行文件 (.exe, .dll, .so, .dylib)
- 其他二进制格式

## 实时更新功能

- **手动刷新**：点击"刷新目录"按钮
- **自动刷新**：启用后每10秒自动检查文件变化
- **变化检测**：比较目录结构，只在有变化时更新

## 项目结构

```
sgst-update-versions.github.io/
├── index.html          # 主页面
├── README.md          # 说明文档
└── 1.0.1/             # 项目文件目录
    ├── assets/
    │   ├── assets/
    │   ├── src/
    │   └── jsb-adapter/
    ├── project.manifest
    └── version.manifest
```

## 技术实现

- **前端技术**：HTML5, CSS3, JavaScript (ES6+)
- **文件访问**：静态数据结构
- **实时更新**：setInterval + 结构比较
- **文件类型检测**：基于文件扩展名
- **UI框架**：纯CSS，无外部依赖

## 自定义项目结构

如需修改显示的项目结构，请编辑 `index.html` 文件中的以下部分：

### 1. 修改目录结构
在 `getProjectStructure()` 方法中修改 `projectData` 对象：

```javascript
const projectData = {
    '.': [
        { name: 'your-folder', type: 'folder', path: 'your-folder' },
        { name: 'your-file.txt', type: 'file', path: 'your-file.txt' }
    ],
    // 添加更多目录...
};
```

### 2. 修改文件内容
在 `getFileContent()` 方法中修改 `fileContents` 对象：

```javascript
const fileContents = {
    'your-file.txt': '这是文件内容...',
    // 添加更多文件...
};
```

## 部署选项

### 1. 静态文件托管
- **GitHub Pages**: 免费托管
- **Netlify**: 自动部署
- **Vercel**: 快速部署
- **传统服务器**: 直接上传HTML文件

### 2. CDN部署
- 上传到CDN服务
- 通过CDN URL访问
- 享受全球加速

## 注意事项

1. 文件内容为静态数据，不会实时反映服务器上的实际文件
2. 如需显示真实文件内容，需要定期更新HTML文件中的数据
3. 大文件（>1MB）无法预览
4. 二进制文件会显示"无法预览"提示
5. 自动刷新功能会消耗一些系统资源

## 故障排除

### 文件无法显示
- 检查文件路径是否正确
- 确认文件已添加到静态数据中
- 查看浏览器控制台错误信息

### 文件无法预览
- 检查文件是否为支持的文本格式
- 确认文件内容已添加到 `fileContents` 对象中
- 检查文件编码是否为UTF-8

### 目录结构不显示
- 检查 `projectData` 对象中的路径配置
- 确认所有父目录都已定义
- 查看浏览器控制台错误信息