const employeeData = [
  {
    EMPLID: {
      TEXT: '员工ID',
      VALUE: '00100663'
    },
    NAME: {
      TEXT: '员工姓名',
      VALUE: '王旭辉'
    },
    GC_MY_EYWF_IF: [
      {
        GC_COST_CODE: {
          TEXT: '福利代码',
          VALUE: '100010'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '高温防暑（补贴）'
        },
        GC_CAL_PRD_ID: {
          TEXT: '期间ID',
          VALUE: '2020/09'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE:
            'data:image/png;base64,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'
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的高温防暑（补贴）在路上啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '0元'
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
          TEXT: '可选发放金额',
          VALUE: '0元'
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
              VALUE: '0积分'
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
              VALUE: '0元'
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
              VALUE: '0元'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: '您可以享受伊利专属内购优惠'
            }
          }
        ]
      },
      {
        GC_COST_CODE: {
          TEXT: '福利代码',
          VALUE: '100013'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '生日贺金'
        },
        GC_CAL_PRD_ID: {
          TEXT: '期间ID',
          VALUE: '2020/11'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE:
            'data:image/png;base64,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'
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的生日祝福到啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '0元'
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
          TEXT: '可选发放金额',
          VALUE: '100元'
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
      },
      {
        GC_COST_CODE: {
          TEXT: '福利代码',
          VALUE: '100007'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '女工卫生费'
        },
        GC_CAL_PRD_ID: {
          TEXT: '期间ID',
          VALUE: '2020/11'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE:
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMqADAAQAAAABAAAAMgAAAAB1y6+rAAAKbElEQVRoBa1afWxW1Rl/TvtiLUoHiooi+AEDIaAm4EeWBb8WHILA2CLJsmCWJThkMuAf3MgMsuwPMlAzWTZjg/8gZMEFtMYgKRjsCMMRMAJRBKR+YlGC2qqlvu3Z87unv/c+9/Re2oInOe/z/Xue59x7z/1onXxPw7/55nDp6Jgp3k/SOVZhr1FaJ11dFyt/RvlWpZ8rPay6t5XfJlOm7HLOdSp/3sOdD4Lft2+8dHbO1sJma4GTdTqdUpkA7+pKU1gbeOfQWIM6bFF+m7vrrvbUuX/cOTXi9+6dKOXyKi1iWlI0ctoiKZPSRpk022SLNvO4lErPakNluPRn9KuR5PRpb/+zFv2gzqpK8cjIYkmtrj+8yGF1/4ObNm0zwvo6+tyI3717gRa7RmdtpWhkYeGgVu6Nt0cjn9+hEHPd/fd/nuD28tNrI977kuze/ZSe6wuTogGIxE5D2QR1oL3prL2ITxs7rqfaTDdjxkFAn22ctRG/f/9gaWvbpAA/yRTIAkAximTY0qJ6+tEW41hMkVZdtF+6OXNehrpoFDbim5qGaIG7dI5Lgm3SOLGV4Wwbi23EoR9lxiTJ9MfqVVLMB93cuetpjmlVrICsp1O1Av1L5zjdXiWZSARwTPDQW5k8/SlbChtxbDx82Ah46xdkbCz1fuPG2/LqhS73iPidO59UsMUVcHgyUcwjUayDbPVWtnwRptVncU7IBRfc4h544GPA2NGjEb99+6/VYV1h4XESyBiWDhggcsUVIgMHiibW+/oZ0WtN5NNPA299Yz6WiU29yP9kxIgp8c2zlBTR/eNfe22Y3ujWZpqAza4KAUHJ047Cx48XufLKsKtZcPDw/+gjkQMH9BLGE0u3LsahTEp8yN7fIs3Nj2rkCoRzZI6I37btH+r420qBITAtmDKiLTjkq68WuflmkepqkZMnRT78UOT06XAEampEBg/Wp69rRC67LFwDe/aIvP9+wLa4eTx0GKmtTY/0KDdvniYKo9KIb2wco9fFIZ2lTCPwI4AFtPrrrgtNfPutyBtvhEas3fI4WrffLnLhhaL3J5GjR2HtuVjMGaxh4bL5/+4eeuh3NKe7VkfHX/S0Ck0gACtOCj6e3HWw0jfeKPL11yKNjSItLcW+wPhYr9NXXhH55huRW28VGTIk9ScmczF/rIfd+/n+mWdGZRrxW7eO1kJ/USmWgaDkCW5l8GgCo6kpNGP96IuCyIPiwt+xQ6RK13Hy5NRmY8HDl3GxrVweoK8NS0NyhUqYcnlWJQCBXAkGExTUFnXppSKY770XrgfrT18bSztyfPaZyLFjIsOGBQwWbPPn1WHzi8zSe15yeaSNMAkTW2ALbvmrrgoLcuRI9lSMY4kNvbW9jfcrHdgE6GPzW1/aoWOD5fJwWbt2EiBKvqFhqHz33Y8SIxwwMSwt0uP87ugQOXUqFJIXBx2K4CAPzBMnQmM4qtAX5SnSI6azc5ZC7y1pE9MVpLoHCINBMShbvrZWBDsVVsnqY1/YbAPEhB4XPXDYCHQ2Pi/O2r1HI38q6U51WyaQSegcyzYRGijpPZWNwMbE1i/GIDZ8cMEjno3k+cIPg9iMB3Vugu5eA7Hdjk0aiZ3yAqEjCHhsubgvoJiyvp2yCItlY2gnxSLgaQCPLlwMiw8cvPeAMgZ4Fh8X++nTP6xS5fWVFeHKwBE8gsETiDzpJ5+EOzmaoS6Os5j0AYV+xIhQKJ4CkMv6Eoc6W4vFgb5cvr5Kg+syANaJIExsKXhsuwCaODE0kudv8RhPv0m64UD37rvZJuIYxllKn4D1AzQyKLPyMDBR0SoR8Isv9FPBYRFsw2PGpEcQ8XYFicfksN10U7iHvPWWyJdfZo+o9SefVwvx9NtZSVcEb18hMSgHnDCoow901rZrl8jw4SJ33BF2MNzkinyJNW6cyJ13hgZefz0sHG3AZzyp1cU8anGuC9dIaxIIBQJB81aUK0MKP0xc8A0N4X5y332iXw9F8LSbh4MLe+pUkenTQ9Ob9HMA4pmXMTYHbFYGTzmlbc7X1x/RpKPRaJLcdgwQyqTQcVpdXV0oEI8cSIALGA+QuM/gSRf6kSPDDocHx82bRb76KouFRixmER/X1dU1s6RJj2pho3OLiwu2wBYMPN491q8XueGGcPGj6GuvRUQYKPKDD0T27RPBo0kcX5SLzQGFPqTU6csArpHD6vDTQqc4YRocjqC1w3bokMjBgyJ43R2lT9mzZ4u88ILI8eMi7e3w6NkEdSwwxizSo0nvO2XQoGN6R5Imbeb3PU6rGJwyaR64LQBFYzfCwO4Gmatr/chbG3Wk1gY86DlF9rgVKzpwRF7VeUZnTWLs6QhNcRFMlgKnviwAFNeN9Yn5OIe1xzbIqf1FiFVu4cI2bWK7zlCApXBmEVbP3QK62IcF08akjIc/4xkLm42zvrRRF8vV1S8hBU4t3OLRle6dOgAez8SgPwCBDYM+5EmpB4U/hi08L55+8LXx5KHHoEyqzwRuzZp3YAqNVFc36OM8PgMNSJxtEHibiDzBQDFAL788fFjAQyTGRRcFevfd4XEdEvywJW/dGu49Nh68lenPnJTpI/JvqDCSRtySJSf8qlXPasEPJ0BFgASwwORhu1j/ysanYaBj58IYOlR0oQKPX7yD4MkXG0CcK09GjNWHnK2K/yRMGOGIgCuXV+rvPG1Gq+keDAbFsHKsgx3PXe8kRxpSuAEuWCCyYUP4MGebJhb8zo3/q3v6aX3xD6P7HNDHleXLW/RcfiIBRUKc1zy382Qkhx4TPH3JU0Ye8HhfoT9t9KU+pvQDzc4Wqat7oruHhFQaSaSamtWa7GQlIYAJlpeENlAWRR388T6PAQp7HobVI5bxFhNx1k/kcbd6tT6kpSP5lJKK6v/YY/eovFWTph/r4AAgTgYwgbVbHm93EyaI4FEdvtZmeeBa2fLWFvQvyrp1P9M/a3cHJZHd37UCn/y6lStxT1maWT2ukl1RrpjVgYee/qD79wcZBVFPvziWsvWjLsQc1A8Vv4qbQOE9jgh78suW1Sv/m8pRsEfDrtLZ+DgmzxcFYlhfyFYf7KeSv43U1x+HGI9014ottbUP67vCCE0wNZPEJmQyxFJPSh0p9OQZ15tv6temL08/dwVNALbwiCQ5V6wo6Xfav+mOo3uojr4nDr55MbYh8mnBSZroaDSrcqZ7/vkDwZj/e9ZGGOIXL8afpp/SiYfMoGYRbI4U1jwb9bRZHBub9fuPvm3Occ89V7lfwJw3+tQIAv2iRfdoE+t0juxRaOLQfeqgQBZrqS3W6tkQMYJfp34r+6d+0FiKR3SYeht9bgRA/pFHavQ0W6TN/FHFwUnBLIoFUbY0FJdtsMju3Mt6PTzqNm7UN7S+j341Qli/ZMkleu0s10bwbx3hXzpgRDP8MgiZDdBGHaltRl+QNH6Z27RpJ8z9HefUCJP4+fMH6hG6VwvGvznN0HlJpviiRqDXTzjq+1/F2qJ/d9ziNmzQv02c+zivRmxajx2uufnHetObpCs7Vm34xzN8/MNDaIfSVqXhH8/084NeA416+uhnlu9n/B87yONnMBIbMgAAAABJRU5ErkJggg=='
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的女工卫生费在路上啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '0元'
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
          TEXT: '可选发放金额',
          VALUE: '120元'
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
              VALUE: '120积分'
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
              VALUE: '120元'
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
              VALUE: '20电子积分 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '120元'
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
              VALUE: '20现金 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '120元'
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
          VALUE: '100003'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '春节福利'
        },
        GC_CAL_PRD_ID: {
          TEXT: '期间ID',
          VALUE: '2020/10'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE:
            'data:image/png;base64,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'
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的春节福利在路上啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '0元'
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
          TEXT: '可选发放金额',
          VALUE: '100元'
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
      },
      {
        GC_COST_CODE: {
          TEXT: '福利代码',
          VALUE: '100003'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '春节福利'
        },
        GC_CAL_PRD_ID: {
          TEXT: '期间ID',
          VALUE: '2020/11'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE:
            'data:image/png;base64,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'
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的春节福利在路上啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '0元'
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
          TEXT: '可选发放金额',
          VALUE: '330元'
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
              VALUE: '330积分'
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
              VALUE: '330元'
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
              VALUE: '230电子积分 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '330元'
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
              VALUE: '230现金 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '330元'
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
          VALUE: '100003'
        },
        GC_COST_NAME: {
          TEXT: '福利名称',
          VALUE: '春节福利'
        },
        GC_CAL_PRD_ID: {
          TEXT: '期间ID',
          VALUE: '2020/09'
        },
        GC_COST_PICTUE: {
          TEXT: '福利图标',
          VALUE:
            'data:image/png;base64,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'
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的春节福利在路上啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '0元'
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
          TEXT: '可选发放金额',
          VALUE: '220元'
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
              VALUE: '220积分'
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
              VALUE: '220元'
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
              VALUE: '120电子积分 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '220元'
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
              VALUE: '120现金 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '220元'
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
          VALUE:
            'data:image/png;base64,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'
        },
        GC_COST_DESCR: {
          TEXT: '福利欢迎语',
          VALUE: '您的中秋节福利在路上啦！'
        },
        GC_EYWF_NCHOSE_AMT: {
          TEXT: '固定发放金额',
          VALUE: '0元'
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
          TEXT: '可选发放金额',
          VALUE: '101元'
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
              VALUE: '101积分'
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
              VALUE: '101元'
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
              VALUE: '1电子积分 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '101元'
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
              VALUE: '1现金 + 100伊利产品电子购物券组合'
            },
            GC_EYWF_C_TYPE_AMT: {
              TEXT: '可选金额',
              VALUE: '101元'
            },
            GC_EYWF_C_TYPE_COMMENT: {
              TEXT: '可选备注',
              VALUE: '您可以同时享受福利现金及伊利内购优惠'
            }
          }
        ]
      }
    ]
  }
]
