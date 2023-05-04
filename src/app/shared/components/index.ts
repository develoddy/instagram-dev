// ---- Import ----

// --- Import Feed Start ---
import { PostsComponent } from "./main/feed/posts/posts.component";
import { ArticlepostComponent } from "./main/feed/posts/articlepost/articlepost.component";
import { RefreshfeedComponent } from "./main/feed/refreshfeed/refreshfeed.component";
import { StoriesComponent } from "./main/feed/stories/stories.component";
// --- Import Feed End ---

// --- inport reels start ---
import { VideoreelsComponent } from "./main/reels/videoreels/videoreels.component";
import { SidereelsComponent } from "./main/reels/sidereels/sidereels.component";
// --- inport reels end ---

// --- Import nav start ---
import { MorenavComponent } from "./main/nav/morenav/morenav.component";
import { SidebarsearchComponent } from "./main/nav/sidebarsearch/sidebarsearch.component";
import { SidebarnotificationComponent } from "./main/nav/sidebarnotification/sidebarnotification.component";
// --- Import nav end ---

// --- Import explore start ---
import { GridpostsComponent } from "./main/explore/gridposts/gridposts.component";
// --- Import explore end ---

// --- Import direct start ---
import { DirectsidebarComponent } from "./main/direct/directsidebar/directsidebar.component";
import { DirectchatComponent } from "./main/direct/directchat/directchat.component";
// --- Import direct end ---

// --- import Summary Start ---
import { LinkprofileComponent } from "./main/summary/linkprofile/linkprofile.component";
import { PrivacyComponent } from "./main/summary/privacy/privacy.component";
import { SuggestionsComponent } from "./main/summary/suggestions/suggestions.component";
// --- import Summary End ---

// --- Import footer Start ---
import { FooterallComponent } from "./main/footer/footerall/footerall.component";
// --- Import footer End ---

// -- Utilidades start --
import { DisplayProfileComponent } from "./util/over/display-profile/display-profile.component";
import { OverlayComponent } from "./util/over/overlay/overlay.component";
import { OptionPostComponent } from "./util/option-post/option-post.component";
import { EmojisInputPostComponent } from "./util/emojis-input-post/emojis-input-post.component";
// -- Utilidades end --

export const components : any[] = [
    StoriesComponent,
    PostsComponent,
    RefreshfeedComponent,
    LinkprofileComponent,
    SuggestionsComponent,
    PrivacyComponent,
    FooterallComponent,
    MorenavComponent,
    DisplayProfileComponent,
    OverlayComponent,
    ArticlepostComponent,
    OptionPostComponent,
    EmojisInputPostComponent,
    SidebarsearchComponent,
    SidebarnotificationComponent,
    VideoreelsComponent,
    SidereelsComponent,
    GridpostsComponent,
    DirectsidebarComponent,
    DirectchatComponent
];

// --- Export feed start ---
export * from './main/feed/stories/stories.component';
export * from './main/feed/posts/posts.component';
export * from './main/feed/posts/articlepost/articlepost.component';
export * from './main/feed/refreshfeed/refreshfeed.component';
// --- Export feed end ---

// --- Export reels start ---
export * from './main/reels/videoreels/videoreels.component';
export * from './main/reels/sidereels/sidereels.component';
// --- Export reels end ---

// --- Export explorer start ---
export * from './main/explore/gridposts/gridposts.component';
// --- Export explorer end ---

// --- Export direct start ---
export * from './main/direct/directsidebar/directsidebar.component';
export * from './main/direct/directchat/directchat.component';
// --- Export direct end ---

// --- Export Summary Start ---
export * from './main/summary/linkprofile/linkprofile.component';
export * from './main/summary/suggestions/suggestions.component';
export * from './main/summary/privacy/privacy.component';
// --- Export Summary End ---

// --- Export Footer Start
export * from './main/footer/footerall/footerall.component';
// --- Export Footer End

// --- Export Nav Start ---
export * from './main/nav/morenav/morenav.component';
export * from './main/nav/sidebarsearch/sidebarsearch.component';
export * from './main/nav/sidebarnotification/sidebarnotification.component';
// --- Export Nav End ---

// -- Utilidades start --
export * from './util/over/display-profile/display-profile.component';
export * from './util/over/overlay/overlay.component';
export * from './util/option-post/option-post.component';
export * from './util/emojis-input-post/emojis-input-post.component';
// -- Utilidades end -