import { IDomain } from 'common/interfaces/career-path';
import { ICareerPathLevel } from 'components/career-path/common/interfaces';

type State = {
  domains: IDomain[] | null;
  levels: ICareerPathLevel[];
  isLoading: boolean;
};

enum ActionType {
  FETCH_DOMAINS = 'FETCH_DOMAINS',
  ADD_DOMAIN = 'ADD_DOMAIN',
  UPDATE_DOMAIN = 'UPDATE_DOMAIN',
  DELETE_DOMAIN = 'DELETE_DOMAIN',
  FETCH_ALL_LEVELS = 'FETCH_ALL_LEVELS',
  FETCH_LEVEL = 'FETCH_LEVEL',
  ADD_LEVEL = 'ADD_LEVEL',
  UPDATE_LEVEL = 'UPDATE_LEVEL',
  DELETE_LEVEL = 'DELETE_LEVEL',
  ADD_SKILL = 'ADD_LEVEL_SKILL',
  UPDATE_SKILL = 'UPDATE_LEVEL_SKILL',
  DELETE_SKILL = 'DELETE_LEVEL_SKILL',
  ADD_OBJECTIVE = 'ADD_OBJECTIVE',
  UPDATE_OBJECTIVE = 'UPDATE_SKILL_OBJECTIVE',
  DELETE_OBJECTIVE = 'DELETE_SKILL_OBJECTIVE',
  CONNECT_LEVELS = 'CONNECT_LEVELS',
  DISCONNECT_LEVELS = 'DISCONNECT_LEVELS',
  CONNECT_DOMAINS = 'CONNECT_DOMAINS',
  DISCONNECT_DOMAINS = 'DISCONNECT_DOMAINS',
}

export type { State };
export { ActionType };