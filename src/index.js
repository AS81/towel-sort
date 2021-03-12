// You should implement your task here.

module.exports = function towelSort(matrix) {
    console.log(`matrix - ${matrix}`);
    let rez = [];
    matrix.forEach(function (item, i) {
        i % 2 === 0
            ? (rez = rez.concat(item))
            : (rez = rez.concat(item.reverse()));
    });
    return rez;
};
