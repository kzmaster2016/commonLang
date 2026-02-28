// 简化路径
// 给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格 绝对路径 （以 '/' 开头），请你将其转化为 更加简洁的规范路径。

// 在 Unix 风格的文件系统中规则如下：

// 一个点 '.' 表示当前目录本身。
// 此外，两个点 '..' 表示将目录切换到上一级（指向父目录）。
// 任意多个连续的斜杠（即，'//' 或 '///'）都被视为单个斜杠 '/'。
// 任何其他格式的点（例如，'...' 或 '....'）均被视为有效的文件/目录名称。
// 返回的 简化路径 必须遵循下述格式：

// 始终以斜杠 '/' 开头。
// 两个目录名之间必须只有一个斜杠 '/' 。
// 最后一个目录名（如果存在）不能 以 '/' 结尾。
// 此外，路径仅包含从根目录到目标文件或目录的路径上的目录（即，不含 '.' 或 '..'）。
// 返回简化后得到的 规范路径 。

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPathDIY = function (path) {
    if (path.length === '') {
        return '';
    }
    let stack = [];
    let cur = '/';//注意出入栈的 整体单位：必须是以 '/**'作为 元素入栈和出栈，

    for (let index = 1; index < path.length; index++) {
        const element = path[index];

        if (element === '/') {
            //如果存在连续多个/,仅保留一个
            if (cur === '/') {
                continue;
            }
            if (cur === '/.') {
                cur = '/';
            }
            else if (cur === '/..') {
                //需要出栈
                stack.pop();
                cur = '/';
            }
            else {
                //正常入栈
                stack.push(cur);
                cur = '/';
            }
        } else {
            cur += element;
        }
    }

    if (cur === '/' || cur === '/.') {
        if(stack.length === 0){
            stack.push('/');
        }
    } else if (cur === '/..') {
        stack.pop();
    } else {
        stack.push(cur);
    }
    let res = stack.join('');


    console.log(res);

    return res;

};

//标准答案
function simplifyPath(path) {
    // 1. 按 '/' 分割路径，得到所有路径片段
    const pathSegments = path.split('/');
    // 2. 初始化栈，存储有效目录层级
    const stack = [];

    // 3. 遍历所有路径片段，过滤并处理
    for (const segment of pathSegments) {
        // 忽略空字符串（连续/导致）和当前目录.
        if (segment === '' || segment === '.') {
            continue;
        }
        // 处理上级目录..：栈非空时弹出栈顶（返回上一级）
        if (segment === '..') {
            if (stack.length > 0) {
                stack.pop();
            }
            continue;
        }
        // 有效目录名：压入栈中
        stack.push(segment);
    }

    // 4. 拼接规范路径：开头加/，栈内元素用/连接
    return '/' + stack.join('/');
}