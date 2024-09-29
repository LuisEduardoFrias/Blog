
import { State } from 'md/state'
import { user } from 'md/user'
import { paginationBtn } from 'md/pagination_btn'

type Action =
  { type: "login", user: user } |
  { type: "logout" } |
  { type: "changePaginationBtn", value: paginationBtn };

export default function Reducer<T>(state: T, actions: Action) {
  const _actions = {
    login: () => {
      return { ...state, user: actions.user }
    },
    logout: () => {
      return { ...state, user: null }
    },
    changePaginationBtn: () => {
      const { nextBtn, previousBtn } = actions.value;
      return { ...state, nextBtn, previousBtn }
    },
    default: () => console.error(`the action ${actions.type} isn't valid.`)
  }
  return (_actions[actions.type] || _actions["default"])();
}