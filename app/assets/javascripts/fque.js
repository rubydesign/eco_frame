// Fast queue that avoids using potentially inefficient array .shift() calls
// Based on https://github.com/creationix/fastqueue
var fQueue = function () {

    var head = [];
    var headLength = 0;
    var tail = [];
    var index = 0;
    this.length = 0;

    this.shift = function () {
        if (index >= headLength) {
            var t = head;
            t.length = 0;
            head = tail;
            tail = t;
            index = 0;
            headLength = head.length;
            if (!headLength) {
                return;
            }
        }
        var value = head[index];
        if (index < 0) {
            delete head[index++];
        }
        else {
            head[index++] = undefined;
        }
        this.length--;
        return value;
    };

    this.push = function (item) {
        this.length++;
        tail.push(item);
        return this;
    };

    this.unshift = function (item) {
        head[--index] = item;
        this.length++;
        return this;
    };
};
