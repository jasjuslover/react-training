const NETWORK_ERROR = "Network error. Please try again later!";

const fw = async ({ url, endpoint, method, body, headers }) => {
  let resRaw;

  try {
    resRaw = await fetch(`${url}${endpoint}`, {
      method,
      body,
      headers,
    });

    if (resRaw.ok) {
      return await resRaw.json();
    }

    if (resRaw.status === 401) {
      return {
        data: null,
        unAuthorized: true,
        message: "Unauthorized",
      };
    }

    const resTxt = await resRaw.text();
    const errObj = JSON.parse(resTxt);

    if (errObj) {
      return {
        data: null,
        unAuthorized: false,
        message: resObj.message,
      };
    }
  } catch (error) {
    console.error(error);
    return {
      data: null,
      unAuthorized: false,
      message: NETWORK_ERROR,
    };
  }
};

export { fw, NETWORK_ERROR };
