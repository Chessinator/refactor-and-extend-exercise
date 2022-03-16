import ValidCarData from "../data/ValidCarData.js"

const CarValidator = ({ make, year }) => {

  let parsedYear = parseInt(year);
  // map 2 digit years to 4+ digit years using the current year as reference
  if (parsedYear < 100) {
      const currentYear = new Date().getFullYear();
      const century = Math.floor(currentYear / 100) * 100;
      parsedYear = currentYear - century < parsedYear ? century - 100 + parsedYear : century + parsedYear;
  }

  return !!(ValidCarData[make.toLowerCase()]?.filter(({ min, max }) =>
      (min === undefined || min <= parsedYear)
      && (max === undefined || parsedYear <= max)
  ).length > 0)
}

export default CarValidator