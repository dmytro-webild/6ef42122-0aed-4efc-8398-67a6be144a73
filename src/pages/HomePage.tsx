import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTwoColumn from '@/components/sections/faq/FaqTwoColumn';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import PricingHighlightedCards from '@/components/sections/pricing/PricingHighlightedCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import { Briefcase, Sparkles, Wind } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardCarousel
      tag="Lava2 Mobile Car Wash"
      title="We bring the sparkle to your driveway."
      description="Professional exterior, interior, and detailing treatments that make your car shine. Serving you at home."
      primaryButton={{
        text: "Book via WhatsApp",
        href: "https://wa.me/34656474532",
      }}
      secondaryButton={{
        text: "Email us",
        href: "mailto:matteoronsies@gmail.com",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HmIunhUsPJFEwuG291xChkZ9Bs/uploaded-1786966380592-kfigd504.png",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HmIunhUsPJFEwuG291xChkZ9Bs/uploaded-1786966380593-g1to3c97.png",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HmIunhUsPJFEwuG291xChkZ9Bs/uploaded-1786966380594-3fbl24s2.png",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3HmIunhUsPJFEwuG291xChkZ9Bs/uploaded-1786966380594-qhvohb13.png",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212208.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/luggage-seen-from-rear-car-window_23-2150934355.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <AboutFeaturesSplit
      tag="Our Expertise"
      title="Comprehensive Car Care"
      description="We offer a wide range of services to keep your vehicle in top condition, from basic washes to deep upholstery cleaning."
      items={[
        {
          icon: Sparkles,
          title: "Exterior Detailing",
          description: "Hand wash, wax, and premium exterior treatments.",
        },
        {
          icon: Briefcase,
          title: "Interior Cleaning",
          description: "Vacuuming, upholstery care, and disinfection.",
        },
        {
          icon: Wind,
          title: "Ozone Treatment",
          description: "Eliminate odors and bacteria effectively.",
        },
      ]}
      imageSrc="https://storage.googleapis.com/webild/users/user_3HmIunhUsPJFEwuG291xChkZ9Bs/uploaded-1786966380594-3fbl24s2.png"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingHighlightedCards
      tag="Transparency"
      title="Affordable Price List"
      description="Premium mobile car wash services at competitive rates."
      plans={[
        {
          tag: "Essential",
          price: "12 €",
          description: "Basic exterior wash.",
          features: [
            "Hand wash",
            "Tire shine",
            "Glass cleaning",
          ],
          primaryButton: {
            text: "Book Now",
            href: "https://wa.me/34656474532",
          },
        },
        {
          tag: "Popular",
          price: "30 €",
          description: "Standard interior & exterior.",
          features: [
            "Hand wash",
            "Full vacuum",
            "Interior wipe down",
            "Glass",
          ],
          highlight: "Best Value",
          primaryButton: {
            text: "Book Now",
            href: "https://wa.me/34656474532",
          },
        },
        {
          tag: "Elite",
          price: "40 €",
          description: "Complete professional wash.",
          features: [
            "Complete interior",
            "Complete exterior",
            "Detailing",
            "Tire shine",
          ],
          primaryButton: {
            text: "Book Now",
            href: "https://wa.me/34656474532",
          },
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="loyalty" data-section="loyalty">
    <SectionErrorBoundary name="loyalty">
          <MetricsSimpleCards
      tag="Customer Rewards"
      title="Loyalty Program"
      description="Your loyalty is rewarded. After 10 washes, get your 11th one absolutely free!"
      metrics={[
        {
          value: "10",
          description: "Washes completed",
        },
        {
          value: "1",
          description: "Free wash earned",
        },
        {
          value: "24/7",
          description: "Commitment to quality",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="reviews" data-section="reviews">
    <SectionErrorBoundary name="reviews">
          <TestimonialColumnMarqueeCards
      tag="Trust"
      title="Client Reviews"
      description="See why our customers love our mobile car wash service."
      testimonials={[
        {
          name: "Maria Garcia",
          role: "Satisfied Customer",
          quote: "Fantastic service! My car looks brand new.",
          imageSrc: "http://img.b2bpic.net/free-photo/lateral-view-beautiful-blonde-woman-car_23-2148384915.jpg",
        },
        {
          name: "John Smith",
          role: "Client",
          quote: "Very professional and convenient at home.",
          imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-standing-front-car-car-showroom_1303-17540.jpg",
        },
        {
          name: "Lucia Rossi",
          role: "Customer",
          quote: "Highly recommend their detailing package.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193576.jpg",
        },
        {
          name: "David M.",
          role: "Happy Client",
          quote: "Excellent work and very reliable team.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-polish-car-garage_1157-26080.jpg",
        },
        {
          name: "Sophie B.",
          role: "Client",
          quote: "Love the convenience of home service.",
          imageSrc: "http://img.b2bpic.net/free-photo/friend-is-calling-beautiful-businesswoman-trying-her-new-car-automobile-salon_146671-16054.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTwoColumn
      tag="Info"
      title="Frequently Asked Questions"
      description="Answers to common questions about our car wash services."
      items={[
        {
          question: "Do you come to my home?",
          answer: "Yes, we are a mobile service and will come to your location.",
        },
        {
          question: "What is the surcharge for SUVs?",
          answer: "SUV/vans have a small surcharge of +€10.",
        },
        {
          question: "How do I book a wash?",
          answer: "You can book via WhatsApp, phone (+34 656474532), or email.",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Booking"
      text="Ready to shine? Book your mobile car wash today."
      primaryButton={{
        text: "Call Us: +34 656474532",
        href: "tel:+34656474532",
      }}
      secondaryButton={{
        text: "Email: matteoronsies@gmail.com",
        href: "mailto:matteoronsies@gmail.com",
      }}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
