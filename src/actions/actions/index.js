import * as Types from '../types/index';


export function demoActionTest(text){
  return {
    type: Types.TEXT_COMP_DEMO,
    text
  }
}