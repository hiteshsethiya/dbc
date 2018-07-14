import { h } from "hyperapp";

import styles from './index.css';

import planner from './../../components/planner';

const Planner = planner();

export default _ => ({
  state: {},
  actions: {},
  view: props => ({ home: state }, { home: actions }) => {
    return (
      <div className="home">
        <Planner.view />
      </div>
    )
  }
})