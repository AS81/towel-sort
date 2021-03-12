// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix === undefined || matrix.length === 0) {
        return result;
    } else {
        matrix.forEach(function (item, i) {
            i % 2 === 0
                ? (result = result.concat(item))
                : (result = result.concat(item.reverse()));
        });
        return result;
    }
};
