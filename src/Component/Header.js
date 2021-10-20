import React, {useCallback} from 'react'
import {
    Box,
    Flex,
    Text,
    InputGroup,
    InputLeftElement,
    Input
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux'
import { getMovies, getMoviesSearch } from '../Redux/moviesActions'

const Header = () => {

    const dispatch = useDispatch();
    //const handleChange = (event) => setValue(event.target.value)
    
    const changeHandler = (event)=>{
        event.preventDefault();
        if(event.target.value.length<3){
          dispatch (getMovies());
        }
        else{
            console.log(event.target.value)
          dispatch(getMoviesSearch (event.target.value));
        }
    }
    const debouncedChangeHandler = useCallback(
        debounce(changeHandler, 300)
        , []);
    return (
        <>
            <Box px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Text
                        as='h1' fontSize={{ base: '25px', md: '50px' }} fontWeight='700'
                        color='#ddd' zIndex='1' ml='7'
                    >
                        Movie Theater
                    </Text>
                    <Flex alignItems={'center'}>
                        <InputGroup mt="3">
                            <InputLeftElement
                                pointerEvents="none"
                                children={<Search2Icon color="gray.300" />}
                            />
                            <Input type="search" placeholder="Search movie" onChange={debouncedChangeHandler}/>
                        </InputGroup>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}

export default Header
