import type { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

/** Espaçamento e largura de leitura consistentes entre todas as seções. */
export function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-leaf-600 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl leading-tight font-semibold sm:text-4xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-4 text-pretty text-lg leading-relaxed text-ink-500">
          {body}
        </p>
      ) : null}
    </div>
  );
}
