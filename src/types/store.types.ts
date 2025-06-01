import { UserDetails } from "./pages.types";

export interface UserState {
  userDetails: Partial<UserDetails>;
  csrfToken: string;
}
export interface header {
  pageName: string;
}
