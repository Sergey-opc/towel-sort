
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let chek = false;
    let pass = [];
    let k = 0;
    if (matrix){
    for (let i = 0; i < matrix.length; i++) {
        if (chek) {
            for (let j = 0; j < matrix[i].length; j++) {
                chek = false;
                pass[k] = matrix[i][(matrix[i].length - j - 1)];
                k++;
            }
        } else {
            if (!chek) {
                for (let j = 0; j < matrix[i].length; j++) {
                    chek = true;
                    pass[k] = matrix[i][j];
                    k++;
                }
            }
        }
    }
    return (pass);
    }
    return([]);
}
