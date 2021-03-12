// You should implement your task here.

module.exports = function towelSort(matrix) {
    let rez = [];
    matrix.forEach(function (item, i) {
        i % 2 === 0 ? rez.concat(item) : rez.concat(item.reverse());
    });
    return rez;
};
