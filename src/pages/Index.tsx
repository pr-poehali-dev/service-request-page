import { useState } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    id: 1,
    number: "01",
    title: "Веб-разработка",
    description: "Создание сайтов и веб-приложений под ключ — от лендинга до сложных платформ.",
    price: "от 50 000 ₽",
    duration: "2–4 недели",
  },
  {
    id: 2,
    number: "02",
    title: "Дизайн интерфейсов",
    description: "UI/UX дизайн с акцентом на пользовательский опыт, прототипирование и визуальную систему.",
    price: "от 30 000 ₽",
    duration: "1–2 недели",
  },
  {
    id: 3,
    number: "03",
    title: "Мобильное приложение",
    description: "Разработка iOS и Android приложений с единой кодовой базой на React Native.",
    price: "от 120 000 ₽",
    duration: "4–8 недель",
  },
  {
    id: 4,
    number: "04",
    title: "SEO-продвижение",
    description: "Технический аудит, оптимизация контента и построение ссылочного профиля для роста трафика.",
    price: "от 15 000 ₽/мес",
    duration: "Ежемесячно",
  },
  {
    id: 5,
    number: "05",
    title: "Техническая поддержка",
    description: "Обслуживание, обновления и оперативное устранение неполадок на существующих проектах.",
    price: "от 10 000 ₽/мес",
    duration: "Ежемесячно",
  },
  {
    id: 6,
    number: "06",
    title: "Интеграции и API",
    description: "Подключение CRM, платёжных систем, сторонних сервисов и разработка собственного API.",
    price: "от 20 000 ₽",
    duration: "1–3 недели",
  },
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  comment: "",
};

