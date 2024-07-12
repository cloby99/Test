Date.prototype.daysTo = function(date2) {
    if (!(date2 instanceof Date)) {
      throw new TypeError('Argument must be a Date object');
    }
  
    const timeDifference = date2.getTime() - this.getTime();
  
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  
    return Math.floor(Math.abs(daysDifference));
  };
  
  const date1 = new Date('2023-07-10');
  const date2 = new Date('2023-07-15');
  
  console.log(date1.daysTo(date2)); 
  