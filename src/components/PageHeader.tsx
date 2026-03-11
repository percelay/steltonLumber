interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-text-main">
            {title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-text-muted leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
