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

Os botões de assinatura (`components/ui/CheckoutButton.tsx`) levam ao Payment
Link do Stripe definido em `NEXT_PUBLIC_CHECKOUT_URL`. Sem ele, ficam só visuais.

- **Local:** crie `.env.local` com
  `NEXT_PUBLIC_CHECKOUT_URL=https://buy.stripe.com/test_...` (link de teste).
- **GitHub Pages:** crie a variável `CHECKOUT_URL` em *Settings → Secrets and
  variables → Actions → Variables*. Comece com o link de teste e troque pelo de
  produção quando o fluxo estiver validado — sem mudar código.

O Payment Link precisa ter **"Coletar número de telefone"** ligado: é por esse
número que o agente (nutri-agent) libera o WhatsApp de quem assina pela landing.

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

R$ 19,99/mês, 30 mensagens grátis e uso justo de 300 respostas/mês saíram do
cálculo de custo por turno (Gemini 3.8 Flash + tarifa de serviço da Meta no
Brasil, vigente desde 1º/10/2026). Mudar o preço aqui não muda o produto: o
preço cobrado é o do Stripe, e o limite grátis é o `FREE_TRIAL_MESSAGES` do
agente — mantenha os três iguais.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 (CSS-first, sem
`tailwind.config.js`) · deploy estático.

Animações de entrada são `IntersectionObserver` + transição CSS, todas atrás de
`prefers-reduced-motion`.

<!-- dv -->
