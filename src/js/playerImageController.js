import p2064 from "../img/players/p2064.png";
import p4148 from "../img/players/p4148.png";
import p4246 from "../img/players/p4246.png";
import p4916 from "../img/players/p4916.png";
import p8983 from "../img/players/p8983.png";

const playerImageController = id => {
  const imageId = `p${id}`;
  const images = { p2064, p4148, p4246, p4916, p8983 };

  return images[imageId];
};

export default playerImageController;
