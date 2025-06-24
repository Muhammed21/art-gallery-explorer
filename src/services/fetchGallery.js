import { apiGet } from "../lib/http/apiGet";

const API_KEY = "73a0QpFM";
const BASE_URL = "https://www.rijksmuseum.nl/api/en/collection";

export async function fetchGallery() {
  const url = `${BASE_URL}?key=${API_KEY}&q=Rembrandt&imgonly=True&ps=20`;
  return await apiGet(url);
}
