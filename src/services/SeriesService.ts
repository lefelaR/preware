'use client'

import HttpServices from "./HttpServide";
const BASE_URL = process.env.NEXT_PUBLIC_URL_ENDPOINT ?? '';

const getTrendingSeries = async (language: string = 'en-US') => {
    try
    {
        debugger
        const data = await HttpServices.get(`trending/tv/week?language=${encodeURIComponent(language)}`);
        return data;
    } catch(er:any) {
        throw new Error(er.message);
    }
}


export default {
    getTrendingSeries
}