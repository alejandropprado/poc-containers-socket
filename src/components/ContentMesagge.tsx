import { FC, useEffect } from "react";
import { useSocket } from "../hooks/socket.hook";

import { SOCKET_CHANNEL, SOCKET_URL } from "config";
import styles from "./ContentMessage.module.css";

export const ContentMessage: FC = () => {
  const { isConnected, messages, closeConnection } = useSocket(
    SOCKET_URL,
    SOCKET_CHANNEL
  );

  useEffect(() => {
    return () => {
      closeConnection();
    };
  }, [closeConnection]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div
          className={
            isConnected ? styles.statusConnected : styles.statusDisconnected
          }
        />{" "}
        <span>
          {isConnected ? "Conectado" : "Desconectado"} al canal:{" "}
          <b>{SOCKET_CHANNEL}</b>
        </span>
      </div>
      <div className={styles.content}>
        {messages.map((msg, index) => (
          <div key={index} className={styles.listItem}>
            <b>
              {msg.received_at.getHours()}:{msg.received_at.getMinutes()}:
              {msg.received_at.getSeconds()}:
            </b>{" "}
            {msg.data}
          </div>
        ))}
      </div>
    </div>
  );
};
