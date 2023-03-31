const formatDate = (date) => {
  const [yyyy, mm, dd] = date.split('-');
  return (`${mm}/${dd}/${yyyy}`);
}

export default formatDate;