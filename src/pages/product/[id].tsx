import { GetStaticPaths, GetStaticProps } from "next";
import Stripe from "stripe";
import Image from "next/image";
import { stripe } from "@/src/lib/stripe";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";
import axios from "axios";
import { useState } from "react";

interface ProductProps {
    product: {
        id: string;
        name: string;
        imageUrl: string;
        price: string;
        description: string;
        defaultPriceId: string;
    }
}

export default function Product({ product }: ProductProps) {

    /* *redireciona para uma rota interna */
    // const router = useRouter()

    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    async function handleBuyProduct() {
        try {
            setIsCreatingCheckoutSession(true);

            const response = await axios.post('/api/checkout', {
                priceId: product.defaultPriceId,
            })

            const { checkoutUrl } = response.data;

            /* *redireciona para uma rota interna */
            // router.push('/checkout')

            /* redireciona para uma rota externa (Stripe) */
            window.location.href = checkoutUrl

        } catch (err) {
            setIsCreatingCheckoutSession(false);

            /* Conectar com uma ferramenta de observalidade (Datadog / Sentry) */
            alert('Falha ao redirecionar ao checkout!')
        }
    }

    /** 
    const { isFallback } = useRouter()

    if (isFallback) {
        return <strong>Loading...</strong>
    }
    */

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
                <button
                    onClick={handleBuyProduct}
                    disabled={isCreatingCheckoutSession}
                >
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {

        /* Páginas dos Produtos que serão criadas no momento da 'build' */
        paths: [
            { params: { id: 'prod_NP72rn0Wo7Moz6' } }
        ],

        /* Semelhante ao 'true', mas deixa a tela em branco até renderizar as telas. */
        fallback: 'blocking',

        /* Por debaixo dos panos cria todas as páginas dos produtos, mesmo não estando no `paths`. */
        // fallback: true,

        /* Só cria a página do produto que foi passado no `paths`. */
        // fallback: false,
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
                defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1, // 1 hour
    }
}