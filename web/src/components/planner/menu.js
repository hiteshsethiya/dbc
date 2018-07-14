import { h } from "hyperapp";

export default ({ items, selected, toggleSideNav, show }) => {
  return (
    <div className={`sidenav-container ${show ? 'open' : ''}`} onclick={toggleSideNav} data-action="toggle">
      <div id="mySidenav" className='sidenav'>
        <div className='heading'>
          <span>Select {selected.type} for {selected.day}</span>
          <a href="javascript:void(0)" class="closebtn" data-action="toggle">&times;</a>
        </div>
        <div className="list">
          {
            items && items.length ? <ul className="list-items">
              {
                items.map(item => {
                  return (
                    <li className="list-item">
                    <div>{item.name}</div>
                    </li>
                  )
                })
              }
            </ul> : <div className="no-items">No Items</div>
          }
        </div>
      </div>
    </div>
  )
};