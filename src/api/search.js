// 文件名与vue模块统一 方便查找

import request from "@/utils/request"

export const defaultKeywords = request({
    url: '/search/hot'
})

export const searchSuggest = params => request({
    url: '/cloudsearch',
    params
})