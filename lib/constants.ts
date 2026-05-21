// lib/constants.ts
// ⚠️ IMPORTANTE: Reemplaza todos los placeholders con los valores reales antes del deploy

export const CONFIG = {
  // WhatsApp
  whatsappNumber: '573159288237',
  whatsappMessageAlbum: encodeURIComponent('Hola, quiero pedir el Álbum Físico del Día del Padre 🏆'),
  whatsappMessagePlantilla: encodeURIComponent('Hola, quiero comprar el Paquete de Diseños Digital ($6 USD)'),
  whatsappMessageSoporte: encodeURIComponent('Hola, tengo una duda sobre la plantilla de Canva'),
  
  // Precios
  precioAlbum: 'Por definir',
  precioPlantilla: '$6 USD',
  
  // Redes Sociales
  instagram: 'https://instagram.com/inevitable0508',
  instagramHandle: '@inevitable0508',
  
  // Fecha Objetivo (Día del Padre Colombia 2026)
  targetDate: new Date('2026-06-21T00:00:00-05:00'), // Tercer domingo de junio
  
  // Analytics
  metaPixelId: 'META_PIXEL_ID',             // ⚠️ Reemplazar con el Pixel ID de Meta/Facebook
  ga4MeasurementId: 'GA4_MEASUREMENT_ID',   // ⚠️ Reemplazar con el Measurement ID de Google Analytics 4
  googleAdsId: 'AW-18179840552',            // ✅ Google Ads configurado
  
  // Zona de Entregas (solo para álbum físico)
  zonasEntrega: [
    'Bucaramanga',
    'Piedecuesta',
    'Floridablanca',
    'Girón'
  ],
} as const;

// Helper para generar links de WhatsApp
export const getWhatsAppLink = (message?: string) => {
  const encodedMessage = message || CONFIG.whatsappMessageAlbum;
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
};

// Verificar si todos los placeholders fueron reemplazados
export const hasPlaceholders = () => {
  return (
    CONFIG.whatsappNumber.includes('NUMERO') ||
    CONFIG.metaPixelId.includes('META') ||
    CONFIG.ga4MeasurementId.includes('GA4')
  );
};
