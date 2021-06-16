import { useState, useEffect, useCallback } from "react";
import socket from "socket.io-client";

type MessageType = {
  data: any;
  received_at: Date;
};

type UseSocketResponseType = {
  isConnected: boolean;
  messages: MessageType[];
  closeConnection: () => void;
};

type UseSocketType = (url: string, channel: string) => UseSocketResponseType;

export const useSocket: UseSocketType = (url: string, channel: string) => {
  const [messages, setMessage] = useState<MessageType[]>([]);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [socketRef, setSocketRef] =
    useState<SocketIOClient.Socket | null>(null);

  const onMessage = useCallback((msg) => {
    setMessage((prev) => [
      { data: JSON.stringify(msg), received_at: new Date() },
      ...prev,
    ]);
  }, []);

  const closeConnection = useCallback(() => {
    socketRef?.disconnect();
    socketRef?.on(channel, onMessage);
  }, [channel, onMessage, socketRef]);

  useEffect(() => {
    if (!url || !channel || socketRef) return;

    const client = socket(url);

    client.on("connect", () => {
      setIsConnected(true);
    });

    client.on("disconnect", () => {
      setIsConnected(false);
    });

    client.on("reconnect", () => {
      setIsConnected(true);
    });

    client.on(channel, onMessage);

    setSocketRef(client);
  }, [url, channel, isConnected, onMessage, socketRef]);

  return { isConnected, messages, closeConnection };
};
