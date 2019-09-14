import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization:
            "Client-ID 4cfcbad271f279c6e6c0fcc2469d24a8f57494e2b169fe26e11dd9250b084ff1"
    }
});
