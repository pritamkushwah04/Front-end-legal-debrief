import axios from "axios";

const client = axios.create({
  // baseURL :"https://safe-beautiful-chevre.glitch.me/",
  baseURL: "https://backend-legal-debrief.onrender.com/api",
  
});

export default client;
