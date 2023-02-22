import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import Image from "next/image";
import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
    }
}

export default function Product({ product }: ProductProps) {

    return (
        <ProductContainer>
            <ImageContainer>
                <Image
                    src={product.imageUrl}
                    alt=""
                    width={520}
                    height={480}
                />
            </ImageContainer>
            <ProductDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>
                <p>{product.description}</p>
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    id: 'prod_NP72rn0Wo7Moz6'
                }
            }
        ],
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {

    const productId = params.id;

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price'],
    });

    const price = product.default_price as Stripe.Price // para entender o expandable do 'default.price'.

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0], // só pega a primeira imagem no array.
                price: new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                }).format(price.unit_amount / 100), // salva em centavos, para não ter problemas com vírgula (float).
                description: product.description,
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}