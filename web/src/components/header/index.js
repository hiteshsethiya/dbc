import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

/* styles */
import style from './index.css';

export default _ => ({
  state: {
    headerLinks: [{
      text: 'Orders',
      to: '/orders',
      selected: false
    }, {
      text: 'Plan My Subscription',
      to: '/',
      selected: false
    }]
  },
  actions: {
    selectTab: linkToSelect => (state) => {
      const headerLinks = state.headerLinks.map(link => {
        if (link.to === linkToSelect) return Object.assign({}, link, { selected: true })
        return Object.assign({}, link, { selected: false });
      });
      return ({ headerLinks });
    }
  },
  view: props => ({ header: state, location }, { header: actions }) => {
    return (
      <div class="header container" oncreate={actions.selectTab.bind(actions, location.pathname)}>
        <div className="header-logo">
          <a href="/" className="text">Swiggy Swag</a>
        </div>
        <ul class="header-links">
          {state.headerLinks.map(link => {
            return (
              <Link
                to={link.to}
                class={link.selected ? "header-link selected" : "header-link"}
                onclick={actions.selectTab.bind(actions, link.to)}>
                <li class="header-link-text">
                  {link.text}
                </li>
              </Link>)
          })}
        </ul>
      </div>
    )
  }
});