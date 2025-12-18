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
      name: "Алексей М.",
      rating: 5,
      text: "Невероятная платформа! Уникальные игровые режимы и быстрые выплаты. Играю уже полгода - только положительные эмоции.",
      avatar: "🎮"
    },
    {
      name: "Мария К.",
      rating: 5,
      text: "Лучшее казино, в котором я играла. Отличная поддержка, честная игра и крутые бонусы для постоянных игроков.",
      avatar: "⭐"
    },
    {
      name: "Дмитрий П.",
      rating: 5,
      text: "Morospin - это новый уровень! Современный интерфейс, море игр и моментальные выводы средств. Рекомендую всем!",
      avatar: "🎰"
    }
  ];

  const faqs = [
    {
      question: "Как начать играть на Morospin?",
      answer: "Просто нажмите на кнопку 'Играть сейчас', зарегистрируйтесь на сайте и получите приветственный бонус. Процесс регистрации занимает менее минуты!"
    },
    {
      question: "Какие игровые режимы доступны?",
      answer: "Morospin предлагает уникальные игровые режимы: классические слоты, live-казино, турниры с призовым фондом, эксклюзивные провайдеры и специальные бонусные раунды."
    },
    {
      question: "Безопасно ли играть на платформе?",
      answer: "Абсолютно! Morospin использует современное SSL-шифрование, имеет лицензию и проходит регулярные проверки честности игр. Ваши данные и средства под надежной защитой."
    },
    {
      question: "Как быстро выводятся выигрыши?",
      answer: "Выплаты обрабатываются мгновенно! В большинстве случаев средства поступают на ваш счет в течение нескольких минут после запроса на вывод."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient-shift bg-[length:200%_200%]" />
      
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="container mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
                MOROSPIN
              </h1>
              <p className="text-2xl md:text-3xl mb-4 text-foreground/90">
                Платформа нового поколения
              </p>
              <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
                Уникальные игровые режимы, мгновенные выплаты и незабываемые эмоции. 
                Присоединяйся к тысячам победителей!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/50"
                  onClick={() => window.open('https://morospin.com', '_blank')}
                >
                  <Icon name="Sparkles" size={24} className="mr-2" />
                  Играть сейчас
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300"
                  onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать больше
                  <Icon name="ArrowRight" size={24} className="ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
                <div className="animate-float">
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-4">🎯</div>
                      <h3 className="text-xl font-semibold mb-2">Уникальные режимы</h3>
                      <p className="text-muted-foreground">Эксклюзивные игры, которых нет больше нигде</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="animate-float" style={{ animationDelay: '2s' }}>
                  <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 hover:border-secondary/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-4">⚡</div>
                      <h3 className="text-xl font-semibold mb-2">Мгновенные выплаты</h3>
                      <p className="text-muted-foreground">Получи выигрыш за несколько минут</p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="animate-float" style={{ animationDelay: '4s' }}>
                  <Card className="bg-card/50 backdrop-blur-sm border-accent/20 hover:border-accent/50 transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-4">🎁</div>
                      <h3 className="text-xl font-semibold mb-2">Щедрые бонусы</h3>
                      <p className="text-muted-foreground">Регулярные акции и промокоды</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-card/30 backdrop-blur-sm">
          <div className="container mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Отзывы игроков
            </h2>
            
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Частые вопросы
            </h2>
            
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
                  Лицензированная платформа для азартных игр с уникальными игровыми режимами
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Контакты</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <Icon name="Mail" size={18} />
                    support@morospin.com
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Clock" size={18} />
                    Поддержка 24/7
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
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
              <p>© 2024 Morospin. Играйте ответственно. 18+</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
