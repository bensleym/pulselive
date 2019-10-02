import playerData from "./playerData";
import playerImageController from "./playerImageController";

class HandlePlayerData {
  constructor() {
    const playerDataPlayers = playerData.players;
    this.playerSelect = document.getElementById("playerSelect");
    this.playerStats = document.getElementById("playerStats");

    const firstLoad = true;

    this.playerData(playerDataPlayers, "", firstLoad);
    this.selectPlayer(playerDataPlayers);
    this.createDefaultPlayer(playerDataPlayers);
  }

  createDefaultPlayer(playerDataPlayers) {
    const firstName = playerDataPlayers[0].player.name.first;
    const lastName = playerDataPlayers[0].player.name.last;
    const selectedPlayer = `${firstName} ${lastName}`;
    this.playerData(playerDataPlayers, selectedPlayer);
  }

  playerData(playerDataPlayers, selectedPlayer, firstLoad) {
    for (let i = 0; i < playerDataPlayers.length; i += 1) {
      if (firstLoad) {
        this.createOption(playerData.players[i]);
      }
      this.updatePlayerInfo(playerDataPlayers[i], selectedPlayer);
    }
  }

  createOption(player) {
    const firstName = player.player.name.first;
    const lastName = player.player.name.last;

    const htmlSelect = `<option vlaue="${firstName} ${lastName}">${firstName} ${lastName}</option>`;

    this.playerSelect.insertAdjacentHTML("beforeEnd", htmlSelect);
  }

  selectPlayer(playerDataPlayers) {
    this.playerSelect.addEventListener("change", () => {
      const selectedPlayer = this.playerSelect.value;
      this.playerStats.innerHTML = "";
      this.playerData(playerDataPlayers, selectedPlayer);
    });
  }

  updatePlayerInfo(playerDataPlayers, selectedPlayer) {
    const playerId = playerDataPlayers.player;

    const playerName = `${playerId.name.first} ${playerId.name.last}`;

    if (playerName === selectedPlayer) {
      this.changePlayerImage(playerId);
      this.createPlayerStatHTML(playerDataPlayers.stats);
      this.changeBadge(playerId.currentTeam);
      this.changePlayersName(playerId.name);
      this.changePlayerPosition(playerId.info);
    }
  }

  changePlayerImage(playerId) {
    const playerImage = playerImageController(playerId.id);
    const playerImageEl = document.getElementById("playerImage");

    const htmlPlayerImage = `<img src="${playerImage}" 
      alt="${playerId.name.first} ${playerId.name.last}" 
      class="player-image__image" />`;

    playerImageEl.innerHTML = htmlPlayerImage;
  }

  changeBadge(id) {
    const badgeEl = document.getElementById("clubBadge");
    const badgeSR = document.getElementById("playersClub");

    const team = id.name.toLowerCase();
    badgeEl.className = `club-badge__image club-badge__image--${team.replace(
      " ",
      "-"
    )}`;

    badgeSR.innerHTML = id.name;
  }

  changePlayersName(id) {
    const playerNameEl = document.getElementById("playerName");

    playerNameEl.innerHTML = `${id.first} ${id.last}`;
  }

  changePlayerPosition(id) {
    const playerPositionEl = document.getElementById("playerPosition");

    playerPositionEl.innerHTML = id.positionInfo;
  }

  convertStatName(name) {
    const capitalise = name.charAt(0).toUpperCase() + name.slice(1);
    const cleanName = capitalise.replace("_", " ");
    return cleanName;
  }

  createPlayerStatHTML(statData) {
    for (let stat = 0; stat < statData.length; stat += 1) {
      const htmlPlayerStat = `<li class="player-stats__list-item">
        <span class="player-stats__attribute">
          ${this.convertStatName(statData[stat].name)}
        </span>
        <span class="player-stats__stat">
          ${statData[stat].value}
        </span>
      </li>`;
      this.playerStats.insertAdjacentHTML("beforeEnd", htmlPlayerStat);
    }
  }
}

export default HandlePlayerData;
