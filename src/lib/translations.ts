export type Language = "pt" | "es" | "en";

export interface TranslationKeys {
  nav: {
    destinations: string;
    packages: string;
    about: string;
    contact: string;
    bookNow: string;
    legend: string;
  };
  hero: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    destination: string;
    destinationPlaceholder: string;
    date: string;
    datePlaceholder: string;
    adults: string;
    adultsPlaceholder: string;
    children: string;
    childrenPlaceholder: string;
    search: string;
    statsDestinations: string;
    statsClients: string;
    statsSatisfaction: string;
    statsSupport: string;
  };
  destinations: {
    badge: string;
    title1: string;
    titleHighlight: string;
    title2: string;
    subtitle: string;
    perPerson: string;
    book: string;
    items: {
      name: string;
      country: string;
      badge: string;
      whatsappMsg: string;
    }[];
  };
  features: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  testimonials: {
    badge: string;
    title1: string;
    titleHighlight: string;
    subtitle: string;
    items: { name: string; role: string; text: string }[];
  };
  newsletter: {
    badge: string;
    title: string;
    subtitle: string;
    autoResponse: string;
    whatsapp: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    attractions: string;
    contactUs: string;
    callWhatsApp: string;
    copyright: string;
    terms: string;
    privacy: string;
    producedBy: string;
  };
  whatsappButton: {
    tooltip: string;
  };
  legend: {
    badge: string;
    title1: string;
    titleHighlight: string;
    text: string;
    source: string;
  };
  chatbot: {
    title: string;
    placeholder: string;
    greeting: string;
    fallback: string;
  };
  cookie: {
    message: string;
    accept: string;
    decline: string;
    learnMore: string;
  };
  notFound: {
    title: string;
    subtitle: string;
    backHome: string;
  };
}

