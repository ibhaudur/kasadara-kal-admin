import { UserDetails } from "./pages.types";

export interface UserState {
  userDetails: Partial<UserDetails>;
  token: string;
}
export interface header {
  pageName: string;
}
