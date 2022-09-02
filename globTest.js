/* La fonction foo prends en paramètre un tableau contenant plusieurs tableaux de valeur
et analyse si ses intervalles se chevauchent,
si oui on regroupe dans un tableau les intervalles en gardant la plus petite et la plus grande valeur
sinon on renvoie le tableau initial dans un ordre croissant
*/

// Test réaliser en 4h.

const sortArr = (arr) => {
  let arrSorted = arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  return arrSorted;
};

const findIntervals = (arr) => {
  let sortedArr = sortArr(arr);
  let resultArr = [[0, 0]];

  for (var i = 0; i < sortedArr.length; i++) {
    let interval1 = resultArr[resultArr.length - 1];
    let interval2 = sortedArr[i];
    resultArr.pop();

    if (interval1[0] === interval2[0]) {
      resultArr.push([interval1[0], interval2[1]]);
    } else {
      if (interval1[1] >= interval2[0] && interval1[1] < interval2[1]) {
        resultArr.push([interval1[0], interval2[1]]);
      } else if (interval1[1] > interval2[0] && interval1[1] >= interval2[1]) {
        resultArr.push([interval1[0], interval1[1]]);
      } else if (interval1[1] < interval2[0]) {
        if (!(interval1[0] === 0 && interval1[1] === 0))
          resultArr.push(interval1);
        resultArr.push(interval2);
      }
    }
  }
  return resultArr;
};

console.log(
  findIntervals([
    [0, 3],
    [6, 10],
  ])
);
console.log(
  findIntervals([
    [0, 5],
    [3, 10],
  ])
);
console.log(
  findIntervals([
    [0, 5],
    [2, 4],
  ])
);
console.log(
  findIntervals([
    [7, 8],
    [3, 6],
    [2, 4],
  ])
);
console.log(
  findIntervals([
    [3, 6],
    [3, 4],
    [15, 20],
    [16, 17],
    [1, 4],
    [6, 10],
    [3, 6],
  ])
);
console.log(
  findIntervals([
    [0, 5],
    [0, 5],
  ])
);
console.log(
  findIntervals([
    [4, 7],
    [3, 4],
    [18, 38],
    [0, 9],
    [67, 68],
    [24, 32],
    [89, 106],
  ])
);
