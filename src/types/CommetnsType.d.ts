export interface Comments {
  items: Item[];
  kind: string;
  nextPageToken: string;
  pageInfo: PageInfo;
}

export interface CommentItem {
  id: string;
  kind: ItemKind;
  snippet: ItemSnippet;
}

export enum ItemKind {
  YoutubeCommentThread = "youtube#commentThread",
}

export interface ItemSnippet {
  canReply: boolean;
  channelId: ChannelID;
  isPublic: boolean;
  topLevelComment: TopLevelComment;
  totalReplyCount: number;
  videoId: VideoID;
}

export enum ChannelID {
  UCN1HnUccO4FD5WfM7IthXaw = "UCN1hnUccO4FD5WfM7ithXaw",
}

export interface TopLevelComment {
  id: string;
  kind: TopLevelCommentKind;
  snippet: TopLevelCommentSnippet;
}

export enum TopLevelCommentKind {
  YoutubeComment = "youtube#comment",
}

export interface TopLevelCommentSnippet {
  authorChannelId: AuthorChannelID;
  authorChannelUrl: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  canRate: boolean;
  channelId: ChannelID;
  likeCount: number;
  publishedAt: Date;
  textDisplay: string;
  textOriginal: string;
  updatedAt: Date;
  videoId: VideoID;
  viewerRating: ViewerRating;
}

export interface AuthorChannelID {
  value: string;
}

export enum VideoID {
  The7GhhRHRP6T4 = "7ghhRHRP6t4",
}

export enum ViewerRating {
  None = "none",
}

export interface PageInfo {
  resultsPerPage: number;
  totalResults: number;
}
