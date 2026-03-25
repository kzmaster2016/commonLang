/**
中序+后序遍历二叉树

 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    const indexMap = new Map();
    inorder.forEach((val, idx) => indexMap.set(val, idx));

    let postIndex = postorder.length - 1;

    function build(left, right) {
        if (left > right) return null;

        // 1️⃣ 当前后序元素是根
        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);

        // 2️⃣ 在中序中定位根
        const mid = indexMap.get(rootVal);

        // 3️⃣ ⚠️ 先右后左（非常关键）
        root.right = build(mid + 1, right);
        root.left = build(left, mid - 1);

        return root;
    }

    return build(0, inorder.length - 1);
};