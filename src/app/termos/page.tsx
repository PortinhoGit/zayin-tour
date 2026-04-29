"use client";

import { Palmtree, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Termos() {
  return (
    <div className="min-h-screen bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-turquoise hover:text-turquoise-dark mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </Link>
        <div className="flex items-center gap-3 mb-8">
          <Palmtree className="w-8 h-8 text-turquoise" />
          <h1 className="text-3xl font-bold text-ocean-deep" style={{ fontFamily: "var(--font-heading)" }}>Termos de Uso</h1>
        </div>
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm prose prose-gray max-w-none">
          <p className="text-gray-500 text-sm mb-6">Última atualização: 28 de abril de 2026</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">1. Aceitação dos Termos</h2>
          <p>Ao acessar e utilizar o site da Zayin Tour, você concorda com estes Termos de Uso.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">2. Serviços</h2>
          <p>A Zayin Tour oferece serviços de turismo receptivo em Foz do Iguaçu, incluindo pacotes turísticos, transfer, guias e reservas para atrações locais.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">3. Reservas e Pagamentos</h2>
          <p>Reservas são confirmadas após contato via WhatsApp ou telefone. Preços são informativos e podem sofrer alterações. Condições de pagamento são negociadas com nossa equipe.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">4. Cancelamentos</h2>
          <p>Cancelamentos com pelo menos 48h de antecedência: reembolso integral. Com menos de 24h: sujeito a taxas.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">5. Responsabilidades</h2>
          <p>A Zayin Tour se compromete a fornecer serviços com qualidade e segurança. Não nos responsabilizamos por eventos de força maior ou condições climáticas.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">6. Propriedade Intelectual</h2>
          <p>Todo conteúdo do site é propriedade da Zayin Tour e não pode ser reproduzido sem autorização.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">7. Contato</h2>
          <p>WhatsApp: +55 (45) 98403-9246<br />E-mail: contato@zayintour.com.br</p>
          <p className="mt-8 text-gray-500 italic">Deus Abençoe você!</p>
        </div>
      </div>
    </div>
  );
}
