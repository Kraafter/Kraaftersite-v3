import { json } from "@sveltejs/kit";
import db from '$lib/database';

const url = 'https://api.imagekit.io/v1/files?path=art';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: import.meta.env.VITE_APIKEY // DO NOT PUSH PLAIN API KEY, USE SECRETS
  }
};
const CACHE_DURATION = 86400000; // 1 day in milliseconds

export async function GET() {
    const cachedData = await db.cachedArt.findFirst({
        orderBy: {createdAt: 'desc'}
    })

    const now = new Date();

    if (cachedData && (now.getTime() - new Date(cachedData.createdAt).getTime()) < CACHE_DURATION) {
        console.log("returning cached data")
        const resjs = await JSON.parse(cachedData.data)
        return json(resjs)
    }

    console.log("fetching data from api")
    const res = await fetch(url, options);
    const resjs = await res.json();
    
    await db.cachedArt.create({
        data: {
            data: JSON.stringify(resjs),
        }
    })

    return json(resjs);
}