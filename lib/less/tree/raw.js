(function (tree) {

tree.Raw = function (value) { this.value = value };
tree.Raw.prototype = {
    eval: function () { return this },
    toCSS: function () { return this.value }
};

})(require('less/tree'));
