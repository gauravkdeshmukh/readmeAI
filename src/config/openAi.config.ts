import { config } from 'dotenv'
config();
import OpenAIApi from 'openai';
import { ClientOptions } from 'openai';

// load environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY?.toString();

// Create configuration
const openAi = new OpenAIApi({
        apiKey: OPENAI_API_KEY
    });

export { openAi };