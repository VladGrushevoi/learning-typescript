import {Configuration, OpenAIApi} from 'openai'

const config = new Configuration({
    apiKey: import.meta.env.VITE_apiKey,
    organization: import.meta.env.VITE_organization
})

console.log(config)

delete config.baseOptions.headers['User-Agent']

export const openai = new OpenAIApi(config)