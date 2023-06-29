import React from "react";
import AccordionItem from "../components/AccordeonItem";

function Accordion() {
  return (
    <section className="text-text_color relative z-20 overflow-hidden bg-white pt-15 pb-5">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-light_blue mt-8">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl max-[450px]:mx-3 md:text-[40px]">
                Une question ? On a sûrement la réponse !
              </h2>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="w-full px-4 mr-8 lg:w-1/2">
            <AccordionItem
              header="Comment vérifier le modèle de l'appareil ?"
              text="
Vous pouvez trouver la référence du modèle sur le dos de l’appareil pour les iPhones.
Sinon, allez dans Réglages > Général > Informations et vous trouverez le nom du modèle. Pour les autres produits, Allez dans Paramètres > A propos de l’appareil > le modèle sera affiché ici. Sur certains appareils, vous pouvez trouver le modèle directement sur le boîtier (au dos de l’appareil) ou derrière le cache batterie. Si vous possédez encore la boite d’origine, vous trouverez facilement le modèle."
            />
            <AccordionItem
              header="Comment déterminer l'état de l'appareil ?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Interdum varius sit amet mattis vulputate enim. Elit at imperdiet dui accumsan sit."
            />
            <AccordionItem
              header="Comment trouver les caractéristiques de l'appareil ?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Interdum varius sit amet mattis vulputate enim. Elit at imperdiet dui accumsan sit."
            />
            <AccordionItem
              header="Comment nous contacter pour vous aider ?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Interdum varius sit amet mattis vulputate enim. Elit at imperdiet dui accumsan sit."
            />
          </div>
          <div className="w-full px-4 mr-8 lg:w-1/2">
            <AccordionItem
              header="Comment vérifier le modèle de l'appareil"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Interdum varius sit amet mattis vulputate enim. Elit at imperdiet dui accumsan sit."
            />
            <AccordionItem
              header="Comment déterminer l'état de l'appareil "
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Interdum varius sit amet mattis vulputate enim. Elit at imperdiet dui accumsan sit."
            />
            <AccordionItem
              header="Comment trouver les caractéristiques de l'appareil ?"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Magna fermentum iaculis eu non diam phasellus vestibulum lorem sed. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Interdum varius sit amet mattis vulputate enim. Elit at imperdiet dui accumsan sit."
            />
            <AccordionItem
              header="Comment nous contacter pour vous aider ?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#00ACB0" stopOpacity="0.55" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
              <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Accordion;
