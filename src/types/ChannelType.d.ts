export interface ChannelType {
    items:    Item[];
    kind:     string;
    pageInfo: PageInfo;
   }
   
   export interface ChannelItem {
    brandingSettings: BrandingSettings;
    contentDetails:   ContentDetails;
    id:               string;
    kind:             string;
    snippet:          Snippet;
    statistics:       Statistics;
   }
   
   export interface BrandingSettings {
    channel: Channel;
    image:   Image;
   }
   
   export interface Channel {
    description:         string;
    keywords:            string;
    title:               string;
    unsubscribedTrailer: string;
   }
   
   export interface Image {
    bannerExternalUrl: string;
   }
   
   export interface ContentDetails {
    relatedPlaylists: RelatedPlaylists;
   }
   
   export interface RelatedPlaylists {
    likes:   string;
    uploads: string;
   }
   
   export interface Snippet {
    customUrl:   string;
    description: string;
    localized:   Localized;
    publishedAt: Date;
    thumbnails:  Thumbnails;
    title:       string;
   }
   
   export interface Localized {
    description: string;
    title:       string;
   }
   
   export interface Thumbnails {
    default: Default;
    high:    Default;
    medium:  Default;
   }
   
   export interface Default {
    height: number;
    url:    string;
    width:  number;
   }
   
   export interface Statistics {
    hiddenSubscriberCount: boolean;
    subscriberCount:       string;
    videoCount:            string;
    viewCount:             string;
   }
   
   export interface PageInfo {
    resultsPerPage: number;
    totalResults:   number;
   }
   