import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Inicio",
    "href": "#hero"
  },
  {
    "name": "Servicios",
    "href": "#services"
  },
  {
    "name": "Precios",
    "href": "#pricing"
  },
  {
    "name": "Contacto",
    "href": "#contact"
  },
  {
    "name": "Fidelización",
    "href": "#loyalty"
  },
  {
    "name": "Reseñas",
    "href": "#reviews"
  },
  {
    "name": "FAQ",
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
        text: "Reservar Ahora",
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
          title: "Servicios",
          items: [
            {
              label: "Detailing Exterior",
              href: "#services",
            },
            {
              label: "Limpieza Interior",
              href: "#services",
            },
            {
              label: "Tratamiento de Ozono",
              href: "#services",
            },
          ],
        },
        {
          title: "Contacto",
          items: [
            {
              label: "WhatsApp",
              href: "https://wa.me/34656474532",
            },
            {
              label: "Llamar al +34 656474532",
              href: "tel:+34656474532",
            },
            {
              label: "Enviar Email",
              href: "mailto:matteoronsies@gmail.com",
            },
          ],
        },
      ]}
      copyright="© 2024 Lava2 Car Wash. Todos los derechos reservados."
      links={[
        {
          label: "Política de Privacidad",
          href: "#",
        },
        {
          label: "Términos de Servicio",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
