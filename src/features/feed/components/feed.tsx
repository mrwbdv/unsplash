import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStateOrAny } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../../../ui/molecules';
import { Container } from '../styles';
import { fetchPhotos, fetchNextPagePhotos } from '../model/actions';
import { PhotoFeedItem } from '../../feed-item/components/feed-item';

import { IPhotoData } from '../../../api/types';

export const ImagesFeed = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const photos = useSelector((state: RootStateOrAny) => state.photosReducer.photos);
  const searchValue = useSelector((state: RootStateOrAny) => state.searchReducer.searchValue);
  console.log(photos);
  const fetchData = () => {
    if (searchValue) {
      dispatch(fetchNextPagePhotos());
    } else {
      dispatch(fetchPhotos());
    }
  };
  return (
    <InfiniteScroll
      style={{ overflowY: 'hidden' }}
      dataLength={photos.length}
      hasMore={true}
      next={fetchData}
      loader={<Spinner />}>
      <Container>
        {photos?.map(({ id, smallUrl }: IPhotoData) => (
          <PhotoFeedItem key={id} img={smallUrl} />
        ))}
      </Container>
    </InfiniteScroll>
  );
};
