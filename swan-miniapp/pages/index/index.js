/**
 * @file index.js
 * @author swan
 */
const app = getApp()

function stopWatch() {
    return new Promise(resolve => {
      const start = Date.now();
      swan.createSelectorQuery()
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
    onLoad() {
        queryCounts().then(console.log)
    }
})
