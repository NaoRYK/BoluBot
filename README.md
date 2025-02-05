# **BoluBot - Tu Chatbot Argentino Favorito** 🇦🇷🤖

¡Bienvenido a **BoluBot**, el chatbot más verborrágico, irónico y mal hablado de WhatsApp! Diseñado para ayudarte con tus problemas (o al menos intentarlo), BoluBot te acompañará con humor, sarcasmo y un toque de grosería mientras resuelve tus inquietudes.

Este proyecto utiliza la API de **Google Gemini** para generar respuestas dinámicas y personalizadas, manteniendo una conversación fluida y contextualizada. A continuación, encontrarás toda la información necesaria para configurar, ejecutar y disfrutar de este increíble bot.

Cualquier duda que tengas a la hora de modificar el codigo puedes revisar la documentación de  [**BuilderBot**](https://www.builderbot.app/en).

---

## **Características Principales**

- **Personalidad Única**: BoluBot tiene una personalidad argentina muy marcada: es irónico, mal hablado y utiliza un lenguaje coloquial que lo hace único.
- **Conversaciones Contextualizadas**: Gracias a la API de Google Gemini, el bot mantiene el historial de la conversación y genera respuestas coherentes basadas en el contexto.
- **Interacción Natural**: Puedes interactuar con BoluBot como si estuvieras hablando con un amigo (aunque un poco más grosero).
- **Fácil de Usar**: Solo necesitas instalar las dependencias de Node.js y ejecutar el comando `npm run dev` para ponerlo en marcha.
- **Persistencia de Sesiones**: Las sesiones de chat se almacenan en una base de datos JSON, asegurando que la conversación no se pierda incluso si el servidor se reinicia.

---

## **Requisitos del Sistema**

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (v16 o superior)
- **npm** (v8 o superior)
- Una clave de API válida de **Google Gemini** (configurada en un archivo `.env`)
- Un cliente de WhatsApp compatible con **Baileys Provider** (opcional, si deseas integrarlo directamente con WhatsApp).

---

## **Instalación**

Sigue estos pasos para configurar el proyecto:

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/bolubot.git
   cd bolubot
1. **Instala las dependencias**:
   ```bash
   npm install
1. **Configure archivo .env**:
Crea un archivo .env en la raíz del proyecto y añade tu clave de API de Google Gemini:
   ```bash
   API_KEY=TU_CLAVE_DE_API_AQUI
1. **Inicia el servidor :**:
   ```bash
     npm run dev
1. **Debes abrir la direccion de localhost que iniciaste, para escanear utilizando la aplicacion de Whatsapp el codigo QR generado**
## **Uso**

Una vez que el bot esté en funcionamiento, puedes interactuar con él a través de WhatsApp o cualquier otro cliente compatible. Aquí tienes algunos ejemplos de cómo funciona:

- **Inicio de la conversación**:
  - Usuario: "Hola"
  - Bot: "Que ondaaaa, soy BoluBot y esto para ayudarte a resolver tus problemas, ¿querés mi ayuda pá? primero presentate, *escribime tu nombre*"

- **Interacción típica**:
  - Usuario: "Estoy triste..."
  - Bot: "Che, ¿qué te pasa ahora? No me digas que otra vez te dejó tu novia... Ah, no tenés novia? Bueno, ahí tenés el problema, pobre diablo."

- **Terminar la conversación**:
  - Usuario: "Chau"
  - Bot: "¡Chau, bestia! Nos vemos cuando quieras."

## **¡Gracias por usar BoluBot!** 🎉

Espero que disfrutes interactuar con este bot tan peculiar. Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue en el repositorio🚀
