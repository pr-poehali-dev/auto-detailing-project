import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Керамическое покрытие",
      description: "Долговременная защита кузова до 5 лет",
      price: "от 25 000 ₽",
      icon: "Shield"
    },
    {
      title: "Защитная оклейка",
      description: "Полиуретановая пленка для защиты от сколов",
      price: "от 35 000 ₽", 
      icon: "Car"
    },
    {
      title: "Детейлинг мойка",
      description: "Комплексная мойка с защитными составами",
      price: "от 3 500 ₽",
      icon: "Droplets"
    },
    {
      title: "Полировка кузова",
      description: "Восстановление блеска и устранение дефектов",
      price: "от 15 000 ₽",
      icon: "Sparkles"
    },
    {
      title: "Химчистка салона",
      description: "Глубокая очистка сидений, ковриков и панели",
      price: "от 8 000 ₽",
      icon: "Spray"
    },
    {
      title: "Шумоизоляция авто",
      description: "Установка материалов для снижения шума",
      price: "от 20 000 ₽",
      icon: "Volume"
    },
    {
      title: "Установка акустики",
      description: "Монтаж и настройка аудиосистемы",
      price: "от 15 000 ₽",
      icon: "Speaker"
    },
    {
      title: "Мойка днища",
      description: "Очистка и антикоррозийная обработка",
      price: "от 2 500 ₽",
      icon: "Waves"
    },
    {
      title: "Тонировка стекол",
      description: "Профессиональная тонировка по ГОСТу",
      price: "от 6 000 ₽",
      icon: "Sun"
    },
    {
      title: "Замена масла и фильтров",
      description: "Техническое обслуживание двигателя",
      price: "от 3 000 ₽",
      icon: "Wrench"
    }
  ];

  const portfolioItems = [
    { title: "BMW X5", service: "Керамическое покрытие" },
    { title: "Mercedes E-Class", service: "Защитная пленка" },
    { title: "Audi Q7", service: "Полный детейлинг" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://cdn.poehali.dev/files/28b50d8e-6a5d-43a4-b819-df801c25998c.jpeg" 
                alt="AIM DETAILING"
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-muted-foreground hover:text-secondary transition-colors">
                Услуги
              </a>
              <a href="#prices" className="text-muted-foreground hover:text-secondary transition-colors">
                Цены
              </a>
              <a href="#portfolio" className="text-muted-foreground hover:text-secondary transition-colors">
                Портфолио
              </a>
              <a href="#contacts" className="text-muted-foreground hover:text-secondary transition-colors">
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-accent to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6">
              AIM DETAILING
              <br />
              <span className="text-primary">Полный спектр услуг</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              От керамических покрытий до технического обслуживания. 
              Химчистка, тонировка, шумоизоляция и установка акустики.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" size={20} className="mr-2" />
                Записаться на услугу
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Используем только профессиональные материалы и проверенные технологии
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl text-secondary">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Наши работы
            </h2>
            <p className="text-xl text-muted-foreground">
              Результаты, которые говорят сами за себя
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/da117019-8431-4ea0-992a-6862edae66c7.jpg" 
                alt="BMW X5 с керамическим покрытием"
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">BMW X5</h3>
                <p className="text-muted-foreground">Керамическое покрытие</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/6caa161f-d418-4312-b182-5ac01b06689d.jpg" 
                alt="Mercedes E-Class с защитной пленкой"
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Mercedes E-Class</h3>
                <p className="text-muted-foreground">Защитная пленка</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src="/img/588f6bbc-f9a6-4f86-a398-21fa28112fc0.jpg" 
                alt="Audi Q7 полный детейлинг"
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">Audi Q7</h3>
                <p className="text-muted-foreground">Полный детейлинг</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">
                О нашем центре
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Более 8 лет опыта в сфере автодетейлинга. Работаем только с 
                проверенными материалами и используем современное оборудование.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={24} className="text-primary mr-3" />
                  <span className="text-secondary">Гарантия на все виды работ</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={24} className="text-primary mr-3" />
                  <span className="text-secondary">Сертифицированные мастера</span>
                </div>
                <div className="flex items-center">
                  <Icon name="CheckCircle" size={24} className="text-primary mr-3" />
                  <span className="text-secondary">Премиальные материалы</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl h-80 flex items-center justify-center">
              <Icon name="Award" size={96} className="text-primary/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Контакты
            </h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь с нами для записи или консультации
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (999) 123-45-67</p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Адрес</h3>
              <p className="text-muted-foreground">ул. Автомобильная, 15<br />Москва, 123456</p>
            </Card>

            <Card className="text-center p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Время работы</h3>
              <p className="text-muted-foreground">Пн-Вс: 9:00 - 20:00</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">AIM DETAILING</div>
            <p className="text-gray-300 mb-6">
              Профессиональный уход за вашим автомобилем
            </p>
            <div className="flex justify-center space-x-6">
              <Icon name="Instagram" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Icon name="MessageCircle" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
              <Icon name="Phone" size={24} className="text-gray-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;