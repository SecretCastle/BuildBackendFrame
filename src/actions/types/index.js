export const TEXT_COMP_DEMO = 'TEXT_COMP_DEMO'
export const SEND_MSG_TO_YOU = 'SEND_MSG_TO_YOU'


export function demoActionTest(text){
  return {
    type: TEXT_COMP_DEMO,
    text
  }
}

export function sendMsgToYou(text){
  return {
    type : SEND_MSG_TO_YOU,
    text
  }
}