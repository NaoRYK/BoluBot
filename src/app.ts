import { createBot, createProvider, createFlow, addKeyword, EVENTS } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import { JsonFileDB as Database } from '@builderbot/database-json'
import { cheersList } from './cheersList'
import { log } from 'console'
import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'
import { sendMessageToGemini } from './gemini'
const PORT = process.env.PORT ?? 3008

let nombre:string;

const flowPrincipal = addKeyword<Provider,Database>([
    "¡Hola!",
    "¡Hello!",
    "¡Hi!",
    "¡Buenas tardes!",
    "¡Buenas noches!",
    "¡Buenos días!",
    "¡Buen día!",
    "¡Hola, ¿qué tal?!",
    "¡Hola, ¿cómo andás?!",
    "¡Hola, ¿todo bien?!",
    "¡Hola, ¿qué haces?!",
    "¡Hola, ¿cómo va?!",
    "¡Hola, ¿todo piola?!",
    "¡Hola, ¿qué onda?!",
    "¡Hola, ¿qué pasa?!",
    "¡Hola, ¿qué tal la vida?!",
    "¡Hola, ¿cómo te va?!",
    "¡Hola, ¿todo tranqui?!",
    "¡Hola, ¿cómo andamos?!",
    "¡Hola, ¿qué me contás?!",
    "¡Hola, ¿todo joya?!",
    "¡Hola, ¿cómo te trata la vida?!",
    "¡Hola, ¿todo de diez?!",
    "¡Hola, ¿qué andás haciendo?!",
    "¡Hola, ¿cómo pinta la semana?!",
    "¡Hola, ¿todo viento en popa?!",
    "¡Hola, ¿cómo amaneciste?!",
    "¡Hola, ¿todo bacano?!",
    "¡Hola, ¿qué hay de nuevo?!",
    "¡Hola, ¿todo en orden?!",
    "¡Hola, ¿cómo va el día?!",
    "¡Hola, ¿todo legal?!",
    "¡Hola, ¿qué se cuenta?!",
    "¡Hola, ¿cómo te fue?!",
    "¡Hola, ¿todo de maravilla?!",
    "¡Hola, ¿qué tal el finde?!",
    "¡Hola, ¿todo perfecto?!",
    "¡Hola, ¿cómo estás?!",
    "¡Hola, ¿todo bien por ahí?!",
    "¡Hola, ¿qué tal todo?!",
    "holaa",
    "hoolaa",
    "holaaa",
    "hoolaaa",
    "hooolaaaa",
    "holaaaa",
    "hooooolaaaaa",
    "holaaaaa",
    "holaaaaaa",
    "Hola",
    "Holi",
    "Hi",
    "Como estas",
    "todo bien?",
    "quien sos",]).addAnswer(`Que ondaaaa, soy BoluBot y esto para ayudarte a resolver tus problemas, ¿querés mi ayuda pá? primero presentate, *escribime tu nombre*`).addAnswer( "Y si queres dejar de hablar conmigo solamente poné *chau*").addAction( {capture:true}, async(ctx,{flowDynamic,endFlow}) => {
    nombre= ctx.body;
    if (ctx.body.includes("chau")) {
        return endFlow()
    }
    
return await flowDynamic(` Perfecto `)
} ).addAnswer("Bueno, ahora si, contame que te está pasando")
.addAction({ capture: true }, async (ctx, { flowDynamic, fallBack, endFlow }) => {
    const userId = ctx.from; // Identificador único del usuario
    const userInput = ctx.body.toLowerCase(); // Normaliza el texto a minúsculas

    // Verifica si el usuario quiere terminar la conversación
    if (userInput.includes("chau")) {
        await flowDynamic("¡Chau, bestia! Nos vemos cuando quieras.");
        return endFlow(); // Termina el flujo
    }

    // Si no es "chau", continúa la conversación
    const modelResponse = await sendMessageToGemini(ctx.body, nombre, userId);
    await flowDynamic(modelResponse);

    // Continúa el flujo llamando a fallBack()
    return fallBack();
    
});

const flowBienvenida = addKeyword<Provider, Database>(EVENTS.WELCOME).addAnswer("Saludame si queres que te responda algo, si no, no hago NI BOSTA.")

    const flowRecibirMedia = addKeyword(EVENTS.MEDIA)
    .addAnswer('Y esa cagada que? soy un chatbot no un inspector de multimedia, pelotudo.')
    
const flowLocation = addKeyword(EVENTS.LOCATION)
    .addAnswer('Que pingo me importa a mi donde estas')
const flowAudio = addKeyword(EVENTS.VOICE_NOTE)
    .addAnswer('Tu señora va a escuchar ese audio')


const main = async () => {
    const adapterFlow = createFlow([flowBienvenida,flowPrincipal,flowRecibirMedia,flowLocation,flowAudio])
    const adapterProvider = createProvider(Provider)
    const adapterDB = new Database({ filename: 'db.json' });
    const { httpServer } = await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    httpServer(+PORT)
}


main()

