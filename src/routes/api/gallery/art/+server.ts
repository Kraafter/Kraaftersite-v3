import { json } from "@sveltejs/kit";
import { env } from "$env/dynamic/private"

const url = 'https://api.imagekit.io/v1/files?path=art';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: env.SECRET_IK_KEY // DO NOT PUSH PLAIN API KEY, USE SECRETS
  }
};

export async function GET() {

    console.log("fetching data from api")
    const res = await fetch(url, options);
    const resjs = await res.json();

    return json(resjs);
}