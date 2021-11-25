import React from 'react';
import Type from 'prop-types';
import classNames from 'classnames';
import SlideDown from 'arui-feather/slide-down';
import Link from 'arui-feather/link';
import IconArrowDown from 'arui-feather/icon/ui/arrow-down';
import './styles.scss';

/**
 * Expansion Panel
 */
export default function ExpansionPanel({ title, content, isExpanded, className, onClickExpand }) {
  const classes = classNames('expansion-panel', className);
  
  return (
    <div className={classes}>
      <div className="expansion-panel-title">
        <Link
          pseudo
          onClick={onClickExpand}
          icon={<IconArrowDown className={`${isExpanded ? 'link__icon-open' : 'link__icon-close'}`} />}
          iconPosition="right"
        >
          {title}  
        </Link>
      </div>
      <div className={`expansion-panel-content${isExpanded ? ' expansion-panel-content-open' : ''}`}>
        <SlideDown isExpanded={isExpanded}>
          {content}
        </SlideDown>
      </div>
    </div>
  );
}

ExpansionPanel.propTypes = {
  title: Type.node.isRequired,
  content: Type.node.isRequired,
  onClickExpand: Type.func.isRequired,
  isExpanded: Type.bool,
  className: Type.string,
};

ExpansionPanel.defaultProps = {
  isExpanded: false,
  className: '',
};
