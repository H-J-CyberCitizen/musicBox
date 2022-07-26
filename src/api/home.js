// 文件名与vue模块统一 方便查找

import request from "@/utils/request"

// 拿到推荐歌单
export const recommendMusic = params =>
    request({
        url: "/personalized",
        params
    })

export const recommendSong=params=>request({
    url:'/personalized/newsong',
    params
})