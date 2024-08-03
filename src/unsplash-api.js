import axios from "axios";

export default async function fetchImages(query, page = 1) {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    params: {
      query,
      page,
      orientation: "landscape",
    },
    headers: {
      Authorization: "Client-ID 8y18thz3UUrIKwXRgyV81_zA6kF75MMw8gfAIXVIckg",
    },
  });
  return response;
}
