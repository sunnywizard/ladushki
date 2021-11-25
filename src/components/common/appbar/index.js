/* eslint-disable no-shadow */
import React from 'react';
import Type from 'prop-types';
import cn from 'cn-decorator';
import './styles.scss';

/**
 * Компонент AppBar
 */
@cn('appbar')
class AppBar extends React.Component {
  static propTypes = {
    /** Дочерние элементы `AppBar` */
    children: Type.oneOfType([Type.arrayOf(Type.node), Type.node]),
    /** Position */
    position: Type.oneOf(['fixed', 'absolute', 'sticky', 'static']),
    /** Дополнительный класс */
    className: Type.string, // eslint-disable-line
  };

  static defaultProps = {
    position: 'static',
  };

  render(cn) {
    const classNames = cn({
      position: this.props.position,
    });

    return (
      <header className={classNames}>
        {this.props.children}
      </header>
    );
  }
}

export default AppBar;
