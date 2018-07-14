import { h } from "hyperapp";

import styles from './index.css';

export default _ => ({
  state: {},
  actions: {},
  view: props => ({ home: state }, { home: actions }) => {
    return (
      <div className="home">
    Home
      </div>
    )
  }
})