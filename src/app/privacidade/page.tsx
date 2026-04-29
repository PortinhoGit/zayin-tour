"use client";

import { Palmtree, ArrowLeft } from "lucide-react";

export default function Privacidade() {
  return (
    <div className="min-h-screen bg-light-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <a href="/" className="inline-flex items-center gap-2 text-turquoise hover:text-turquoise-dark mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </a>
        <div className="flex items-center gap-3 mb-8">
          <Palmtree className="w-8 h-8 text-turquoise" />
          <h1 className="text-3xl font-bold text-ocean-deep" style={{ fontFamily: "var(--font-heading)" }}>Política de Privacidade</h1>
        </div>
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm prose prose-gray max-w-none">
          <p className="text-gray-500 text-sm mb-6">Última atualização: 28 de abril de 2026</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">1. Informações Coletadas</h2>
          <p>A Zayin Tour coleta informações pessoais apenas quando voluntariamente fornecidas por você através do WhatsApp, formulários de contato ou e-mail. Isso pode incluir: nome, e-mail, telefone, preferências de viagem e datas.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">2. Uso das Informações</h2>
          <p>Utilizamos suas informações para: responder suas solicitações, personalizar pacotes turísticos, enviar promoções (com consentimento) e melhorar nossos serviços.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">3. Cookies</h2>
          <p>Utilizamos cookies para melhorar sua experiência de navegação, lembrar preferências de idioma e coletar dados anônimos via Google Analytics. Você pode desabilitar cookies nas configurações do navegador.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">4. Compartilhamento de Dados</h2>
          <p>Não vendemos ou compartilhamos suas informações com terceiros, exceto quando necessário para prestação dos serviços contratados (hotéis, transportadores, guias) ou por exigência legal.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">5. Segurança</h2>
          <p>Adotamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">6. Seus Direitos (LGPD)</h2>
          <p>De acordo com a LGPD (Lei nº 13.709/2018), você pode: acessar seus dados, corrigir informações, solicitar exclusão, revogar consentimento e solicitar portabilidade.</p>
          <h2 className="text-xl font-bold text-ocean-deep mt-6 mb-3">7. Contato</h2>
          <p>WhatsApp: +55 (45) 98403-9246<br />E-mail: contato@zayintour.com.br</p>
          <p className="mt-8 text-gray-500 italic">Deus Abençoe você!</p>
        </div>
      </div>
    </div>
  );
}
