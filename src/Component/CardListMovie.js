import React, { useState } from 'react'
import { Flex, Box } from '@chakra-ui/react'
import CardMovie from './CardMovie'
import { useSelector } from 'react-redux'
import { Text } from '@chakra-ui/react'
import StarRatings from 'react-star-ratings'
const CardListMovie = () => {

    const movies = useSelector(store => store.Movies.movies)
    const [ranking, setRanking] = useState(3);
    let movieF = movies.map( x => x );
    if( ranking !== 0 ){
        if( ranking < 2 && ranking !== 0 ){
            movieF = movies.filter( x => (x.vote_average/2) < 2 )
        }else if( ranking < 4 ){
            movieF = movies.filter( x => (x.vote_average/2) < 4 && (x.vote_average/2) > 2 )
        }else if( ranking > 4 ){
            movieF = movies.filter( x => (x.vote_average/2) <= 5 && (x.vote_average/2) > 4 )
        }
    }

    const rankingSubmit = (e) => {
        if( e === ranking ){
            setRanking(0)
        }else{
            setRanking(e)
        }
    }

    return (
        <Flex wrap="wrap" >
            <Text
                as='h2' fontSize={{ base: '25px', md: '30px' }} fontWeight='500'
                color='#eee' zIndex='1' mt='20' ml="10" position='absolute'
            >
                <Box mt="-5" >
                <StarRatings
                    rating={ranking}
                    starRatedColor="yellow"
                    changeRating={rankingSubmit}
                    numberOfStars={5}
                    name='rating'
                    starDimension="3vw"
                    starSpacing="1vw"
                />
                </Box>
            </Text>
            {movieF.map((x) => {
                return <CardMovie key={x.id} name={x.original_title || x.name} image={x.poster_path || x.logo_path} id={x.id} ranking={(x.vote_average/2)} />
            })}
        </Flex>
    )
}

export default CardListMovie
