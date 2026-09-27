# Nunu — landing

Landing de divulgação da Nunu, a assistente de nutrição no WhatsApp.
Página única, estática, **sem cadastro** e sem backend.

## Rodar

```bash
npm install
npm run dev
```

> O projeto é exportado como site estático (`output: 'export'`). O `npm run dev`
> funciona normalmente; o que muda é que `npm run start` não existe na prática —
> veja a seção de publicação.

## Checkout

Os botões de assinatura são **apenas visuais** por enquanto — não apontam para
lugar nenhum. Quando o Payment Link do Stripe existir, é envolver o conteúdo de
`components/ui/CheckoutButton.tsx` num `<a href={...}>`.

## Publicar no GitHub Pages

Já está configurado. `.github/workflows/deploy.yml` builda e publica a cada
push na `main`.

```bash
gh repo create nunu-landing --public --source=. --remote=origin --push
```

Depois, uma vez só: **Settings → Pages → Source: GitHub Actions**.

O `basePath` é resolvido pelo próprio workflow (`actions/configure-pages`), então
funciona tanto em `usuario.github.io/nunu-landing` quanto em domínio próprio,
sem editar nada.

### Rodar o build estático localmente

```bash
npm run build && npx serve out
```

`npm run start` não funciona com `output: 'export'` — não existe servidor Next
para iniciar.

## Onde mexer

| O quê | Onde |
|---|---|
| Preço, limite grátis, uso justo, FAQ, recursos | `lib/site.ts` |
| Paleta, fontes, easing | `app/globals.css` (`@theme`) |
| Conversa da demo | `components/ChatDemo.tsx` |
| Ordem das seções | `app/page.tsx` |

`lib/site.ts` é fonte única: o card de preço e o FAQ leem os mesmos valores, então
eles não podem divergir.

## Números da página

R$ 49,90/mês, 30 mensagens grátis e uso justo de 300 respostas/mês saíram do
cálculo de custo por turno (Gemini 3.8 Flash + tarifa de serviço da Meta no
Brasil, vigente desde 1º/10/2026). Mudar o preço aqui não muda o produto —
o limite grátis ainda precisa ser aplicado no backend do agente.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 (CSS-first, sem
`tailwind.config.js`) · deploy estático.

Animações de entrada são `IntersectionObserver` + transição CSS, todas atrás de
`prefers-reduced-motion`.

<!-- dv -->
