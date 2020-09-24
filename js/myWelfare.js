const mywelfare = (function () {
  const YEAR = new Date()
  let year = YEAR.getFullYear()

  function init() {
    // 真实接口数据
    let h=$(window).height(),
        w=$(window).width()
        // let temp=h-70
        $('.container').css('height',h+'px')
        $('.container').css('width',w+'px')
        console.log( $('.container').height())
    $(window).resize(function() {
      console.log(3)
      console.log($(window).height());
      // let temp=h-70
      let h=$(window).height(),
         w=$(window).width()
       if(h<1020){
          $('.container').css('height','1010px')
          console.log( $('.container').height())
         }else{
          $('.container').css('height',h+'px')
          $('.container').css('width',w+'px')
          console.log( $('.container').height())
         }
    });
    const id = getQuery('EMPLID')
    request(
      '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfSum',
      { EMPLID: id },
      'GET',
      data => {
    const overiewContentElement = $('.content')
    let content = ''
    let [realData] = data

    content += `
      <div>
          <span class="lable">${realData.GC_SUM_YL_E_SHOPV.TEXT}</span><span>${realData.GC_SUM_YL_E_SHOPV.VALUE}</span>
      </div>
      <div class='content-item'>
          <span class="lable">${realData.GC_SUM_YL_GOODS.TEXT}</span><span>${realData.GC_SUM_YL_GOODS.VALUE}</span>
      </div>
      <div>
          <span class="lable">${realData.GC_SUM_E_POITS.TEXT}</span><span>${realData.GC_SUM_E_POITS.VALUE}</span>
      </div>
      <div class='content-item'>
        <span class="lable">${realData.GC_SUM_GOODS.TEXT}</span><span>${realData.GC_SUM_GOODS.VALUE}</span>
     </div>
     <div>
       <span class="lable">${realData.GC_SUM_AMT.TEXT}</span><span>${realData.GC_SUM_AMT.VALUE}</span>
     </div>
    `
    overiewContentElement.html(content)
    console.log(realData)
  })
    

    // }
    // )
    // getDetail()
    // 真实接口数据

    const id_ = getQuery('EMPLID')
    console.log(id_, year, 'year')
    $('.year').append(year)

    request(
      '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfDetail',
      {
        EMPLID: id_,
        GC_YEAR: year
      },
      'GET',
      data => {
    const detailContent = $('.detail-content')
    let detailDataElement = ''
    const [realDetailData] = data
    realDetailData.GC_MY_EYWF_IF.forEach(d => {
      console.log(d,'dddddd')
      d.GC_MY_EYWF_DETAIL.forEach(c => {
        detailDataElement += `
            <div class="detail-item">
              <div class="left-img">
              <img src=${d.GC_COST_PICTUE.VALUE}  class="detail-img" />
              <div class="welfare-name">${d.GC_COST_NAME.VALUE}</div>
              </div>
              <div class="right-content">
                <p><span class="lable">${c.GC_ENTITY_CASH_DESC.VALUE}</span><span>${c.GC_COST_ENTY_NUM.VALUE}</span></p>
              </div>
            </div>
         `
      })
    })
    detailContent.html(detailDataElement)
  })

    addEvent()
    // watchWindowSize()
      
    

    $('.home').click(() => {
      let host = window.location.host,
        port = window.location.port
      window.location.href =
        'http://' +
        host +
        '/psc/HCMTST/EMPLOYEE/HRMS/s/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_HomeInit'
    })
  }

  function addEvent() {
    const yearIcon = $('.year-icon')
    yearIcon.click(() => {
      $('.all-year').toggle()
    })

    $('.year-item').click(e => {
      const selectYear = Number(e.target.innerText)
      year = selectYear
      $('.year').html(year)
      $('.all-year').toggle()
      getDetail()
    })
  }

  // function watchWindowSize() {
  //   $(window).resize(function () {
  //     $('.container').css('height', document.documentElement.clientHeight)
  //   })
  // }

  function getQuery(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.substr(1).match(reg)
    if (r != null) {
      return decodeURI(r[2])
    }
    return null
  }

  function getDetail() {
    console.log(year)
    const id = getQuery('EMPLID')
    request(
      '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfDetail',
      {
        EMPLID: id,
        GC_YEAR: year
      },
      'GET',
      data => {
        const detailContent = $('.detail-content')
        let detailDataElement = ''
        const [realDetailData] = data
        realDetailData.GC_MY_EYWF_IF.forEach(d => {
          console.log(d)
          d.GC_MY_EYWF_DETAIL.forEach(c => {
            detailDataElement += `
              <div class="detail-item">
                <div class="left-img">
                <img src=${d.GC_COST_PICTUE.VALUE}  class="detail-img" />
                <div class="welfare-name">${d.GC_COST_NAME.VALUE}</div>
                </div>
                <div class="right-content">
                  <p><span class="lable">${c.GC_ENTITY_CASH_DESC.VALUE}</span><span>${c.GC_COST_ENTY_NUM.VALUE}</span></p>
                </div>
              </div>
            `
          })
        })
        detailContent.html(detailDataElement)
      }
    )
  }

  return {
    init
  }
})()

mywelfare.init()
