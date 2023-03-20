import bootcamp from "./components/bootcamp"
import review from "./components/review"

const BASE_URL =

export async function getBootcamps() {
    const response = await fetch(`${BASE_URL}/bootcamp`);
    const data = await response.json();
    return data;
}

export async function getReviews() {
    const response = await fetch(`${BASE_URL}/reviews`);
    const data = await response.json();
    return data;
}