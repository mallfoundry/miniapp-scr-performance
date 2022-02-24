function stopWatch() {
  return new Promise(resolve => {
    const start = Date.now();
    my.createSelectorQuery()
      .select(".container")
      .boundingClientRect()
      .exec(() => {
        const end = Date.now();
        resolve(end - start)
      })
  })
}

function queryCounts() {
  return Promise.all( Array.from(Array(100)).map(stopWatch))
}


Page({
  onReady() {
    queryCounts().then(console.log)
  },
});
