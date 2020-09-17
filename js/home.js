const Home = (function () {
  function initInfo() {
      // 真实接口数据
  request(
    '/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_GetHomeInfo',
   
    data => {
      console.log(data)
  const [data] = data
  $('.employee-name').append(data.NAME.VALUE)
  $('.work-day').append(data.GC_WORK_DAYS.VALUE)
  $('.account-info').append(data.EMPLID.VALUE)
  $('.phone').append(data.MOBILE_PHONE.VALUE)
  $('.position').append(data.GC_POSITION_DESCR.VALUE)
  $('.avatar-img-wrapper').append(`<img src=${data.EMPLOYEE_PHOTO.VALUE} class='avatar-img'/>`)
  if (data.GC_TODO_NUM.VALUE && Number(data.GC_TODO_NUM.VALUE) !== 0) {
    $('.welfare-count').append(data.GC_TODO_NUM.VALUE)
    $('.welfare-count').bind('click', () => {
      window.location.href = 'employeeOptionalPayment.html?EMPLID='+data.EMPLID.VALUE
    })
  } else {
    $('.welfare-count').hide()
  }
  $('.integral').append(data.GC_Y_SUM_POITS.VALUE)
  $('.cash-value').append(data.GC_Y_SUM_AMT.VALUE)
  $('.item-weak-desc').append(data.GC_Y_SUM_POITS_DES.VALUE)
  $('.container-wrapper').css(
    'background',
    `url(${data.GC_EYWF_BG_PICTUE.VALUE}) 100% 100%  no-repeat`
  )

  if (data.GC_EYWF_FUNC.length <= 3) {
    $('.welfare-swiper-item').hide()
  }

  const welfareDirect = $('.welfare-direct')
  let welfareDirectElement = ''
  // 数据分组
  const newEywfFuncList = chunk(data.GC_EYWF_FUNC, 3)
  newEywfFuncList.forEach(w => {
    welfareDirectElement += '<div class="swiper-slide">'
    w.forEach(g => {
      welfareDirectElement += `
          <div class="welfare-item" data-name=${g.GC_EYWF_FUNC_NAME.VALUE}  onclick="handleGo(\`${g.GC_EYWF_FUNC_NAME.VALUE}\`)">
            <img src=${g.GC_EYWF_FUNC_PICTUE.VALUE} />
            <div class="title-label">${g.GC_EYWF_FUNC_NAME.VALUE}</div>
            <div class="desc">${g.GC_EYWF_FUNC_DESCR.VALUE}</div>
          </div>
      `
    })
    welfareDirectElement += '</div>'
  })
  welfareDirect.append(welfareDirectElement)

  const birthdayWelfare = $('.birthday-welfare')
  let birthdayWelfareElement = ''
  const list = chunk(data.GC_EYWF_POLY, 10)
  list.forEach(l => {
    birthdayWelfareElement += '<div class="swiper-slide" >'
    l.forEach(g => {
      birthdayWelfareElement += `
          <div class="welfare-item" onclick="handleShow(\`${g.GC_EYWL_POLY_COMMT.VALUE}\`)>
             <img src=${g.GC_COST_PICTUE.VALUE} />
             <div class="title-label">${g.GC_COST_NAME.VALUE}</div>
          </div>
        `
    })
    birthdayWelfareElement += '</div>'
  })
  if (data.GC_EYWF_POLY.length <= 10) {
    $('.welfare-swiper-item2').hide()
  }

  birthdayWelfare.append(birthdayWelfareElement)

  const welfareList = $('.welfare-list')
  let welfareListElement = ''
  data.GC_EYWF_LIST.forEach(g => {
    const color = g.GC_EYWF_TD_COLOR.VALUE
    welfareListElement += `
      <li class="li">
        <span class="circle" style=background-color:${color}></span>
        <span class="time" style=color:${color}>${g.GC_EYWF_TD_DATE.VALUE}</span>
        <span class="info" style=color:${color}>${g.GC_EYWF_TD_DESCR.VALUE}</span>
      </li>
    `
  })
  welfareList.append(welfareListElement)
})
 
}

  
  
   
  

  function initSwiper() {
    new Swiper('.swiper-container', {
      spaceBetween: 30,
      // 自动播放
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      //   loop: true
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        prevEl: '.button-pre',
        nextEl: '.button-next'
      }
    })
  }

  function addEvent() {
    $('.my-welfare').click(function () {
      window.location.href = 'employeeOptionalPayment.html'
    })

    $('.ike-welfare').click(function () {
      window.location.href = 'employeeOptionalPayment.html'
    })


  }

  function init() {
    initSwiper()
    initInfo()
    addEvent()
  
  }

  return {  
    init
  }
})()

Home.init()

function handleGo(value) {
  window.location.href=value
  console.log(value)
  // requset xx
}
function handleShow(val){
  console.log(val)
     layer.open({
        type: 1,
        title: ['福利政策', 'font-size:18px;'],
        area: ['820px', '440px'], //宽高
        shadeClose: true,
        content: val
      })
    }

