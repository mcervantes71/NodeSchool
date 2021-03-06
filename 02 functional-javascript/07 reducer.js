module.exports = reduce = (arr, fn, initial) => (
  (reduceOne = (index, value) => {
    if (index > arr.length - 1) return value
    return reduceOne(index + 1, fn(value, arr[index], index, arr))
  })(0, initial)
)
