import { json } from "@sveltejs/kit";

const url = 'https://api.kyuiki.com/api/attachment/1302864174799655063?has=1'

export async function GET() {
    const res = await fetch(url);
    const resjs = await res.json();

    return json(resjs)
}