export interface IPhotoData {
  id: string;
  alt: string;
  smallUrl: string;
  userName: string;
  userPic: string;
}

export interface ISearchUntransformedData {
  total: number;
  total_pages: number;
  results: IPhotoData[];
}

export interface ITopicUntransformedData {
  id: string;
  slug: string;
  title: string;
  total_photos: string;
}

export interface IPhotoUntransformedData {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    raw: string;
    regular: string;
  };
  user: {
    name: string;
    username: string;
    profile_image: {
      medium: string;
    };
  };
  tags: any[];
}
