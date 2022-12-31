import React, { useState, useEffect } from 'react'
import { Container, Flex, Link, Skeleton } from '@chakra-ui/react';


import {
    Box,
    Card,
    Text,
    Button,
    ButtonGroup,
    Stack,
    Grid,
    GridItem,
    Image,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Checkbox, CheckboxGroup, useMediaQuery

} from '@chakra-ui/react'
import '../Components/card.css'

import {

    RadioGroup,
    Radio,

} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'






export default function Products()  {


  

    const [data, setData] = useState([]);

    useEffect(() => {
        let url = `http://localhost:3002/products`

       

        getProducts(url);

    }, [])

    const getProducts = async (url) => {

        let res = await fetch(url)
        let data = await res.json()
        setData(data)
        console.log(data);


    }
   
 
    return (

        <>
            <Box w='100%' h='36px' bg={'#f7f7f7'}>
                <Text opacity='0.7' margin='auto' fontSize='xs' align={'center'} >Mens Collection</Text>
            </Box>
        

            <Grid  w='80%' templateColumns='repeat(3,1fr)'  justifyContent='center' margin='auto' rowGap='35'   >
                {data.map((ele) => {
                    return (
                        <div key={ele.id} className="cardLayout">
                            <div className="cardImgDiv">
                                <img src={ele.image} alt="" />
                            </div>
                            <h3>{ele.brand}</h3>
                            <p className="color">{ele.title}</p>
                            <p className="priceC">₹‌{ele.price}</p>

                            <Stack direction='row' spacing={4} align='center'>
  <Button colorScheme='gray' variant='solid'>
  <Link to={`/product/${ele.id}`}>  view</Link>
  </Button>
  <Button colorScheme='gray' variant='solid'>
  <Link to={`/product/${ele.id}/edit`}>  edit</Link>  
  </Button>
  <Button colorScheme='gray' variant='solid'>
    delete
  </Button>

</Stack>
                        </div>


                    )
                })}
            </Grid>
        </>


    )
}
