const Home = (function () {
  let homeDataAll = {}

  function initInfo() {
    // 真实接口数据
    request(
      '/WEBLIB_EYWF_LIB.GC_HOME_EYWF_LIB.FieldFormula.Iscript_GetHomeInfo',
      null,
      'GET',
      res => {
        const [data] = res
        homeDataAll = data
        $('.employee-name').append(data.NAME.VALUE)
        $('.work-day').append(data.GC_WORK_DAYS.VALUE)

        $('.account-info').append(data.EMPLID.VALUE)

        $('.phone').append(data.MOBILE_PHONE.VALUE)
        $('.position').append(data.GC_POSITION_DESCR.VALUE)
        $('.avatar-img-wrapper').append(
          `<img src=${data.EMPLOYEE_PHOTO.VALUE} class='avatar-img'/>`
        )
        if (data.GC_TODO_NUM.VALUE && Number(data.GC_TODO_NUM.VALUE) !== 0) {
          $('.welfare-count').append(data.GC_TODO_NUM.VALUE)
          $('.welfare-count').bind('click', () => {
            window.location.href = 'employeeOptionalPayment.html?EMPLID=' + data.EMPLID.VALUE
          })
        } else {
          $('.welfare-count').hide()
        }

        $('.integral-img').css(
          'width',
          data.GC_Y_SUM_POITS.VALUE === 0 ? '0px' : (data.GC_Y_SUM_POITS.VALUE / 100).toFixed(2)
        )
        $('.money-img').css(
          'width',
          data.GC_Y_SUM_POITS.VALUE === 0 ? '0px' : (data.GC_Y_SUM_POITS.VALUE / 100).toFixed(2)
        )
        $('.integral').append(data.GC_Y_SUM_POITS.VALUE)
        $('.cash-value').append(data.GC_Y_SUM_AMT.VALUE)
        $('.item-weak-desc').append(data.GC_Y_SUM_POITS_DES.VALUE)
        // $('.container-wrapper').css('background-image', `url(${data.GC_EYWF_BG_PICTUE.VALUE})`)
        $('.container-wrapper').css('background-size', '100% 100%')
        if (data.GC_EYWF_FUNC.length <= 3) {
          $('.welfare-swiper-item').hide()
          $('.welfare-direct-pre').hide()
          $('.welfare-direct-next').hide()
        }
        const welfareDirect = $('.welfare-direct')
        let welfareDirectElement = ''
        // 数据分组
        const newEywfFuncList = chunk(data.GC_EYWF_FUNC, 3)
        console.log(newEywfFuncList)
        newEywfFuncList.forEach(w => {
          welfareDirectElement += '<div class="swiper-slide">'
          w.forEach(g => {
            welfareDirectElement += `
               <div class="welfare-item cursor_" data-name=${g.GC_EYWF_FUNC_NAME.VALUE} onclick="handleGo(\`${g.GC_EYWF_FUNC_URL.VALUE}\`)">
                  <img src=${g.GC_EYWF_FUNC_PICTUE.VALUE} />
                  <div class="title-label">${g.GC_EYWF_FUNC_NAME.VALUE}</div>
                  <div class="desc">${g.GC_EYWF_FUNC_DESCR.VALUE}</div>
                </div>
              `
          })
          welfareDirectElement += '</div>'
        })
        welfareDirect.append(welfareDirectElement)

        renderWealList(data, $('.care-tab').text())

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
        initSwiper()
        addEvent()
      },
      err => {
        console.log(err)
      }
    )
  }

  function initSwiper() {
    console.log(8881)
    new Swiper('.swiper-container', {
      spaceBetween: 3,
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

    $('.mask').click(() => {
      hideModal()
    })

    $('.care-tab').click(() => {
      $('.care-tab').addClass('active-tab')
      $('.excitation-tab').removeClass('excitation-active-tab')
      renderWealList(homeDataAll, $('.care-tab').text())
    })

    $('.excitation-tab').click(() => {
      $('.excitation-tab').addClass('excitation-active-tab')
      $('.care-tab').removeClass('active-tab').addClass('normal-tab')
      renderWealList(homeDataAll, $('.excitation-tab').text())
    })
  }

  // 弹窗,使用:showModal()
  function showModal() {
    $('.modal').show()
    $('.mask').show()
  }

  function hideModal() {
    $('.modal').hide()
    $('.mask').hide()
  }

  function renderWealList(data, value) {
    const birthdayWelfare = $('.birthday-welfare')
    let birthdayWelfareElement = ''
    const oldList = handleListAsTab(value, data.GC_EYWF_POLY)
    const list = chunk(oldList, 10)
    console.log(list)
    list.forEach(l => {
      birthdayWelfareElement += '<div class="swiper-slide" >'
      l.forEach(g => {
        birthdayWelfareElement += `
            <div class="welfare-item cursor_" >
               <img src=${g.GC_COST_PICTUE.VALUE} />
               <div class="title-label"  title=${g.GC_COST_NAME.VALUE}>${g.GC_COST_NAME.VALUE}</div>
            </div>
          `
      })
      birthdayWelfareElement += '</div>'
    })
    
    console.log(birthdayWelfareElement,'birthdayWelfareElement')
    birthdayWelfare.html(birthdayWelfareElement)


     console.log(oldList.length,'oldList.length')
    if (oldList.length <= 10) {
      $('.welfare-swiper-item2').hide()
      $('.welfare-button-pre').hide()
      $('.welfare-button-next').hide()
    } else {
      console.log(888)
      $('.welfare-swiper-item2').show()
      $('.welfare-button-pre').show()
      $('.welfare-button-next').show()
    }
  }

  function handleListAsTab(value, list) {
    return list.filter(l => l.GC_POLY_PAGE_TP.VALUE === value)
  }

  function init() {
    initInfo()
    // addEvent()
    // initSwiper()
  }

  return {
    init
  }
})()

Home.init()

function handleGo(value) {
  window.location.href = value
  console.log(value)
  // requset xx
}
function handleShow(val) {
  console.log(val)
  $('.modal').html(val)
  $('.modal').show()
  $('.mask').show()
}
