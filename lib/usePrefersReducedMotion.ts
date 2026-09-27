'use client';

import { useSyncExternalStore } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

function subscribe(onChange: () => void) {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
}

/**
 * Lê a preferência de movimento do sistema.
 *
 * `useSyncExternalStore` em vez de `useEffect` + `setState`: matchMedia é
 * estado externo ao React, e ler assim evita o render extra (e o aviso do
 * lint do React 19) que vem de sincronizar estado dentro de um efeito.
 * No servidor devolve `false` — o cliente corrige no primeiro render.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
