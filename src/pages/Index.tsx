import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const testimonials = [
    {
      name: "Alessandro M.",
      rating: 5,
      text: "Piattaforma incredibile! Modalità di gioco uniche e pagamenti rapidi. Gioco da sei mesi - solo emozioni positive.",
      avatar: "🎮"
    },
    {
      name: "Maria R.",
      rating: 5,
      text: "Il miglior casinò in cui abbia mai giocato. Ottimo supporto, gioco onesto e fantastici bonus per i giocatori abituali.",
      avatar: "⭐"
    },
    {
      name: "Giuseppe B.",
      rating: 5,
      text: "Morospin è un nuovo livello! Interfaccia moderna, tantissimi giochi e prelievi istantanei. Lo consiglio a tutti!",
      avatar: "🎰"
    }
  ];

  const faqs = [
    {
      question: "Come iniziare a giocare su Morospin?",
      answer: "Basta cliccare sul pulsante 'Gioca ora', registrarti sul sito e ricevere il bonus di benvenuto. Il processo di registrazione richiede meno di un minuto!"
    },
    {
      question: "Quali modalità di gioco sono disponibili?",
      answer: "Morospin offre modalità di gioco uniche: slot classiche, casinò live, tornei con montepremi, provider esclusivi e round bonus speciali."
    },
    {
      question: "È sicuro giocare sulla piattaforma?",
      answer: "Assolutamente! Morospin utilizza crittografia SSL moderna, ha una licenza e viene sottoposta a controlli regolari sull'equità dei giochi. I tuoi dati e fondi sono protetti in modo sicuro."
    },
    {
      question: "Quanto velocemente vengono elaborati i prelievi?",
      answer: "I pagamenti vengono elaborati istantaneamente! Nella maggior parte dei casi, i fondi arrivano sul tuo conto entro pochi minuti dalla richiesta di prelievo."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto text-center">
            <div className="animate-fade-in">
              <div className="mb-8 max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 bg-gradient-to-br from-primary/10 to-secondary/10">
                <img 
                  src="https://cdn.poehali.dev/projects/ca4a34b5-21cd-4140-85c7-9f8ea59cd953/files/3b09de6b-1210-4996-9848-f39f6a91a3ba.jpg"
                  alt="Morospin Gaming Platform"
                  className="w-full h-64 object-cover mix-blend-lighten"
                />
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                MOROSPIN
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-foreground/90">
                Piattaforma di Nuova Generazione
              </p>
              <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
                Modalità di gioco uniche, pagamenti istantanei ed emozioni indimenticabili. 
                Unisciti a migliaia di vincitori!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/50"
                  onClick={() => window.open('https://morospin.com', '_blank')}
                >
                  <Icon name="Sparkles" size={24} className="mr-2" />
                  Gioca Ora
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Scopri di Più
                  <Icon name="ArrowRight" size={24} className="ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
                <div className="animate-float">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-4">🎯</div>
                      <h3 className="text-xl font-semibold mb-2">Modalità Uniche</h3>
                      <p className="text-muted-foreground">Giochi esclusivi che non troverai da nessun'altra parte</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="animate-float" style={{ animationDelay: '2s' }}>
                  <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-4">⚡</div>
                      <h3 className="text-xl font-semibold mb-2">Pagamenti Istantanei</h3>
                      <p className="text-muted-foreground">Ricevi le vincite in pochi minuti</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="animate-float" style={{ animationDelay: '4s' }}>
                  <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-4">🎁</div>
                      <h3 className="text-xl font-semibold mb-2">Bonus Generosi</h3>
                      <p className="text-muted-foreground">Promozioni regolari e codici promozionali</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Recensioni dei Giocatori
            </h2>
            
            <div className="mb-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-secondary/30 bg-gradient-to-br from-secondary/10 to-accent/10">
              <img 
                src="https://cdn.poehali.dev/projects/ca4a34b5-21cd-4140-85c7-9f8ea59cd953/files/aafac5d9-6260-4e67-ba7f-74dd55c9c19e.jpg"
                alt="Celebration"
                className="w-full h-48 object-cover mix-blend-lighten"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="bg-card/80 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="text-4xl mr-4">{testimonial.avatar}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} className="fill-accent text-accent" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Domande Frequenti
            </h2>
            
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-primary/30 bg-gradient-to-br from-accent/10 to-primary/10">
              <img 
                src="https://cdn.poehali.dev/projects/ca4a34b5-21cd-4140-85c7-9f8ea59cd953/files/59bf713c-8933-4725-8f3b-6faaf27d691b.jpg"
                alt="VIP Experience"
                className="w-full h-48 object-cover mix-blend-lighten"
              />
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-primary/20 mb-4"
                >
                  <AccordionTrigger className="text-lg font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <footer className="py-12 px-4 bg-card/50 backdrop-blur-sm border-t border-primary/20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  MOROSPIN
                </h3>
                <p className="text-muted-foreground">
                  Piattaforma autorizzata per giochi d'azzardo con modalità di gioco uniche
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Contatti</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Icon name="Mail" size={18} />
                    support@morospin.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Clock" size={18} />
                    Supporto 24/7
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Social Network</h4>
                <div className="flex gap-4">
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  >
                    <Icon name="Send" size={20} />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-secondary/50 hover:bg-secondary/20 hover:scale-110 transition-all duration-300"
                  >
                    <Icon name="Instagram" size={20} />
                  </Button>
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="border-accent/50 hover:bg-accent/20 hover:scale-110 transition-all duration-300"
                  >
                    <Icon name="Twitter" size={20} />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-8 border-t border-primary/20 text-muted-foreground">
              <p>© 2024 Morospin. Gioca responsabilmente. 18+</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;