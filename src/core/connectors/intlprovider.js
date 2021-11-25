import { connect } from 'react-redux';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import ru from 'react-intl/locale-data/ru';
import messages from '../../theme/i18n';

addLocaleData(en);
addLocaleData(ru);

function mapStateToProps(state) {
  const { lang } = state.locale;
  return { locale: lang, messages: messages[lang] };
}

export default connect(mapStateToProps)(IntlProvider);
