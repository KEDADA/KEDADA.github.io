# 汪柯廷个人网站

这是一个无需构建工具的静态个人作品集，部署于 <https://kedada.github.io/>。

## 后续如何更新

日常内容更新只需编辑 [`data.js`](./data.js)：

- `profile`：姓名、简介、GitHub、邮箱和电话
- `proof`：首屏四个代表性成果
- `timeline`：教育、实习、研究和开源项目
- `skills`：专业技能
- `achievements`：荣誉与成果

页面结构位于 [`index.html`](./index.html)，样式位于 [`styles.css`](./styles.css)，筛选和详情弹窗交互位于 [`app.js`](./app.js)。

## 本地预览

```powershell
python -m http.server 8000
```

打开 <http://localhost:8000> 即可。

## GitHub Pages 部署

推送到 `main` 分支后，`.github/workflows/pages.yml` 会自动发布网站。
