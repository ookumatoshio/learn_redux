import { SHOW_PROGRESS } from '../actions';

const progress = (state = { show: false }, action) => {
  console.log('progress', action.type)
  console.log(action.type, SHOW_PROGRESS);
  switch (action.type) {
    case SHOW_PROGRESS:
      console.log('hoge');
      return { show: action.flg };
    default:
      console.log('fuga');
      return state
  }
}

export default progress;