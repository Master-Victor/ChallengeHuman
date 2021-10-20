import React, { useEffect, useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image
} from "@chakra-ui/react"
import { getMoviesDetail } from '../Redux/moviesActions'
import { useDispatch, useSelector } from 'react-redux'

const PopupCardDetail = ({ id, isOpen, onClose }) => {

    const dispatch = useDispatch();
    const movieDetail = useSelector( store => store.Movies.detail )
    const [load, setLoad] = useState(false);
    if(isOpen && load === false){ 
        dispatch(getMoviesDetail(id))
        setLoad(true);
    }

    return (
      <>
        <Modal onClose={ onClose } isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> {movieDetail.original_title} </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
            <Image src= {`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`} borderRadius="30" alt=""  objectFit="cover" filter='brightness(55%)' />   
            {movieDetail.overview}
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default PopupCardDetail
