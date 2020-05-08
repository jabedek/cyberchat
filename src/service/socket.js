import io from "socket.io-client";
const url = "https://afternoon-tundra-39737.herokuapp.com/";

export const socket = io(url);
