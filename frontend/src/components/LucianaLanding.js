import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Bot, BarChart3, Zap, ShoppingBag, Link, Check, X, MessageCircle, Mail, TrendingUp } from 'lucide-react';

const LucianaLanding = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const { name, company, phone, email, service } = formData;
    
    const message = `Hola! Me interesa conocer más sobre Luciana AI:
    
Nombre: ${name}
Empresa: ${company}
Teléfono: ${phone}
Correo: ${email}
Interés en: ${service}

¿Podrían agendar una demo?`;
    
    const whatsappURL = `https://wa.me/50232251075?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handleDemoRequest = () => {
    const message = `¡Hola! Me interesa solicitar una demo de Luciana AI.

¿Podrían contactarme para agendar una presentación de la plataforma?

Gracias.`;
    
    const whatsappURL = `https://wa.me/50232251075?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const handlePlanRequest = (planName) => {
    const message = `¡Hola! Estoy interesado en el Plan ${planName} de Luciana AI.

¿Podrían proporcionarme más información sobre este plan y ayudarme con el proceso de contratación?

Gracias.`;
    
    const whatsappURL = `https://wa.me/50232251075?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  const benefits = [
    {
      icon: Bot,
      title: "IA conectada a WhatsApp 24/7",
      description: "Automatiza conversaciones y responde a tus clientes las 24 horas del día"
    },
    {
      icon: BarChart3,
      title: "Plataforma de análisis de datos",
      description: "Toma decisiones inteligentes con análisis en tiempo real"
    },
    {
      icon: Zap,
      title: "Automatización de campañas",
      description: "CRM conversacional que potencia tus ventas"
    },
    {
      icon: ShoppingBag,
      title: "Toma de pedidos y pagos",
      description: "Integra ventas y pagos directamente en WhatsApp"
    },
    {
      icon: Link,
      title: "Integraciones API",
      description: "Conecta múltiples números y sistemas externos"
    }
  ];

  const plans = {
    basic: {
      name: "Básico",
      monthlyPrice: "USD 250",
      yearlyPrice: "USD 2,500",
      features: [
        "Plataforma de Administración de información para IA",
        "Conexión a WhatsApp (mensajes ilimitados)",
        "Gestión de preguntas frecuentes y reclamos",
        "Campañas de marketing por WhatsApp",
        "Toma de pedidos y notificación de ventas",
        "Soporte de lunes a viernes"
      ],
      notIncluded: [
        "Catálogo de productos/servicios",
        "Pasarela de pago",
        "Integración con APIs externas",
        "Hasta 3 números de WhatsApp",
        "CRM Inteligente"
      ]
    },
    plus: {
      name: "Plus",
      monthlyPrice: "USD 425",
      yearlyPrice: "USD 4,000",
      features: [
        "Plataforma de Administración de información para IA",
        "Conexión a WhatsApp (mensajes ilimitados)",
        "Gestión de preguntas frecuentes y reclamos",
        "Campañas de marketing por WhatsApp",
        "Toma de pedidos y notificación de ventas",
        "Catálogo de productos/servicios",
        "Pasarela de pago",
        "Soporte de lunes a viernes"
      ],
      notIncluded: [
        "Integración con APIs externas",
        "Hasta 3 números de WhatsApp",
        "CRM Inteligente"
      ],
      featured: true
    },
    premium: {
      name: "Premium",
      monthlyPrice: "USD 650",
      yearlyPrice: "USD 6,000",
      features: [
        "Plataforma de Administración de información para IA",
        "Conexión a WhatsApp (mensajes ilimitados)",
        "Gestión de preguntas frecuentes y reclamos",
        "Campañas de marketing por WhatsApp",
        "Toma de pedidos y notificación de ventas",
        "Catálogo de productos/servicios",
        "Pasarela de pago",
        "Integración con APIs externas",
        "Hasta 3 números de WhatsApp",
        "CRM Inteligente",
        "Soporte de lunes a viernes"
      ],
      notIncluded: []
    }
  };

  const clientLogos = [
    "USAC", "Hospital Nasir", "INNFarma", "Teletón", "Futeca", 
    "Santillana", "Mocca's", "Grupo Rosul", "Enlaces Automotrices"
  ];

  return (
    <div className="min-h-screen bg-page">
      {/* Header */}
      <header className="header-nav">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_1e6338fa-b7e3-4bb7-9032-e8677dac9b3c/artifacts/u7i7fifj_5134DEC3-6D1F-4F67-BC95-15CABCEDF35B.png" 
              alt="Luciana AI" 
              className="logo"
            />
          </div>
          <div className="nav-actions">
            <Button className="btn-primary">
              Solicita tu Demo
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxBSSUyMGJ1c2luZXNzJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NTU5OTIyMDJ8MA&ixlib=rb-4.1.0&q=85")'
          }}
        />
        <div className="hero-content">
          <div className="hero-announcement fade-in-up">
            <Bot className="w-4 h-4" />
            <span>IA Conversacional Avanzada</span>
          </div>
          <h1 className="hero-title heading-hero fade-in-up stagger-1">
            Automatiza, responde y convierte con Luciana AI
          </h1>
          <p className="hero-subtitle body-large fade-in-up stagger-2">
            La plataforma conversacional más completa para ventas, atención y análisis en tiempo real desde WhatsApp
          </p>
          <div className="fade-in-up stagger-3">
            <Button 
              className="btn-primary text-lg px-8 py-4"
              onClick={() => document.querySelector('#contact-form').scrollIntoView({ behavior: 'smooth' })}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Solicita tu demo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pad-2xl bg-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">¿Por qué Luciana AI?</h2>
            <p className="body-large text-secondary max-w-2xl mx-auto">
              Descubre las funcionalidades que transformarán tu negocio
            </p>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <Card key={index} className="luciana-card hover-lift">
                <CardContent className="p-0">
                  <div className="flex flex-col items-center text-center">
                    <div className="feature-icon mb-4">
                      <benefit.icon className="w-full h-full" />
                    </div>
                    <h3 className="heading-3 mb-3">{benefit.title}</h3>
                    <p className="body-medium text-secondary">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="pad-2xl">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">Planes que se adaptan a tu negocio</h2>
            <p className="body-large text-secondary">
              Elige el plan perfecto para llevar tu empresa al siguiente nivel
            </p>
          </div>
          <div className="plans-grid">
            {Object.values(plans).map((plan, index) => (
              <Card key={index} className={`plan-card luciana-card hover-lift ${plan.featured ? 'featured' : ''}`}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="heading-2 mb-2">{plan.name}</CardTitle>
                  {plan.featured && (
                    <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 rounded-full px-3 py-1 mb-4">
                      <TrendingUp className="w-4 h-4" />
                      <span className="text-sm font-medium">Más Popular</span>
                    </div>
                  )}
                  <div className="space-y-1">
                    <div className="heading-1 font-bold">{plan.monthlyPrice}</div>
                    <div className="body-small opacity-75">por mes</div>
                    <div className="mono-text opacity-75">{plan.yearlyPrice} anual</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="body-small flex-1">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 opacity-50">
                        <X className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                        <span className="body-small line-through flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full mt-6 ${plan.featured ? 'bg-white text-primary hover:bg-opacity-90' : 'btn-primary'}`}
                    onClick={() => document.querySelector('#contact-form').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Solicitar Plan {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="pad-xl bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Clientes que ya confían en Luciana AI</h2>
            <p className="body-medium text-secondary">
              Empresas líderes que han transformado sus negocios con nuestra plataforma
            </p>
          </div>
          <div className="clients-grid">
            {clientLogos.map((client, index) => (
              <div key={index} className="luciana-card text-center p-6 min-h-20 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <span className="button-text text-muted font-semibold">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="pad-2xl">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h2>
            <p className="body-large text-secondary">
              Completa el formulario y nuestro equipo se pondrá en contacto contigo
            </p>
          </div>
          <div className="contact-form">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="body-medium font-semibold text-primary mb-2 block">
                    Nombre completo *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-4 border border-input rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="body-medium font-semibold text-primary mb-2 block">
                    Empresa *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full p-4 border border-input rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="body-medium font-semibold text-primary mb-2 block">
                    Teléfono *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full p-4 border border-input rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="+502 1234-5678"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="body-medium font-semibold text-primary mb-2 block">
                    Correo electrónico *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-4 border border-input rounded-lg focus:border-primary focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="service" className="body-medium font-semibold text-primary mb-2 block">
                  ¿En qué te gustaría que Luciana te ayude? *
                </Label>
                <Select required onValueChange={(value) => handleInputChange('service', value)}>
                  <SelectTrigger className="w-full p-4 border border-input rounded-lg focus:border-primary">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ventas">Ventas</SelectItem>
                    <SelectItem value="soporte">Soporte</SelectItem>
                    <SelectItem value="servicio-al-cliente">Servicio al Cliente</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-center pt-4">
                <Button type="submit" className="btn-primary text-lg px-8 py-4 w-full md:w-auto">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicita una demo ahora
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center">
              <img 
                src="https://customer-assets.emergentagent.com/job_1e6338fa-b7e3-4bb7-9032-e8677dac9b3c/artifacts/u7i7fifj_5134DEC3-6D1F-4F67-BC95-15CABCEDF35B.png" 
                alt="Luciana AI" 
                className="h-8 w-auto opacity-60"
              />
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-muted">
                <Mail className="w-4 h-4" />
                <span className="body-small">info@e689gt.com</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-light text-center">
            <p className="caption text-muted">
              Copyright 2025 - Todos los derechos reservados - Luciana AI
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LucianaLanding;