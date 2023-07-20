export default {
  methods: {
    getPriceWithTva(price, tva) {
      return Math.round(price * (1 + (tva / 100))).toFixed(2);
    }
  }
};
