import Icons from "./assets/icons";

const { faGithub, faFacebook, faTwitter, faLinkedin } = Icons;
const socialData = [
  {
    id: 1,
    name: "github",
    url: "https://github.com/fabian-petersen",
    icon: faGithub,
    color: "#333",
  },
  {
    id: 2,
    name: "facebook",
    url: "#facebook",
    icon: faFacebook,
    color: "#3B5999",
    className: "facebook",
  },
  {
    id: 3,
    name: "twitter",
    url: "#twitter",
    icon: faTwitter,
    color: "#46C1F6",
    className: "twitter",
  },
  { id: 4, name: "linkedin", url: "#linked", icon: faLinkedin, color: "" },
];

export default socialData;
