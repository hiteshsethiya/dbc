import { h } from "hyperapp";

import Day from './day';
import Menu from './menu';

import Services from './../../services';

import styles from './index.css';

export default _ => ({
  state: {
    sideNavVisible: false,
    menuItems: [],
    selected: {
      day: null,
      type: null
    },
    days: [{
      name: "Monday",
      plan: [{
        type: 'BREAKFAST',
        items: [{
          id: 1,
          name: 'Item 1',
          image: '//via.placeholder.com/50X50'
        }, {
          id: 2,
          name: 'Item 2',
          image: '//via.placeholder.com/50X50'
        }]
      }, {
        type: 'LUNCH',
        items: [],
      }, {
        type: 'SNACKS',
        items: [],
      }, {
        type: 'DINNER',
        items: [],
      }]
    }, {
      name: "Tuesday",
      plan: [{
        type: 'BREAKFAST',
        items: []
      }, {
        type: 'LUNCH',
        items: [],
      }, {
        type: 'MY_FAV',
        items: [],
      }]
    }],
    recommendations: {
      "BREAKFAST": [],
      "LUNCH": [],
      "MY_FAV": []
    }
  },
  actions: {
    fetchMenuItems: props => (state, actions) => {
      return Services.menuItems.then(actions.assignMenuItems.bind(actions));
    },
    assignMenuItems: menuItems => state => ({ menuItems }),
    toggleSideNav: event => state => {
      if (event.target.dataset && event.target.dataset.action === 'toggle')
        return ({ sideNavVisible: !state.sideNavVisible })
    },
    onSelect: props => state => {
      console.log('[selecting]', props);
      return ({
        selected: {
          day: props.day,
          type: props.type
        },
        sideNavVisible: !state.sideNavVisible
      })
    }
  },
  view: props => ({ planner: state }, { planner: actions }) => {
    return (
      <div className="planner-container" oncreate={actions.fetchMenuItems}>
        <div className="week">
          <div className="days">
            {
              state.days.map(day => {
                return (
                  <Day day={day} onSelect={actions.onSelect} />
                )
              })
            }
          </div>
        </div>
        <Menu
          items={state.menuItems}
          selected={state.selected}
          show={state.sideNavVisible}
          toggleSideNav={actions.toggleSideNav.bind(actions)} />
      </div>
    )
  }
})