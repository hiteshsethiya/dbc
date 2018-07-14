import { h } from "hyperapp";

import styles from './index.css';
import Services from '../../services';

export default _ => ({
  state: {
    orders: []
  },
  actions: {
    fetchOrder: props => (state, actions) => {
      return Services.orders(props.id).then(actions.assignOrders.bind(actions));
    },
    assignOrders: order => state => ({ orders: [].concat(order) })
    
  },
  view: props => ({ orders: state }, { orders: actions }) => {
    console.log(state.orders);
    return (
      <div className="orders" oncreate={actions.fetchOrder.bind(actions, props.match.params)}>
        {
          state.orders.map(order => {
            return <div>
              <div className="restaurant">{ order.foodType } from { order.restaurant }</div>
              <div className="restaurant">For { order.orderedFor }</div>
              <div className="restaurant">Delivered on { order.deliverOn }</div>
            </div> 
          })
        }
      </div>
    )
  }
})