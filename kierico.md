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

