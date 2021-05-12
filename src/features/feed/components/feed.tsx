import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateOrAny } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner, PhotoFeedItem } from '../../../ui/molecules';

import { fetchPhotos, fetchNextPagePhotos } from '../model/actions';
import { addFavoritesPhoto } from '../../favorites/model/actions';
import { IPhotoData } from '../../../api/types';
import { GridContainer } from '../../../ui/templates';

export const ImagesFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  //  НЕ ЗАБУДЬ СДЕЛАТЬ ЧЕРЕЗ RESELECT
  const photos = useSelector((state: RootStateOrAny) => state.photosReducer.photos);
  const searchValue = useSelector((state: RootStateOrAny) => state.searchReducer.searchValue);

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

  const handleFavorite = (id: string) => {
    dispatch(addFavoritesPhoto(id));
  };

  return (
    <InfiniteScroll
      style={{ overflowY: 'hidden' }}
      dataLength={photos.length}
      hasMore={true}
      next={fetchData}
      loader={<Spinner />}>
      <GridContainer>
        {photos?.map(({ id, smallUrl }: IPhotoData) => (
          <PhotoFeedItem
            id={id}
            key={id}
            img={smallUrl}
            handleDownload={handleDownload}
            handleFavorite={handleFavorite}
          />
        ))}
      </GridContainer>
    </InfiniteScroll>
  );
};
