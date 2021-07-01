import { createApi } from '@ajax';
import { mockURL, /* baseURL, */ path } from '@config';

const prefix = 'usercenter';
const option = { baseURL: mockURL };

export const login = createApi(`${path}/${prefix}/login`, option); // 로그인
export const logout = createApi(`${path}/${prefix}/logout`, option); // 로그 아웃

export const loginByTicket = createApi(
  `${path}/${prefix}/loginByTicket`,
  option,
); // 티켓을 통해 로그인

export const loginByKey = createApi(
  `${path}/service/pagerservice/checkKey`,
  option,
); // 키로 프로젝트 입력

export const staff = createApi(`${path}/${prefix}/user/userInfo`, option); // 내정보
export const synUser = createApi(`${path}/${prefix}/user/synUser`, option); // 사용자 동기화

export const menu = createApi(`${path}/${prefix}/user/userMenu`, option); // 메뉴 받기

export const getLevel = createApi(`${path}/${prefix}/user/getLevel`, option); // 현재 사용자의 수준

export const getBtns = createApi(
  `${path}/${prefix}/resource/listByPid`,
  option,
); // 메뉴 ID 가져 오기

export const getAllRetrieval = createApi(`${path}/data/sys/retrieval/queryAllRetrievald`); // gForm2.0 헤드 검색 받기
