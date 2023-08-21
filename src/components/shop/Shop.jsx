import React from 'react'
import './shop.css'
import { Card, 
    Image,
    // Stack,
    // Heading,
    Text,
    Divider,
    // ButtonGroup,
    CardHeader,
    SimpleGrid,
    Button,
    CardBody,
    CardFooter, 
    // Center
} from '@chakra-ui/react'
import Tulip from '../../assets/Tulip.jpg'
import Dahlias from '../../assets/Dahlias.jpg'
import Sunflower from '../../assets/Sunflower.jpg'
import Lavender from '../../assets/Lavender.jpg'
import Orchid from '../../assets/Orchid.jpg'
import Birthday from '../../assets/Birthday.jpg'
import Wedding from '../../assets/Wedding.jpg'
import Jasmin from '../../assets/Jasmin.jpg'
import {FaStar} from 'react-icons/fa'
import {FaRegStar} from 'react-icons/fa'

const Shop = () => {
  return (
    <section className='shop'>
        <h2>Best Gifts</h2>
        <h1>Shop Our Products</h1>
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'id='shop'>
    <Card className='shop-items'>
    <CardHeader>
    <Image
        src={Tulip} className='shop-items-image'
        alt='Tulip'
        borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
        <Text className='shop__text'>Tulip Bouquet</Text>
        <Text className='price'>150.00 DZ</Text>
    </CardBody>
    <CardFooter>
        <Button className='btn btn__shop'>
            Buy now
        </Button>
    </CardFooter>
  </Card>
  <Card className='shop-items'>
    <CardHeader>
    <Image
        src={Orchid} className='shop-items-image'
        alt='Orchid'
        borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
    <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaRegStar className='stars'/>
        <Text className='shop__text'>Orchid Bouquet</Text>
        <Text className='price'>140.00 DZ</Text>
    </CardBody>
    <CardFooter>
        <Button className='btn btn__shop'>
            Buy now
        </Button>
    </CardFooter>
  </Card>
  <Card className='shop-items'>
    <CardHeader>
    <Image
        src={Lavender} className='shop-items-image'
        alt='Lavnder'
        borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
    <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
        <Text className='shop__text'>Lavender Bouquet</Text>
        <Text className='price'>150.00 DZ</Text>
    </CardBody>
    <CardFooter>
        <Button className='btn btn__shop'>
            Buy now
        </Button>
    </CardFooter>
  </Card>
  <Card className='shop-items'>
    <CardHeader>
    <Image
        src={Sunflower} className='shop-items-image'
        alt='Sunflower'
        borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaRegStar className='stars'/>
            <FaRegStar className='stars'/>
        <Text className='shop__text'>Sunflower Bouquet</Text>
        <Text className='price'>120.00 DZ</Text>
    </CardBody>
    <Divider/>
    <CardFooter>
        <Button className='btn btn__shop'>
            Buy now
        </Button>
    </CardFooter>
  </Card>
</SimpleGrid>
<SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' id='shop'>
<Card className='shop-items'>
    <CardHeader>
    <Image
        src={Dahlias} className='shop-items-image'
        alt='Dahlias'
        borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaRegStar className='stars'/>
            <FaRegStar className='stars'/>
        <Text className='shop__text'>Dahlias Bouquet</Text>
        <Text className='price'>145.00 DZ</Text>
    </CardBody>
    <CardFooter>
        <Button className='btn btn__shop'>
            Buy now
        </Button>
    </CardFooter>
  </Card>
  <Card className='shop-items'>
    <CardHeader>
    <Image
        src={Birthday} className='shop-items-image'
        alt='Birthday'
        borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
        <Text className='shop__text'>Birthday Bouquet</Text>
        <Text className='price'>170.00 DZ</Text>
    </CardBody>
    <CardFooter>
        <Button className='btn btn__shop'>
            Buy now
        </Button>
    </CardFooter>
  </Card>
  <Card className='shop-items'>
    <CardHeader>
    <Image
        src={Wedding} className='shop-items-image'
        alt='Wedding'
        borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
    <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
        <Text className='shop__text'>Wedding Bouquet</Text>
        <Text className='price'>200.00 DZ</Text>
    </CardBody>
    <CardFooter>
        <Button className='btn btn__shop'>
            Buy now
        </Button>
    </CardFooter>
  </Card>
  <Card className='shop-items'>
    <CardHeader>
    <Image
        src={Jasmin} className='shop-items-image'
        alt='Jasmin'
        borderRadius='lg'
    />
    </CardHeader>
    <CardBody>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaStar className='stars'/>
            <FaRegStar className='stars'/>
        <Text className='shop__text'>Jasmin Bouquet</Text>
        <Text className='price'>160.00 DZ</Text>
    </CardBody>
    <Divider/>
    <CardFooter>
        <Button className='btn btn__shop'>
            Buy now
        </Button>
    </CardFooter>
  </Card>
</SimpleGrid>
    </section>

  )
}

export default Shop