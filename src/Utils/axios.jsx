import axios from "axios";

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
     headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmM4NzUyOWU1ODMzYTQwYmYzODZmYTQzYzMyMjdiMCIsIm5iZiI6MTcyMDcxMDA1Ny44OTU2MjgsInN1YiI6IjY2OGZlYjZjZjgzZmYyMjBiNWE3OWQ4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nl3WMv100z_aitfGduVCyjjoxj7QojKhQ_qXMZ7kuek'
      }
})

export default instance;