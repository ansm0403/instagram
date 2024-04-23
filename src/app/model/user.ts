export type AuthUser = {
    name : string;
    username : string;
    email : string;
    image? : string;
    id : string;
}

export type SimpleUser = Pick<AuthUser, 'username' | 'image'>;

export type HomeUser = AuthUser & {
    following : SimpleUser[];
    followers : SimpleUser[];
    bookmarks : string[];
}

export type SearchResultUser = AuthUser & {
    following : number;
    followers : number;
}

export type ProfileUser = SearchResultUser & {
    posts : number;
}