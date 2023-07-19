export default {
  computed: {
    taxedPrice() {
      return this.getPriceWithTva(this.price,this.tva);
    }
  },
  methods: {
    getPriceWithTva(price, tva) {
      return price * (1 + (tva / 100));
    }
  }
};
