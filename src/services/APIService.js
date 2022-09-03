import axios from "axios";

export default async function APIService(){
    try {
        const response = await axios.get("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
        return response.data
    } catch (error) {
        console.log(error.message)
        return []
    }
}