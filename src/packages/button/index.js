import QkyButton from './src/button';

/* istanbul ignore next */
QkyButton.install = function(Vue) {
  Vue.component(QkyButton.name, QkyButton);
};

export default QkyButton;
