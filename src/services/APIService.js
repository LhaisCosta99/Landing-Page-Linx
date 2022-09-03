import axios from "axios";

export default async function APIService(page){
    try {
        const response = await axios.get(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
        return response.data
    } catch (error) {
        console.log(error.message)
        return []
    }
}