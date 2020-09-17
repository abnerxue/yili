function request(url, params, successCallback, type = 'get', dataType = 'json') {
  const realUrl = Constant.BASE_URL + url
  $.ajax({
    type,
    // 'headers': {'Access-Control-Allow-Origin': '*',
    // "access-control-allow-credentials": "true",
    // 'withCredentials': 'false'},
    url: realUrl,
    data: params,
    dataType,
    success: res => {
      if (res.root.responsedata.RET_CODE === 0) {
        successCallback(res.root.responsedata.data)
      }
    }
  })
}

function chunk(arr, size) {
  var arr2 = []
  for (var i = 0; i < arr.length; i = i + size) {
    arr2.push(arr.slice(i, i + size))
  }
  return arr2
}