export const translations: Record<Language, TranslationKeys> = {
  pt: {
    nav: {
      destinations: "Destinos",
      packages: "Pacotes",
      about: "Sobre",
      contact: "Contato",
      bookNow: "Reserve Agora",
      legend: "Lenda",
    },
    hero: {
      badge: "Foz do Iguaçu — Maravilha do Mundo",
      title1: "Viva a Emoção das",
      titleHighlight: "Cataratas",
      title2: "com a Zayin Tour",
      subtitle: "Cataratas do Iguaçu, Itaipu, Parque das Aves, Marco das Três Fronteiras e muito mais. Pacotes exclusivos com atendimento personalizado.",
      destination: "Destino",
      destinationPlaceholder: "Foz do Iguaçu",
      date: "Data",
      datePlaceholder: "Quando?",
      adults: "Adultos",
      adultsPlaceholder: "Nº de adultos",
      children: "Crianças (até 12)",
      childrenPlaceholder: "Nº de crianças",
      search: "Buscar",
      statsDestinations: "Destinos",
      statsClients: "Clientes Felizes",
      statsSatisfaction: "Satisfação",
      statsSupport: "Suporte",
    },
    destinations: {
      badge: "Destinos em Foz do Iguaçu",
      title1: "Nossos",
      titleHighlight: "Pacotes",
      title2: "Turísticos",
      subtitle: "Conheça os principais pontos turísticos de Foz do Iguaçu com a Zayin Tour.",
      perPerson: "por pessoa",
      book: "Reservar",
      items: [
        { name: "Cataratas do Iguaçu", country: "Lado Brasileiro", badge: "Mais Vendido", whatsappMsg: "Olá! Quero saber sobre o passeio nas Cataratas do Iguaçu (Lado Brasileiro)." },
        { name: "Cataratas — Lado Argentino", country: "Puerto Iguazú", badge: "Imperdível", whatsappMsg: "Olá! Quero saber sobre o passeio nas Cataratas do Iguaçu (Lado Argentino)." },
        { name: "Usina de Itaipu", country: "Foz do Iguaçu", badge: "-28% OFF", whatsappMsg: "Olá! Quero saber sobre o passeio na Usina de Itaipu." },
        { name: "Parque das Aves", country: "Foz do Iguaçu", badge: "Família", whatsappMsg: "Olá! Quero saber sobre o passeio no Parque das Aves." },
        { name: "Marco das 3 Fronteiras", country: "Brasil · Argentina · Paraguai", badge: "Cultural", whatsappMsg: "Olá! Quero saber sobre o passeio no Marco das Três Fronteiras." },
        { name: "Ponte da Integração", country: "Brasil · Paraguai", badge: "Novo", whatsappMsg: "Olá! Quero saber sobre o passeio na nova Ponte da Integração Brasil-Paraguai." },
      ],
    },
    features: {
      badge: "Por Que a Zayin Tour?",
      title1: "Viaje com",
      titleHighlight: "Confiança",
      subtitle: "Mais do que uma agência, somos seus parceiros em cada aventura em Foz do Iguaçu.",
      items: [
        { title: "Suporte 24/7", description: "Atendimento via WhatsApp a qualquer hora. Estamos sempre prontos para ajudar." },
        { title: "Guias Locais Experientes", description: "Guias que conhecem cada canto de Foz do Iguaçu e região da tríplice fronteira." },
        { title: "Viagem Segura", description: "Seguro viagem e transporte com conforto e segurança em todos os passeios." },
        { title: "Melhor Preço", description: "Pacotes com os melhores preços da região. Garantia de satisfação ou seu dinheiro de volta." },
        { title: "Transfer Incluso", description: "Buscamos você no hotel ou aeroporto. Transporte confortável e pontual." },
        { title: "Atendimento Humanizado", description: "Tratamos cada viajante como família. Deus abençoe cada experiência que proporcionamos." },
      ],
    },
    testimonials: {
      badge: "Depoimentos",
      title1: "O Que Dizem Nossos",
      titleHighlight: "Viajantes",
      subtitle: "Histórias reais de quem viveu experiências inesquecíveis em Foz do Iguaçu.",
      items: [
        { name: "Maria Helena S.", role: "Visitou as Cataratas do Iguaçu", text: "Experiência incrível! A Zayin Tour cuidou de cada detalhe. O passeio nas cataratas foi emocionante, o guia era excelente. Voltarei com certeza! Deus abençoe a equipe!" },
        { name: "Pedro Augusto R.", role: "Visitou Itaipu + Cataratas", text: "Fizemos o combo Cataratas + Itaipu e foi simplesmente maravilhoso. Ver as comportas abertas de Itaipu é de tirar o fôlego. Atendimento nota 10!" },
        { name: "Ana Beatriz Costa", role: "Visitou o Parque das Aves", text: "As crianças amaram o Parque das Aves! As araras são lindas e o tucano veio pousar no meu braço. A Zayin Tour organizou tudo perfeitamente. Super recomendo!" },
        { name: "Ricardo e Família", role: "Pacote Completo Foz do Iguaçu", text: "Quarta vez que viajamos com a Zayin Tour. Desta vez fizemos o pacote completo: Cataratas dos dois lados, Itaipu, Marco das 3 Fronteiras e Parque das Aves. Perfeito!" },
      ],
    },
    newsletter: {
      badge: "Fale Conosco Agora",
      title: "Monte Seu Pacote Ideal",
      subtitle: "Entre em contato pelo WhatsApp ou telefone e monte o roteiro perfeito para sua viagem a Foz do Iguaçu. Atendimento personalizado!",
      autoResponse: "Obrigado pelo contato, em que podemos ajudar? Retornamos em breve assim que lermos sua mensagem. Deus Abençoe você!",
      whatsapp: "WhatsApp",
    },
    footer: {
      description: "Sua agência de turismo em Foz do Iguaçu. Pacotes exclusivos para as Cataratas, Itaipu, Parque das Aves e muito mais. Deus Abençoe você!",
      quickLinks: "Links Rápidos",
      attractions: "Principais Atrações",
      contactUs: "Fale Conosco",
      callWhatsApp: "Chamar no WhatsApp",
      copyright: "Zayin Tour. Todos os direitos reservados. Deus Abençoe você!",
      terms: "Termos de Uso",
      privacy: "Privacidade",
      producedBy: "Produzido por",
    },
    whatsappButton: { tooltip: "Fale conosco!" },
    legend: {
      badge: "Lenda Guarani",
      title1: "A Lenda de",
      titleHighlight: "Tarobá e Naipi",
      text: "Os índios Guarani contam que o mundo era governado por M'Boy, um deus-serpente filho de Tupã. Naipi, a bela filha do cacique, era consagrada a M'Boy. Mas o guerreiro Tarobá se apaixonou por ela. No dia da consagração, Tarobá fugiu com Naipi numa canoa rio abaixo. Furioso, M'Boy penetrou a terra e criou uma gigantesca fenda — nasceram assim as Cataratas do Iguaçu. Naipi foi transformada em rocha, eternamente banhada pelas águas. Tarobá virou uma palmeira à beira do abismo, inclinada sobre a Garganta do Diabo, vigiando sua amada para sempre.",
      source: "Lenda dos povos Guarani — Patrimônio cultural da região da Tríplice Fronteira",
    },
    chatbot: {
      title: "Assistente Zayin Tour",
      placeholder: "Digite sua pergunta...",
      greeting: "Olá! Sou o assistente virtual da Zayin Tour. Como posso ajudar? Pergunte sobre nossos passeios, preços, horários e mais!",
      fallback: "Desculpe, não entendi. Tente perguntar sobre: Cataratas, Itaipu, Parque das Aves, preços, horários, transfer ou WhatsApp. Ou fale com a gente pelo WhatsApp!",
    },
    cookie: {
      message: "Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa Política de Privacidade (LGPD).",
      accept: "Aceitar",
      decline: "Recusar",
      learnMore: "Saiba mais",
    },
    notFound: {
      title: "Página não encontrada",
      subtitle: "Ops! Parece que você se perdeu na trilha. Volte para a página inicial e explore nossos destinos incríveis.",
      backHome: "Voltar ao Início",
    },
  },
  es: {
    nav: {
      destinations: "Destinos",
      packages: "Paquetes",
      about: "Nosotros",
      contact: "Contacto",
      bookNow: "Reservar Ahora",
      legend: "Leyenda",
    },
    hero: {
      badge: "Foz do Iguazú — Maravilla del Mundo",
      title1: "Vive la Emoción de las",
      titleHighlight: "Cataratas",
      title2: "con Zayin Tour",
      subtitle: "Cataratas del Iguazú, Itaipú, Parque de las Aves, Hito de las 3 Fronteras y mucho más. Paquetes exclusivos con atención personalizada.",
      destination: "Destino",
      destinationPlaceholder: "Foz do Iguazú",
      date: "Fecha",
      datePlaceholder: "¿Cuándo?",
      adults: "Adultos",
      adultsPlaceholder: "Nº de adultos",
      children: "Niños (hasta 12)",
      childrenPlaceholder: "Nº de niños",
      search: "Buscar",
      statsDestinations: "Destinos",
      statsClients: "Clientes Felices",
      statsSatisfaction: "Satisfacción",
      statsSupport: "Soporte",
    },
    destinations: {
      badge: "Destinos en Foz do Iguazú",
      title1: "Nuestros",
      titleHighlight: "Paquetes",
      title2: "Turísticos",
      subtitle: "Conoce los principales puntos turísticos de Foz do Iguazú con Zayin Tour.",
      perPerson: "por persona",
      book: "Reservar",
      items: [
        { name: "Cataratas del Iguazú", country: "Lado Brasileño", badge: "Más Vendido", whatsappMsg: "¡Hola! Quiero saber sobre el paseo en las Cataratas del Iguazú (Lado Brasileño)." },
        { name: "Cataratas — Lado Argentino", country: "Puerto Iguazú", badge: "Imperdible", whatsappMsg: "¡Hola! Quiero saber sobre el paseo en las Cataratas del Iguazú (Lado Argentino)." },
        { name: "Represa de Itaipú", country: "Foz do Iguazú", badge: "-28% OFF", whatsappMsg: "¡Hola! Quiero saber sobre el paseo en la Represa de Itaipú." },
        { name: "Parque de las Aves", country: "Foz do Iguazú", badge: "Familia", whatsappMsg: "¡Hola! Quiero saber sobre el paseo en el Parque de las Aves." },
        { name: "Hito de las 3 Fronteras", country: "Brasil · Argentina · Paraguay", badge: "Cultural", whatsappMsg: "¡Hola! Quiero saber sobre el paseo en el Hito de las Tres Fronteras." },
        { name: "Puente de la Integración", country: "Brasil · Paraguay", badge: "Nuevo", whatsappMsg: "¡Hola! Quiero saber sobre el paseo en el nuevo Puente de la Integración Brasil-Paraguay." },
      ],
    },
    features: {
      badge: "¿Por Qué Zayin Tour?",
      title1: "Viaja con",
      titleHighlight: "Confianza",
      subtitle: "Más que una agencia, somos tus compañeros en cada aventura en Foz do Iguazú.",
      items: [
        { title: "Soporte 24/7", description: "Atención vía WhatsApp a cualquier hora. Siempre estamos listos para ayudar." },
        { title: "Guías Locales Expertos", description: "Guías que conocen cada rincón de Foz do Iguazú y la región de la triple frontera." },
        { title: "Viaje Seguro", description: "Seguro de viaje y transporte con confort y seguridad en todos los paseos." },
        { title: "Mejor Precio", description: "Paquetes con los mejores precios de la región. Garantía de satisfacción o devolución." },
        { title: "Transfer Incluido", description: "Te buscamos en el hotel o aeropuerto. Transporte cómodo y puntual." },
        { title: "Atención Humanizada", description: "Tratamos a cada viajero como familia. Dios bendiga cada experiencia que brindamos." },
      ],
    },
    testimonials: {
      badge: "Testimonios",
      title1: "Lo Que Dicen Nuestros",
      titleHighlight: "Viajeros",
      subtitle: "Historias reales de quienes vivieron experiencias inolvidables en Foz do Iguazú.",
      items: [
        { name: "María Helena S.", role: "Visitó las Cataratas del Iguazú", text: "¡Experiencia increíble! Zayin Tour cuidó cada detalle. El paseo en las cataratas fue emocionante, el guía era excelente. ¡Volveré con seguridad! ¡Dios bendiga al equipo!" },
        { name: "Pedro Augusto R.", role: "Visitó Itaipú + Cataratas", text: "Hicimos el combo Cataratas + Itaipú y fue simplemente maravilloso. Ver las compuertas abiertas de Itaipú es impresionante. ¡Atención nota 10!" },
        { name: "Ana Beatriz Costa", role: "Visitó el Parque de las Aves", text: "¡Los niños amaron el Parque de las Aves! Los guacamayos son hermosos y el tucán vino a posarse en mi brazo. Zayin Tour organizó todo perfectamente. ¡Súper recomiendo!" },
        { name: "Ricardo y Familia", role: "Paquete Completo Foz do Iguazú", text: "Cuarta vez que viajamos con Zayin Tour. Esta vez hicimos el paquete completo: Cataratas de ambos lados, Itaipú, Hito de las 3 Fronteras y Parque de las Aves. ¡Perfecto!" },
      ],
    },
    newsletter: {
      badge: "Háblanos Ahora",
      title: "Arma Tu Paquete Ideal",
      subtitle: "Contáctanos por WhatsApp o teléfono y arma el itinerario perfecto para tu viaje a Foz do Iguazú. ¡Atención personalizada!",
      autoResponse: "¡Gracias por contactarnos! ¿En qué podemos ayudar? Respondemos pronto apenas leamos su mensaje. ¡Dios los bendiga!",
      whatsapp: "WhatsApp",
    },
    footer: {
      description: "Tu agencia de turismo en Foz do Iguazú. Paquetes exclusivos para las Cataratas, Itaipú, Parque de las Aves y mucho más. ¡Dios los bendiga!",
      quickLinks: "Enlaces Rápidos",
      attractions: "Principales Atracciones",
      contactUs: "Contáctenos",
      callWhatsApp: "Llamar por WhatsApp",
      copyright: "Zayin Tour. Todos los derechos reservados. ¡Dios los bendiga!",
      terms: "Términos de Uso",
      privacy: "Privacidad",
      producedBy: "Producido por",
    },
    whatsappButton: { tooltip: "¡Háblanos!" },
    legend: {
      badge: "Leyenda Guaraní",
      title1: "La Leyenda de",
      titleHighlight: "Tarobá y Naipi",
      text: "Los indígenas Guaraníes cuentan que el mundo era gobernado por M'Boy, un dios-serpiente hijo de Tupá. Naipi, la hermosa hija del cacique, estaba consagrada a M'Boy. Pero el guerrero Tarobá se enamoró de ella. El día de la consagración, Tarobá huyó con Naipi en una canoa río abajo. Furioso, M'Boy penetró la tierra y creó una gigantesca grieta — así nacieron las Cataratas del Iguazú. Naipi fue transformada en roca, eternamente bañada por las aguas. Tarobá se convirtió en una palmera al borde del abismo, inclinada sobre la Garganta del Diablo, vigilando a su amada por siempre.",
      source: "Leyenda de los pueblos Guaraníes — Patrimonio cultural de la región de la Triple Frontera",
    },
    chatbot: {
      title: "Asistente Zayin Tour",
      placeholder: "Escribe tu pregunta...",
      greeting: "¡Hola! Soy el asistente virtual de Zayin Tour. ¿Cómo puedo ayudar? ¡Pregunta sobre nuestros paseos, precios, horarios y más!",
      fallback: "Disculpa, no entendí. Intenta preguntar sobre: Cataratas, Itaipú, Parque de las Aves, precios, horarios, transfer o WhatsApp. ¡O habla con nosotros por WhatsApp!",
    },
    cookie: {
      message: "Utilizamos cookies para mejorar su experiencia. Al continuar navegando, acepta nuestra Política de Privacidad.",
      accept: "Aceptar",
      decline: "Rechazar",
      learnMore: "Saber más",
    },
    notFound: {
      title: "Página no encontrada",
      subtitle: "¡Ups! Parece que te perdiste en el sendero. Vuelve a la página principal y explora nuestros destinos increíbles.",
      backHome: "Volver al Inicio",
    },
  },
  en: {
    nav: {
      destinations: "Destinations",
      packages: "Packages",
      about: "About",
      contact: "Contact",
      bookNow: "Book Now",
      legend: "Legend",
    },
    hero: {
      badge: "Foz do Iguazu — World Wonder",
      title1: "Experience the Thrill of",
      titleHighlight: "Iguazu Falls",
      title2: "with Zayin Tour",
      subtitle: "Iguazu Falls, Itaipu Dam, Bird Park, Three Borders Landmark and much more. Exclusive packages with personalized service.",
      destination: "Destination",
      destinationPlaceholder: "Iguassu Falls",
      date: "Date",
      datePlaceholder: "When?",
      adults: "Adults",
      adultsPlaceholder: "No. of adults",
      children: "Children (under 12)",
      childrenPlaceholder: "No. of children",
      search: "Search",
      statsDestinations: "Destinations",
      statsClients: "Happy Clients",
      statsSatisfaction: "Satisfaction",
      statsSupport: "Support",
    },
    destinations: {
      badge: "Destinations in Foz do Iguazu",
      title1: "Our",
      titleHighlight: "Tour",
      title2: "Packages",
      subtitle: "Discover the top attractions of Foz do Iguazu with Zayin Tour.",
      perPerson: "per person",
      book: "Book Now",
      items: [
        { name: "Iguazu Falls", country: "Brazilian Side", badge: "Best Seller", whatsappMsg: "Hello! I'd like to know about the Iguazu Falls tour (Brazilian Side)." },
        { name: "Falls — Argentine Side", country: "Puerto Iguazu", badge: "Must-See", whatsappMsg: "Hello! I'd like to know about the Iguazu Falls tour (Argentine Side)." },
        { name: "Itaipu Dam", country: "Foz do Iguazu", badge: "-28% OFF", whatsappMsg: "Hello! I'd like to know about the Itaipu Dam tour." },
        { name: "Bird Park", country: "Foz do Iguazu", badge: "Family", whatsappMsg: "Hello! I'd like to know about the Bird Park tour." },
        { name: "Three Borders Landmark", country: "Brazil · Argentina · Paraguay", badge: "Cultural", whatsappMsg: "Hello! I'd like to know about the Three Borders Landmark tour." },
        { name: "Integration Bridge", country: "Brazil · Paraguay", badge: "New", whatsappMsg: "Hello! I'd like to know about the new Brazil-Paraguay Integration Bridge tour." },
      ],
    },
    features: {
      badge: "Why Zayin Tour?",
      title1: "Travel with",
      titleHighlight: "Confidence",
      subtitle: "More than an agency, we are your partners in every adventure in Foz do Iguazu.",
      items: [
        { title: "24/7 Support", description: "WhatsApp support anytime. We're always ready to help." },
        { title: "Expert Local Guides", description: "Guides who know every corner of Foz do Iguazu and the triple border region." },
        { title: "Safe Travel", description: "Travel insurance and comfortable, secure transportation on all tours." },
        { title: "Best Price", description: "Packages with the best prices in the region. Satisfaction guaranteed or your money back." },
        { title: "Transfer Included", description: "We pick you up at your hotel or airport. Comfortable and punctual transportation." },
        { title: "Personalized Care", description: "We treat every traveler like family. God bless every experience we provide." },
      ],
    },
    testimonials: {
      badge: "Testimonials",
      title1: "What Our",
      titleHighlight: "Travelers Say",
      subtitle: "Real stories from people who lived unforgettable experiences in Foz do Iguazu.",
      items: [
        { name: "Maria Helena S.", role: "Visited Iguazu Falls", text: "Amazing experience! Zayin Tour took care of every detail. The falls tour was thrilling, the guide was excellent. I'll definitely be back! God bless the team!" },
        { name: "Pedro Augusto R.", role: "Visited Itaipu + Falls", text: "We did the Falls + Itaipu combo and it was simply wonderful. Seeing Itaipu's open gates is breathtaking. 10/10 service!" },
        { name: "Ana Beatriz Costa", role: "Visited Bird Park", text: "The kids loved Bird Park! The macaws are beautiful and a toucan came to perch on my arm. Zayin Tour organized everything perfectly. Highly recommend!" },
        { name: "Ricardo & Family", role: "Full Foz do Iguazu Package", text: "Fourth time traveling with Zayin Tour. This time we did the full package: Falls from both sides, Itaipu, Three Borders Landmark and Bird Park. Perfect!" },
      ],
    },
    newsletter: {
      badge: "Talk To Us Now",
      title: "Build Your Ideal Package",
      subtitle: "Contact us via WhatsApp or phone and build the perfect itinerary for your trip to Foz do Iguazu. Personalized service!",
      autoResponse: "Thank you for reaching out! How can we help? We'll respond as soon as we read your message. God bless you!",
      whatsapp: "WhatsApp",
    },
    footer: {
      description: "Your tourism agency in Foz do Iguazu. Exclusive packages for the Falls, Itaipu, Bird Park and much more. God bless you!",
      quickLinks: "Quick Links",
      attractions: "Top Attractions",
      contactUs: "Contact Us",
      callWhatsApp: "Chat on WhatsApp",
      copyright: "Zayin Tour. All rights reserved. God bless you!",
      terms: "Terms of Use",
      privacy: "Privacy",
      producedBy: "Produced by",
    },
    whatsappButton: { tooltip: "Talk to us!" },
    legend: {
      badge: "Guarani Legend",
      title1: "The Legend of",
      titleHighlight: "Taroba and Naipi",
      text: "The Guarani people tell that the world was ruled by M'Boy, a serpent god, son of Tupa. Naipi, the beautiful daughter of the chief, was consecrated to M'Boy. But the warrior Taroba fell in love with her. On the day of consecration, Taroba fled with Naipi in a canoe downstream. Furious, M'Boy pierced the earth and created a gigantic rift — thus the Iguazu Falls were born. Naipi was turned into rock, eternally bathed by the waters. Taroba became a palm tree at the edge of the abyss, leaning over the Devil's Throat, watching over his beloved forever.",
      source: "Legend of the Guarani peoples — Cultural heritage of the Triple Border region",
    },
    chatbot: {
      title: "Zayin Tour Assistant",
      placeholder: "Type your question...",
      greeting: "Hello! I'm Zayin Tour's virtual assistant. How can I help? Ask about our tours, prices, schedules and more!",
      fallback: "Sorry, I didn't understand. Try asking about: Iguazu Falls, Itaipu, Bird Park, prices, schedules, transfers or WhatsApp. Or chat with us on WhatsApp!",
    },
    cookie: {
      message: "We use cookies to improve your experience. By continuing to browse, you agree to our Privacy Policy.",
      accept: "Accept",
      decline: "Decline",
      learnMore: "Learn more",
    },
    notFound: {
      title: "Page not found",
      subtitle: "Oops! Looks like you got lost on the trail. Go back to the home page and explore our amazing destinations.",
      backHome: "Back to Home",
    },
  },
};
