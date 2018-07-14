import { h } from "hyperapp";

export default ({ day, onSelect }) => {
  console.log(day);
  return (
    <div className="day" key={day.day}>
      <div className="day-name">{day.day}</div>
      <div className="plans">
        {
          day.plans.map(planItem => {
            return (
              <div className="plan" key={planItem.mealType}>
                <div className="plan-name">{planItem.mealType}</div>
                {
                  planItem.menuItems && planItem.menuItems.length ? < div className="plan-items">
                    {
                      planItem.menuItems.map(item => {
                        return (
                          <div className="plan-item" key={item.id}>
                            <img src='//via.placeholder.com/50x50' alt={item.id} />
                            <div className="plan-item-name">{item.name}</div>
                          </div>
                        )
                      })
                    }
                  </div> : <div className="add-button" onclick={onSelect.bind(null, { day: day.day, type: planItem.mealType })} data-action="toggle"></div>
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}