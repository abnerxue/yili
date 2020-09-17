/**
 * 测试数据真实环境删除
 */

const homeData = [
  {
    EMPLID: {
      TEXT: '福礼账号',
      VALUE: '1000002'
    },
    NAME: {
      TEXT: '员工姓名',
      VALUE: '王旭辉'
    },
    GC_WORK_DAYS: {
      TEXT: '在职天数',
      VALUE: '365'
    },
    MOBILE_PHONE: {
      TEXT: '手机号',
      VALUE: '13759871746'
    },
    GC_POSITION_DESCR: {
      TEXT: '职位',
      VALUE: '液奶事业部-事业部副总经理'
    },
    EMPLOYEE_PHOTO: {
      TEXT: '员工照片',
      VALUE: '../assets/home/GC_EYWF_ELLIPSE.png'
    },
    GC_TODO_NUM: {
      TEXT: '福利待办数量',
      VALUE: '2'
    },
    GC_Y_SUM_POITS: {
      TEXT: '当年累计积分',
      VALUE: '3000积分'
    },
    GC_Y_SUM_POITS_DES: {
      TEXT: '当年累计积分描述',
      VALUE: '(含伊利电子内购券)'
    },
    GC_Y_SUM_AMT: {
      TEXT: '当年累计现金',
      VALUE: '3000元'
    },
    GC_Y_SUM_AMT_DES: {
      TEXT: '当年累计现金描述',
      VALUE: ''
    },
    GC_EYWF_BG_PICTUE: {
      TEXT: '背景图片',
      VALUE: '../assets/background/GC_EYWF_GENEREL_BG.png'
    },
    GC_EYWF_FUNC: [
      {
        GC_EYWF_FUNC_NAME: {
          TEXT: '功能入口名称',
          VALUE: '功能入口1'
        },
        GC_EYWF_FUNC_DESCR: {
          TEXT: '功能入口描述',
          VALUE: '功能入口描述1'
        },
        GC_EYWF_FUNC_PICTUE: {
          TEXT: '功能显示图片',
          VALUE: '../assets/home/GC_EYWF_MY_WEL.png'
        },
        GC_EYWF_FUNC_URL: {
          TEXT: "福利直达跳转URL", 
          VALUE: "www.baidu.com"
      }
      },
      {
        GC_EYWF_FUNC_NAME: {
          TEXT: '功能入口名称',
          VALUE: '功能入口2'
        },
        GC_EYWF_FUNC_DESCR: {
          TEXT: '功能入口描述',
          VALUE: '功能入口描述2'
        },
        GC_EYWF_FUNC_PICTUE: {
          TEXT: '功能显示图片',
          VALUE: '../assets/home/GC_EYWF_T_POCKET.png'
        },
        GC_EYWF_FUNC_URL: {
          TEXT: "福利直达跳转URL", 
          VALUE: "www.baidu.com"
      }
      },
      {
        GC_EYWF_FUNC_NAME: {
          TEXT: '功能入口名称',
          VALUE: '我的福利'
        },
        GC_EYWF_FUNC_DESCR: {
          TEXT: '功能入口描述',
          VALUE: '功能入口描述3'
        },
        GC_EYWF_FUNC_PICTUE: {
          TEXT: '功能显示图片',
          VALUE: '../assets/home/GC_EYWF_YJ_PRE.png'
        },
        GC_EYWF_FUNC_URL: {
          TEXT: "福利直达跳转URL", 
          VALUE: "www.baidu.com"
      }
      }
    ],
    GC_EYWF_POLY: [
      {
        GC_POLY_PAGE_TP: {
          TEXT: '页签名称',
          VALUE: '年节福利'
        },
        GC_COST_CODE: {
          TEXT: '福利代码',
          VALUE: '101'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '春节福利'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE: '../assets/home/GC_EYWF_H_TEMPERATURE.png'
        },
        GC_EYWL_POLY_COMMT: {
          TEXT: '福利政策解读',
          VALUE: '春节福利'
        }
      },
      {
        GC_POLY_PAGE_TP: {
          TEXT: '页签名称',
          VALUE: '年节福利'
        },
        GC_COST_CODE: {
          TEXT: '福利代码',
          VALUE: '102'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '中秋节福利'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE: '../assets/home/GC_EYWF_BIRTHDAY_PRE.png'
        },
        GC_EYWL_POLY_COMMT: {
          TEXT: '福利政策解读',
          VALUE: '中秋节'
        }
      }
    ],
    GC_EYWF_LIST: [
      {
        GC_EYWF_TD_DATE: {
          TEXT: '福利日历时间',
          VALUE: '2020年10月2日'
        },
        GC_EYWF_TD_DESCR: {
          TEXT: '福利日历标题',
          VALUE: '小伊给您派发了1000元伊利产品电子购物券的春节福利，祝您节日快乐！'
        },
        GC_EYWF_TD_COLOR: {
          TEXT: '福利日历颜色',
          VALUE: '#00FF00'
        }
      },
      {
        GC_EYWF_TD_DATE: {
          TEXT: '福利日历时间',
          VALUE: '2020年8月2日'
        },
        GC_EYWF_TD_DESCR: {
          TEXT: '福利日历标题',
          VALUE: '小伊给您派发了100元电子积分的生日贺金，祝您生日快乐！'
        },
        GC_EYWF_TD_COLOR: {
          TEXT: '福利日历颜色',
          VALUE: '#FF8C00'
        }
      }
    ]
  }
]

