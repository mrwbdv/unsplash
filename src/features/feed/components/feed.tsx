import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateOrAny } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../../../ui/molecules';
import { PhotosContainer } from '../styles';
import { fetchPhotos, fetchNextPagePhotos } from '../model/actions';
import { PhotoFeedItem } from '../../../ui/molecules';

import { IPhotoData } from '../../../api/types';

export const ImagesFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const photos = useSelector((state: RootStateOrAny) => state.photosReducer.photos);
  const searchValue = useSelector((state: RootStateOrAny) => state.searchReducer.searchValue);
  console.log(photos.length);

  const fetchData = () => {
    if (searchValue) {
      dispatch(fetchNextPagePhotos());
    } else {
      dispatch(fetchPhotos());
    }
  };

  const handleDownload = () => {
    console.log('Download');
  };

  const handleFavorite = () => {
    console.log('Favorite');
  };

  return (
    <InfiniteScroll
      style={{ overflowY: 'hidden' }}
      dataLength={photos.length}
      hasMore={true}
      next={fetchData}
      loader={<Spinner />}>
      <PhotosContainer>
        {photos?.map(({ id, smallUrl }: IPhotoData) => (
          <PhotoFeedItem
            key={id}
            img={smallUrl}
            handleDownload={handleDownload}
            handleFavorite={handleFavorite}
          />
        ))}
      </PhotosContainer>
    </InfiniteScroll>
  );
};
