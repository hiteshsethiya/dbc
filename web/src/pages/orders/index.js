import { h } from "hyperapp";

import styles from './index.css';
import Services from '../../services';

export default _ => ({
  state: {
    orders: [],
    latestOrder: null,
  },
  actions: {
    fetchOrder: props => (state, actions) => {
      return Services.orders(props.id).then((orders) =>{
        return actions.assignOrders({ id: props.id, orders})
      });
    },
    assignOrders: ({id, orders}) => state => {
      return ({ orders: [].concat(orders), latestOrder: id? orders.filter(o => o.id == id) : null })
    }
    
  },
  view: props => ({ orders: state }, { orders: actions }) => {
    return (
      <div className="orders" oncreate={actions.fetchOrder.bind(actions, props.match.params)}>
        {
          state.orders.map(order => {
            return <div>
              <div className="restaurant">{ order.foodType } from { order.restaurant }</div>
              <div className="orderedFor">For { order.username }</div>
              <div className="deliverOn">Delivered on { order.deliverOn }</div>
              <div className="note">Notes: { order.note }</div>
            </div> 
          })
        }
      </div>
    )
  }
})