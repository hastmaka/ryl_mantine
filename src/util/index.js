// export async function getUpdateSessionStorage() {
//     const { updateSessionStorage } = await import('./updateSessionStorage.js');
//     return updateSessionStorage;
// }

export async function getCreateArray() {
    const { createArray } = await import('./createArray.js');
    return createArray;
}

export async function getFormatDate() {
    const { formatDate } = await import('./formatDate.js');
    return formatDate;
}

export async function getFormatMoney() {
    const { formatMoney } = await import('./formatMoney.js');
    return formatMoney;
}

export async function getCapitalize() {
    const { capitalize } = await import('./capitalize.js');
    return capitalize;
}

export async function getAutoScroll() {
    const { autoScroll } = await import('./autoScroll.js');
    return autoScroll;
}

export async function getIsElementInView() {
    const { isElementInView } = await import('./isElementInView.js');
    return isElementInView;
}

export async function getSendEmail() {
    const { sendEmail } = await import('./api/sendEmail.js');
    return sendEmail;
}

export async function getSetCookie() {
    const { setCookie } = await import('./cookie/Cookie.js');
    return setCookie;
}

export async function getGetCookie() {
    const { getCookie } = await import('./cookie/Cookie.js');
    return getCookie;
}

