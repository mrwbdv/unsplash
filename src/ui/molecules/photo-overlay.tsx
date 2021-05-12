import styled from 'styled-components';
import { Image, Icon, Button } from '../atoms';

interface IProps {
  img: string;
  handleDownload: (e: React.FormEvent<HTMLFormElement>) => void;
  handleFavorite: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const PhotoFeedItem = ({ img, handleDownload, handleFavorite }: IProps) => {
  return (
    <Item>
      <ItemOverlay>
        <div>
          <Button
            leftIcon={<Icon name='download' width='24' height='24' viewBox='0 0 24 24' />}
            onClick={handleDownload}
          />
          <Button
            leftIcon={<Icon name='heart' width='24' height='24' viewBox='0 0 24 24' fill='red' />}
            onClick={handleFavorite}
          />
        </div>
      </ItemOverlay>
      <Image src={img} alt='' />
    </Item>
  );
};

export const Item = styled.figure`
  margin: 0;
  display: grid;
  position: relative;
  grid-template-rows: 1fr auto;
  margin-bottom: 10px;
  break-inside: avoid;
  &:hover {
    img {
      filter: brightness(80%);
    }
    div {
      display: flex;
    }
  }
`;

export const ItemOverlay = styled.div`
  display: none;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
