import axios from 'axios';

const baseUrl = 'https://test.easychannel.com/dev/orders';

const getOrders = async (page, search) => axios.get(baseUrl, { params: { limit: 10, page, search } });

const getSingleOrder = async (id) => axios.get(`${baseUrl}/${id}`);

const deleteOrder = async (id) => axios.post(`${baseUrl}/${id}`, { is_archived: true });

export default {
  getOrders,
  getSingleOrder,
  deleteOrder,
};
