export function timeAgo(timestamp:Date) {
    const currentDate = new Date();
    const pastDate = new Date(timestamp);
  
    const timeDifference = currentDate.getTime() - pastDate.getTime();
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (years > 0) {
      return years + ' г. назад';
    } else if (months > 0) {
      return months + ' мес. назад';
    } else if (weeks > 0) {
      return weeks + ' нед. назад';
    } else if (days > 0) {
      return days + ' дн. назад';
    } else if (hours > 0) {
      return hours + ' ч. назад';
    } else if (minutes > 0) {
      return minutes + ' мин. назад';
    } else {
      return seconds + ' сек. назад';
    }
  }
  

  