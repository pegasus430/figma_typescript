export type Ticket = {
  id: number;
  title: string;
  created_time: string;
  forum: {
    [key: string]: any;
  };
  author: {
    [key: string]: any;
  };
  latest_post_author: {
    [key: string]: any;
  };
  num_replies: number;
  status: string;
  url: string;
};

export type SortOption = {
  orderBy: string;
  direction: string;
};
