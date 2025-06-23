// src/components/Contact.tsx
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  X, 
  Calendar,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí iría la lógica para enviar el formulario
    alert("¡Mensaje enviado! Te contactaré pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-8">{t('contact.info')}</h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-semibold">{t('contact.email')}</p>
                  <p className="text-gray-300">fmonfasani@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-semibold">{t('contact.phone')}</p>
                  <p className="text-gray-300">+54 9 358-561-4524</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-semibold">{t('contact.location')}</p>
                  <p className="text-gray-300">Buenos Aires, Argentina</p>
                </div>
              </div>

              {/* REEMPLAZADO: WhatsApp en lugar de Status */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{t('contact.whatsapp')}</p>
                  <a
                    href="https://wa.me/543585614524?text=Hola%20Federico!%20Me%20interesa%20contactarte%20para%20un%20proyecto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    <MessageCircle size={16} />
                    <span>{t('contact.whatsapp.button')}</span>
                  </a>
                </div>
              </div>

              {/* Botón Agendar Cita */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Calendar size={24} />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{t('contact.schedule')}</p>
                  <a
                    href="https://calendly.com/fmonfasani" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors text-sm font-medium"
                  >
                    <Calendar size={16} />
                    <span>{t('contact.book')}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">{t('contact.social')}</h4>
              <div className="flex space-x-4 flex-wrap">
                <a
                  href="https://github.com/fmonfasani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors"
                  title="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/federico-monfasani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/fmonfasani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-black rounded-lg flex items-center justify-center transition-colors"
                  title="X"
                >
                  <X size={24} />
                </a>
                <a
                  href="https://wa.me/543585614524?text=Hola%20Federico!%20Me%20interesa%20contactarte%20para%20un%20proyecto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-700 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors"
                  title="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              {t('contact.form')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder={t('contact.placeholder.name')}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                  placeholder={t('contact.placeholder.email')}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 resize-none"
                  placeholder={t('contact.placeholder.message')}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>{t('contact.send')}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer siempre en inglés */}
        <div className="border-t border-gray-600 mt-16 pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <p className="text-gray-300 font-medium text-center lg:text-left">
              © 2024 Federico Monfasani. All rights reserved.
            </p>
            <p className="text-[#00A69D] font-semibold text-lg flex items-center justify-center gap-2">
              Made with <span className="text-red-400">❤️</span> and lots of{" "}
              <span className="text-yellow-400">☕</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;