"use client";

import { forwardRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ParallaxElement } from "@/components/scroll/ParallaxElement";

const cases = [
  {
    id: "trendly",
    number: "01",
    company: "Trendly",
    role: "Co-fundador",
    period: "2025 - Atual",
    situation:
      "Startup nascendo do zero, precisando estruturar produto, marketing e vendas com recursos limitados.",
    action:
      "Liderei estratégia de negócio e produto, estruturei funis de marketing e vendas e integrei IA nos processos de produção e análise.",
    result:
      "Redução de mais de 30% nos custos operacionais e de produção através de automação inteligente.",
    tags: ["GTM Strategy", "Funis de Vendas", "Automações com IA", "Produto"],
    metric: "-30%",
    metricLabel: "custos operacionais",
    accent: "#C9512F",
  },
  {
    id: "zippi",
    number: "02",
    company: "Zippi",
    role: "Estágio em Marketing",
    period: "2022 - 2024",
    situation:
      "Fintech de crédito precisando aumentar visibilidade e engajamento da marca em um mercado competitivo.",
    action:
      "Gerenciei SEO e performance, executei marketing de influência, criei briefings para campanhas e coordenei community management.",
    result:
      "Aumento significativo na visibilidade online e engajamento, com reports de desempenho acompanhando decisões estratégicas.",
    tags: ["SEO", "Marketing de Influência", "Community", "Performance"],
    metric: "2 anos",
    metricLabel: "em fintech",
    accent: "#2563EB",
  },
  {
    id: "trackfield",
    number: "03",
    company: "Track & Field",
    role: "Analista de Marketing de Varejo",
    period: "2024",
    situation:
      "Rede nacional de franquias precisando de suporte estratégico e padronização de comunicação.",
    action:
      "Gerenciei relacionamento com franqueados, coordenei orçamento de campanhas e desenvolvi planilhas automatizadas e treinamentos.",
    result:
      "Otimização da execução no varejo através de automação e padronização, com treinamentos que elevaram a performance das equipes.",
    tags: ["Trade Marketing", "Franquias", "Automações", "Treinamento"],
    metric: "Nacional",
    metricLabel: "rede de lojas",
    accent: "#059669",
  },
];

interface CasesHorizontalProps {
  id?: string;
}

export const CasesHorizontal = forwardRef<HTMLElement, CasesHorizontalProps>(
  function CasesHorizontal({ id }, ref) {
    return (
      <section
        ref={ref}
        id={id}
        className="py-24 bg-surface overflow-hidden relative"
      >
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="space-y-4 text-center">
            <Badge variant="outline" className="mx-auto text-xs">
              Cases
            </Badge>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight">
              Projetos que combinam pesquisa, estratégia e execução
            </h2>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Cada história segue a estrutura Situação · Ação · Resultado e
              traz insights tangíveis sobre como otimizei aquisição, ativação e
              retenção em ambientes de alta pressão.
            </p>
          </div>

          <div className="space-y-14">
            {cases.map((caseItem, index) => (
              <article
                key={caseItem.id}
                className="group relative overflow-hidden rounded-[32px] border border-border bg-background/80 p-8 lg:p-10 shadow-2xl transition hover:-translate-y-1 hover:border-accent/40"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-accent/10 opacity-0 transition group-hover:opacity-100" />
                <div className="relative z-10 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] items-start">
                  <div className="space-y-6">
                    <ParallaxElement speed={0.15} className="pointer-events-none">
                      <p
                        className="case-number font-serif text-[110px] lg:text-[140px] leading-none tracking-tight text-foreground/10"
                        style={{ color: `${caseItem.accent}20` }}
                      >
                        {caseItem.number}
                      </p>
                    </ParallaxElement>

                    <div className="space-y-3">
                      <div className="space-y-1">
                        <h3 className="font-serif text-3xl lg:text-4xl font-light">
                          {caseItem.company}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
                          <span className="text-accent font-semibold">
                            {caseItem.role}
                          </span>
                          <Separator orientation="vertical" className="h-4" />
                          <span>{caseItem.period}</span>
                        </div>
                      </div>

                      <div className="space-y-5 text-sm leading-relaxed text-muted">
                        <div>
                          <p className="text-xs uppercase tracking-wider text-accent font-medium mb-2 flex items-center gap-2">
                            <span className="w-4 h-px bg-accent" />
                            Situação
                          </p>
                          <p>{caseItem.situation}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-accent font-medium mb-2 flex items-center gap-2">
                            <span className="w-4 h-px bg-accent" />
                            Ação
                          </p>
                          <p>{caseItem.action}</p>
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-accent font-medium mb-2 flex items-center gap-2">
                            <span className="w-4 h-px bg-accent" />
                            Resultado
                          </p>
                          <p>{caseItem.result}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <ParallaxElement speed={-0.2} className="w-full">
                    <div
                      className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-white/90 to-surface p-8 text-center min-h-[300px] shadow-lg"
                      style={{
                        borderColor: `${caseItem.accent}30`,
                      }}
                    >
                      <div
                        className="absolute inset-0 opacity-40"
                        style={{
                          background: `radial-gradient(circle at top, ${caseItem.accent}40, transparent 60%)`,
                        }}
                      />
                      <div className="relative z-10 space-y-4 flex flex-col items-center justify-center h-full">
                        <p
                          className="font-serif text-6xl lg:text-7xl font-light"
                          style={{ color: caseItem.accent }}
                        >
                          {caseItem.metric}
                        </p>
                        <p className="text-sm text-muted">{caseItem.metricLabel}</p>
                        <div className="flex gap-2 mt-4">
                          {cases.map((_, dotIdx) => (
                            <span
                              key={dotIdx}
                              className={`h-2 rounded-full transition-all ${
                                dotIdx === index
                                  ? "w-6 bg-accent"
                                  : "w-2 bg-foreground/20"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </ParallaxElement>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

export default CasesHorizontal;
