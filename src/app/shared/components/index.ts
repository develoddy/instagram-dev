// ---- Import ----

// --- Import Feed Start ---
import { PostsComponent } from "./main/feed/posts/posts.component";
import { RefreshfeedComponent } from "./main/feed/refreshfeed/refreshfeed.component";
import { StoriesComponent } from "./main/feed/stories/stories.component";
// --- Import Feed End ---

// --- Nav Start ---
import { MorenavComponent } from "./main/nav/morenav/morenav.component";
// --- Nav END ---

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
    DisplayProfileComponent
];

// --- Export Start ---
export * from './main/feed/stories/stories.component';
export * from './main/feed/posts/posts.component';
export * from './main/feed/refreshfeed/refreshfeed.component';
// --- Export End ---

// --- Summary Start ---
export * from './main/summary/linkprofile/linkprofile.component';
export * from './main/summary/suggestions/suggestions.component';
export * from './main/summary/privacy/privacy.component';
// --- Summary End ---

// --- Export Footer Start
export * from './main/footer/footerall/footerall.component';
// --- Export Footer End

// --- Export Nav Start ---
export * from './main/nav/morenav/morenav.component';
// --- Export Nav End ---

// -- Utilidades start --
export * from './util/over/display-profile/display-profile.component';
// -- Utilidades end -