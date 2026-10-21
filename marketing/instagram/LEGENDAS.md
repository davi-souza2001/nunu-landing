# Primeiros posts da Nunu no Instagram

Ordem sugerida: **Post 1 → Reel → Post 3**, um a cada 1–2 dias. Fixe o Post 1 no topo do perfil.

Arquivos:
- `feed/` — artes do feed, 1080×1350 (formato 4:5, o que ocupa mais tela no feed)
- `reel/nunu-reel-conversa.mp4` — Reel 1080×1920, 18 s, sem áudio (adicione uma música pelo próprio Instagram)
- `src/` — HTML das artes (edite texto/cor aqui e gere de novo, ver final do arquivo)

---

## Post 1 — Carrossel "Oi, eu sou a Nunu!"

Slides, na ordem: `post1-1.png`, `post1-2.png`, `post1-3.png`

**Legenda**

```
Oi! Eu sou a Nunu 🌿

Uma assistente de nutrição que mora no seu WhatsApp. Você manda uma dúvida, um áudio correndo ou a foto do prato — e eu respondo considerando o seu objetivo, a sua rotina e o que você pode (ou não pode) comer.

Sem app pra baixar, sem cadastro, sem cartão. As primeiras 30 mensagens são por nossa conta. 💚

👉 Link na bio pra começar.

A Nunu é apoio para o dia a dia e não substitui consulta com nutricionista ou médico.

#nutricao #alimentacaosaudavel #habitossaudaveis #bemestar #rotinasaudavel #comerbem #whatsapp #saude
```

**Texto alternativo** (Configurações avançadas → Acessibilidade):
- 1: "Logo da Nunu e o texto: Oi, eu sou a Nunu! Sua assistente de nutrição no WhatsApp."
- 2: "Como funciona em 3 passos: você chama no WhatsApp, ela pergunta o essencial e te acompanha todo dia."
- 3: "Vamos começar? As primeiras 30 mensagens são por nossa conta. Sem app, sem cadastro, sem cartão. Link na bio."

---

## Reel — "Uma conversa com a Nunu"

Vídeo: `reel/nunu-reel-conversa.mp4`
Capa: use `feed/post2.png` (no Instagram: Editar capa → Adicionar da galeria). Se preferir postar como imagem única em vez de Reel, `post2.png` funciona sozinho com a mesma legenda.

**Legenda**

```
Treino em 20 minutos e nenhuma ideia do que comer? Manda um áudio. 🎙️

A Nunu ouve, entende e responde no seu contexto. E se der vontade de saber se o jantar de ontem tava ok, é só mandar a foto do prato. 📸

Sua rotina mais leve, direto no WhatsApp. Teste grátis com 30 mensagens — link na bio.

#nutricao #pretreino #alimentacaosaudavel #rotinafit #dicasdenutricao #bemestar #reels
```

**Texto alternativo:** "Animação de uma conversa no WhatsApp: a pessoa manda um áudio perguntando o que comer antes do treino e a Nunu responde; depois manda a foto do jantar e a Nunu comenta o prato."

Música: algo calmo e leve (lo-fi, acústico). Volume baixo — o vídeo se entende sem som.

---

## Post 3 — Carrossel "Feito com carinho e ciência"

Slides, na ordem: `post3-1.png`, `post3-2.png`, `post3-3.png`

**Legenda**

```
Feito com carinho e ciência. 🌿

Antes de qualquer sugestão, a Nunu já sabe o seu objetivo, a sua rotina e as suas restrições — alergias, intolerâncias, remédios e condições de saúde. Tudo isso passa pelo filtro antes de chegar em você.

E tem uma coisa que ela faz questão de dizer: ela não substitui o seu nutricionista. A Nunu é o apoio do dia a dia, e quando o assunto é clínico, ela mesma avisa que é hora de procurar um profissional.

Arrasta pro lado e conhece o que ela faz por você. 👉
Teste grátis no link da bio.

#nutricao #saude #bemestar #alimentacaoconsciente #habitossaudaveis #inteligenciaartificial
```

**Texto alternativo:**
- 1: "Feito com carinho e ciência. Cada resposta considera seu objetivo, sua rotina e suas restrições de saúde."
- 2: "O que ela faz: entende áudio, lê a foto do prato, propõe um foco por dia e filtra sugestões por segurança."
- 3: "E o que ela não faz: ela não substitui seu nutricionista. Quando o assunto é clínico, avisa que é hora de procurar um profissional."

---

## Cuidados antes de postar

- **Nada de promessa de resultado** ("perca X kg") nem antes/depois — área de saúde é fiscalizada (CONAR e conselho de nutrição).
- **"Olhar de uma nutricionista"**: a arte de referência dizia isso. Só use se uma nutricionista de fato participou da criação (e, de preferência, com o nome e CRN dela). Por isso o Post 3 fala de "restrições de saúde" e "segurança", que é o que a Nunu entrega.
- **Conversas reais de usuários**: não poste sem autorização por escrito — são dados de saúde (LGPD). As do Reel são fictícias.
- **Bio**: link direto pro WhatsApp — `https://wa.me/558173449635?text=Oi%2C%20Nunu!%20Quero%20come%C3%A7ar%20meu%20teste%20gr%C3%A1tis%20%F0%9F%8C%BF`

---

## Como editar e gerar de novo

1. Edite os textos em `src/feed.html` (posts) ou `src/reel.html` (vídeo). Cores e fontes em `src/brand.css`.
2. Para ver no navegador, abra o arquivo `src/feed.html` direto (duplo clique).
3. Para exportar (precisa do Google Chrome instalado):

```bash
cd marketing/instagram/tools
npm run setup        # só na primeira vez
npm run feed         # gera feed/*.png
npm run reel         # gera reel/nunu-reel-conversa.mp4 (~1 min)
```
