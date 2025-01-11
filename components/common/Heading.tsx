export default function Heading({
  title,
  content,
  image,
}: {
  title: string;
  content: React.ReactNode;
  image: string;
}) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-background lg:block"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-12 sm:py-40 lg:px-8 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                {title}
              </h1>
              {content}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-muted lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          alt=""
          src={image}
          className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
        />
      </div>
    </div>
  );
}
