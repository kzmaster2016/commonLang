import http from 'http';
import fs from 'fs';
import path from 'path';
import url from 'url';

// 配置
const CONFIG = {
  port: 3000,
  staticDir: 'downloads',  // 存放文件的目录
  enableDirList: true      // 开启目录浏览
};

// 创建服务
const server = http.createServer((req, res) => {
  try {
    const parsedUrl = url.parse(req.url, true);
    let requestPath = decodeURIComponent(parsedUrl.pathname || '/');

    // 安全拦截：禁止访问上级目录
    if (requestPath.includes('..')) {
      res.writeHead(403, { 'Content-Type': 'text/html;charset=utf-8' });
      return res.end('<h1>403 禁止访问</h1>');
    }

    // 真实路径
    const baseDir = path.resolve('D:\\work\\softpack');
    const filePath = path.join(baseDir, requestPath);

    // 不存在
    if (!fs.existsSync(filePath)) {
      res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' });
      return res.end('<h1>404 文件不存在</h1>');
    }

    const stat = fs.statSync(filePath);

    // =============== 目录：展示导航 + 文件列表 ===============
    if (stat.isDirectory()) {
      if (!CONFIG.enableDirList) {
        res.writeHead(403);
        return res.end('目录浏览已关闭');
      }

      const files = fs.readdirSync(filePath);
      res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });

      // 面包屑导航
      const pathSegments = requestPath.split('/').filter(seg => seg);
      let breadcrumb = '<a href="/">首页</a> / ';
      let currentPath = '';
      pathSegments.forEach(seg => {
        currentPath += `/${seg}`;
        breadcrumb += `<a href="${currentPath}">${seg}</a> / `;
      });
      breadcrumb = breadcrumb.replace(/ \/ $/, '');

      // 渲染页面
      let html = `
        <div style="max-width:1000px;margin:30px auto;font-size:16px">
          <h2>📁 文件下载中心</h2>
          <div style="margin-bottom:15px;color:#666">路径：${breadcrumb}</div>
          <div style="border:1px solid #eee;padding:15px;border-radius:8px">
            <ul style="list-style:none;padding:0;margin:0">
      `;

      // 返回上一级
      if (requestPath !== '/') {
        const parentPath = path.dirname(requestPath);
        html += `<li style="padding:8px 0;">
                  <a href="${parentPath}" style="text-decoration:none;color:#007bff">📂 .. 返回上一级</a>
                </li>`;
      }

      // 列出当前目录所有内容
      files.forEach(file => {
        const full = path.join(filePath, file);
        const isDir = fs.statSync(full).isDirectory();
        const link = path.join(requestPath, file);

        const icon = isDir ? '📂' : '📄';
        html += `
          <li style="padding:8px 0;border-bottom:1px solid #f5f5f5">
            <a href="${link}" style="text-decoration:none;color:#007bff">
              ${icon} ${file}${isDir ? '/' : ''}
            </a>
          </li>`;
      });

      html += `</ul></div></div>`;
      return res.end(html);
    }

    // =============== 文件：直接下载 ===============
    const fileName = path.basename(filePath);
    res.writeHead(200, {
      'Content-Type': 'application/octet-stream',
      'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(fileName)}`
    });
    fs.createReadStream(filePath).pipe(res);

  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/html;charset=utf-8' });
    res.end('<h1>500 服务器错误</h1>');
  }
});

// 启动
server.listen(CONFIG.port, () => {
  console.log('✅ 服务启动成功：http://localhost:' + CONFIG.port);
//   console.log('📂 下载目录：' + path.resolve(__dirname, CONFIG.staticDir));
});