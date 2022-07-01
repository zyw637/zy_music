import * as actionTypes from "./constants";
import _ from 'lodash';

import { 
  getBanner,
  getPlayList,
} from "@/servers/homePage";

// import { getHotArtists } from "../../../servers/artist";


const changeBannerAction = topBanner =>({
  type:actionTypes.GET_BANNER,
  topBanner
});

const changePlanListAction = playLists =>({
  type:actionTypes.GET_PLAY_LIST,
  playLists
});

// const changeHotSongListAction = hotSongList =>({
//     type:actionTypes.GET_HOT_SONG_LIST,
//     hotSongList
// });

// const changeHotSongAction = hotSong =>({
//     type:actionTypes.GET_HOT_SONG,
//     hotSong
// });

// const changeNewSongAction = newSong =>({
//     type:actionTypes.GET_NEW_SONG,
//     newSong
// });

// const changeHotArtistAction = hotArtists =>({
//     type:actionTypes.GET_HOT_ARTISTS,
//     hotArtists
// });

export const getBannerAction = () =>{
  return dispatch => {
    getBanner().then(res=>{
      dispatch(changeBannerAction(_.get(res, "banners", [])))
      })
    }
}

export const getPlayListAction = (limit = 10) =>{
  return  dispatch => { 
    getPlayList(limit).then(res=>{
      dispatch(changePlanListAction(_.get(res, "playlists", [])))
    })

  }
}

// export const getHotSongListAction = (limit = 8) =>{
//     return dispatch => {
//         getHotSongList(limit).then(res=>{
//             dispatch(changeHotSongListAction(res.result))
//         })
//     }
// }

// export const getTopListAction = (idx) => {
//     return dispatch => {
//         getTopList(idx).then(res => {
//             switch (idx) {
//                 //新歌榜
//                 case 0:
//                     dispatch(changeNewSongAction(res.playlist.tracks))
//                     break;
//                 //热歌榜
//                 case 1:
//                     dispatch(changeHotSongAction(res.playlist.tracks))
//                     break;
//                 //原创   
//                 case 2:
                    
//                     break;
//                 //飙升
//                 case 3:
                    
//                     break;
//                 default:
//             }
//         })
//     }
// } 

// export const getHotArtistsAction = limit =>{
//     return dispatch => {
//         getHotArtists(limit).then(res =>{
//             dispatch(changeHotArtistAction(res.artists))
//         })
//     }
// }