const employeeOptiondata = [
  {
    EMPLID: {
      TEXT: '员工ID',
      VALUE: '1000002'
    },
    NAME: {
      TEXT: '员工姓名',
      VALUE: '王旭辉'
    },
    GC_MY_EYWF_IF: [
      {
        GC_COST_CODE: {
          TEXT: '福利代码',
          VALUE: '100002'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '中秋节福利'
        },
        GC_CAL_PRD_ID: {
          TEXT: '期间ID',
          VALUE: '2020/09'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE: ''
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的中秋节福利在路上啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '100元'
        },
        GC_EYWF_NCHOSE_TYPE: {
          TEXT: '固定发放类型',
          VALUE: '5'
        },
        GC_EYWF_NCHOSE_DESCR: {
          TEXT: '固定发放类型描述',
          VALUE: '本单位产品'
        },
        GC_EYWF_CHOSE_AMT: {
          TEXT: '可选发放金额',
          VALUE: '300'
        },
        GC_MY_EYWF_CHOSE: [
          {
            GC_EYWF_C_TYPE: {
              TEXT: '可选类型',
              VALUE: '10'
            },
            GC_EYWF_C_TYPE_DESCR: {
              TEXT: '可选类型描述',
              VALUE: '电子积分'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '300积分'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: '您可以在伊家福礼平台内畅想伊利员工独有的全品类优惠'
            }
          },
          {
            GC_EYWF_C_TYPE: {
              TEXT: '可选类型',
              VALUE: '20'
            },
            GC_EYWF_C_TYPE_DESCR: {
              TEXT: '可选类型描述',
              VALUE: '现金'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '300元'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: ''
            }
          },
          {
            GC_EYWF_C_TYPE: {
              TEXT: '可选类型',
              VALUE: '30'
            },
            GC_EYWF_C_TYPE_DESCR: {
              TEXT: '可选类型描述',
              VALUE: '200电子积分 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '200电子积分 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: '您可以同时享受全品类产品优惠及伊利内购优惠'
            }
          },
          {
            GC_EYWF_C_TYPE: {
              TEXT: '可选类型',
              VALUE: '40'
            },
            GC_EYWF_C_TYPE_DESCR: {
              TEXT: '可选类型描述',
              VALUE: '200现金 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '200现金 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: '您可以同时享受福利现金及伊利内购优惠'
            }
          }
        ]
      },
      {
        GC_COST_CODE: {
          TEXT: '福利代码',
          VALUE: '09'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '生日福利'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE: ''
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的生日祝福到啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '0'
        },
        GC_EYWF_NCHOSE_TYPE: {
          TEXT: '固定发放类型',
          VALUE: ''
        },
        GC_EYWF_NCHOSE_DESCR: {
          TEXT: '固定发放类型描述',
          VALUE: ''
        },
        GC_EYWF_CHOSE_AMT: {
          TEXT: '可选金额',
          VALUE: '100'
        },
        GC_MY_EYWF_CHOSE: [
          {
            GC_EYWF_C_TYPE: {
              TEXT: '可选类型',
              VALUE: '10'
            },
            GC_EYWF_C_TYPE_DESCR: {
              TEXT: '可选类型描述',
              VALUE: '电子积分'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '100积分'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: '您可以在伊家福礼平台内畅想伊利员工独有的全品类优惠'
            }
          },
          {
            GC_EYWF_C_TYPE: {
              TEXT: '可选类型',
              VALUE: '20'
            },
            GC_EYWF_C_TYPE_DESCR: {
              TEXT: '可选类型描述',
              VALUE: '现金'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '100元'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: ''
            }
          },
          {
            GC_EYWF_C_TYPE: {
              TEXT: '可选类型',
              VALUE: '50'
            },
            GC_EYWF_C_TYPE_DESCR: {
              TEXT: '可选类型描述',
              VALUE: '伊利产品电子购物券'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '100元'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: '您可以享受伊利专属内购优惠'
            }
          }
        ]
      }
    ]
  }
]

