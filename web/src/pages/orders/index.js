import { h } from "hyperapp";

import styles from './index.css';

export default _ => ({
  state: {},
  actions: {},
  view: props => ({ orders: state }, { orders: actions }) => {
    return (
      <div className="orders">
        orders
      </div>
    )
  }
})