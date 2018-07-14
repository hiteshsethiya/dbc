import { h } from "hyperapp";

export default ({ items, selected, toggleSideNav, show, onSelect, addToPlan }) => {
  const itemKeys = Object.keys(items);
  const selectedItems = selected.items;
  console.log(selectedItems);
  return (
    <div className={`sidenav-container ${show ? 'open' : ''}`} onclick={toggleSideNav} data-action="toggle">
      <div id="mySidenav" className='sidenav'>
        <div className='heading'>
          <span>Select {selected.type} for {selected.day}</span>
          <a href="javascript:void(0)" class="closebtn" data-action="toggle">&times;</a>
        </div>
        <div className="list">
          {
            itemKeys && itemKeys.length ? <ul className="list-items">
              {
                itemKeys.map(itemKey => {
                  // console.log("[2]", itemKey)
                  const categoryItems = items[itemKey];
                  return (
                    <li className="list-item" key={itemKey}>
                      <div className="list-item-heading">{itemKey}</div>
                      <ul className="list-category-items">
                        {
                          categoryItems.map(item => {
                            // console.log("[3]",item.itemId, selectedItems.includes(item.itemId))
                            selectedItems.includes(items.itemId)
                            return (
                              <li
                                key={items.itemId}
                                className={`list-category-item ${selectedItems.includes(item.itemId) ? 'selected' : ""}`}
                                onclick={onSelect.bind(null, item)}
                              >{item.name}</li>
                            )
                          })
                        }
                      </ul>
                    </li>
                  )
                })
              }
            </ul> : <div className="no-items">No Items</div>
          }
        </div>
        <div className="footer">
          <div className="add-to-plan-btn" onclick={addToPlan}>ADD</div>
        </div>
      </div>
    </div>
  )
};