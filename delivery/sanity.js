import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId:"twwb1d7x",
    dataset:'production',
    useCdn:true,
    apiVersion:'2024-07-04'
})

const builder = imageUrlBuilder(client); // creates a builder function (builder) ,that later is used by urlFOr to generate URLs for images stored in Sanity, using the provided Sanity client (client).
//and Sets up the configuration for generating image URLs.

export const urlFor = (source) => builder.image(source);
// urlFor: This function uses the configured builder to generate specific image URLs from Sanity's image sources. It takes into account any transformations or settings applied during the configuration setup.

export default client;