const birthdayDatas = [
  {
    EMPLID: {
      TEXT: '员工ID',
      VALUE: '1000002'
    },
    GC_WISH_FG: {
      TEXT: '是否需要弹出祝福图片',
      VALUE: 'Y'
    },
    GC_WISH_PICTURE: {
      TEXT: '祝福图片',
      VALUE: ''
    }
  }
]

const welfareOverviewDatas = [
  {
    
      GC_EYWF_EVNT_SEQ: {
          TEXT: "活动序号", 
          VALUE: "4"
      }, 
    GC_EYWF_EVNT_NAME: {
      TEXT: '活动名称',
      VALUE: '伊利产品内购优惠'
    },
    GC_JD_EVNT_NBR: {
      TEXT: '京东活动编码',
      VALUE: '10000001'
    },
    GC_EYWF_EVNT_COMTS: {
      TEXT: '福利活动说明',
      VALUE: '您可以在此活动中使用伊利产品电子购物券，后买伊利产品'
    },
    GC_EYWF_EVNT_PICTURE: {
      TEXT: '活动图片',
      VALUE: '../assets/welfareOverview/GC_EYWF_SEAT.png'
    },
    GC_EYWF_EVNT_URL: {
      TEXT: '活动链接',
      VALUE: 'www.baidu.com'
    }
  },
  {
    GC_EYWF_EVNT_SEQ: {
      TEXT: "活动序号", 
      VALUE: "4"
  }, 
    GC_EYWF_EVNT_NAME: {
      TEXT: '活动名称',
      VALUE: '伊利员工劳保产品购买'
    },
    GC_JD_EVNT_NBR: {
      TEXT: '京东活动编码',
      VALUE: '10000002'
    },
    GC_EYWF_EVNT_COMTS: {
      TEXT: '福利活动说明',
      VALUE: '您可以在此活动中使用伊利产品电子购物券，后买伊利产品'
    },
    GC_EYWF_EVNT_PICTURE: {
      TEXT: '活动图片',
      VALUE: ''
    },
    GC_EYWF_EVNT_URL: {
      TEXT: '活动链接',
      VALUE: 'www.132.com'
    }
  }
]
