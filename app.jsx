const { useState, useEffect } = React;

// ---------- Icons ----------
const Icon = ({ name }) => {
  const stroke = "currentColor";
  const sw = 1.6;
  const common = { width: 30, height: 30, viewBox: "0 0 24 24", fill: "none", stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "ball":
      return (<svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 3l3 4-1.5 4.5h-3L9 7zM3.5 10l3.5 1.5L9 7M20.5 10L17 11.5 15 7M5 18l3-2 2 3M19 18l-3-2-2 3M10.5 11.5L12 16l-3 2M13.5 11.5L12 16l3 2"/></svg>);
    case "target":
      return (<svg {...common}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg>);
    case "shield":
      return (<svg {...common}><path d="M12 3l8 3v6c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>);
    case "user":
      return (<svg {...common}><circle cx="12" cy="8" r="3.5"/><path d="M5 20c1-4 4-6 7-6s6 2 7 6"/></svg>);
    case "users":
      return (<svg {...common}><circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.5"/><path d="M3 19c1-3 3-5 6-5s5 2 6 5M14 18c0-2 1.5-3.5 3-3.5s3 1 3 3"/></svg>);
    case "wrench":
      return (<svg {...common}><path d="M14.7 6.3a4 4 0 105.5 5.5l-7 7a3 3 0 11-4.2-4.2z"/><circle cx="17" cy="7" r="1" fill="currentColor"/></svg>);
    case "lock":
      return (<svg {...common}><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>);
    case "shieldSm":
      return (<svg {...common} width="40" height="40"><path d="M12 3l8 3v6c0 4-3.5 7.5-8 9-4.5-1.5-8-5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>);
    default: return null;
  }
};

// ---------- Sections ----------
const Hero = () => (
  <section className="hero court-bg">
    <div className="wrap">
      <div className="hero-grid">
        <div>
          <span className="eyebrow">Material 2026 · Atualizado</span>
          <h1 className="display h-mega" style={{margin:'18px 0 22px'}}>
            Pare de chegar<br/>na quadra <em>sem<br/>saber o que fazer.</em>
          </h1>
          <p className="hero-sub">
            +500 treinos de futebol, organizados por categoria e prontos para aplicar no próximo treino.
          </p>
          <div className="hero-price-row">
            <div className="hero-price">
              <span className="hero-price-currency">R$</span>9<span style={{color:'var(--ink-dim)'}}>,90</span>
            </div>
            <div className="hero-price-tag">PAGAMENTO ÚNICO · ACESSO VITALÍCIO</div>
          </div>
          <div className="trust" style={{marginTop:18}}>
            <span>✓ Acesso imediato</span>
            <span>✓ Garantia 7 dias</span>
            <span>✓ Pagamento seguro</span>
          </div>
        </div>

        <div className="mockup-img">
          <img src="assets/product-mockup.jpg" alt="Arsenal do Treinador de Futsal — preview do produto" />
          <div className="mockup-img-tag">PRODUTO · v.2026</div>
        </div>
      </div>
    </div>
  </section>
);

const Roadmap = () => {
  const steps = [
    { n: '01', t: 'Compra e acessa por e-mail na hora', d: 'Sem espera. Pagou, acessou. PIX e cartão liberados instantaneamente.' },
    { n: '02', t: 'Escolhe a frente de batalha do dia', d: 'Controle de bola, finalização, marcação, jogadas ensaiadas — você decide o foco da semana.' },
    { n: '03', t: 'Aplica com a descrição passo a passo', d: 'Cada treino vem explicado do início ao fim. Funciona em qualquer quadra, com qualquer faixa etária.' },
    { n: '04', t: 'Seu time evolui semana após semana', d: 'Variedade real, progressão visível. Os jogadores sentem. Os pais percebem.' },
  ];
  return (
    <section className="sec" style={{borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Como funciona na prática</span>
          <h2 className="display h-1">Do acesso ao treino aplicado em<br/>menos de <em style={{color:'var(--accent)', fontStyle:'normal'}}>5 minutos.</em></h2>
        </div>
        <div className="steps">
          {steps.map(s => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}<small>PASSO</small></div>
              <div className="step-title">{s.t}</div>
              <div className="step-text">{s.d}</div>
            </div>
          ))}
        </div>
        <div style={{marginTop:48, display:'flex', gap:14, flexWrap:'wrap', alignItems:'center'}}>
          <a href="#planos" className="btn btn-lg">Quero meu Arsenal agora <span className="arrow">→</span></a>
          <span className="mono" style={{color:'var(--ink-mute)', fontSize:12}}>R$ 9,90 · pagamento único</span>
        </div>
      </div>
    </section>
  );
};

const Frentes = () => {
  const frentes = [
    { id: '01', icon: 'ball',   title: 'Controle de bola',       desc: 'Quando o time recebe a bola e perde simples, o problema é técnica. Aqui você resolve — do fundamento básico ao domínio avançado.' },
    { id: '02', icon: 'target', title: 'Finalizações rápidas',   desc: 'Time que cria e não faz gol perde campeonato. Exercícios específicos pra transformar chance em gol.' },
    { id: '03', icon: 'shield', title: 'Marcação e transição',   desc: 'Defesa sólida e saída rápida. Do caos defensivo ao sistema organizado que surpreende o adversário.' },
    { id: '04', icon: 'user',   title: 'Evolução individual',    desc: 'Cada jogador tem um ponto fraco. Aqui tem treino pra cada perfil — do iniciante ao mais desenvolvido do elenco.' },
    { id: '05', icon: 'users',  title: 'Sintonia coletiva',      desc: 'Movimento sem bola, saída de jogo, automatização. O que separa time amador de time que parece profissional.' },
    { id: '06', icon: 'wrench', title: 'Jogadas ensaiadas',      desc: 'No jogo decisivo, é a jogada ensaiada que vence. Aqui você monta as suas — escanteio, lateral, falta.' },
  ];
  return (
    <section className="sec" style={{background:'#080a07', borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">O que está dentro do arsenal</span>
          <h2 className="display h-1">6 frentes cobrindo tudo que um<br/>treinador de futsal precisa.</h2>
        </div>

        <div className="frentes">
          {frentes.map(f => (
            <div className="frente" key={f.id}>
              <div className="frente-id">FRENTE <b>{f.id}</b><span>/06</span></div>
              <div className="frente-glyph"><Icon name={f.icon}/></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{marginTop:48, display:'flex', gap:14, flexWrap:'wrap', alignItems:'center'}}>
          <a href="#planos" className="btn">Acessar o Arsenal agora <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
};

const Checklist = () => {
  const items = [
    '500 treinos de futsal organizados em 6 frentes de batalha',
    'Sequência lógica de progressão — do básico ao avançado',
    'Descrição passo a passo de cada exercício',
    'Adaptável de escolinha (6 anos) até time adulto amador',
    'Funciona em qualquer quadra — salão, poliesportiva, areninha',
    'Acesso vitalício em qualquer dispositivo',
    'Atualizações constantes sem custo adicional',
    'Garantia incondicional de 7 dias',
  ];
  return (
    <section className="sec" style={{borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Tudo que vem com o arsenal</span>
          <h2 className="display h-1">500 treinos. Uma metodologia.<br/><em style={{color:'var(--accent)', fontStyle:'normal'}}>Resultado visível em semanas.</em></h2>
        </div>
        <div className="check-grid">
          {items.map((it, i) => (
            <div className="check-item" key={i}>
              <div className="check-mark">✓</div>
              <span>{it}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Social = () => {
  return (
    <section className="sec" style={{background:'#080a07', borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Quem já tá usando</span>
          <h2 className="display h-1">+1.200 treinadores aplicando o<br/>Arsenal nas últimas semanas.</h2>
        </div>

        <div className="stats" style={{marginBottom:48}}>
          <div className="stat"><div className="stat-num">500+</div><div className="stat-label">Treinos prontos</div></div>
          <div className="stat"><div className="stat-num">06</div><div className="stat-label">Frentes</div></div>
          <div className="stat"><div className="stat-num">7d</div><div className="stat-label">Garantia</div></div>
          <div className="stat"><div className="stat-num">4.9★</div><div className="stat-label">Avaliação média</div></div>
        </div>

        <div className="testimonial-image">
          <img src="assets/depoimentos-whatsapp.jpg" alt="Depoimentos reais de treinadores aplicando o Arsenal" />
        </div>

        <div style={{marginTop:48, display:'flex', gap:14, flexWrap:'wrap', alignItems:'center'}}>
          <a href="#planos" className="btn">Quero o Arsenal agora <span className="arrow">→</span></a>
        </div>
      </div>
    </section>
  );
};

const Compare = () => {
  const items = [
    { t:'YouTube', d:'Tem treino solto, mas nada organizado. Você passa 40 minutos procurando e ainda monta um exercício aleatório que não tem sequência. Improviso com embalagem de pesquisa.' },
    { t:'Grupo de WhatsApp', d:'Todo mundo manda o que acha que funciona. Ninguém tem contexto do seu elenco. É improviso coletivo — e improviso coletivo não é metodologia.' },
    { t:'Curso de treinador', d:'Caro, demorado, teórico. Você aprende em 3 meses o que poderia estar aplicando amanhã. E ainda precisa montar o treino do zero.' },
  ];
  return (
    <section className="sec" style={{borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Por que o arsenal e não outra coisa</span>
          <h2 className="display h-1">Tem muita coisa por aí.<br/>Por que isso funciona <em style={{color:'var(--accent)', fontStyle:'normal'}}>diferente?</em></h2>
        </div>

        <div className="comp-grid">
          {items.map((c,i) => (
            <div className="comp" key={i}>
              <h4>{c.t}</h4>
              <p>{c.d}</p>
            </div>
          ))}
        </div>

        <div className="comp-win">
          <h4>Arsenal do Treinador</h4>
          <p>500 treinos organizados em 6 frentes. Sequência lógica. Descrição passo a passo. Você abre, escolhe a frente do dia e aplica. Em 5 minutos. Por R$ 9,90.</p>
        </div>
      </div>
    </section>
  );
};

const PraQuem = () => {
  const simItems = [
    'Tu treina escolinha e quer profissionalizar a metodologia',
    'Tu é técnico de sub-11 a sub-17 e precisa estruturar os treinos',
    'Tu treina time amador e disputa campeonato municipal ou estadual',
    'Tu tá começando agora e não quer "queimar" os primeiros anos errando',
    'Tu já é experiente mas sente que tá repetindo treino e quer renovar',
    'Tu coordena escolinha e precisa montar metodologia pra outros profes',
  ];
  const naoItems = [
    'Tu acha que improvisar é tua "marca" e não quer mudar',
    'Tu já tem metodologia consolidada de 10+ anos e tá totalmente satisfeito',
    'Tu trabalha em clube profissional Série A com staff técnico completo',
    'Tu quer milagre — mudança no time sem aplicar nada na prática',
  ];
  return (
    <section className="sec" style={{borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <div className="praquem-grid">
          <div className="praquem-card is-green">
            <span className="eyebrow">Este arsenal é pra ti se...</span>
            <h3 className="display h-3" style={{margin:'14px 0 0'}}>Quem mais aproveita o Arsenal:</h3>
            <ul className="praquem-list">
              {simItems.map((item, i) => (
                <li key={i}>
                  <span style={{flexShrink:0}}>✅</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="praquem-close">E principalmente: quem cansou de chegar na quadra sem saber direito o que fazer.</p>
          </div>

          <div className="praquem-card is-red">
            <span className="praquem-eyebrow-red">Sejamos sinceros</span>
            <h3 className="display h-3" style={{margin:'14px 0 0'}}>O Arsenal NÃO é pra ti se...</h3>
            <ul className="praquem-list">
              {naoItems.map((item, i) => (
                <li key={i}>
                  <span style={{flexShrink:0}}>❌</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="praquem-close is-red">Pra todos os outros, segue.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PremiumWhy = () => {
  const items = [
    'Tu trabalha com mais de uma categoria (escolinha + sub-15 + amador) e precisa de variedade real',
    'Tu treina mais de uma modalidade — escolinhas que oferecem futsal + vôlei + basquete',
    'Tu quer os 4 bônus de preparação física (condicionamento, força, periodização, gestão)',
    'Tu precisa de App pra controlar elenco, frequência e evolução individual',
    'Tu prefere ter suporte direto pelo WhatsApp pra tirar dúvida na hora',
  ];
  return (
    <section className="sec" style={{background:'#080a07', borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <div className="premium-layout">
          <div>
            <span className="eyebrow">Se tu leva a sério</span>
            <h2 className="display h-2" style={{margin:'14px 0 20px'}}>
              Por que treinador profissional escolhe o <em style={{color:'var(--accent)', fontStyle:'normal'}}>Premium</em>
            </h2>
            <p style={{color:'var(--ink-dim)', fontSize:17, lineHeight:1.55, marginBottom:32}}>
              O Básico resolve o problema de improvisar. Mas tem treinador que precisa de mais.
            </p>
            <a href="#planos" className="btn">Ver o Premium <span className="arrow">→</span></a>
          </div>
          <div>
            <p className="mono" style={{fontSize:12, color:'var(--ink-mute)', letterSpacing:'0.1em', marginBottom:16}}>O Premium é pra ti se:</p>
            <ul className="premium-why-list">
              {items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p style={{marginTop:20, fontSize:15, color:'var(--ink-dim)', lineHeight:1.5}}>
              A diferença de <strong style={{color:'var(--ink)'}}>R$16</strong> vale{' '}
              <strong style={{color:'var(--accent)'}}>4× mais conteúdo + 4 bônus + app + suporte</strong>. Conta tu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [showOffer, setShowOffer] = useState(false);

  // Lock scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = showOffer ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showOffer]);

  const handleBasic = (e) => {
    e.preventDefault();
    setShowOffer(true);
  };

  return (
    <section className="sec" id="planos" style={{background:'#080a07', borderTop:'1px solid var(--line)'}}>
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow">Sua decisão</span>
          <h2 className="display h-1">Dois caminhos.<br/>Você <em style={{color:'var(--accent)', fontStyle:'normal'}}>escolhe.</em></h2>
        </div>

        <div className="setup-paths">
          <div className="path path-1">
            <span className="path-tag">⨯ Caminho 1</span>
            Continua chegando na quadra de mãos vazias, improvisando, repetindo os mesmos exercícios, vendo o time estagnar.
          </div>
          <div className="path path-2">
            <span className="path-tag">✓ Caminho 2</span>
            Pega o Arsenal hoje por R$ 9,90 e começa a aplicar amanhã.
          </div>
        </div>

        <div className="plans">
          <div className="plan">
            <div className="plan-name">Plano Básico</div>
            <div className="plan-price">
              <span className="c">R$</span>
              <span className="v">9,90</span>
            </div>
            <div className="plan-meta">Pagamento único · Acesso vitalício</div>
            <ul>
              <li>500 treinos de futsal</li>
              <li>6 frentes organizadas</li>
              <li>Acesso imediato por e-mail</li>
              <li>Garantia de 7 dias</li>
            </ul>
            <a className="btn plan-btn-ghost" href="https://pay.wiapy.com/N5lkriRkVW" onClick={handleBasic}>Acessar o básico</a>
          </div>

          <div className="plan featured">
            <div className="plan-flag">⭐ Mais popular</div>
            <div className="plan-name" style={{color:'var(--accent)'}}>Plano Premium</div>
            <div className="plan-price">
              <span className="c">R$</span>
              <span className="v">25,90</span>
            </div>
            <div className="plan-meta">Pagamento único · Acesso imediato</div>
            <ul>
              <li>2.000 treinos de futsal (4× mais)</li>
              <li>500 treinos de vôlei</li>
              <li>500 treinos de basquete</li>
              <li>4 bônus de preparação física</li>
              <li>Atualizações vitalícias</li>
              <li>Garantia de 7 dias</li>
            </ul>
            <a className="btn" href="https://pay.wiapy.com/UbW9C4H8ph" target="_blank" rel="noopener">Quero o Arsenal completo <span className="arrow">→</span></a>
          </div>
        </div>

        <div className="trust" style={{marginTop:32, justifyContent:'center'}}>
          <span>🛡️ 7 dias pra testar</span>
          <span>↻ Reembolso em 24h sem perguntas</span>
          <span>💳 Cartão e PIX</span>
        </div>
      </div>

      {showOffer && (
        <div className="modal-backdrop" onClick={() => setShowOffer(false)}>
          <div className="modal modal-compact" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowOffer(false)} aria-label="Fechar">×</button>

            <div className="modal-badge">⚡ Oferta exclusiva</div>

            <h3 className="display modal-title">
              Espera! Leve o <em style={{color:'var(--accent)', fontStyle:'normal'}}>premium</em><br/>por muito menos
            </h3>

            <p className="modal-sub">
              Já que você escolheu o Básico, temos uma oferta especial única para você agora.
            </p>

            <div className="modal-price-block">
              <div className="modal-price-old-line">De <s>R$ 25,90</s></div>
              <div className="modal-price-big">R$ 15,90</div>
              <div className="modal-price-meta">Pagamento único · Só agora nessa tela</div>
            </div>

            <ul className="modal-list">
              <li>2.000 treinos de futsal <span className="modal-mini">(vs. 500 do básico)</span></li>
              <li>500 treinos de vôlei</li>
              <li>500 treinos de basquete</li>
              <li>4 bônus de preparação física</li>
              <li>Atualizações vitalícias</li>
              <li>Garantia de 7 dias</li>
            </ul>

            <div className="modal-actions">
              <a className="btn modal-cta" href="https://pay.wiapy.com/xTaZZR_vBb" target="_blank" rel="noopener">
                ⚡ Sim! Quero o premium por R$ 15,90 <span className="arrow">→</span>
              </a>
              <a className="modal-continue" href="https://pay.wiapy.com/N5lkriRkVW" target="_blank" rel="noopener">
                Continuar com o Básico
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};

const Guarantee = () => (
  <section className="sec" style={{borderTop:'1px solid var(--line)'}}>
    <div className="wrap">
      <div className="guarantee">
        <div className="guarantee-shield"><Icon name="shieldSm"/></div>
        <span className="eyebrow" style={{justifyContent:'center'}}>Garantia incondicional</span>
        <h2 className="display h-2" style={{marginTop:14, maxWidth:'18ch', marginLeft:'auto', marginRight:'auto'}}>
          7 dias pra testar. Se não servir,<br/><em style={{color:'var(--accent)', fontStyle:'normal'}}>devolvo cada centavo.</em>
        </h2>
        <p>Você acessa o Arsenal, aplica 1 ou 2 treinos com seu time, e em até 7 dias decide. Se sentir que não vale o que pagou, manda um e-mail. Devolvo 100% em até 24h. Sem pergunta, sem formulário, sem "deixa eu tentar te convencer".</p>
        <p style={{color:'var(--ink-mute)'}}>R$ 9,90 não é dinheiro pra eu querer enrolar ninguém.</p>
        <div className="guarantee-badges">
          <span className="badge">Reembolso em até 24h</span>
          <span className="badge">Sem perguntas</span>
          <span className="badge">Compra segura</span>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(0);
  const qs = [
    { q:'Sou treinador iniciante. Vai funcionar pra mim?', a:'Funciona melhor pra você do que pra um veterano teimoso. Os treinos vêm com descrição passo a passo — você aplica como se fosse manual de instalação.' },
    { q:'Já comprei coisa parecida antes e era ruim. Por que esse é diferente?', a:'A diferença é que o Arsenal é organizado por sequência lógica de aplicação — não é uma pasta de exercícios jogada na sua cara. Você sabe o que aplicar terça e o que aplicar quinta.' },
    { q:'Funciona pra escolinha de criança ou só pra time competitivo?', a:'Funciona pros dois. Os exercícios cobrem de 6 anos até adulto. Você filtra pela frente que precisa e aplica.' },
    { q:'Precisa de quadra grande?', a:'Não. Foi pensado pra realidade do Brasil — quadra de salão, poliesportiva, areninha de bairro. Funciona em tudo.' },
    { q:'Recebo na hora?', a:'Sim. PIX e cartão liberam instantaneamente. Boleto pode demorar 1 a 2 dias úteis.' },
    { q:'Meu time é muito fraco de fundamento. Tem treino pra esse nível?', a:'Tem treino básico de fundamento que serve pra qualquer nível. Você começa do zero se precisar.' },
    { q:'Tem suporte?', a:'Sim. Suporte por e-mail em ambos os planos — respondemos em até 24h em dias úteis.' },
    { q:'Quanto tempo levo pra montar uma semana de treino com o Arsenal?', a:'Em média 5 a 10 minutos. Você escolhe a frente do dia, pega 4–5 exercícios e monta a sequência.' },
    { q:'Como sei que funciona mesmo?', a:'+1.200 treinadores aplicando hoje. E garantia incondicional de 7 dias — se não servir, você pega o dinheiro de volta sem stress.' },
  ];
  return (
    <section className="sec" style={{background:'#080a07', borderTop:'1px solid var(--line)'}}>
      <div className="wrap" style={{maxWidth:920}}>
        <div className="sec-head">
          <span className="eyebrow">Perguntas reais</span>
          <h2 className="display h-1">Antes de decidir,<br/>tira tuas <em style={{color:'var(--accent)', fontStyle:'normal'}}>dúvidas.</em></h2>
        </div>
        <div className="faq">
          {qs.map((q, i) => (
            <div className={`faq-item ${open === i ? 'open':''}`} key={i}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span><span style={{color:'var(--ink-mute)', fontFamily:'JetBrains Mono', fontSize:13, marginRight:14}}>{String(i+1).padStart(2,'0')}</span>{q.q}</span>
                <span className="toggle">+</span>
              </button>
              <div className="faq-a"><div className="faq-a-inner">{q.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Final = () => (
  <section className="final">
    <div className="wrap">
      <span className="eyebrow" style={{justifyContent:'center'}}>Última coisa</span>
      <h2 className="display h-1" style={{marginTop:18}}>
        Em dezembro vai ter<br/><em style={{color:'var(--accent)', fontStyle:'normal'}}>dois tipos de treinador</em><br/>no Brasil.
      </h2>
      <p style={{marginTop:36}}>Um vai chegar no campeonato de fim de ano com o mesmo time estagnado de janeiro. Improvisando treino. Sentindo que perdeu mais um ano.</p>
      <p>O outro vai chegar com um time evoluído, com arsenal de jogadas ensaiadas, com método aplicado semana após semana.</p>
      <p style={{color:'var(--ink)', fontWeight:600}}>A diferença entre os dois vai ser brutal.</p>
      <p>R$ 9,90 ou R$ 27,90 não muda tua conta bancária. Mas pode mudar o ano todo da tua quadra.</p>

      <a href="#planos" className="btn btn-lg"><Icon name="lock"/> Garantir meu Arsenal agora <span className="arrow">→</span></a>

      <div className="trust" style={{justifyContent:'center', marginTop:18}}>
        <span>⚡ Acesso em 2 minutos</span>
        <span>🛡️ Garantia 7 dias</span>
        <span>🔒 Pagamento seguro</span>
        <span>💳 Cartão e PIX</span>
      </div>
    </div>
  </section>
);

// ---------- Tweaks ----------
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#b8ff3c",
  "headlineFont": "Anton",
  "density": "regular"
}/*EDITMODE-END*/;

const App = () => {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', t.accent);
    // derive deep
    document.documentElement.style.setProperty('--accent-deep', t.accent);
  }, [t.accent]);

  useEffect(() => {
    const root = document.documentElement;
    document.querySelectorAll('.display').forEach(el => {
      el.style.fontFamily = `'${t.headlineFont}', 'Anton', Impact, sans-serif`;
    });
  }, [t.headlineFont]);

  return (
    <>
      <Hero/>
      <Roadmap/>
      <Frentes/>
      <Checklist/>
      <PraQuem/>
      <Social/>
      <Compare/>
      <Pricing/>
      <PremiumWhy/>
      <Guarantee/>
      <FAQ/>
      <Final/>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Cor de destaque">
          <TweakColor
            label="Accent"
            value={t.accent}
            onChange={v => setTweak('accent', v)}
            options={['#b8ff3c', '#7dd420', '#ff5a3c', '#3cb0ff', '#ffd23c', '#f3f4ec']}
          />
        </TweakSection>
        <TweakSection title="Tipografia">
          <TweakRadio
            label="Headline"
            value={t.headlineFont}
            onChange={v => setTweak('headlineFont', v)}
            options={[
              { value: 'Anton', label: 'Anton' },
              { value: 'Archivo Narrow', label: 'Archivo' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
};

ReactDOM.createRoot(document.getElementById('app')).render(<App />);
