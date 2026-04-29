import { Language } from "./translations";

interface FAQEntry {
  keywords: string[];
  answer: string;
}

const faq: Record<Language, FAQEntry[]> = {
  pt: [
    { keywords: ["cataratas", "iguaçu", "iguacu", "falls"], answer: "As Cataratas do Iguaçu ficam abertas das 9h às 17h. O passeio pelo lado brasileiro dura cerca de 2-3 horas. Temos pacotes a partir de R$290 por pessoa com transfer incluso. Quer reservar? Fale conosco pelo WhatsApp!" },
    { keywords: ["argentino", "argentina", "puerto"], answer: "O lado argentino das Cataratas oferece uma experiência diferente, com trilhas mais próximas das quedas. O passeio dura 4-5 horas. Pacotes a partir de R$350. É necessário passaporte ou documento de identidade." },
    { keywords: ["itaipu", "usina", "barragem"], answer: "A Usina de Itaipu oferece vários tours: Panorâmico, Especial e Iluminação Noturna. Funciona de terça a domingo. Pacotes a partir de R$180 com transfer. A Iluminação da Itaipu é imperdível!" },
    { keywords: ["aves", "parque", "pássaros", "tucano", "arara"], answer: "O Parque das Aves fica ao lado das Cataratas do Iguaçu. Aberto das 8h30 às 17h. Ingressos a partir de R$95. É o único zoológico do mundo focado em aves da Mata Atlântica. As crianças adoram!" },
    { keywords: ["marco", "fronteira", "fronteiras", "3 fronteiras", "tres"], answer: "O Marco das Três Fronteiras é onde Brasil, Argentina e Paraguai se encontram. Possui show noturno com luzes e águas. Pacotes a partir de R$120. Um espetáculo imperdível!" },
    { keywords: ["ponte", "integração", "integracao", "paraguai"], answer: "A Ponte da Integração conecta Foz do Iguaçu ao Paraguai. É a maior ponte em arco das Américas. Temos tours que incluem visita e parada para fotos. Pacotes a partir de R$150." },
    { keywords: ["preço", "preco", "valor", "quanto", "custo", "custa"], answer: "Nossos pacotes: Cataratas BR R$290 | Lado Argentino R$350 | Itaipu R$180 | Parque das Aves R$95 | Marco 3 Fronteiras R$120 | Ponte Integração R$150. Todos com transfer incluso! Combos com desconto especial." },
    { keywords: ["horário", "horario", "hora", "funciona", "abre", "fecha"], answer: "Horários gerais: Cataratas 9h-17h | Itaipu 8h-17h (terça a domingo) | Parque das Aves 8h30-17h | Marco 3 Fronteiras varia. Buscamos você no hotel pela manhã ou à tarde conforme o passeio." },
    { keywords: ["transfer", "transporte", "buscar", "hotel", "aeroporto"], answer: "Sim! Todos os nossos pacotes incluem transfer do hotel/aeroporto. Veículos confortáveis e com ar-condicionado. Buscamos na hora combinada e levamos de volta ao hotel." },
    { keywords: ["whatsapp", "telefone", "contato", "falar", "ligar"], answer: "Nosso WhatsApp: +55 (45) 98403-9246. Atendimento 24/7! Clique no botão verde no canto da tela para falar conosco agora. Respondemos rapidamente!" },
    { keywords: ["pacote", "combo", "completo", "tudo"], answer: "Temos o Pacote Completo Foz do Iguaçu: Cataratas (ambos lados) + Itaipu + Parque das Aves + Marco 3 Fronteiras. Preço especial para combos! Consulte pelo WhatsApp." },
    { keywords: ["criança", "crianca", "família", "familia", "infantil", "criancas"], answer: "Foz do Iguaçu é perfeita para famílias! O Parque das Aves é o favorito das crianças. Temos pacotes família com preços especiais para menores de 12 anos. Consulte!" },
    { keywords: ["seguro", "segurança", "seguranca"], answer: "Todos os nossos passeios incluem seguro viagem. Nossos veículos são revisados regularmente e nossos guias são certificados. Sua segurança é nossa prioridade!" },
    { keywords: ["guia", "guias", "idioma", "língua"], answer: "Nossos guias falam português, espanhol e inglês. São todos locais experientes que conhecem cada canto de Foz do Iguaçu e região." },
  ],
  es: [
    { keywords: ["cataratas", "iguazú", "iguazu", "falls"], answer: "Las Cataratas del Iguazú están abiertas de 9h a 17h. El paseo por el lado brasileño dura 2-3 horas. Tenemos paquetes desde R$290 por persona con transfer incluido. ¿Quieres reservar? ¡Háblanos por WhatsApp!" },
    { keywords: ["argentino", "argentina", "puerto"], answer: "El lado argentino de las Cataratas ofrece una experiencia diferente, con senderos más cercanos a las caídas. El paseo dura 4-5 horas. Paquetes desde R$350. Se necesita pasaporte o documento de identidad." },
    { keywords: ["itaipu", "itaipú", "represa"], answer: "La Represa de Itaipú ofrece varios tours: Panorámico, Especial e Iluminación Nocturna. Funciona de martes a domingo. Paquetes desde R$180 con transfer. ¡La Iluminación de Itaipú es imperdible!" },
    { keywords: ["aves", "parque", "pájaros", "tucán", "guacamayo"], answer: "El Parque de las Aves queda al lado de las Cataratas. Abierto de 8h30 a 17h. Entradas desde R$95. ¡Es el único zoológico del mundo enfocado en aves de la Mata Atlántica!" },
    { keywords: ["hito", "frontera", "fronteras", "3 fronteras", "tres"], answer: "El Hito de las Tres Fronteras es donde Brasil, Argentina y Paraguay se encuentran. Tiene show nocturno con luces y aguas. ¡Paquetes desde R$120!" },
    { keywords: ["puente", "integración", "integracion", "paraguay"], answer: "El Puente de la Integración conecta Foz do Iguazú con Paraguay. Es el mayor puente en arco de las Américas. Paquetes desde R$150." },
    { keywords: ["precio", "valor", "cuánto", "cuanto", "costo", "cuesta"], answer: "Nuestros paquetes: Cataratas BR R$290 | Lado Argentino R$350 | Itaipú R$180 | Parque Aves R$95 | Hito 3 Fronteras R$120 | Puente Integración R$150. ¡Todos con transfer incluido!" },
    { keywords: ["horario", "hora", "funciona", "abre", "cierra"], answer: "Horarios: Cataratas 9h-17h | Itaipú 8h-17h (martes a domingo) | Parque Aves 8h30-17h | Hito 3 Fronteras varía. Te buscamos en el hotel por la mañana o tarde." },
    { keywords: ["transfer", "transporte", "buscar", "hotel", "aeropuerto"], answer: "¡Sí! Todos nuestros paquetes incluyen transfer del hotel/aeropuerto. Vehículos cómodos con aire acondicionado." },
    { keywords: ["whatsapp", "teléfono", "telefono", "contacto", "hablar"], answer: "Nuestro WhatsApp: +55 (45) 98403-9246. ¡Atención 24/7! Haz clic en el botón verde para hablar con nosotros." },
    { keywords: ["paquete", "combo", "completo", "todo"], answer: "Tenemos el Paquete Completo: Cataratas (ambos lados) + Itaipú + Parque Aves + Hito 3 Fronteras. ¡Precio especial para combos! Consulta por WhatsApp." },
    { keywords: ["niño", "nino", "familia", "infantil"], answer: "¡Foz do Iguazú es perfecta para familias! El Parque de las Aves es el favorito de los niños. Precios especiales para menores de 12 años." },
    { keywords: ["seguro", "seguridad"], answer: "Todos nuestros paseos incluyen seguro de viaje. Vehículos revisados y guías certificados. ¡Tu seguridad es nuestra prioridad!" },
    { keywords: ["guía", "guia", "idioma", "lengua"], answer: "Nuestros guías hablan portugués, español e inglés. Son locales expertos que conocen cada rincón de Foz do Iguazú." },
  ],
  en: [
    { keywords: ["falls", "cataratas", "iguazu", "waterfall"], answer: "Iguazu Falls is open from 9am to 5pm. The Brazilian side tour takes about 2-3 hours. We have packages starting at R$290 per person with transfer included. Want to book? Chat with us on WhatsApp!" },
    { keywords: ["argentine", "argentina", "puerto"], answer: "The Argentine side of the Falls offers a different experience, with trails closer to the waterfalls. The tour takes 4-5 hours. Packages from R$350. Passport or ID required." },
    { keywords: ["itaipu", "dam", "hydroelectric"], answer: "Itaipu Dam offers several tours: Panoramic, Special, and Night Lighting. Open Tuesday to Sunday. Packages from R$180 with transfer. The Night Lighting is a must-see!" },
    { keywords: ["bird", "park", "birds", "toucan", "macaw"], answer: "Bird Park is located next to Iguazu Falls. Open 8:30am-5pm. Tickets from R$95. It's the world's only zoo focused on Atlantic Forest birds. Kids love it!" },
    { keywords: ["landmark", "border", "borders", "three", "triple"], answer: "The Three Borders Landmark is where Brazil, Argentina, and Paraguay meet. Features a night show with lights and water. Packages from R$120!" },
    { keywords: ["bridge", "integration", "paraguay"], answer: "The Integration Bridge connects Foz do Iguazu to Paraguay. It's the largest arch bridge in the Americas. Packages from R$150." },
    { keywords: ["price", "cost", "how much", "rate", "fee"], answer: "Our packages: Brazilian Falls R$290 | Argentine Side R$350 | Itaipu R$180 | Bird Park R$95 | Three Borders R$120 | Bridge R$150. All with transfer included! Special combo discounts." },
    { keywords: ["schedule", "time", "hours", "open", "close"], answer: "Schedules: Falls 9am-5pm | Itaipu 8am-5pm (Tue-Sun) | Bird Park 8:30am-5pm | Three Borders varies. We pick you up at your hotel morning or afternoon." },
    { keywords: ["transfer", "transport", "pickup", "hotel", "airport"], answer: "Yes! All our packages include hotel/airport transfer. Comfortable air-conditioned vehicles. We pick you up on time and bring you back." },
    { keywords: ["whatsapp", "phone", "contact", "call", "talk"], answer: "Our WhatsApp: +55 (45) 98403-9246. 24/7 service! Click the green button on the screen to chat with us now. We respond quickly!" },
    { keywords: ["package", "combo", "complete", "full", "bundle"], answer: "We have the Full Foz do Iguazu Package: Falls (both sides) + Itaipu + Bird Park + Three Borders. Special combo pricing! Ask via WhatsApp." },
    { keywords: ["child", "children", "family", "kid", "kids"], answer: "Foz do Iguazu is perfect for families! Bird Park is the kids' favorite. Special prices for children under 12. Ask us!" },
    { keywords: ["safe", "safety", "insurance", "secure"], answer: "All our tours include travel insurance. Vehicles are regularly inspected and guides are certified. Your safety is our priority!" },
    { keywords: ["guide", "language", "english", "spanish"], answer: "Our guides speak Portuguese, Spanish, and English. They're all experienced locals who know every corner of Foz do Iguazu." },
  ],
};

export function findAnswer(query: string, lang: Language): string | null {
  const q = query.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  const entries = faq[lang];
  for (const entry of entries) {
    for (const kw of entry.keywords) {
      const normalizedKw = kw.normalize("NFD").replace(/[̀-ͯ]/g, "");
      if (q.includes(normalizedKw)) {
        return entry.answer;
      }
    }
  }
  return null;
}
