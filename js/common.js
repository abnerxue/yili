function request(url, params, successCallback, type = 'get', dataType = 'json') {
  const realUrl = Constant.BASE_URL + url
  $.ajax({
    type,
    headers: {'Access-Control-Allow-Origin': '*',
    "access-control-allow-credentials": "true",
    },
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
