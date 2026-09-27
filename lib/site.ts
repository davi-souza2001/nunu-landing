/**
 * Fonte única dos números e textos que aparecem em mais de um lugar.
 *
 * Preço, limite grátis e uso justo saíram do cálculo de custo real por turno
 * (Gemini 3.8 Flash + tarifa de serviço da Meta no Brasil). Mudar um valor aqui
 * muda a página inteira — inclusive o FAQ, que precisa dizer a mesma coisa que
 * o card de preço.
 */

export const site = {
  name: 'Nunu',
  /** NUtrition + NUrture — o slogan decodifica o nome. */
  tagline: 'Nutrition that nurtures.',
  description:
    'Uma assistente de nutrição no WhatsApp que conhece seus objetivos, suas restrições e sua rotina — e conversa com você todo dia.',
  url: 'https://nunu.app.br',
} as const;

export const pricing = {
  amount: 19.99,
  currency: 'BRL',
  /** Já formatado: evita divergência entre Intl no servidor e no cliente. */
  display: 'R$ 19,99',
  period: '/mês',
  /** Mensagens grátis antes de precisar assinar. Sem prazo de validade. */
  freeMessages: 30,
  /** Uso justo mensal. ~10 trocas por dia — acima do uso real de quase todos. */
  fairUse: 300,
} as const;

export const features = [
  {
    icon: '🎙️',
    title: 'Entende áudio',
    body: 'Mandou um áudio correndo entre uma reunião e outra? Ela ouve, entende e responde como se você tivesse escrito.',
  },
  {
    icon: '📸',
    title: 'Lê a foto do prato',
    body: 'Manda a foto do almoço ou do rótulo. Ela olha, considera o que já sabe de você e responde no contexto.',
  },
  {
    icon: '🎯',
    title: 'Um foco por dia',
    body: 'Todo dia ela propõe um pequeno desafio escolhido pelo seu objetivo. Não deu certo hoje? Ela diminui a meta em vez de mandar tentar amanhã.',
  },
  {
    icon: '🧠',
    title: 'Lembra de você',
    body: 'Você conta uma vez que treina de manhã e não gosta de frango. Ela não pergunta de novo — e nunca mais sugere frango no pós-treino.',
  },
  {
    icon: '🛡️',
    title: 'Filtra por segurança',
    body: 'Alergia, intolerância, gestação, remédio de uso contínuo. Toda sugestão passa por isso antes de chegar em você — em silêncio.',
  },
  {
    icon: '💬',
    title: 'No WhatsApp mesmo',
    body: 'Nada de baixar app nem criar senha. É uma conversa no lugar onde você já conversa o dia inteiro.',
  },
] as const;

export const steps = [
  {
    number: '01',
    title: 'Você manda a primeira mensagem',
    body: 'No WhatsApp, como faria com qualquer pessoa. Sem cadastro, sem formulário, sem app para baixar.',
  },
  {
    number: '02',
    title: 'Ela faz algumas perguntas',
    body: 'Objetivo, medidas e o essencial de saúde — alergias, remédios, condições. Quatro trocas e acabou.',
  },
  {
    number: '03',
    title: 'E então vocês conversam',
    body: 'A partir daí ela responde no seu contexto, propõe um foco por dia e acompanha. Todo dia, no seu ritmo.',
  },
] as const;

export const faq = [
  {
    q: 'O que conta como mensagem?',
    a: `Cada resposta da Nunu. Se você mandar três balõezinhos seguidos, ela junta tudo e responde uma vez só — conta como uma. As ${pricing.freeMessages} mensagens grátis não expiram: use no seu ritmo.`,
  },
  {
    q: 'O que acontece quando acabam as grátis?',
    a: 'Ela avisa e te manda o link da assinatura. Nada some: sua anamnese e seu histórico continuam lá quando você voltar.',
  },
  {
    q: 'Existe limite no plano pago?',
    a: `Há um uso justo de ${pricing.fairUse} respostas por mês, cerca de dez por dia. É bem acima do que quase todo mundo usa, mas preferimos declarar do que esconder numa letra miúda.`,
  },
  {
    q: 'A Nunu substitui nutricionista ou médico?',
    a: 'Não, e ela mesma diz isso quando o assunto é clínico. É apoio diário para hábitos — quem diagnostica, prescreve e acompanha é profissional de saúde. Ela trabalha melhor junto com o seu, não no lugar dele.',
  },
  {
    q: 'O que acontece com meus dados de saúde?',
    a: 'Você aceita explicitamente antes de qualquer coisa, como manda a LGPD. Os dados servem só para personalizar suas orientações, e a qualquer momento você pede a exclusão pelo próprio WhatsApp — tudo é apagado.',
  },
  {
    q: 'Posso cancelar quando quiser?',
    a: 'Pode, a qualquer momento e sem multa. A assinatura vale até o fim do período já pago.',
  },
] as const;

/** Disclaimer médico. Requisito, não rodapé decorativo. */
export const disclaimer =
  'A Nunu é uma assistente virtual de apoio diário ao bem-estar. As orientações dela não substituem consulta, diagnóstico ou tratamento com médico ou nutricionista. Em qualquer sintoma persistente ou condição de saúde, procure um profissional.';
