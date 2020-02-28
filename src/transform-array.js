module.exports = function transform(arr) {
    if (!arr || typeof arr === 'number') {
        throw new SyntaxError("Error");
    } else if (arr.length === 0) {
        return [];
    } else if (typeof arr === 'object') {
        throw new Error("Error");
    } else {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === "--double-next") {
                arr[i] = arr[i + 1];
            } else if (arr[i] === "--double-prev") {
                arr[i] = arr[i - 1];
            } else if (arr[i] === "--discard-next") {
                arr.splice(i, 2);
            } else if (arr[i] === "--discard-prev") {
                arr.splice(i - 1, 2);
            }
        }
    }
};
