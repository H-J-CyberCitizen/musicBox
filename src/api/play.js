import request from "@/utils/request"

export const getSongById =id => request({
    url: `/song/detail?ids=${id}`,
    type:'GET'
})

export const getLyricById =id => request({
    url: `/lytic?id=${id}`,
    type:'GET'
})