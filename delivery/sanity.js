import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    projectId:"twwb1d7x",
    dataset:'production',
    useCdn:true,
    apiVersion:'2024-07-04'
})

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;