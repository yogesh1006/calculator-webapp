import { ACTIONS } from "./App"

export default function OperationButton({ dispatch, operation,backgroundColor }) {
  return (
    <button
    style={{backgroundColor:backgroundColor}}
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  )
}