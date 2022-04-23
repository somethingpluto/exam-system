import { useMessage } from 'naive-ui';
import { MessageApiInjection } from 'naive-ui/es/message/src/MessageProvider';

let messageManager: MessageApiInjection

export function initMsgManager() {
  messageManager = useMessage()
}

export function successMsg(message: string) {
  return messageManager.success(message, {
    closable: true
  })
}

export function errorMsg(message: string) {
  return messageManager.error(message, {
    closable: true
  })
}

