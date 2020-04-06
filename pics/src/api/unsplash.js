import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID da9a87beb0b6fee6a507eaaf9ae24ec33e9e55905a284082d4ddb064ba472f0f'
    }
});