export const getFormattedDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate() + 1;
    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    return day + "/" + month + "/" + year;
};
