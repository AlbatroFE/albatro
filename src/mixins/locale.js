import { t } from "albatro-ui/src/locale";

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
