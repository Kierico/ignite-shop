import { useRouter } from "next/router";
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>
                <p>Gostosas como um abraço, nossos produtos são feitos do mais puro e nobre algodão brasileiro, ideais para climas de Norte a Sul. Todas as cores são 100% algodão, exceto as cinzas-mescla, que são 88% algodão e 12% poliéster.</p>
                <button>
                    Comprar agora
                </button>
            </ProductDetails>
        </ProductContainer>
    )
}