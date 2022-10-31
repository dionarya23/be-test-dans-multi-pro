const { formatDate } = require('../../../../helpers/date');

const responseSerialize = (data) => ({
  id: data.id,
  type: data.type,
  url: data.url,
  created_at: formatDate({ date: data.createdAt }).formatted,
  company: data.company,
  company_url: data.companyUrl,
  location: data.location,
  title: data.title,
  description: data.description,
  how_to_apply: data.howToApply,
  company_logo: data.companyLogo,
});

module.exports = {
  serialize(data) {
    if (!data) {
      throw new Error('Expect data to be not undefined nor null');
    }

    if (Array.isArray(data)) {
      return data.map(responseSerialize);
    }

    return responseSerialize(data);
  },
};