export default function Index() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleServiceClick = (service: typeof services[0]) => {
    setSelectedService(service.id);
    setForm((prev) => ({ ...prev, service: service.title }));
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-body text-[#1a1a1a]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#e8e6e0]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-xl font-medium tracking-wide">Студия</span>
          <a
            href="#order-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-body font-medium text-[#1a1a1a] border border-[#1a1a1a] px-5 py-2 hover:bg-[#1a1a1a] hover:text-[#FAFAF8] transition-all duration-300"
          >
            Заказать
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 max-w-6xl mx-auto">
        <div className="animate-fade-in" style={{ animationDelay: "0.1s", opacity: 0 }}>
          <p className="text-sm font-body text-[#9a9590] tracking-widest uppercase mb-6">Профессиональные услуги</p>
          <h1 className="font-display text-6xl md:text-8xl font-light leading-[1.05] text-[#1a1a1a] mb-8 max-w-3xl">
            Решения,<br />
            <em className="not-italic text-[#9a9590]">которые работают</em>
          </h1>
          <p className="font-body text-lg text-[#6b6760] max-w-md leading-relaxed">
            Выберите услугу из каталога и оставьте заявку — мы свяжемся в течение дня.
          </p>
        </div>

        <div className="mt-16 flex items-center gap-8 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <div className="h-px flex-1 bg-[#e8e6e0]" />
          <span className="text-sm font-body text-[#9a9590] whitespace-nowrap">Прокрутите вниз</span>
          <Icon name="ArrowDown" size={14} className="text-[#9a9590]" />
        </div>
      </section>

      {/* Services */}
      <section className="px-6 max-w-6xl mx-auto pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e8e6e0]">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`bg-[#FAFAF8] p-8 group cursor-pointer transition-all duration-300 hover:bg-[#1a1a1a] animate-fade-in ${selectedService === service.id ? "bg-[#1a1a1a]" : ""}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s`, opacity: 0 }}
              onClick={() => handleServiceClick(service)}
            >
              <div className="flex items-start justify-between mb-6">
                <span className={`font-display text-4xl font-light transition-colors duration-300 ${selectedService === service.id ? "text-[#FAFAF8]/30" : "text-[#e8e6e0] group-hover:text-[#FAFAF8]/30"}`}>
                  {service.number}
                </span>
                <Icon
                  name="ArrowUpRight"
                  size={16}
                  className={`transition-all duration-300 mt-1 ${selectedService === service.id ? "text-[#FAFAF8] opacity-100" : "text-[#1a1a1a] opacity-0 group-hover:opacity-100 group-hover:text-[#FAFAF8]"}`}
                />
              </div>
              <h3 className={`font-display text-2xl font-medium mb-3 transition-colors duration-300 ${selectedService === service.id ? "text-[#FAFAF8]" : "text-[#1a1a1a] group-hover:text-[#FAFAF8]"}`}>
                {service.title}
              </h3>
              <p className={`font-body text-sm leading-relaxed mb-6 transition-colors duration-300 ${selectedService === service.id ? "text-[#FAFAF8]/70" : "text-[#6b6760] group-hover:text-[#FAFAF8]/70"}`}>
                {service.description}
              </p>
              <div className={`flex items-center justify-between pt-4 border-t transition-colors duration-300 ${selectedService === service.id ? "border-[#FAFAF8]/20" : "border-[#e8e6e0] group-hover:border-[#FAFAF8]/20"}`}>
                <span className={`font-body text-sm font-medium transition-colors duration-300 ${selectedService === service.id ? "text-[#FAFAF8]" : "text-[#1a1a1a] group-hover:text-[#FAFAF8]"}`}>
                  {service.price}
                </span>
                <span className={`font-body text-xs transition-colors duration-300 ${selectedService === service.id ? "text-[#FAFAF8]/50" : "text-[#9a9590] group-hover:text-[#FAFAF8]/50"}`}>
                  {service.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order Form */}
      <section id="order-form" className="px-6 max-w-6xl mx-auto pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-sm font-body text-[#9a9590] tracking-widest uppercase mb-4">Форма заявки</p>
            <h2 className="font-display text-5xl font-light leading-tight mb-6">
              Расскажите<br />
              <em className="not-italic text-[#9a9590]">о задаче</em>
            </h2>
            <p className="font-body text-[#6b6760] leading-relaxed mb-8">
              Заполните форму — мы изучим запрос и свяжемся с вами для обсуждения деталей и стоимости.
            </p>
            <div className="space-y-4">
              {[
                { icon: "Clock", text: "Ответ в течение 1 рабочего дня" },
                { icon: "Shield", text: "Конфиденциальность данных" },
                { icon: "MessageCircle", text: "Бесплатная консультация" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <Icon name={item.icon} fallback="Circle" size={16} className="text-[#9a9590]" />
                  <span className="font-body text-sm text-[#6b6760]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-[#e8e6e0] p-12 text-center animate-fade-in">
                <div className="w-12 h-12 border border-[#1a1a1a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Check" size={20} />
                </div>
                <h3 className="font-display text-3xl font-light mb-3">Заявка отправлена</h3>
                <p className="font-body text-[#6b6760] text-sm">Мы свяжемся с вами в ближайшее время.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); setSelectedService(null); }}
                  className="mt-8 text-sm font-body text-[#9a9590] underline underline-offset-4 hover:text-[#1a1a1a] transition-colors"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs text-[#9a9590] uppercase tracking-widest mb-2">Имя *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      className="w-full bg-transparent border border-[#e8e6e0] px-4 py-3 font-body text-sm text-[#1a1a1a] placeholder-[#c8c5be] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-[#9a9590] uppercase tracking-widest mb-2">Телефон *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (999) 000-00-00"
                      className="w-full bg-transparent border border-[#e8e6e0] px-4 py-3 font-body text-sm text-[#1a1a1a] placeholder-[#c8c5be] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs text-[#9a9590] uppercase tracking-widest mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="ivan@company.ru"
                    className="w-full bg-transparent border border-[#e8e6e0] px-4 py-3 font-body text-sm text-[#1a1a1a] placeholder-[#c8c5be] focus:outline-none focus:border-[#1a1a1a] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-body text-xs text-[#9a9590] uppercase tracking-widest mb-2">Услуга *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-[#FAFAF8] border border-[#e8e6e0] px-4 py-3 font-body text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Выберите услугу</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs text-[#9a9590] uppercase tracking-widest mb-2">Комментарий</label>
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder="Опишите задачу или задайте вопрос..."
                    rows={4}
                    className="w-full bg-transparent border border-[#e8e6e0] px-4 py-3 font-body text-sm text-[#1a1a1a] placeholder-[#c8c5be] focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a1a1a] text-[#FAFAF8] font-body text-sm font-medium py-4 px-8 hover:bg-[#333] transition-colors duration-300 tracking-wide uppercase"
                >
                  Отправить заявку
                </button>

                <p className="font-body text-xs text-[#9a9590] text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e8e6e0] px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-lg font-medium">Студия</span>
          <span className="font-body text-sm text-[#9a9590]">© 2026 — Все права защищены</span>
        </div>
      </footer>
    </div>
  );
}