import { Timestamp } from "rxjs";

/*export interface Post {
    caption: string;
    likes: number;
    imageURL: string;
    ownerUid: string;
    timestamp: string;
    postId: string;
    ownerImageURL: string;
    ownerUsername: string;
    didLike: boolean;
}*/

export class Post {
    caption: string;
    likes: number;
    imageURL: string;
    ownerUid: string;
    timestamp: Timestamp<any>;
    postId: string;
    ownerImageURL: string;
    ownerUsername: string;
    didLike: boolean;

    constructor(
        caption: string,
        likes: number,
        imageURL: string,
        ownerUid: string,
        timestamp: Timestamp<any>,
        postId: string,
        ownerImageURL: string,
        ownerUsername: string,
        didLike: boolean,
     ) {
        this.caption = caption;
        this.likes = likes;
        this.imageURL = imageURL;
        this.ownerUid = ownerUid;
        this.timestamp = timestamp;
        this.postId = postId;
        this.ownerImageURL = ownerImageURL;
        this.ownerUsername = ownerUsername;
        this.didLike = didLike 
    }
}