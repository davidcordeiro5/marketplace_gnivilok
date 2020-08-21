import React from 'react'
import styled from 'styled-components'

import DefaultImage from '../assets/images/image-not-found.png'
import { CustomButton } from '../reusable/resable'

const WrapperImageCarousel = styled.div`
  background: url(${props => props.bgi ? props.bgi : DefaultImage}) no-repeat;
  background-size: cover;
  border-radius: 15px;
  width: 100%;
  height: 500px;
  position: relative;
  margin: 30px 0;
`;

const CarouselPostImages = ({ img }) => {
  return (
    <WrapperImageCarousel bgi={img}>
      <CustomButton
        position={'absolute'}
        bottom={'5%'}
        right={'3%'}
        borderRadius={'15px'}
        fontWeight={'bold'}
        onClick={() => console.log("okokok")}
        >
          Voir les 20 photos
      </CustomButton>
    </WrapperImageCarousel>
  )
}

export default CarouselPostImages
