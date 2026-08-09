# 汪柯廷个人网站

这是一个无需构建工具的静态个人作品集，视觉风格参考 `yiweinanzi.github.io`，适合直接部署到 GitHub Pages。

## 后续如何更新

日常更新通常只需要编辑 [`data.js`](./data.js)：

- `profile`：姓名、简介、GitHub、邮箱和电话
- `metrics`：首屏四个关键指标
- `timeline`：教育、实习、项目和论文时间轴
- `skills`：技术栈
- `achievements`：荣誉与成就

样式集中在 [`styles.css`](./styles.css)，交互逻辑集中在 [`app.js`](./app.js)。头像文件为 `assets/portrait.jpg`。

## 本地预览

在项目根目录执行：

```powershell
python -m http.server 8000
```

然后打开 <http://localhost:8000>。

## GitHub Pages 部署

仓库应命名为 `KEDADA.github.io`，并推送到 `main` 分支。仓库内的 `.github/workflows/pages.yml` 会自动发布本站。
