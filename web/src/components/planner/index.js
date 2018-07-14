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
      type: null,
      items: []
    },
    dayPlans: [{
      "day": "MONDAY",
      "plans": [
        {
          "mealType": "BREAKFAST",
          "itemIds": [],
          "menuItems": []
        }, {
          "mealType": "LUNCH",
          "itemIds": [],
          "menuItems": []
        }
      ]
    }
    ]
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
          type: props.type,
          items: []
        },
        sideNavVisible: !state.sideNavVisible
      })
    },
    onMenuItemSelect: props => state => {
      console.log("[menu item] add", props.itemId);
      let items = state.selected.items;
      if (items.includes(props.itemId)) {
        items = items.filter(itemId => itemId !== props.itemId);
      } else {
        items.push(props.itemId)
      }
      return ({
        selected: Object.assign({}, state.selected, { items })
      })
    },
    addToPlan: props => (state, actions) => {
      const { selected } = state;
      const data = {
        "swiggyCustomerId": "16534144",
        "dayPlans": [{
          "day": selected.day,
          "plans": [
            {
              "mealType": selected.type,
              "itemIds": selected.items
            }
          ]
        }]
      }
      return Services.createPlan(data)
        .then(actions.fetchPlanner.bind(actions))
        .then(actions.onSelect.bind(actions));
    },
    assignPlanner: ({ dayPlans }) => state => {
      return ({ dayPlans })
    },
    fetchPlanner: props => (state, actions) => {
      return Services.fetchPlanner().then(actions.assignPlanner.bind(actions));
    },
    init: props => (state, actions) => {
      actions.fetchMenuItems();
      actions.fetchPlanner();
    }
  },
  view: props => ({ planner: state }, { planner: actions }) => {
    return (
      <div className="planner-container" oncreate={actions.init}>
        <div className="week">
          <div className="days">
            {
              state.dayPlans.map(day => {
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
          onSelect={actions.onMenuItemSelect}
          addToPlan={actions.addToPlan}
          toggleSideNav={actions.toggleSideNav.bind(actions)} />
      </div>
    )
  }
})