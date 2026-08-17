import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Loyalty",
    "href": "#loyalty"
  },
  {
    "name": "Reviews",
    "href": "#reviews"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="floatingGradient" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Lava2"
      ctaButton={{
        text: "Book Now",
        href: "https://wa.me/34656474532",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="LAVA2"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Exterior Detail",
              href: "#services",
            },
            {
              label: "Interior Clean",
              href: "#services",
            },
            {
              label: "Ozone Treatment",
              href: "#services",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/34656474532",
            },
            {
              label: "Call +34 656474532",
              href: "tel:+34656474532",
            },
            {
              label: "Email Us",
              href: "mailto:matteoronsies@gmail.com",
            },
          ],
        },
      ]}
      copyright="© 2024 Lava2 Car Wash. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
