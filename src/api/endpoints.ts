import { instance } from "./instance"
type getSearchVideoType = { 
    q: string | undefined,
    part: string,
    regionCode: string,
    maxResults: string,
    order: string
}
export const categoryVideo ={ 
    getSearchVideo: (params: getSearchVideoType) => { 
        return instance.get('search', {params})
    },
} 
