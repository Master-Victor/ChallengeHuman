import { Box, Spinner, Center } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../Redux/moviesActions'

const Container = ( { children } ) => {

  const dispatch = useDispatch();
  const movies = useSelector( store => store.Movies.movies )
  const status = useSelector( store => store.Movies.status )

  useEffect(() => {
    dispatch(getMovies());
  }, []);

    return (status === 'success' ) ? (
      movies.length > 0 ? <Box
        pos="relative"
        h="100vh"
        w="98vw"
        _before={{
          content: '""',
          bgRepeat:"no-repeat",
          bgImage:
          `url(https://image.tmdb.org/t/p/original/${movies[0].backdrop_path})` || `url(https://image.tmdb.org/t/p/original/${movies[0].logo_path})` || '',
          bgSize: "100vw",
          pos: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.6,
        }}
      >
            {children}
        </Box>:<Box> {children} </Box>
    ): <Center> <Spinner/> </Center>
}

export default Container
