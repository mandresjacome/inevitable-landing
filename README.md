# 🎯 Landing Page Inevitable - Día del Padre 2026

Landing page para **Inevitable**, papelería creativa de Piedecuesta, Colombia. Vende el Álbum del Día del Padre (B2C) y la Plantilla Digital para emprendedores (B2B).

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4
- **Animaciones:** Framer Motion
- **Deploy:** Vercel

---

## 📋 Checklist Pre-Deploy

### 1. ⚠️ Reemplazar Placeholders en `lib/constants.ts`

Abre el archivo `lib/constants.ts` y reemplaza **todos** los placeholders:

```typescript
export const CONFIG = {
  whatsappNumber: '573XXXXXXXXXX',        // ✅ Tu número de WhatsApp
  paymentLink: 'https://tu-link-de-pago', // ✅ Link de Hotmart/MercadoPago/PayU
  precioAlbum: '$55.000 COP',             // ✅ Precio real del álbum físico
  precioPlantilla: '$35.000 COP',         // ✅ Precio real de la plantilla
  metaPixelId: '1234567890123456',        // ✅ ID del Pixel de Meta/Facebook
  ga4MeasurementId: 'G-XXXXXXXXXX',       // ✅ Measurement ID de Google Analytics 4
};
```

### 2. 📸 Agregar Imágenes Reales

Crea la carpeta `public/images/` y añade las siguientes imágenes en formato **WebP**:

```
public/
└── images/
    ├── album-fisico.webp       # Mockup del álbum físico
    ├── plantilla-digital.webp  # Screenshot de Canva con la plantilla
    ├── anny.webp               # Foto de Anny
    ├── mario.webp              # Foto de Mario
    ├── taller-1.webp           # Foto del taller
    ├── taller-2.webp           # Foto del taller
    └── taller-3.webp           # Foto del taller
```

**Luego:**
- Descomenta las etiquetas `<Image>` en:
  - `components/PhysicalAlbum.tsx`
  - `components/DigitalTemplate.tsx`
  - `components/AboutUs.tsx`

### 3. 🖼️ Crear Open Graph Image

Crea una imagen de 1200x630px para que tu link se vea bien al compartirlo en WhatsApp/Instagram:

```
public/og-image.jpg
```

**Recomendaciones:**
- Usa Canva con template "Facebook Post" (1200x630)
- Incluye: Logo de Inevitable + título del álbum + foto del álbum
- Colores de marca: `#75c9be` y `#f39dbe`

### 4. 🌐 Configurar Variable de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_SITE_URL=https://inevitable-landing.vercel.app
```

Reemplaza con tu dominio final cuando hagas deploy.

---

## 🛠️ Desarrollo Local

### Instalar dependencias
```bash
npm install
```

### Ejecutar en desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build de producción
```bash
npm run build
npm start
```

---

## 🚢 Deploy a Vercel

### Opción 1: Deploy desde GitHub (Recomendado)

1. Crea un repositorio en GitHub
2. Sube el código:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Landing Inevitable"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/inevitable-landing.git
   git push -u origin main
   ```
3. Ve a [vercel.com](https://vercel.com) y conecta tu repositorio
4. Vercel detectará automáticamente Next.js y hará el deploy

### Opción 2: Deploy con CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Configurar Analytics en Vercel

Una vez deployado, añade las variables de entorno en Vercel Dashboard:
- `NEXT_PUBLIC_SITE_URL` → Tu dominio final

---

## 📊 Configurar Analytics

### Meta Pixel (Facebook/Instagram Ads)

1. Ve a [Meta Business Suite](https://business.facebook.com)
2. Events Manager → Crear Pixel
3. Copia el ID del Pixel
4. Pégalo en `lib/constants.ts` → `metaPixelId`

### Google Analytics 4

1. Ve a [Google Analytics](https://analytics.google.com)
2. Crear propiedad → Web
3. Copia el Measurement ID (formato: `G-XXXXXXXXXX`)
4. Pégalo en `lib/constants.ts` → `ga4MeasurementId`

---

## 🎨 Colores de Marca

Los colores ya están configurados en `app/globals.css`:

| Token | Hex | Uso |
|-------|-----|-----|
| `brand-teal` | `#75c9be` | Color principal |
| `brand-pink` | `#f39dbe` | Color secundario |

Puedes usar las clases de Tailwind:
- `text-brand-teal`
- `bg-brand-pink`
- etc.

---

## 📱 Estructura de Componentes

```
components/
├── Hero.tsx              # Sección 1: Hero con countdown y CTAs
├── PhysicalAlbum.tsx     # Sección 2: Álbum Físico (B2C)
├── DigitalTemplate.tsx   # Sección 3: Plantilla Digital (B2B)
├── AboutUs.tsx           # Sección 4: Historia de Inevitable
├── Footer.tsx            # Sección 5: Footer con links
├── CountdownTimer.tsx    # Timer al 21 de junio 2026
└── WhatsAppButton.tsx    # Botón flotante de WhatsApp
```

---

## 🐛 Troubleshooting

### Error: "Cannot find module '@/lib/constants'"
Verifica que el archivo `lib/constants.ts` existe y que `tsconfig.json` tiene:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

### El contador no se ve en el primer render
Es normal, evita "hydration mismatch". El contador aparece después del primer render del cliente.

### Los colores custom no se aplican
Verifica que `app/globals.css` tenga la sección `@theme inline` con las variables CSS personalizadas.

---

## 📞 Soporte

- **Instagram:** [@inevitable0508](https://instagram.com/inevitable0508)
- **WhatsApp:** Configura tu número en `lib/constants.ts`

---

## 📄 Licencia

© 2026 Inevitable. Todos los derechos reservados.
