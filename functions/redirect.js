exports.handler = async function () {
  const target = process.env.REDIRECT_URL;

  if (!target) {
    return {
      statusCode: 500,
      body: "REDIRECT_URL is not set",
    };
  }

  return {
    statusCode: 301,
    headers: {
      Location: target,
    },
  };
};