import { Star } from "lucide-react";
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  rating?: number;
  date?: string;
  googleVerified?: boolean;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const GoogleIcon = () => (
  <svg className="size-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const rating = testimonial.rating ?? 5;

  return (
    <div className="flex flex-col justify-between gap-4 xl:gap-5 2xl:gap-6 h-full p-6 xl:p-7 2xl:p-8 rounded card">
      <div className="flex flex-col items-start gap-3 xl:gap-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star key={i} className="size-4 text-amber-400 fill-amber-400" strokeWidth={1} />
            ))}
          </div>
          {testimonial.googleVerified !== false && (
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-foreground/5 text-foreground/80 font-medium border border-border/30">
              <GoogleIcon />
              <span>Google</span>
            </div>
          )}
        </div>
        <p className="text-lg leading-snug">{testimonial.quote}</p>
      </div>

      <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/40">
        <div className="flex items-center gap-3 min-w-0">
          <ImageOrVideo
            imageSrc={testimonial.imageSrc}
            videoSrc={testimonial.videoSrc}
            className="size-10 md:size-11 2xl:size-12 rounded-full object-cover shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-base text-foreground font-semibold leading-snug truncate">{testimonial.name}</span>
            <span className="text-sm text-foreground/75 leading-snug truncate">{testimonial.role}</span>
          </div>
        </div>
        {testimonial.date && (
          <span className="text-xs text-foreground/50 shrink-0">{testimonial.date}</span>
        )}
      </div>
    </div>
  );
};

const TestimonialColumnMarqueeCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  testimonials,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  testimonials: Testimonial[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => {
  const third = Math.ceil(testimonials.length / 3);
  const leftColumn = testimonials.slice(0, third);
  const middleColumn = testimonials.slice(third, third * 2);
  const rightColumn = testimonials.slice(third * 2);

  return (
    <section aria-label="Testimonials section" className="py-20">
      <div className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col items-center gap-2 w-content-width mx-auto">
          <div className="flex items-center gap-2 px-3.5 py-1 mb-1 text-sm card rounded-full w-fit">
            <GoogleIcon />
            <p className="font-medium">{tag}</p>
          </div>

          <TextAnimation
            text={title}
            variant={textAnimation}
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
          />

          <TextAnimation
            text={description}
            variant={textAnimation}
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
          />

          {(primaryButton || secondaryButton) && (
            <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
              {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
              {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />}
            </div>
          )}
        </div>

        <ScrollReveal variant="slide-up" className="w-content-width mx-auto">
          <div className="flex gap-5 h-[450px] md:h-[550px] overflow-hidden mask-fade-y-medium">
            <div className="flex-1 overflow-hidden">
              <div className="flex flex-col gap-5 animate-marquee-vertical-reverse" style={{ animationDuration: "50s" }}>
                {[...leftColumn, ...leftColumn, ...leftColumn, ...leftColumn].map((testimonial, i) => (
                  <TestimonialCard key={`left-${i}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            <div className="hidden md:block flex-1 overflow-hidden">
              <div className="flex flex-col gap-5 animate-marquee-vertical" style={{ animationDuration: "45s" }}>
                {[...middleColumn, ...middleColumn, ...middleColumn, ...middleColumn].map((testimonial, i) => (
                  <TestimonialCard key={`mid-${i}`} testimonial={testimonial} />
                ))}
              </div>
            </div>

            <div className="hidden md:block flex-1 overflow-hidden">
              <div className="flex flex-col gap-5 animate-marquee-vertical-reverse" style={{ animationDuration: "55s" }}>
                {[...rightColumn, ...rightColumn, ...rightColumn, ...rightColumn].map((testimonial, i) => (
                  <TestimonialCard key={`right-${i}`} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialColumnMarqueeCards;
