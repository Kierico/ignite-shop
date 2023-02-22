import { GetServerSideProps } from "next";
import Stripe from "stripe";

import { stripe } from "../lib/stripe";

import Image from "next/image";

/* Rook do Keen-Slider */
import { useKeenSlider } from 'keen-slider/react';

import { HomeContainer, Product } from "../styles/pages/home";

import camiseta1 from '../assets/camisetas/1.png';
import camiseta2 from '../assets/camisetas/2.png';
import camiseta3 from '../assets/camisetas/3.png';
import camiseta4 from '../assets/camisetas/4.png';
import camisetaPlaceholder from '../assets/camisetas/placeholder.png'

/* CSS do Keen-Slider */
import 'keen-slider/keen-slider.min.css';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[]
}

export default function Home({ products }: HomeProps) {

  /* Keen-Slider */
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48, // gap / padding
    }
  })

  return (
    /* passar no "HomeContainer" a 'ref' e as 'className', e em "Product" as 'className' para funcionar o Keen-Slider. */
    <HomeContainer ref={sliderRef} className="keen-slider">

      {/* <pre>{JSON.stringify(products)}</pre> */}

      {products.map(product => {
        return (
          < Product key={product.id} className="keen-slider__slide" >
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt=""
            />
            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}

    </HomeContainer >
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'] // por ser uma 'lista', o 'data' vem na frente do 'default.price'.
  })

  const products = response.data.map(product => {

    const price = product.default_price as Stripe.Price // para entender o expandable do 'default.price'.

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0], // só pega a primeira imagem no array.
      price: price.unit_amount / 100, // salva em centavos, para não ter problemas com vírgula (float).
    }
  })

  return {
    props: {
      products,
    }
  }
}