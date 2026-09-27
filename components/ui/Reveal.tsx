'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePrefersReducedMotion } from '@/lib/usePrefersReducedMotion';

interface RevealProps {
  children: ReactNode;
  /** Atraso em ms. Usado para escalonar itens de uma mesma lista. */
  delay?: number;
  className?: string;
}

/**
 * Revela o conteúdo ao entrar na viewport — uma vez só.
 *
 * IntersectionObserver em vez de listener de scroll: não roda no thread
 * principal a cada pixel. O conteúdo está no HTML desde o início e só a
 * opacidade muda, então quem tem JS desligado continua lendo tudo.
 */
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    // Com movimento reduzido não há o que observar: já está tudo visível.
    if (!el || reduced || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced]);

  const shown = seen || reduced;

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-soft ${
        shown ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
