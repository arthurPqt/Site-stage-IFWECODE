import {z} from 'zod';
import {directus} from '@/lib/directus'
import {createItem} from "@directus/sdk";

const contactSchema = z.object({
    email: z.email(),
});

export async function POST(req){
    try{
        const body = await req.json();

        const validatedEmail = contactSchema.parse(body);

        const result = await directus.request(
            createItem('newsletter',{
                email: validatedEmail.email
            })
        );

        return Response.json({
            success: true,
            message: "Le message a bien été envoyé"
        });

    }catch(error){
        if (error instanceof z.ZodError) {
            return Response.json({
                error: "Données invalides",
                details: error.errors
            }, { status: 400 });
        }

        console.error('Erreur contact:', error);
        return Response.json({
            error: "Erreur lors de l'envoi du message"
        }, { status: 500 });
    }
}