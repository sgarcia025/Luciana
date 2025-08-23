import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Bot, BarChart3, Zap, ShoppingBag, Link, Check, X, MessageCircle, Phone, Mail } from 'lucide-react';

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
    
    const whatsappURL = `https://wa.me/50245678901?text=${encodeURIComponent(message)}`;
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
      ]
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
          <img 
            src="https://customer-assets.emergentagent.com/job_1e6338fa-b7e3-4bb7-9032-e8677dac9b3c/artifacts/u7i7fifj_5134DEC3-6D1F-4F67-BC95-15CABCEDF35B.png" 
            alt="Luciana AI" 
            className="logo h-10 w-auto"
          />
          <div className="nav-actions">
            <Button className="btn-secondary">Iniciar Sesión</Button>
            <Button className="btn-primary">Solicita tu Demo</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwyfHxBSSUyMGJ1c2luZXNzJTIwYXV0b21hdGlvbnxlbnwwfHx8fDE3NTU5OTIyMDJ8MA&ixlib=rb-4.1.0&q=85")'
          }}
        />
        <div className="hero-content relative z-10">
          <div className="hero-announcement">
            <Bot className="w-4 h-4" />
            <span>IA Conversacional Avanzada</span>
          </div>
          <h1 className="hero-title heading-hero">
            Automatiza, responde y convierte con Luciana AI
          </h1>
          <p className="hero-subtitle body-large text-text-secondary">
            La plataforma conversacional más completa para ventas, atención y análisis en tiempo real desde WhatsApp
          </p>
          <Button className="btn-primary text-lg px-8 py-4">
            Solicita tu demo
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pad-2xl bg-bg-section">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="heading-1 mb-4">¿Por qué Luciana AI?</h2>
          </div>
          <div className="voice-grid">
            {benefits.map((benefit, index) => (
              <Card key={index} className="voice-card hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent-purple-200 flex items-center justify-center mr-4">
                      <benefit.icon className="w-6 h-6 text-accent-purple-400" />
                    </div>
                    <h3 className="heading-3 font-medium">{benefit.title}</h3>
                  </div>
                  <p className="body-medium text-text-secondary">{benefit.description}</p>
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
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {Object.values(plans).map((plan, index) => (
              <Card key={index} className={`voice-card hover-lift ${index === 1 ? 'accent-blue' : index === 2 ? 'accent-purple' : 'accent-orange'}`}>
                <CardHeader>
                  <CardTitle className="heading-2">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="heading-1">{plan.monthlyPrice}</div>
                    <div className="body-small text-text-muted">por mes</div>
                    <div className="mono-text">{plan.yearlyPrice} anual</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="body-small">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 opacity-60">
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="body-small line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="btn-primary w-full mt-6">
                    Solicitar Plan {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="pad-xl bg-bg-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-8">Clientes que ya confían en Luciana AI</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center opacity-60">
            {clientLogos.map((client, index) => (
              <div key={index} className="voice-card p-4 text-center min-h-20 flex items-center justify-center">
                <span className="button-text text-text-muted">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pad-2xl">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-1 mb-4">¿Listo para llevar tu negocio al siguiente nivel?</h2>
          </div>
          <Card className="voice-card accent-purple">
            <CardContent className="p-8">
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="body-medium font-medium">Nombre completo</Label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company" className="body-medium font-medium">Empresa</Label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="body-medium font-medium">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="body-medium font-medium">Correo</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="service" className="body-medium font-medium">¿En qué te gustaría que Luciana te ayude?</Label>
                  <Select required onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger className="mt-2">
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
                <Button type="submit" className="btn-primary w-full text-lg py-4">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Solicita una demo ahora
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bg-card border-t border-border-light pad-xl">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_1e6338fa-b7e3-4bb7-9032-e8677dac9b3c/artifacts/u7i7fifj_5134DEC3-6D1F-4F67-BC95-15CABCEDF35B.png" 
              alt="Luciana AI" 
              className="logo h-8 w-auto mb-4 md:mb-0"
            />
            <div className="flex items-center space-x-6 text-center">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="body-small">luciana@e689gt.com</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border-light text-center">
            <p className="caption">Copyright 2025 - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LucianaLanding;