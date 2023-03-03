import axios from "axios";

const mailEndpoint = `${process.env.REACT_APP_URL}/api/mail`;

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
