window.onload = function () {
    // 真实接口数据
    const id=routerquery()
    request(
      '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfSum',
      { EMPLID: id },
      data => {
        console.log(data)
        const overiewContentElement = $('.content')
        let content = ''
        const [realData] = data
        Object.keys(realData).forEach((d, index) => {
          const flag = index % 2 === 1
          content += `
            <div class=${flag ? 'right-item' : 'item'}><span class="lable">${realData[d].TEXT}</span><span>${
            realData[d].VALUE
          }</span></div>
            `
          overiewContent.html(overiewContentElement)
        })
      }
    )
      // 真实接口数据
      const YEAR=new Date()

      request(
        '/WEBLIB_EYWF_LIB.GC_MY_EYWF_LIB.FieldFormula.Iscript_GetMyWfDetail',
        {
          EMPLID: id,
          GC_YEAR: YEAR.getFullYear()
        },
        data => {
          console.log('detailData', data)
          const detailContent = $('.detail-content')
          let detailDataElement = ''
          const [realDetailData] = data
          realDetailData.GC_MY_EYWF_IF.forEach(d => {
            d.GC_MY_EYWF_DETAIL.forEach(c => {
              detailDataElement += `
              <div class="detail-item">
                <div class="left-img">
                <img src=${
                  d.GC_COST_PICTUE.VALUE ? d.GC_COST_PICTUE.VALUE : '../assets/home/GC_EYWF_MOON_PRE.png'
                }  class="detail-img" />
                </div>
                <div class="right-content">
                  <p><span class="lable">${c.GC_ENTITY_CASH_DESC.VALUE}</span><span>${
                c.GC_COST_ENTY_NUM.VALUE
              }</span></p>
                </div>
              </div>
          `
            })
          })
    
          detailContent.html(detailDataElement)
        }
      )
     
  // const data = [
  //   {
  //     EMPLID: {
  //       TEXT: '员工ID',
  //       VALUE: '1000002'
  //     },
  //     NAME: {
  //       TEXT: '员工姓名',
  //       VALUE: '王旭辉'
  //     },
  //     GC_SUM_YL_E_SHOPV: {
  //       TEXT: '累计伊利电子购物券',
  //       VALUE: '1000元'
  //     },
  //     GC_SUM_YL_GOODS: {
  //       TEXT: '累计本单位产品',
  //       VALUE: '2000元'
  //     },
  //     GC_SUM_E_POITS: {
  //       TEXT: '累计电子积分',
  //       VALUE: '3000积分'
  //     },
  //     GC_SUM_GOODS: {
  //       TEXT: '累计实物-劳保',
  //       VALUE: '4000'
  //     },
  //     GC_SUM_AMT: {
  //       TEXT: '累计现金',
  //       VALUE: '5000'
  //     }
  //   }
  // ]

  // const overiewContent = $('.content')
  // let overiewContentElement = ''
  // const [realData] = data
  // Object.keys(realData).forEach((d, index) => {
  //   const flag = index % 2 === 1
  //   overiewContentElement += `
	// 		<div class=${flag ? 'right-item' : 'item'}><span class="lable">${realData[d].TEXT}</span><span>${
  //     realData[d].VALUE
  //   }</span></div>
	// 		`
  // })

  // overiewContent.html(overiewContentElement)
  // $('.right').click(function(){
  //   window.location.href='home.html'
  //   console.log(4455)
  // })


  // const detailData = [
  //   {
  //     EMPLID: {
  //       TEXT: '员工ID',
  //       VALUE: '1000002'
  //     },
  //     NAME: {
  //       TEXT: '员工姓名',
  //       VALUE: '王旭辉'
  //     },
  //     GC_MY_EYWF_IF: [
  //       {
  //         GC_COST_CODE: {
  //           TEXT: '福利代码',
  //           VALUE: '1000002'
  //         },
  //         GC_COST_NAME: {
  //           TEXT: '福利名称',
  //           VALUE: '春节福利'
  //         },
  //         GC_COST_PICTUE: {
  //           TEXT: '福利图标',
  //           VALUE: ''
  //         },
  //         GC_MY_EYWF_DETAIL: [
  //           {
  //             GC_ENTITY_CASH: {
  //               TEXT: '福利发放类型',
  //               VALUE: '1'
  //             },
  //             GC_ENTITY_CASH_DESC: {
  //               TEXT: '福利发放类型描述',
  //               VALUE: '实物-劳保'
  //             },
  //             GC_COST_ENTY_NUM: {
  //               TEXT: '福利发放数额',
  //               VALUE: '100元'
  //             }
  //           },
  //           {
  //             GC_ENTITY_CASH: {
  //               TEXT: '福利发放类型',
  //               VALUE: '5'
  //             },
  //             GC_ENTITY_CASH_DESC: {
  //               TEXT: '福利发放类型描述',
  //               VALUE: '本单位产品'
  //             },
  //             GC_COST_ENTY_NUM: {
  //               TEXT: '福利发放数额',
  //               VALUE: '200元'
  //             }
  //           }
  //         ]
  //       },
  //       {
  //         GC_COST_CODE: {
  //           TEXT: '福利代码',
  //           VALUE: '100003'
  //         },
  //         GC_COST_NAME: {
  //           TEXT: '福利名称',
  //           VALUE: '中秋节福利'
  //         },
  //         GC_COST_PICTUE: {
  //           TEXT: '福利图标',
  //           VALUE: ''
  //         },
  //         GC_MY_EYWF_DETAIL: [
  //           {
  //             GC_ENTITY_CASH: {
  //               TEXT: '福利发放类型',
  //               VALUE: '2'
  //             },
  //             GC_ENTITY_CASH_DESC: {
  //               TEXT: '福利发放类型描述',
  //               VALUE: '现金'
  //             },
  //             GC_COST_ENTY_NUM: {
  //               TEXT: '福利发放数额',
  //               VALUE: '100元'
  //             }
  //           },
  //           {
  //             GC_ENTITY_CASH: {
  //               TEXT: '福利发放类型',
  //               VALUE: '3'
  //             },
  //             GC_ENTITY_CASH_DESC: {
  //               TEXT: '福利发放类型描述',
  //               VALUE: '电子积分'
  //             },
  //             GC_COST_ENTY_NUM: {
  //               TEXT: '福利发放数额',
  //               VALUE: '200积分'
  //             }
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]

  // const detailContent = $('.detail-content')
  // let detailDataElement = ''
  // const [realDetailData] = detailData
  // realDetailData.GC_MY_EYWF_IF.forEach(d => {
  //   d.GC_MY_EYWF_DETAIL.forEach(c => {
  //     detailDataElement += `
	// 		<div class="detail-item">
	// 			<div class="left-img">
	// 			<img src=${
  //         d.GC_COST_PICTUE.VALUE ? d.GC_COST_PICTUE.VALUE : '../assets/home/GC_EYWF_MOON_PRE.png'
  //       }  class="detail-img" />
	// 			</div>
	// 			<div class="right-content">
	// 				<p><span class="lable">${c.GC_ENTITY_CASH_DESC.VALUE}</span><span>${
  //       c.GC_COST_ENTY_NUM.VALUE
  //     }</span></p>
	// 			</div>
	// 		</div>
	// `
  //   })
  // })

  // detailContent.html(detailDataElement)


}
function routerquery() {
  var result;
  var url=window.location.search; //获取url中"?"符后的字串  
  if(url.indexOf("?")!=-1){
  result = url.substr(url.indexOf("=")+1,1);
  }
  return result;
  }