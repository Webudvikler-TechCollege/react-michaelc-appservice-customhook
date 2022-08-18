export default function authHeader(users) {
  const currentUser = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : "";

  if (currentUser && currentUser.token) {
    return {
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${currentUser.token}`,
    };
  } else {
    return {};
  }
}
