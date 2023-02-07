export default {
  createOrder: async (req, res, next) => {
    try {
    } catch (e) {
      next({ message: e.message });
    }
  },
};
