import React from 'react';
import Type from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import '../../../theme/styles/settings.scss';

export default function Breadcrumbs({ items = [], className }) {
  const classes = classNames('breadcrumbs', className);
  return (
    <div className={classes}>
      <ul className="list">
        {items.map(item => (
          <li key={`${item.title}${Math.random()}`}>
            {item.link ? (
              <Link
                className="link7 link7_secondary"
                key={item.link}
                to={item.link}
              >
                {item.title}
              </Link>
            ) : (
              <span key={item.link}>{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
Breadcrumbs.propTypes = {
  items: Type.array.isRequired,
  className: Type.string,
};
Breadcrumbs.defaultProps = {
  className: '',
};
