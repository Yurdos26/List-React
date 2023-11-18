const apiRequest = async (url = "", optionObj = null, errMsg = null) => {
  try {
    const response = await fetch(url, optionObj);
    if (!response.ok) throw Error("Перегрузите приложение...");
  } catch (error) {
    errMsg = error.errMsg;
  } finally {
    return errMsg;
  }
};

export default apiRequest;
