var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.value = value;
    }
    TreeNode.prototype.preOrder = function () {
        var _a, _b;
        if (this.value) {
            process.stdout.write("".concat(this.value));
            (_a = this.leftNode) === null || _a === void 0 ? void 0 : _a.preOrder();
            (_b = this.rightNode) === null || _b === void 0 ? void 0 : _b.preOrder();
        }
    };
    TreeNode.prototype.inOrder = function () {
        var _a, _b;
        if (this.value) {
            (_a = this.leftNode) === null || _a === void 0 ? void 0 : _a.inOrder();
            process.stdout.write("".concat(this.value));
            (_b = this.rightNode) === null || _b === void 0 ? void 0 : _b.inOrder();
        }
    };
    TreeNode.prototype.postOrder = function () {
        var _a, _b;
        if (this.value) {
            (_a = this.leftNode) === null || _a === void 0 ? void 0 : _a.postOrder();
            (_b = this.rightNode) === null || _b === void 0 ? void 0 : _b.postOrder();
            process.stdout.write("".concat(this.value));
        }
    };
    return TreeNode;
}());
var insertLevelOrder = function (arr, i) {
    var root;
    if (i < arr.length) {
        root = new TreeNode(arr[i]);
        root.leftNode = insertLevelOrder(arr, 2 * i + 1);
        root.rightNode = insertLevelOrder(arr, 2 * i + 2);
    }
    return root;
};
var sourceArr = [4, 5, 1, 6, 8, 10];
var rootNode = insertLevelOrder(sourceArr, 0);
if (rootNode) {
    rootNode.preOrder();
    console.log();
    rootNode.inOrder();
    console.log();
    rootNode.postOrder();
}
