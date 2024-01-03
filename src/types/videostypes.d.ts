export interface VideoItems {
    items:    Item[];
    kind:     string;
    pageInfo: PageInfo;
   }
   
   export interface Item {
    contentDetails: ContentDetails;
    id:             string;
    kind:           string;
    snippet:        Snippet;
    statistics:     Statistics;
   }
   
   export interface ContentDetails {
    caption:           string;
    contentRating:     ContentRating;
    definition:        string;
    dimension:         string;
    duration:          string;
    licensedContent:   boolean;
    projection:        string;
    regionRestriction: RegionRestriction;
   }
   
   export interface ContentRating {
   }
   
   export interface RegionRestriction {
    blocked: string[];
   }
   
   export interface Snippet {
    categoryId:           string;
    channelId:            string;
    channelTitle:         string;
    description:          string;
    liveBroadcastContent: string;
    localized:            Localized;
    publishedAt:          Date;
    tags:                 string[];
    thumbnails:           Thumbnails;
    title:                string;
   }
   
   export interface Localized {
    description: string;
    title:       string;
   }
   
   export interface Thumbnails {
    default:  Default;
    high:     Default;
    maxres:   Default;
    medium:   Default;
    standard: Default;
   }
   
   export interface Default {
    height: number;
    url:    string;
    width:  number;
   }
   
   export interface Statistics {
    commentCount:  string;
    favoriteCount: string;
    likeCount:     string;
    viewCount:     string;
   }
   
   export interface PageInfo {
    resultsPerPage: number;
    totalResults:   number;
   }
   