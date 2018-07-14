import { h } from 'hyperapp';

import styles from './index.css';

export default _ => ({
  state: {

  },
  actions: {

  },
  view: props => (state, actions) => {
    return (
      <div className="footer-container">
        <div className="footer">
          <div className="footer-heading"><strong>Connect with us!</strong></div>
          <ul className="footer-links">
            <li className="footer-link">
              <a  target="_blank" href="http://dentalvidya.learnyst.com/">Test Series</a>
            </li>
            <li className="footer-link">
              <a target="_blank" href="https://www.facebook.com/DentalVidya/">Facebook</a>
            </li>
            <li className="footer-link">whatsapp: +91 8847408561</li>
          </ul>
        </div>
      </div>
    )
  }
})