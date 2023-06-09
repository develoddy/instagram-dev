export class User {
    fullname?: string | null;
    email: string | null;
    phoneNumber: string | null;
    profileImageURL: string | null;
    username?: string | null;
    uid: string | null;
    emailVerified: boolean;

    displayname?: string | null;
    photoURL?: string | null;
    
    stats?: UserStats;
    isFollwed?: boolean = false;
}

export interface UserStats {
    followers: number;
    followings: number;
    posts: number;
}