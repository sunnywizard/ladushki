import React, { Component } from 'react';
import Type from 'prop-types';
import { injectIntl } from 'react-intl';

export default ComposedComponent => injectIntl(class extends Component {

  static propTypes = {
    intl: Type.object,
  };

  tr = (id, defaultMessage = '') => this.props.intl.formatMessage({ id, defaultMessage });

  trr = (id, values) => {
    let message = this.props.intl.formatMessage({ id, defaultMessage: '' });
    const keys = Object.keys(values);
    if (keys.length > 0) {
      keys.forEach((key) => {
        message = message.replace(`$${key}`, values[key]);
      });
    }
    return message;
  };

  render() {
    return <ComposedComponent {...this.props} tr={this.tr} trr={this.trr} />;
  }

}, { withRef: true });
