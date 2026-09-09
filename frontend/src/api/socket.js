import { io } from "socket.io-client";

const apiUrl =
  import.meta.env.VITE_API_URL || "http://localhost:8000";

const socket = io(`${apiUrl}/chat`, {
  transports: ["websocket"],
  autoConnect: true,
});

export default socket;
