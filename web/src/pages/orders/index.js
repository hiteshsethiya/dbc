import { h } from "hyperapp";

import { location } from "@hyperapp/router"

import styles from './index.css';
import Services from '../../services';

const getDate = (date) => {
  let dateObj = new Date(date);
  let month = dateObj.getUTCMonth() + 1;
  let day = dateObj.getUTCDate();
  let year = dateObj.getUTCFullYear();

  return `${day}/${month}/${year}`
}

export default _ => ({
  state: {
    orders: [],
    ordersToDisplay: [],
    latestOrder: null,
  },
  actions: {
    fetchOrder: props => (state, actions) => {
      const id = props.id ? props.id : null;
      return Services.orders(id).then((orders) => {
        return actions.assignOrders({ id, orders })
      });
    },
    assignOrders: ({ id, orders }) => state => {
      const ordersToDisplay = id !== undefined ? orders.filter(o => o.id != id) : orders;
      return ({
        orders,
        ordersToDisplay,
        latestOrder: id ? orders.find(o => o.id == id) : null
      })
    },
    disappear: locationAction => (state, actions) => {
      setTimeout(() => {
        locationAction.go('/orders');
        actions.assignOrders({
          id: null,
          orders: state.orders
        });
      }, 5000);

    }
  },
  view: props => ({ orders: state }, { orders: actions, location: locationAction }) => {
    const id = props.match.params ? props.match.params.id : null;
    const latestOrder = state.latestOrder;
    return (
      <div className="orders" key={'demo'} oncreate={actions.fetchOrder.bind(actions, { id })}>
        {
          state.ordersToDisplay.length ? state.ordersToDisplay.map((order, i) => {
            return (
              <div className="order" key={i}>
                <div className="restaurant">{order.foodType} <span className="small"> from</span> {order.restaurant}</div>
                <div className="orderedFor"><span className="small"> For </span>{order.username}</div>
                <div className="deliverOn"><span className="small"> Delivered on </span> {getDate(order.deliverOn)}</div>
                <div className="note"><span className="small"> Notes: </span>{order.note ? <div className="note-field">{order.note}</div> : null}</div>
                <div className="plan-items">
                  {
                    order.items.map((item, itemI) => {
                      return <div className="plan-item" key={itemI}>
                        <img src={item.imageUrl} alt={item.id} className="plan-item-image"/>
                        <div className="plan-item-name">{item.name}</div>
                      </div>
                    })
                  }
                </div>
              </div>
            )
          }) : null
        }
        {
          latestOrder !== null ? <div className="latest-order" key={latestOrder.id} oncreate={actions.disappear.bind(actions, locationAction)}>
            <div className="order" key={latestOrder.id}>
              <div className="restaurant">{latestOrder.foodType} <span className="small"> from</span> {latestOrder.restaurant}</div>
              <div className="orderedFor"><span className="small"> For </span>{latestOrder.username}</div>
              <div className="deliverOn"><span className="small"> Delivered on </span> {getDate(latestOrder.deliverOn)}</div>
              <div className="note"><span className="small"> Notes: </span>{latestOrder.note ? <div className="note-field">{latestOrder.note}</div> : null}</div>
            </div>
          </div> : null
        }
      </div>
    )
  }
})