const WelfareOveriew = (function () {
  function init() {
    const activeWrapper = $('.active-wrapper-container')
    let activeWrapperElement = ''
    welfareOverviewDatas.forEach(w => {
      activeWrapperElement += `
        <div class="active-wrapper">
          <div class="active-title" data-id=1>${w.GC_EYWF_EVNT_NAME.VALUE}</div>
          <div class="active" >
            <a href=${w.GC_EYWF_EVNT_URL.VALUE}><img class="active-img" src=${w.GC_EYWF_EVNT_PICTURE.VALUE} /></a>  
            <div class="desc">${w.GC_EYWF_EVNT_COMTS.VALUE}</div>
          </div>
        </div>
      `
    })
    activeWrapper.html(activeWrapperElement)

    // request('/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetEventList',null,(data)=>{
    //   let activeWrapperElement = ''
    //   data.forEach(w => {
    //     activeWrapperElement += `
    //       <div class="active-wrapper">
    //         <div class="active-title">${w.GC_EYWF_EVNT_NAME.VALUE}</div>
    //         <div class="active">
    //           <a href=${w.GC_EYWF_EVNT_URL.VALUE}><img class="active-img" src=${w.GC_EYWF_EVNT_PICTURE.VALUE} /></a>
    //           <div class="desc">${w.GC_EYWF_EVNT_COMTS.VALUE}</div>
    //         </div>
    //       </div>
    //     `
    //   })
    //   activeWrapper.html(activeWrapperElement)
    // })
  }

  // 解析url,支持多参数
  function getQuery(search) {
    return Qs.parse(search, { ignoreQueryPrefix: true })
  }

  return {
    init,
    getQuery
  }
})()

WelfareOveriew.init()
