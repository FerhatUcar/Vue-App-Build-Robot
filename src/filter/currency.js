import Vue from 'vue';

export default Vue.filter('toCurrency', (value) => {
  if (typeof value !== 'number') return value;

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
});
