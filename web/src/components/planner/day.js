import { h } from "hyperapp";

export default ({ day, onSelect }) => {
  return (
    <div className="day" key={day.name}>
      <div className="day-name">{day.name}</div>
      <div className="plans">
        {
          day.plan.map(planItem => {
            return (
              <div className="plan" key={planItem.type}>
                <div className="plan-name">{planItem.type}</div>
                {
                  planItem.items && planItem.items.length ? < div className="plan-items">
                    {
                      planItem.items.map(item => {
                        return (
                          <div className="plan-item" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div className="plan-item-name">{item.name}</div>
                          </div>
                        )
                      })
                    }
                  </div> : <div className="add-button" onclick={onSelect.bind(null, { day: day.name, type: planItem.type })} data-action="toggle"></div>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}