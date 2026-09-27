'use client';

import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

type Bubble = {
  from: 'user' | 'nunu';
  text: string;
  /** Rótulo de mídia, quando a mensagem do usuário não é texto. */
  kind?: 'audio' | 'image';
};

/**
 * As falas da Nunu seguem o tom real do agente: responde primeiro, traz uma
 * sacada, e só então pergunta. Nada de copy idealizada que o produto não
 * entrega — a página não pode prometer mais do que o WhatsApp cumpre.
 */
const script: Bubble[] = [
  { from: 'user', kind: 'audio', text: 'Vou treinar em 20 minutos, o que eu como?' },
  {
    from: 'nunu',
    text: 'Se é em 20 minutos, vai de algo leve e fácil de digerir. Banana resolve bem; com um pão ou mel junto, você chega com mais energia. 🍌\n\nUma sacada: faltando pouco tempo, eu não faria uma refeição pesada só porque "precisa comer antes" — o desconforto atrapalha mais do que ajuda.',
  },
  { from: 'user', text: 'só tenho ovo, aveia e café' },
  {
    from: 'nunu',
    text: 'Dá pra resolver. Aveia com água quente em dois minutos é o carboidrato que você precisa agora; o ovo deixa pro pós-treino, que é onde ele rende mais.\n\nO café, se você já é acostumada, pode ir junto.',
  },
  { from: 'user', kind: 'image', text: 'e o jantar de ontem, tava ok?' },
  {
    from: 'nunu',
    text: 'Tava bom: arroz, feijão e um filé grelhado dá a base de carboidrato e proteína que você precisa pra recuperar do treino.\n\nSe quiser subir um degrau, uma porção de verdura ou legume fecha o prato. Nada de cortar o que já tá lá.',
  },
];

function Typing() {
  return (
    <div className="flex gap-1 px-1 py-1" aria-label="Nunu está digitando">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="size-2 animate-bounce rounded-full bg-ink-500/40"
          style={{ animationDelay: `${i * 140}ms`, animationDuration: '900ms' }}
        />
      ))}
    </div>
  );
}

export function ChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  // Começa em 1 para a primeira mensagem sair no HTML do servidor: sem isso o
  // mockup aparece como uma caixa vazia até o JS carregar.
  const [revealed, setRevealed] = useState(1);
  const [started, setStarted] = useState(false);
  const reduced = usePrefersReducedMotion();

  // Com movimento reduzido a conversa aparece inteira: ela é conteúdo, não
  // enfeite — quem não quer animação ainda precisa poder lê-la.
  const visible = reduced ? script.length : revealed;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  /**
   * "Digitando" é DERIVADO, não estado: se estamos entre mensagens e a
   * próxima é da Nunu, ela está digitando. Guardar isso num useState exigiria
   * um setState síncrono dentro do efeito — que é justamente o que causa
   * render em cascata.
   */
  const typing =
    started && visible < script.length && script[visible].from === 'nunu';

  useEffect(() => {
    if (!started || reduced || visible >= script.length) {
      return;
    }
    // A Nunu "pensa" antes de responder; o usuário digita rápido.
    const pause = script[visible].from === 'nunu' ? 1100 : 700;
    const timer = setTimeout(() => setRevealed((v) => v + 1), pause);
    return () => clearTimeout(timer);
  }, [visible, started, reduced]);

  // Acompanha a mensagem nova, como um chat de verdade. Sem isso a conversa
  // cresce para baixo e o usuário perde o que acabou de "chegar".
  useEffect(() => {
    const feed = feedRef.current;
    if (!feed) {
      return;
    }
    feed.scrollTo({
      top: feed.scrollHeight,
      behavior: started ? 'smooth' : 'auto',
    });
  }, [visible, typing, started]);

  return (
    <div
      ref={ref}
      className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-sand-200 bg-white shadow-2xl shadow-leaf-900/10"
    >
      <div className="flex items-center gap-3 border-b border-sand-200 bg-leaf-700 px-5 py-4">
        <span
          className="grid size-10 place-items-center rounded-full bg-leaf-500 text-lg font-bold text-white"
          aria-hidden
        >
          N
        </span>
        <div>
          <p className="font-semibold text-white">Nunu</p>
          <p className="text-xs text-leaf-100">online</p>
        </div>
      </div>

      <div
        ref={feedRef}
        className="scrollbar-none flex h-[30rem] flex-col gap-3 overflow-y-auto bg-sand-100 px-4 py-5"
      >
        {script.slice(0, visible).map((b, i) => (
          <div
            key={i}
            className={`flex ${b.from === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed whitespace-pre-line ${
                b.from === 'user'
                  ? 'rounded-br-md bg-leaf-500 text-white'
                  : 'rounded-bl-md bg-white text-ink-900 shadow-sm'
              }`}
            >
              {b.kind ? (
                <span className="mb-1 flex items-center gap-2 text-xs opacity-80">
                  {b.kind === 'audio' ? '🎙️ Áudio · 0:12' : '📸 Foto'}
                </span>
              ) : null}
              {b.text}
            </div>
          </div>
        ))}
        {typing ? (
          <div className="flex justify-start">
            <div className="rounded-2xl rounded-bl-md bg-white px-3 py-2 shadow-sm">
              <Typing />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
