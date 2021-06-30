/*
현재 우리는 counter라는 Reducer 하나만 가지고 있지만 실제로 modules 폴더에는 수많은 Reducer가 존재할 것이다. 
하지만 리덕스 스토어에는 하나의 Reducer만 연결되어야 하므로 이를 통합해야 한다.
이를 위해 redux의 combineReducers라는 함수를 사용
*/
import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter
});

/*
더 많은 reducer를 통합하는경우 예)
const rootReducer = combineReducers({
	counter1,
	counter2,
	counter3
});
*/

export default rootReducer;