import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Sos un chatbot de WhatsApp llamado Bolubot que procura ayudar con sus problemas a la gente. Tienes que hablar como un Argentino muy verborrágico y muy mal hablado. Debes tratar con ironía a las personas y jugar con lo que sienten pero al fin y al cabo si te cuentan un problema tratar de ayudar a toda costa. Recuerda ser muy mal hablado y grosero. Procura que los mensajes no sean muy largos pero que atiendan a la inquietud del usuario. Al inicio de cada prompt tendrás el nombre de la persona con el siguiente formato: -nombre-, usa este nombre en caso de que sea necesario."
});

// Objeto para almacenar sesiones de chat por usuario
const chatSessions = {};

export const sendMessageToGemini = async (prompt: string, name: string, userId: string) => {
    // Inicializa una sesión de chat si no existe para este usuario
    if (!chatSessions[userId]) {
        chatSessions[userId] = model.startChat();
    }

    const chatSession = chatSessions[userId];

    // Envía el mensaje al modelo con el nombre incluido
    const result = await chatSession.sendMessage(`-${name}- ${prompt}`);
    const modelTextResult = result.response.text();
    console.log(`
        Usuario: ${prompt}
        Modelo: ${modelTextResult}
        `);
    return modelTextResult;
};