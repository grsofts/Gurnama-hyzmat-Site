import http from "../api/http";

const imagePath = http.defaults.baseURL + '/uploads';


const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatDaysAgo = (isoDate) => {
  if (!isoDate) return '';

  const completedDate = new Date(isoDate);
  const now = new Date();

  const diffMs = now - completedDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 'сегодня';
  if (diffDays === 1) return '1 день назад';
  if (diffDays < 5) return `${diffDays} дня назад`;

  return `${diffDays} дней назад`;
};



export { imagePath, formatDate, formatDaysAgo };