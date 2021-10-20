import React from 'react'
import { Box, Text, Flex } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import CardListMovie from './CardListMovie'
const Content = () => {

    const movies = useSelector(store => store.Movies.movies)

    return (
        <Box mt="30vh" ml="15vw">
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Flex direction="column" >
            <Box ml="7" w="40vw"> <Text color='#F7E359' > {movies[0].release_date || '??/??/????'} </Text> </Box>
                <Text
                    as='h2' fontSize={{ base: '25px', md: '30px' }} fontWeight='500'
                    color='#eee' zIndex='1' ml='7'
                >
                    {movies[0].original_title || movies[0].name || ''}
                </Text>
                <Box ml="10" w="40vw" >{movies[0].overview || '' }</Box>
                </Flex>
            </Flex>          
            <CardListMovie/>
        </Box>
    )
}

export default Content
