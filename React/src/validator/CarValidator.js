export default (car) => {
    if (isNaN(car.year)) { return false; }

    if (car.year.length !== 2 && car.year.length !== 4) { return false; }

    if (car.make.toLowerCase() === "mazda") {
      if (car.year.length === 2) {
        if (parseInt(car.year) < 97 && parseInt(car.year) > 17) {
          return false;
        } else {
          return true;
        }
      } else if (car.year.length === 4) {
        if (parseInt(car.year) < 1997) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else if (car.make.toLowerCase() === "toyota") {
      if (car.year.length === 2) {
        if (parseInt(car.year) >= 6 && parseInt(car.year) <= 18) {
          return false;
        } else if (parseInt(car.year) <= 98) {
          return false;
        } else {
          return true;
        }
      } else if (car.year.length === 4) {
        if (parseInt(car.year) >= 2006) {
          return false;
        } else if (parseInt(car.year) <= 1998) {
          return false;
        } else {
          return true;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
}