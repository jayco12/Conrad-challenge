import React from 'react';

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section
      id={id}
      className="min-h-screen flex flex-col items-center justify-center text-center p-8"
    >
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <div className="max-w-3xl">{children}</div>
    </section>
  );
}
