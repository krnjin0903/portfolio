import axios from "axios";

const mailEndpoint = "http://localhost:3500/api/mail";

const sendMail = (payload) => {
  const config = {
    method: "POST",
    url: mailEndpoint,
    data: payload,
    crossdomain: true,
    headers: { "Content-Type": "application/json" },
  };

  return axios(config);
};

const mailServices = { sendMail };

export default mailServices;
