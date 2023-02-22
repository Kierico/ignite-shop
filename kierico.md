# Ignite Shop

[ <img src="public\next.svg" style="width:100px; height:100px; background-color: white;"/> ](https://nextjs.org/docs/getting-started)

## #01 Fundamentos do Next.JS

### #1.2 Criando projeto com Next.js

1. `npx create-next-app@latest`

2. Typescript `npm i typescript @types/react @types/node -D`

> Toda vez que alguma modificação for feita no arquivo `_document.tsx` o servidor tem que ser reiniciado, porque o Next só roda o arquivo uma unica vez e não fica monitorando o arquivo!

    Se as Fontes do Google não carregarem, exclua a pasta `.next` onde está o 'cache' e rode novamento o sever `npm run dev`.

<br /><hr /><br />

## #02 Estrutura Visual

### #2.1 Configurando Stitches

[ <img src="public\stitches.svg" style="with:100px; height:100px; background-color: white;"> ](https://stitches.dev/)

`npm install @stitches/react`

[Server-side rendering](https://stitches.dev/docs/server-side-rendering)

```tsx
<Head>
    {/* Adicionar no '_document.tsx' para renderizar a estilização mesmo com o Javascript desabilitado. */}
    <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
</Head>
```

<br /><hr /><br />

### #2.6 Criando Carrossel

[ <img src="public\radix.svg" style="with:100px; height:100px; background-color: white;"> ](https://www.radix-ui.com/docs/primitives/overview/getting-started)


[ <img src="public\keen-slider.png" style="with:50px; height:50px;"> ](https://keen-slider.io/)

`npm install keen-slider`

<br /><hr /><br />

## #03 Integração com Stripe

### #3.1 Configurando Conta Stripe

Email: `kierico.dev`

[ <img src="public\stripe.svg" style="with:100px; height:100px; background-color: white;"> ](https://dashboard.stripe.com/test/dashboard)

<br /><hr /><br />

### #3.2 Data Fetching no Next.js

> só renderiza a tela depois que o `getServerSideProps` termina de execultar, para poder mostrar no lado do 'client'.

```tsx
    export const getServerSideProps = async () => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        return {
            props: {
                list: [1, 2, 3]
            }
        }
    }

```
    Benefícios:
        * O que roda no `getServerSideProps` não é visível para o 'client' final.
        * Pode fazer chamadas API's, pois será reproduzida em uma camada onde o usuário não tem acesso.
        * Pode colocar código sensível (código de autenticação, código de BD).

<br /><hr /><br />

### #3.3 Buscando produtos do Stripe

`npm i stripe`

ImageUrl:
```js
    /* next.config.js */
    module.exports = {
        images: {
            domains: [
                'files.stripe.com',
            ]
        }
    }
```

    Depois de configurar o `next.config.js` reiniciar o server 'npm run dev'.

<br /><hr /><br />

### #3.4 Utilizando SSG

    Cria páginas estáticas iguais para todos o usuários.
    Quando se usa `getStaticProps`, não temos acesso ao contexto da requisição (nem o 'req' e 'res').
    Só é executado quando roda a 'build' da aplicação.
    Não tenho informação do cooke se há algum usuário logado.


<br /><hr /><br />

## #04 Produto & Checkout

### #4.9 Botão de comprar

`npm i axios`

<br /><hr /><br />

