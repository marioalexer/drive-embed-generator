# drive-embed-generator

Herramienta web ligera para convertir enlaces públicos de Google Drive en:

- Enlaces directos `/preview`
- Código HTML embebible (iframe responsivo)
- Vista previa en tiempo real

Pensada para usuarios técnicos y no técnicos que necesitan obtener rápidamente
una URL o un embed funcional sin depender de servicios externos.

---

## ✨ Características

- Convierte enlaces `/view` de Google Drive a `/preview`
- Genera código iframe responsivo (16:9)
- Vista previa directa del contenido
- Botones de copiado independientes
- Sin dependencias
- Sin backend
- Funciona en hosting compartido y cPanel

---

## 📁 Estructura del proyecto

gdrive-embed-generator/
├─ index.html
└─ assets/
├─ style.css
├─ app.js
├─ logo.png
└─ favicon.png

---

## 🚀 Uso

1. Abre `index.html` en tu navegador o accede a la URL donde esté publicado
2. Pega un enlace público de Google Drive, por ejemplo:

https://drive.google.com/file/d/FILE_ID/view

3. Pulsa **Generar**

Obtendrás:

- Enlace directo:

https://drive.google.com/file/d/FILE_ID/preview

- Código HTML embebible listo para copiar
- Vista previa funcional del contenido

---

## 🧠 Notas técnicas importantes

### Sobre la vista previa

La vista previa utiliza directamente la URL `/preview` de Google Drive en un
iframe real.  
No se usa `srcdoc` ni sandbox estricto porque **Google Drive no es compatible**
con ese aislamiento.

Es normal que el navegador muestre advertencias CSP en la consola.
Estas provienen de Google Drive y **no afectan el funcionamiento visible**.

---

### Sobre seguridad

- No se acepta HTML arbitrario del usuario
- El iframe solo apunta a `drive.google.com`
- No se ejecuta código proporcionado por el usuario
- No se almacenan datos

El riesgo es equivalente al de usar un iframe estándar de Google Drive.

---

## 🧩 Compatibilidad

- Chrome
- Firefox
- Edge
- Safari moderno

Funciona tanto en HTTP como HTTPS.

---

## 📦 Instalación

No requiere instalación.

Solo copia los archivos en un directorio público:

public_html/gdrive-embed-generator/

o similar.

---

## 📄 Licencia

Uso libre.  
Sin garantías.  
Sin dependencias externas.

---

## ℹ️ Motivación

Esta herramienta no intenta “burlar” a Google Drive ni reemplazar servicios
como iframely.  
Solo automatiza un formato que Google ya expone, de forma clara y reutilizable.

Menos magia. Más control.


