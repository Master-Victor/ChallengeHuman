import React from 'react'
import { Box, Image, Flex, Text, useDisclosure, } from '@chakra-ui/react'
import './hover.css'
import PopupCardDetail from './PopupCardDetail'
import { StarIcon } from '@chakra-ui/icons'

const CardMovie = ({ image, name, id, ranking }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Flex mt="20vh" ml="3">
            <Box boxSize="200" zIndex='1' maxW="400" className="card" onClick={onOpen} >
                <Text
                    as='h3' fontSize={{ base: '15px', md: '20px' }} fontWeight='700'
                    color='#CCC' zIndex='9' position='absolute' ml='10' mt="30vh" isTruncated maxWidth='150'
                >
                    {name}
                </Text>
                {Array(5)
                    .fill("")
                    .map((_, i) => (
                        <StarIcon
                            key={i}
                            color={i < ranking ? "yellow.500" : "gray.300"}
                        />
                    ))}
                <Image src={`https://image.tmdb.org/t/p/original${image}`} borderRadius="30" alt="" objectFit="cover" filter='brightness(55%)' />
                <PopupCardDetail id={id} isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            </Box>
        </Flex>
    )
}

export default CardMovie
