import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, User, Mail, Phone, FileText, CheckCircle2, ChevronLeft, ChevronRight, Copy, Check, Printer, CalendarRange, CreditCard, Lock, ShieldCheck, AlertCircle } from 'lucide-react';
import { Service } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  selectedServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  services,
  selectedServiceId = '',
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [serviceId, setServiceId] = useState(selectedServiceId || services[0]?.id || '');
  
  // Payment states
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'mercadopago' | 'binance'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [mercadoPagoReference, setMercadoPagoReference] = useState('');
  const [binanceReference, setBinanceReference] = useState('');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
  // Date selection state
  // We start at July 2026 since current local time is July 15, 2026
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(6); // July is index 6 (0-indexed)
  const [selectedDate, setSelectedDate] = useState<string>('2026-07-20');
  const [selectedTime, setSelectedTime] = useState<string>('10:00 AM');
  
  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  
  // Submit success states
  const [isSuccess, setIsSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState('');
  const [copied, setCopied] = useState(false);

  // Calendar dates helper
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const timeSlots = [
    '09:00 AM',
    '10:30 AM',
    '12:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM'
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
  
  // Generate days array
  const days = [];
  // Fill empty slots for previous month padding
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  // Fill current month days
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(prev => prev - 1);
    } else {
      setCurrentMonth(prev => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(prev => prev + 1);
    } else {
      setCurrentMonth(prev => prev + 1);
    }
  };

  const handleDateSelect = (day: number) => {
    const formattedMonth = String(currentMonth + 1).padStart(2, '0');
    const formattedDay = String(day).padStart(2, '0');
    setSelectedDate(`${currentYear}-${formattedMonth}-${formattedDay}`);
  };

  const getDayName = (dateStr: string) => {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('es-ES', { weekday: 'long', day: 'numeric', month: 'long' });
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(bookingCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 2) {
      if (!fullName || !email || !phone) {
        alert('Por favor, completa los campos requeridos (Nombre, Correo y Teléfono)');
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (paymentMethod === 'card') {
        if (!cardNumber || !cardExpiry || !cardCvv || !cardName) {
          alert('Por favor, completa todos los campos de tu tarjeta.');
          return;
        }
        if (cardNumber.replace(/\s/g, '').length < 16) {
          alert('El número de tarjeta debe tener 16 dígitos.');
          return;
        }
        if (cardCvv.length < 3) {
          alert('El código CVV debe tener al menos 3 dígitos.');
          return;
        }
      } else if (paymentMethod === 'mercadopago') {
        if (!mercadoPagoReference.trim()) {
          alert('Por favor, ingresa el número de referencia de tu transferencia de Mercado Pago.');
          return;
        }
      } else if (paymentMethod === 'binance') {
        if (!binanceReference.trim()) {
          alert('Por favor, ingresa el ID de transacción (TxID) o email de tu Binance Pay.');
          return;
        }
      }

      setIsProcessingPayment(true);
      setTimeout(() => {
        setIsProcessingPayment(false);
        // Generate custom booking code
        const rand = Math.floor(1000 + Math.random() * 9000);
        const code = `AM-${rand}-2026`;
        setBookingCode(code);
        setIsSuccess(true);
      }, 1800);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const selectedService = services.find(s => s.id === serviceId) || services[0];

  // Helper to check if a day is in the past (before July 15, 2026)
  const isPastDay = (day: number) => {
    if (currentYear < 2026) return true;
    if (currentYear > 2026) return false;
    if (currentMonth < 6) return true; // Before July
    if (currentMonth > 6) return false; // After July
    return day < 15; // In July, before 15
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0F1115]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-4xl bg-white border border-brand-blue/10 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row print:max-h-none print:shadow-none print:rounded-none print:bg-white text-brand-text"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-brand-text/60 hover:text-brand-blue transition-colors z-20 print:hidden cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Sidebar Branding Info (Left Pane) */}
            <div className="w-full md:w-1/3 bg-brand-blue border-r border-brand-blue/10 text-white p-6 md:p-8 flex flex-col justify-between print:hidden">
              <div>
                <span className="text-xs font-semibold text-brand-accent tracking-widest uppercase">
                  Asesoría Legal Clara
                </span>
                <h3 className="font-heading text-2xl font-bold mt-2 mb-4">
                  Agenda tu consulta virtual
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                  Da el primer paso hacia tu estabilidad migratoria en EE.UU. con un acompañamiento experto, profesional y empático.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="p-1.5 bg-white/5 rounded text-brand-accent border border-white/5">
                      <Clock className="w-4 h-4" />
                    </span>
                    <span>Duración: 45 min de videollamada</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="p-1.5 bg-white/5 rounded text-brand-accent border border-white/5">
                      <CalendarRange className="w-4 h-4" />
                    </span>
                    <span>Confirmación y recordatorios por correo y WhatsApp</span>
                  </div>
                </div>
              </div>

              {/* Secure Trust Stamp */}
              <div className="mt-8 border-t border-white/5 pt-6">
                <p className="text-xs text-zinc-500 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Conexión segura & Confidencialidad 100% garantizada
                </p>
              </div>
            </div>

            {/* Form Content / Success (Right Pane) */}
            <div className="w-full md:w-2/3 p-6 md:p-8 overflow-y-auto print:w-full print:p-0">
              {!isSuccess ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step Header */}
                  <div className="flex items-center justify-between border-b border-brand-blue/10 pb-4 print:hidden">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === 1 ? 'bg-[#E79923] text-brand-blue' : 'bg-brand-blue/5 text-brand-blue/60'}`}>
                        1
                      </span>
                      <span className={`text-sm font-extrabold ${step === 1 ? 'text-brand-blue' : 'text-brand-blue/60'}`}>Servicio y Fecha</span>
                      
                      <ChevronRight className="w-3 h-3 text-brand-blue/30" />
                      
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === 2 ? 'bg-[#E79923] text-brand-blue' : 'bg-brand-blue/5 text-brand-blue/60'}`}>
                        2
                      </span>
                      <span className={`text-sm font-bold ${step === 2 ? 'text-brand-blue' : 'text-brand-blue/50'}`}>Datos</span>

                      <ChevronRight className="w-3 h-3 text-brand-blue/30" />

                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step === 3 ? 'bg-[#E79923] text-brand-blue' : 'bg-brand-blue/5 text-brand-blue/60'}`}>
                        3
                      </span>
                      <span className={`text-sm font-bold ${step === 3 ? 'text-brand-blue' : 'text-brand-blue/50'}`}>Pago</span>
                    </div>
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(prev => (prev === 3 ? 2 : 1))}
                        className="text-xs text-[#E79923] hover:text-brand-blue flex items-center gap-1 font-bold cursor-pointer"
                      >
                        <ChevronLeft className="w-3 h-3" /> Regresar
                      </button>
                    )}
                  </div>

                  {/* STEP 1: SERVICE & CALENDAR SELECT */}
                  {step === 1 && (
                    <div className="space-y-5">
                      {/* Select Service */}
                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                          Selecciona el tipo de asesoría
                        </label>
                        <div className="grid grid-cols-1 gap-2">
                          {services.map(s => {
                            const isSelected = serviceId === s.id;
                            return (
                              <button
                                key={s.id}
                                type="button"
                                onClick={() => setServiceId(s.id)}
                                className={`p-3 text-left border rounded-xl flex items-center justify-between transition-all cursor-pointer ${
                                  isSelected
                                    ? 'border-[#E79923] bg-[#FAF5EB] ring-2 ring-[#E79923]/20 shadow-sm scale-[1.01]'
                                    : 'border-[#E79923]/40 bg-[#FDFBF7] hover:border-[#E79923]/70 hover:bg-[#FAF5EB]'
                                }`}
                              >
                                <div>
                                  <h4 className="font-bold text-sm text-brand-blue flex items-center gap-2">
                                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#E79923]" />}
                                    {s.title}
                                  </h4>
                                  <p className="text-xs text-brand-blue/85 mt-0.5 line-clamp-1 font-medium">{s.shortDescription}</p>
                                </div>
                                <span className={`text-xs font-bold px-2 py-1 rounded-lg border transition-all ${
                                  isSelected 
                                    ? 'bg-brand-blue text-white border-brand-blue' 
                                    : 'bg-white text-brand-blue border-[#E79923]/30'
                                }`}>
                                  {s.price}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Custom Calendar Grid & Time Slots */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-2">
                        {/* Calendar */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                              Selecciona la fecha
                            </span>
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="p-1 hover:bg-brand-blue/5 rounded text-brand-blue/60 hover:text-brand-blue cursor-pointer"
                              >
                                <ChevronLeft className="w-4 h-4" />
                              </button>
                              <span className="text-xs font-bold text-brand-blue min-w-[80px] text-center">
                                {months[currentMonth]} {currentYear}
                              </span>
                              <button
                                type="button"
                                onClick={handleNextMonth}
                                className="p-1 hover:bg-brand-blue/5 rounded text-brand-blue/60 hover:text-brand-blue cursor-pointer"
                              >
                                <ChevronRight className="w-4 h-4" />
                              </button>
                            </div>
                          </div>

                          {/* Calendar Grid */}
                          <div className="border border-brand-blue/20 rounded-xl p-3 bg-brand-blue shadow-md">
                            {/* Days of week */}
                            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-white/80 mb-1">
                              <span>DOM</span>
                              <span>LUN</span>
                              <span>MAR</span>
                              <span>MIÉ</span>
                              <span>JUE</span>
                              <span>VIE</span>
                              <span>SÁB</span>
                            </div>

                            {/* Calendar Days */}
                            <div className="grid grid-cols-7 gap-1">
                              {days.map((day, idx) => {
                                if (day === null) {
                                  return <div key={`empty-${idx}`} />;
                                }

                                const isPast = isPastDay(day);
                                const formattedMonth = String(currentMonth + 1).padStart(2, '0');
                                const formattedDay = String(day).padStart(2, '0');
                                const dateString = `${currentYear}-${formattedMonth}-${formattedDay}`;
                                const isSelected = selectedDate === dateString;

                                return (
                                  <button
                                    key={`day-${day}`}
                                    type="button"
                                    disabled={isPast}
                                    onClick={() => handleDateSelect(day)}
                                    className={`aspect-square rounded-lg flex items-center justify-center text-xs font-bold transition-all cursor-pointer ${
                                      isSelected
                                        ? 'bg-[#E79923] text-brand-blue font-extrabold shadow-md'
                                        : isPast
                                        ? 'text-white/20 cursor-not-allowed bg-transparent'
                                        : 'bg-white/10 text-white border border-white/5 hover:bg-white/25 hover:text-white'
                                    }`}
                                  >
                                    {day}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>

                        {/* Time Slots */}
                        <div>
                          <span className="block text-xs font-extrabold uppercase tracking-wider text-brand-blue mb-2">
                            Selecciona la hora (Zona Horaria Local)
                          </span>
                          <div className="grid grid-cols-2 gap-2 max-h-[190px] overflow-y-auto border border-brand-blue/20 rounded-xl p-3 bg-brand-blue shadow-md">
                            {timeSlots.map(time => {
                              const isSelected = selectedTime === time;
                              return (
                                <button
                                  key={time}
                                  type="button"
                                  onClick={() => setSelectedTime(time)}
                                  className={`py-2 px-3 rounded-lg text-xs font-bold text-center transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#E79923] text-brand-blue font-extrabold shadow-md'
                                      : 'bg-white/10 text-white border border-white/5 hover:bg-white/25 hover:text-white'
                                  }`}
                                >
                                  {time}
                                </button>
                              );
                            })}
                          </div>
                          
                          <div className="mt-4 p-3 bg-[#FAF5EB] rounded-xl border border-[#E79923]/20 flex items-start gap-2.5">
                            <Calendar className="w-4 h-4 text-[#E79923] mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-[11px] font-bold text-brand-blue uppercase tracking-wider leading-tight">Sesión Agendada para:</p>
                              <p className="text-xs text-brand-blue font-semibold mt-0.5">
                                {getDayName(selectedDate)} a las <span className="font-bold text-[#E79923]">{selectedTime}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Next button */}
                      <div className="flex justify-end pt-2 border-t border-brand-blue/10">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-6 py-2.5 bg-brand-blue text-white rounded-xl text-sm font-bold shadow-md hover:bg-brand-blue/90 hover:translate-y-[-1px] active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          Siguiente paso
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: USER DETAILS FORM */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brand-blue mb-1.5">
                            Nombre Completo <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue/50">
                              <User className="w-4 h-4" />
                            </span>
                            <input
                              type="text"
                              required
                              value={fullName}
                              onChange={e => setFullName(e.target.value)}
                              placeholder="Ej: María González"
                              className="w-full pl-9 pr-3 py-2 text-sm border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-brand-bg/5 text-brand-blue font-medium focus:ring-1 focus:ring-[#E79923]"
                            />
                          </div>
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-brand-blue mb-1.5">
                            Correo Electrónico <span className="text-red-500">*</span>
                          </label>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue/50">
                              <Mail className="w-4 h-4" />
                            </span>
                            <input
                              type="email"
                              required
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              placeholder="maria@ejemplo.com"
                              className="w-full pl-9 pr-3 py-2 text-sm border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-brand-bg/5 text-brand-blue font-medium focus:ring-1 focus:ring-[#E79923]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-blue mb-1.5">
                          Teléfono de Contacto (con WhatsApp) <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-blue/50">
                            <Phone className="w-4 h-4" />
                          </span>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            placeholder="+1 (555) 000-0000"
                            className="w-full pl-9 pr-3 py-2 text-sm border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-brand-bg/5 text-brand-blue font-medium focus:ring-1 focus:ring-[#E79923]"
                          />
                        </div>
                        <p className="text-[11px] text-brand-blue/70 mt-1 font-medium">
                          Te enviaremos el enlace de videollamada y recordatorios directamente aquí.
                        </p>
                      </div>

                      {/* Notes */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-blue mb-1.5">
                          Cuéntanos un poco sobre tu caso (Opcional)
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-brand-blue/50">
                            <FileText className="w-4 h-4" />
                          </span>
                          <textarea
                            value={notes}
                            onChange={e => setNotes(e.target.value)}
                            rows={3}
                            placeholder="Ej: Quiero aplicar a una reunificación familiar para mis padres..."
                            className="w-full pl-9 pr-3 py-2 text-sm border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-brand-bg/5 text-brand-blue font-medium resize-none focus:ring-1 focus:ring-[#E79923]"
                          />
                        </div>
                      </div>

                      {/* Summary recap before submitting */}
                      <div className="bg-[#FAF5EB] border border-[#E79923]/20 rounded-xl p-3 space-y-1.5">
                        <p className="text-xs font-bold text-brand-blue uppercase tracking-wider">Resumen de tu Cita:</p>
                        <div className="grid grid-cols-2 gap-2 text-xs text-brand-blue/90 font-medium">
                          <p><span className="font-semibold text-brand-blue/60">Servicio:</span> {selectedService.title}</p>
                          <p><span className="font-semibold text-brand-blue/60">Costo:</span> {selectedService.price}</p>
                          <p className="col-span-2"><span className="font-semibold text-brand-blue/60">Fecha:</span> {getDayName(selectedDate)} a las <span className="font-bold text-[#E79923]">{selectedTime}</span></p>
                        </div>
                      </div>

                      {/* CTA Step 2 Button */}
                      <div className="flex justify-between items-center pt-2 border-t border-brand-blue/10">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-4 py-2 border border-brand-blue/15 text-brand-blue font-semibold rounded-xl text-sm hover:bg-brand-blue/5 cursor-pointer"
                        >
                          Atrás
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (!fullName || !email || !phone) {
                              alert('Por favor, completa los campos requeridos (Nombre, Correo y Teléfono)');
                              return;
                            }
                            setStep(3);
                          }}
                          className="px-6 py-2.5 bg-brand-blue text-white rounded-xl text-sm font-extrabold shadow-md hover:bg-brand-blue/90 hover:translate-y-[-1px] active:translate-y-0 transition-all flex items-center gap-2 cursor-pointer"
                        >
                          Proceder al Pago
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: PAYMENT SECTION */}
                  {step === 3 && (
                    <div className="space-y-6">
                      {/* Booking summary box */}
                      <div className="bg-[#FAF5EB] border border-[#E79923]/30 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#E79923]">Resumen del Pedido</span>
                          <h4 className="font-bold text-base text-brand-blue">{selectedService.title}</h4>
                          <p className="text-xs text-brand-blue/70 font-medium">
                            {getDayName(selectedDate)} a las {selectedTime}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-brand-blue/50 block font-medium">Total a Pagar</span>
                          <span className="text-2xl font-extrabold text-[#E79923]">{selectedService.price}</span>
                        </div>
                      </div>

                      {/* Payment Method Tabs */}
                      <div className="space-y-3">
                        <label className="block text-xs font-extrabold uppercase tracking-wider text-brand-blue">
                          Selecciona tu Método de Pago
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('card')}
                            className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              paymentMethod === 'card'
                                ? 'border-[#E79923] bg-[#FAF5EB] text-brand-blue font-bold ring-2 ring-[#E79923]/20 shadow-sm'
                                : 'border-brand-blue/10 bg-brand-bg/5 text-brand-blue/70 hover:border-brand-blue/25 hover:bg-brand-bg/10'
                            }`}
                          >
                            <CreditCard className="w-5 h-5 text-brand-blue/80" />
                            <span className="text-xs font-bold">Tarjeta</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPaymentMethod('paypal')}
                            className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              paymentMethod === 'paypal'
                                ? 'border-[#E79923] bg-[#FAF5EB] text-brand-blue font-bold ring-2 ring-[#E79923]/20 shadow-sm'
                                : 'border-brand-blue/10 bg-brand-bg/5 text-brand-blue/70 hover:border-brand-blue/25 hover:bg-brand-bg/10'
                            }`}
                          >
                            <svg className="w-5 h-5 text-[#003087] fill-current" viewBox="0 0 24 24">
                              <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a1.282 1.282 0 0 1 1.265-1.077h7.243c3.042 0 5.114.653 6.158 1.94.975 1.202 1.05 2.915.22 5.062-.835 2.152-2.316 3.864-4.394 5.093-1.075.635-2.341.956-3.765.956H9.271a.641.641 0 0 0-.632.535l-1.563 5.108zm8.134-11.838c.616-1.587.414-2.617-.597-3.268-.583-.377-1.46-.566-2.6-.566H8.223L6.465 17.062h2.956l1.328-4.339.117-.384a1.281 1.281 0 0 1 1.258-1.071H13c1.11 0 1.93-.243 2.404-.736.326-.339.426-.813.273-1.423z"/>
                            </svg>
                            <span className="text-xs font-bold">PayPal</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPaymentMethod('mercadopago')}
                            className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              paymentMethod === 'mercadopago'
                                ? 'border-[#E79923] bg-[#FAF5EB] text-brand-blue font-bold ring-2 ring-[#E79923]/20 shadow-sm'
                                : 'border-brand-blue/10 bg-brand-bg/5 text-brand-blue/70 hover:border-brand-blue/25 hover:bg-brand-bg/10'
                            }`}
                          >
                            <svg className="w-5 h-5 text-[#009EE3]" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" fill="#009EE3" />
                              <path d="M11 16.5C11 15.12 12.12 14 13.5 14H18.5C19.88 14 21 15.12 21 16.5V17.5C21 18.88 19.88 20 18.5 20H13.5C12.12 20 11 18.88 11 17.5V16.5Z" fill="white" />
                              <path d="M13.5 15.5C13.5 14.67 14.17 14 15 14C15.83 14 16.5 14.67 16.5 15.5C16.5 16.33 15.83 17 15 17C14.17 17 13.5 16.33 13.5 15.5Z" fill="#009EE3" />
                              <path d="M15.5 18.5C15.5 17.67 16.17 17 17 17C17.83 17 18.5 17.67 18.5 18.5C18.5 19.33 17.83 20 17 20C16.17 20 15.5 19.33 15.5 18.5Z" fill="#009EE3" />
                            </svg>
                            <span className="text-xs font-bold text-[#009EE3]">Mercado Pago</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setPaymentMethod('binance')}
                            className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                              paymentMethod === 'binance'
                                ? 'border-[#E79923] bg-[#FAF5EB] text-brand-blue font-bold ring-2 ring-[#E79923]/20 shadow-sm'
                                : 'border-brand-blue/10 bg-brand-bg/5 text-brand-blue/70 hover:border-brand-blue/25 hover:bg-brand-bg/10'
                            }`}
                          >
                            <svg className="w-5 h-5 text-[#F3BA2F]" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M16.624 13.9202L12.014 18.5242L7.388 13.9002L5.03 16.2582L12.014 23.2422L18.982 16.2742L16.624 13.9202Z" />
                              <path d="M7.376 10.0798L11.986 5.4758L16.612 10.0998L18.97 7.7418L11.986 0.757812L5.018 7.7258L7.376 10.0798Z" />
                              <path d="M2.358 12.0001L4.716 9.64209L7.074 12.0001L4.716 14.3581L2.358 12.0001Z" />
                              <path d="M16.922 12.0001L19.28 9.64209L21.638 12.0001L19.28 14.3581L16.922 12.0001Z" />
                              <path d="M12.014 8.78418L15.228 12.0002L12.014 15.2162L8.8 12.0002L12.014 8.78418Z" />
                            </svg>
                            <span className="text-xs font-bold">Binance</span>
                          </button>
                        </div>
                      </div>

                      {/* Payment Forms */}
                      <div className="p-4 border border-brand-blue/10 bg-brand-bg/5 rounded-xl min-h-[180px] flex flex-col justify-center">
                        {paymentMethod === 'card' && (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-brand-blue flex items-center gap-1.5">
                                <CreditCard className="w-4 h-4 text-[#E79923]" /> Tarjeta de Crédito o Débito
                              </span>
                              <div className="flex gap-1">
                                <span className="text-[9px] font-semibold bg-white px-1.5 py-0.5 rounded border border-brand-blue/10 text-brand-blue">Visa</span>
                                <span className="text-[9px] font-semibold bg-white px-1.5 py-0.5 rounded border border-brand-blue/10 text-brand-blue">MC</span>
                                <span className="text-[9px] font-semibold bg-white px-1.5 py-0.5 rounded border border-brand-blue/10 text-brand-blue">Amex</span>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              <div className="md:col-span-2 text-left">
                                <label className="block text-[10px] font-bold text-brand-blue/70 uppercase mb-1">Nombre del Tarjetahabiente</label>
                                <input
                                  type="text"
                                  value={cardName}
                                  onChange={e => setCardName(e.target.value)}
                                  placeholder="Ej: María González"
                                  className="w-full px-3 py-1.5 text-xs border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-white text-brand-blue font-medium"
                                />
                              </div>

                              <div className="text-left">
                                <label className="block text-[10px] font-bold text-brand-blue/70 uppercase mb-1">Número de Tarjeta</label>
                                <input
                                  type="text"
                                  maxLength={19}
                                  value={cardNumber}
                                  onChange={e => {
                                    const value = e.target.value.replace(/\D/g, '');
                                    const match = value.match(/(\d{1,4})/g);
                                    setCardNumber(match ? match.join(' ') : value);
                                  }}
                                  placeholder="0000 0000 0000 0000"
                                  className="w-full px-3 py-1.5 text-xs border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-white text-brand-blue font-mono font-bold"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-2 text-left">
                                <div>
                                  <label className="block text-[10px] font-bold text-brand-blue/70 uppercase mb-1">Vencimiento</label>
                                  <input
                                    type="text"
                                    maxLength={5}
                                    value={cardExpiry}
                                    onChange={e => {
                                      const value = e.target.value.replace(/\D/g, '');
                                      if (value.length > 2) {
                                        setCardExpiry(`${value.slice(0, 2)}/${value.slice(2, 4)}`);
                                      } else {
                                        setCardExpiry(value);
                                      }
                                    }}
                                    placeholder="MM/AA"
                                    className="w-full px-3 py-1.5 text-xs border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-white text-brand-blue font-semibold text-center"
                                  />
                                </div>
                                <div>
                                  <label className="block text-[10px] font-bold text-brand-blue/70 uppercase mb-1">CVV</label>
                                  <input
                                    type="password"
                                    maxLength={4}
                                    value={cardCvv}
                                    onChange={e => setCardCvv(e.target.value.replace(/\D/g, ''))}
                                    placeholder="•••"
                                    className="w-full px-3 py-1.5 text-xs border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-white text-brand-blue font-bold text-center"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {paymentMethod === 'paypal' && (
                          <div className="text-center py-4 space-y-3">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-600 rounded-full border border-blue-100 mx-auto">
                              <ShieldCheck className="w-6 h-6 text-[#0070BA]" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-brand-blue">Paga de forma segura con PayPal</p>
                              <p className="text-[11px] text-brand-blue/60 max-w-sm mx-auto mt-0.5 font-medium">
                                Serás redirigido brevemente para autorizar el pago de manera segura e inmediata.
                              </p>
                            </div>
                            <div className="bg-[#FFC439] hover:bg-[#F2B522] text-[#111] font-bold py-2 px-6 rounded-xl text-xs inline-flex items-center gap-2 cursor-pointer transition-all mx-auto">
                              <span>Pagar con</span>
                              <span className="font-extrabold text-blue-900 italic text-sm">PayPal</span>
                            </div>
                          </div>
                        )}

                        {paymentMethod === 'mercadopago' && (
                          <div className="space-y-4 text-left">
                            <div className="border-l-4 border-[#009EE3] bg-sky-50/50 p-3 rounded-r-xl">
                              <p className="text-xs font-bold text-[#009EE3]">Instrucciones para Transferencia Mercado Pago:</p>
                              <div className="mt-2 space-y-1.5 text-xs text-brand-blue/90">
                                <p>1. Envía el monto de <strong className="text-brand-blue font-bold">{selectedService.price}</strong> a:</p>
                                <p className="font-semibold pl-3">• Alias: <span className="font-bold text-[#009EE3] select-all">Daniela.ale.rey</span></p>
                                <p className="font-semibold pl-3">• CVU: <span className="font-bold text-[#009EE3] select-all">0000003100019498046373</span></p>
                                <p className="font-semibold pl-3">• Titular: <span className="font-bold">Daniela Alejandra Rey</span></p>
                                <p>2. Al finalizar la transacción, copia el número de operación o referencia de la transferencia e ingrésalo abajo para confirmar.</p>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-brand-blue/70 uppercase mb-1">
                                Número de Operación o Referencia de Mercado Pago <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                value={mercadoPagoReference}
                                onChange={e => setMercadoPagoReference(e.target.value)}
                                placeholder="Ej: MP-9384728 o Ref. de pago"
                                className="w-full px-3 py-2 text-xs border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-white text-brand-blue font-semibold"
                              />
                            </div>
                          </div>
                        )}

                        {paymentMethod === 'binance' && (
                          <div className="space-y-4 text-left">
                            <div className="border-l-4 border-[#F3BA2F] bg-amber-50/50 p-3 rounded-r-xl">
                              <p className="text-xs font-bold text-[#D29B00]">Instrucciones para Pago con Binance Pay:</p>
                              <div className="mt-2 space-y-1.5 text-xs text-brand-blue/90">
                                <p>1. Envía el monto exacto de <strong className="text-brand-blue font-bold">{selectedService.price} USDT</strong> (Binance Pay) a:</p>
                                <p className="font-semibold pl-3">• Binance Pay ID: <span className="font-bold text-[#D29B00] select-all">512669045</span></p>
                                <p className="font-semibold pl-3">• Email de Binance: <span className="font-bold text-[#D29B00] select-all">escueladeballetghv@gmail.com</span></p>
                                <p>2. Al finalizar tu transferencia, ingresa el ID de transacción (TxID) o tu correo registrado de Binance abajo para validar.</p>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[10px] font-bold text-brand-blue/70 uppercase mb-1">
                                TxID o Email de Binance Pay <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                value={binanceReference}
                                onChange={e => setBinanceReference(e.target.value)}
                                placeholder="Ej: 298473829 o mi_correo@binance.com"
                                className="w-full px-3 py-2 text-xs border border-brand-blue/15 rounded-xl focus:outline-none focus:border-[#E79923] bg-white text-brand-blue font-semibold"
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Security notice */}
                      <div className="flex items-center justify-center gap-1.5 text-[10px] text-brand-blue/60 font-semibold">
                        <Lock className="w-3.5 h-3.5 text-green-600" />
                        <span>Transacción encriptada SSL de 256 bits · Conexión 100% segura</span>
                      </div>

                      {/* Navigation buttons */}
                      <div className="flex justify-between items-center pt-2 border-t border-brand-blue/10">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-4 py-2 border border-[#E79923]/20 text-[#E79923] font-bold rounded-xl text-sm hover:bg-[#FAF5EB] cursor-pointer"
                        >
                          Atrás
                        </button>
                        <button
                          type="submit"
                          disabled={isProcessingPayment}
                          className="px-6 py-2.5 bg-brand-blue text-white rounded-xl text-sm font-extrabold shadow-md hover:bg-brand-blue/90 hover:translate-y-[-1px] active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isProcessingPayment ? (
                            <>
                              <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                              Procesando Pago Seguro...
                            </>
                          ) : paymentMethod === 'card' ? (
                            'Pagar y Confirmar Cita'
                          ) : paymentMethod === 'paypal' ? (
                            'Pagar con PayPal y Confirmar Cita'
                          ) : paymentMethod === 'mercadopago' ? (
                            'Confirmar Cita con Mercado Pago'
                          ) : (
                            'Confirmar Cita con Binance'
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              ) : (
                /* SUCCESS SCREEN */
                <div className="text-center py-6 space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 border border-green-200">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading text-2xl font-bold text-brand-blue">
                      ¡Tu Asesoría ha sido Agendada!
                    </h3>
                    <p className="text-sm text-brand-text/90 max-w-md mx-auto">
                      Hemos enviado la confirmación y el enlace de la reunión virtual a tu correo <strong className="text-brand-accent">{email}</strong> y por WhatsApp.
                    </p>
                  </div>

                  {/* Interactive Booking Code Card */}
                  <div className="bg-brand-bg border border-brand-blue/10 rounded-2xl p-5 max-w-md mx-auto space-y-4 shadow-md text-left">
                    <div className="flex justify-between items-center border-b border-brand-blue/10 pb-3">
                      <div>
                        <p className="text-[10px] uppercase font-bold text-brand-text/50 tracking-widest">Código de Cita</p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-mono font-bold text-brand-accent text-sm">{bookingCode}</span>
                          <button
                            onClick={handleCopyCode}
                            className="p-1 hover:bg-brand-blue/5 rounded transition-all text-brand-text/60 hover:text-brand-accent cursor-pointer"
                            title="Copiar código"
                          >
                            {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-100 border border-green-200 text-green-700 rounded-full text-[10px] font-bold">
                        Confirmada
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-brand-text/90">
                      <p><strong className="text-brand-accent">Especialista:</strong> Abog. Daniela Harrington</p>
                      <p><strong className="text-brand-accent">Servicio:</strong> {selectedService.title}</p>
                      <p><strong className="text-brand-accent">Fecha:</strong> {getDayName(selectedDate)}</p>
                      <p><strong className="text-brand-accent">Hora:</strong> {selectedTime}</p>
                      <p><strong className="text-brand-accent">Plataforma:</strong> Videollamada de Google Meet (Enlace en tu correo)</p>
                    </div>

                    <div className="pt-2 border-t border-brand-blue/10 text-[11px] text-brand-text/50 leading-relaxed">
                      * Si necesitas cambiar la fecha de tu cita, por favor contáctanos con al menos 24 horas de anticipación.
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto pt-2 print:hidden">
                    <a
                      href={`https://wa.me/542235173127?text=Hola%20Daniela%2C%20acabo%20de%20agendar%20mi%20asesor%C3%ADa%20migratoria%20con%20c%C3%B3digo%20${bookingCode}%20para%20el%20${selectedDate}%20a%20las%20${selectedTime}.%20Mi%20nombre%20es%20${encodeURIComponent(fullName)}.%20%C2%A1Muchas%20gracias%21`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3 1.488 5.352 1.489 5.568 0 10.099-4.52 10.1-10.082.001-2.695-1.047-5.227-2.951-7.134C17.244 1.519 14.717.472 12.015.472 6.445.472 1.917 5 1.914 10.563c-.001 1.956.505 3.868 1.468 5.516L2.318 21.5l5.485-1.439z"/>
                      </svg>
                      Confirmar en WhatsApp
                    </a>

                    <button
                      onClick={handlePrint}
                      className="w-full sm:w-auto px-5 py-2.5 bg-brand-blue/5 hover:bg-brand-blue/10 text-brand-text rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer border border-brand-blue/15"
                    >
                      <Printer className="w-4 h-4" />
                      Imprimir Ticket
                    </button>
                  </div>

                  <div className="pt-2 print:hidden">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                        setFullName('');
                        setEmail('');
                        setPhone('');
                        setNotes('');
                        setCardNumber('');
                        setCardExpiry('');
                        setCardCvv('');
                        setCardName('');
                        setMercadoPagoReference('');
                        setBinanceReference('');
                        onClose();
                      }}
                      className="text-xs font-bold text-brand-accent hover:text-brand-blue underline cursor-pointer"
                    >
                      Cerrar ventana
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
