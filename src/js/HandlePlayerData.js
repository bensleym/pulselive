import playerData from "./playerData";

class HandlePlayerData {
  constructor() {
    this.playerData = playerData.players;
    this.playerSelect = document.getElementById("playerSelect");
    this.createOption();
  }

  createOption() {
    for (let i = 0; i < this.playerData.length; i += 1) {
      const firstName = playerData.players[i].player.name.first;
      const lastName = playerData.players[i].player.name.last;

      const htmlSelect = `<option vlaue="${firstName} ${lastName}">${firstName} ${lastName}</option>`;

      this.playerSelect.insertAdjacentHTML("beforeEnd", htmlSelect);
    }
  }

  selectplayer() {}
}

export default HandlePlayerData;
