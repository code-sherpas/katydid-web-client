const convertTimeStampToHrMin = timestamp => {
<<<<<<< HEAD
  const date = new Date(timestamp);
=======
  const date = new Date(timestamp * 1000);
>>>>>>> 12ddd201e55b01b9b580c277d868a355159649b0
  const hour = ('0' + date.getHours()).slice(-2);
  const mins = ('0' + date.getMinutes()).slice(-2);
  return `${hour}:${mins}`;
};

export default convertTimeStampToHrMin;
