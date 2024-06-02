import React from 'react'
import './topbrand.css'
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandList=[
    {
        id:1,
        title: 'Junction',
        time: '26 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/e4aaeadacb8ca2a3e1a77eaa6d1700b2_1665329716.png?output-format=webp",
    },
    {
        id:2,
        title: 'Delhi Darbar',
        time: '33 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/61c0f0caadc8d700980f47cfeee4b6eb_1623837109.png?output-format=webp",
    },
    {
        id:3,
        title: 'KFC',
        time: '24 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433545.png?output-format=webp",
    },
    {
        id:4,
        title: 'Brothers Chaap',
        time: '30 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1b27fe40fe5d3ba0e7a3e061c38bb2ee1709745700.png?output-format=webp",
    },
    {
        id:5,
        title: 'Bhola Maharaj',
        time: '24 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f30573932b05f35c21015dba9d501250_1611319229.png?output-format=webp",
    },
    {
        id:6,
        title: 'Moti Mahal',
        time: '30 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/7843ec36a1c06f61b81f17b77000327d_1665329798.png?output-format=webp",
    },
    {
        id:7,
        title: 'Pizza Hut',
        time: '31 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613212132.png?output-format=webp",
    },
    {
        id:8,
        title: 'Haldiram Prabhuji',
        time: '30 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d7b46a1ee5cca90a3c48c99e2bfb01151700485854.png?output-format=webp",
    },
    {
        id:9,
        title: 'Novelty Multicusine',
        time: '26 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/f013ab700bc169a2f62033254d4a57ec_1611319212.png?output-format=webp",
    },
    {
        id:10,
        title: 'Kwality Walls Frozen Desert',
        time: '23 min',
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/0619ae0b489d44dd3562538f7768e48a_1658824867.png?output-format=webp",
    },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrand = () => {
  return (
    <div className='top-brands max-width'>
      <div className='collection-title'>
        Top brands for you
      </div>
      <Slider {...settings}> 
      {topBrandList.map((brand)=>{
        return <div>
            <div className='top-brands-cover'>
                <img src={brand.cover} alt={brand.title} className='top-brands-image'/>
            </div>
        </div>
      })}

      </Slider>
    </div>
  )
}

export default TopBrand
