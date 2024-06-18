export type Root = Root2[];

export interface Root2 {
  commit: Commit;
  committer: Committer2;
}

export interface Commit {
  author: Author;
  committer: Committer;
  message: string;
  tree: Tree;
  url: string;
  comment_count: number;
  verification: Verification;
}

export interface CommitTransform {
  author: Author;
  committer: Committer;
  message: string;
  tree: Tree;
  url: string;
  commentCount: number;
  verification: Verification;
}
export interface Author {
  name: string;
  email: string;
  date: string;
}

export interface Committer {
  name: string;
  email: string;
  date: string;
}

export interface Tree {
  sha: string;
  url: string;
}

export interface Verification {
  verified: boolean;
  reason: string;
  signature?: string;
  payload?: string;
}

export interface Committer2 {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
