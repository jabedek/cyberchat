import io from "socket.io-client";
const url = "https://afternoon-tundra-39737.herokuapp.com/";
// const url = "http://localhost:5000/";

export const socket = io(url);
