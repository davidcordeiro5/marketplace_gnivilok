import React, { useState } from 'react'
import styled from 'styled-components'
import { Modal, ModalBody, ModalHeader, Button } from '@bootstrap-styled/v4';

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
  const [carrouselModal, setCarrouselModal] = useState(false)

  const handleClose = () => setCarrouselModal(!carrouselModal)
  return (
    <WrapperImageCarousel bgi={img}>
      <CustomButton
        position={'absolute'}
        bottom={'5%'}
        right={'3%'}
        borderRadius={'15px'}
        fontWeight={'bold'}
        onClick={() => handleClose()}
      >
        Voir les 20 photos
      </CustomButton>
      {/* <Modal isOpen={carrouselModal} toggle={() => handleClose()}>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
      </Modal> */}
    </WrapperImageCarousel>
  )
}

export default CarouselPostImages
