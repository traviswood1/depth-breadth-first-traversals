const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {
  const s = [start];
  const v = new Set();
  v.add(start);

  while (s.length) {
    let curr = s.pop();
    if (curr === end) return true;

    adjList[curr].forEach(node => {
      if (!v.has(node)) {
        s.push(node);
        v.add(node);
      }
    })
  }
  return false;
}

