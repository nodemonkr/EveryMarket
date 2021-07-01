import { createApi } from '@ajax';
import { mockURL, path } from '@configs/config';

const prefix = 'usercenter';
const option = { baseURL: mockURL };
// 모듈 관리

export const fetchModuleList = createApi(
  `${path}/${prefix}/resource/list`,
  option,
); // 모듈 목록 가져 오기
export const fetchModuleDelete = createApi(
  `${path}/${prefix}/resource/delete`,
  option,
); // 모듈 삭제
export const fetchModuleDetail = createApi(
  `${path}/${prefix}/resource/detail`,
  option,
); // 모듈 세부 정보 가져 오기
export const fetchChangeModuleStatus = createApi(
  `${path}/${prefix}/resource/updateStatus`,
  option,
); // status 정보 수정
export const fetchModuleUpdateDetail = createApi(
  `${path}/${prefix}/resource/update`,
  option,
); // 모듈 디테일 정보 수정
export const fetchModuleAdd = createApi(
  `${path}/${prefix}/resource/save`,
  option,
); // 새 모듈

export const fetchButtonList = createApi(
  `${path}/${prefix}/resource/button/list`,
  'fetchButtonList',
); // 버튼 권한 목록

// 역할 관리

export const fetchRoleList = createApi(
  `${path}/${prefix}/role/list`,
  'fetchRoleList',
); // 역할 목록

export const fetchRoleAdd = createApi(`${path}/${prefix}/role/save`, option); // 역할 저장

export const fetchRoleUpdate = createApi(
  `${path}/${prefix}/role/update`,
  option,
); // 역할 편집

export const fetchRoleDetail = createApi(
  `${path}/${prefix}/role/detail`,
  option,
); // 선택한 메뉴 및 버튼

export const fetchRoleDelete = createApi(
  `${path}/${prefix}/role/delete`,
  option,
); // 역할 삭제

export const fetchModuleListInRole = createApi(
  `${path}/${prefix}/role/resList`,
  'fetchModuleListInRole',
); // 선택한 모듈

export const fetchUpdateRoleRes = createApi(
  `${path}/${prefix}/role/updateRes`,
  option,
); // 선택한 모듈 업데이트

export const fetchRoleDeletePeople = createApi(
  `${path}/${prefix}/user/removeRole`,
  option,
);
export const fetchUpdateButton = createApi(
  `${path}/${prefix}/role/updateButton`,
  option,
);
export const fetchTreeList = createApi(
  `${path}/${prefix}/role/resTree`,
  'fetchTreeList',
);
// 사용자 관리

export const fetchUserDepttList = createApi(
  `${path}/${prefix}/dept/list`,
  'fetchUserDepttList',
); // 사용자 관리 왼쪽에 카테고리 목록 가져 오기

export const fetchUserList = createApi(
  `${path}/${prefix}/user/list`,
  'fetchUserList',
); // 사용자 목록 가져 오기

export const fetchUserDetail = createApi(
  `${path}/${prefix}/user/detail`,
  option,
); // 사용자 세부 정보 얻기

export const fetchUserDetailUpdate = createApi(
  `${path}/${prefix}/user/update`,
  option,
); // 사용자 세부 정보 수정

export const fetchUserAdd = createApi(`${path}/${prefix}/user/save`, option); // 신규 사용자

export const synUser = createApi(`${path}/${prefix}/user/synUser`, option); // 사용자 동기화

export const fetchUserSetRole = createApi(
  `${path}/${prefix}/user/updateRole`,
  option,
); // 사용자 역할 수정

export const fetchUserDelete = createApi(
  `${path}/${prefix}/user/delete`,
  option,
); // 사용자 삭제

export const fetchChangeUserStatus = createApi(
  `${path}/${prefix}/user/updateStatus`,
  option,
); // 사용자 고정 여부 설정
