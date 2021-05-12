import { useSelector } from 'react-redux';
import { Flex } from '../../../ui/atoms';
import { PhotoFeedItem } from '../../../ui/molecules';
import { GridContainer } from '../../../ui/templates';
import { favoritesItems } from '../model/selectors';
import { IPhotoData } from '../../../api/types';

//DRY НЕ ХОРОШО!! НАДО ПОДУМАТЬ, МОЖЕТ СТОИТ СДЕЛАТЬ ОТДЕЛЬНЫЙ КОМПОНЕНТ???
const handleDownload = () => {
  console.log('Download');
};

const handleFavorite = (id: string) => {
  console.log('Download');
};

export const Favorites = () => {
  const favoritesData = useSelector(favoritesItems);
  return (
    <GridContainer>
      {favoritesData?.map(({ id, smallUrl }: IPhotoData) => (
        <PhotoFeedItem
          id={id}
          key={id}
          img={smallUrl}
          handleDownload={handleDownload}
          handleFavorite={handleFavorite}
        />
      ))}
    </GridContainer>
  );
};
