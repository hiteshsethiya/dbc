import { h } from "hyperapp";

export default ({ items, selected, toggleSideNav, show }) => {
  return (
    <div className={`sidenav-container ${show ? 'open' : ''}`} onclick={toggleSideNav} data-action="toggle">
      <div id="mySidenav" className='sidenav'>
        <div>
          <p className='heading'>Select {selected.type} for {selected.day}</p>
          <a href="javascript:void(0)" class="closebtn" data-action="toggle">&times;</a>
        </div>
        <div className="list">
          <ul className="list-items">

          </ul>
        </div>

      </div>
    </div>
  )
};