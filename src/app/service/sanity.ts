import { createClient } from "@sanity/client";
import  imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types"


export const client = createClient({
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string | " ",
    dataset : process.env.NEXT_PUBLIC_SANITY_SECRET_TOKEN as string | " ",
    useCdn : false,
    apiVersion : '2024-04-06',
    token : process.env.NEXT_PUBLIC_SANITY_DATASET as string | " ",
})

const builder = imageUrlBuilder(client)

export function urlFor(source : SanityImageSource){
    return builder.image(source).width(800).url();
}

export const assetsURL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-03-25/assets/images/${process.env.NEXT_PUBLIC_SANITY_DATASET}`