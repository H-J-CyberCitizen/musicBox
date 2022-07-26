// 所有api文件夹下的请求都到这里来统一导出

import {recommendMusic,recommendSong} from "./home"
import {searchSuggest,defaultKeywords} from "./search"
import {getLyricById,getSongById} from "./play"

export const recommendMusicAPI=recommendMusic
export const recommendSongAPI=recommendSong
export const searchSuggestAPI=searchSuggest
export const defaultKeywordsAPI=defaultKeywords
export const getLyricByIdAPI=getLyricById
export const getSongByIdAPI=getSongById
