/**
 * Utility Method to create options for a fetch call
 * @param method GET, POST, PUT, DELETE
 * @param body  The request body (only relevant for POST and PUT)
 * @returns
 */
export function makeOptions(method, body) {
  const opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
}

export async function handleHttpErrors(res) {
  if (!res.ok) {
    const errorResponse = await res.json();
    const msg = errorResponse.message
      ? errorResponse.message
      : "No details provided";
    throw new Error(msg);
  }
  return res.json();
}
