const moment = require('moment');

const formatDate = ({
  date,
  type = 'withDayName',
}) => {
  let formatted;
  if (type === 'withDayName') {
    formatted = `${moment(date, 'YYYY-MM-DD').format('dddd, DD MMMM YYYY')}`;

    return {
      raw: date,
      formatted,
    };
  }

  formatted = `${moment(date, 'YYYY-MM-DD').format('DD MMMM YYYY')}`;
  return {
    raw: date,
    formatted,
  };
};

const formatDateOfBirth = ({
  date,
}) => {
  const formatted = `${moment(date, 'YYYY-MM-DD').format('DD MMMM YYYY')} (${moment(Date.now()).diff(date, 'years', false)} Tahun)`;

  return {
    raw: date,
    formatted,
  };
};

const formatDateTimestamp = ({
  date,
}) => {
  const formatted = moment(date).format('DD MMMM YYYY, HH:mm:ss');

  return {
    raw: date,
    formatted,
  };
};

module.exports = {
  formatDate,
  formatDateOfBirth,
  formatDateTimestamp,
};
