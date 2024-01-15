import { instance } from "./instance"
type getSearchVideoType = { 
    q?: string | undefined,
    part: string,
    regionCode: string,
    maxResults: string,
    order: string
} 
type getSuggestedVideoType = { 
    relatedToVideoId: string | undefined,
    part: string,
    type: string,
    maxResults: string, 
    regionCode?: string
} 
type getVideoByIDType ={ 
    part:string, 
    id: string | undefined 
}
type getVideoComments  ={ 
    part:string, 
    videoId: string | undefined  
    maxResults: number
}
export const categoryVideo ={ 
    getSearchVideo: (params: getSearchVideoType) => { 
        return instance.get('search', {params})
    }, 
    getVideoByID:(params: getVideoByIDType)=>{ 
        return instance.get('videos', {params})
    },
    getSuggestedVideo:(params: getSuggestedVideoType)=>{ 
        return instance.get('search', {params})
    }, 
    getVideoComments:(params:getVideoComments) =>{ 
        return instance.get('commentThreads', {params})
    }
} 
