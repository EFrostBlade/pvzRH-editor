// src/main/websocketServer.ts
import {Server as WebSocketServer, WebSocket} from 'ws';
import {createServer} from 'http';

export function initializeWebSocketServer(port: number): void {
  const server = createServer();
  const wss = new WebSocketServer({server});

  wss.on('connection', (ws: WebSocket) => {
    console.log('客户端已连接');

    ws.on('message', (message: string) => {
      console.log(`收到消息: ${message}`);
      // 在此处理接收到的消息
    });

    ws.send('服务器已连接');
  });

  server.listen(port, () => {
    console.log(`WebSocket 服务器正在监听端口 ${port}`);
  });
}
