const Discord = require("discord.js");
const { prefix, token, API } = require("./config.json");
const client = new Discord.Client();
const Request = require("request");
const moment = require("moment");
moment().locale("es");

client.login(process.env.token);

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${prefix}worlds`)) {
    msg.channel.send(
      "https://api.pandascore.co/lol/tournaments/upcoming?filter=[name]=World%20Championship&token=" +
        API
    );
  }
  if (msg.content.startsWith(`${prefix}calendario`)) {
    msg.channel.send("https://watch.lolesports.com/schedule?leagues=worlds");
  }

  //////////////////////////// Getting Groups ////////////////////////////
  if (
    msg.content.startsWith(`${prefix}grupoa`) ||
    msg.content.startsWith(`${prefix}GA`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments/upcoming?filter[name]=World%20Championship&filter[name]=Group%20a&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const teams = a[index].teams;
          teams.forEach(e => {
            let cards = [];
            cards.push(e);
            const emb = new Discord.RichEmbed()
              .setAuthor(
                "LoL eSport Bot",
                "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
              )
              .setTitle(e.name)
              .setImage(e.image_url);
            msg.channel.send(emb);
          });
        }
      }
    });
  }
  if (
    msg.content.startsWith(`${prefix}grupob`) ||
    msg.content.startsWith(`${prefix}GB`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments/upcoming?filter[name]=World%20Championship&filter[name]=Group%20b&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const teams = a[index].teams;
          teams.forEach(e => {
            let cards = [];
            cards.push(e);
            const emb = new Discord.RichEmbed()
              .setAuthor(
                "LoL eSport Bot",
                "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
              )
              .setTitle(e.name)
              .setImage(e.image_url);
            msg.channel.send(emb);
          });
        }
      }
    });
  }
  if (
    msg.content.startsWith(`${prefix}grupoc`) ||
    msg.content.startsWith(`${prefix}GC`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments/upcoming?filter[name]=World%20Championship&filter[name]=Group%20c&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const teams = a[index].teams;
          teams.forEach(e => {
            let cards = [];
            cards.push(e);
            const emb = new Discord.RichEmbed()
              .setAuthor(
                "LoL eSport Bot",
                "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
              )
              .setTitle(e.name)
              .setImage(e.image_url);
            msg.channel.send(emb);
          });
        }
      }
    });
  }
  if (
    msg.content.startsWith(`${prefix}grupod`) ||
    msg.content.startsWith(`${prefix}GD`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments/upcoming?filter[name]=World%20Championship&filter[name]=Group%20d&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const teams = a[index].teams;
          teams.forEach(e => {
            let cards = [];
            cards.push(e);
            const emb = new Discord.RichEmbed()
              .setAuthor(
                "LoL eSport Bot",
                "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
              )
              .setTitle(e.name)
              .setImage(e.image_url);
            msg.channel.send(emb);
          });
        }
      }
    });
  }

  //////////////////////////// Getting Play-In Groups ////////////////////////////

  if (
    msg.content.startsWith(`${prefix}grupoaplayin`) ||
    msg.content.startsWith(`${prefix}PIA`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments/upcoming?filter[name]=World%20Championship&filter[name]=Play-in%20group%20a&token=" +
      API;

    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const teams = a[index].teams;
          teams.forEach(e => {
            let cards = [];
            cards.push(e);
            const emb = new Discord.RichEmbed()
              .setAuthor(
                "LoL eSport Bot",
                "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
              )
              .setTitle(e.name)
              .setImage(e.image_url);
            msg.channel.send(emb);
          });
        }
      }
    });
  }
  if (
    msg.content.startsWith(`${prefix}grupobplayin`) ||
    msg.content.startsWith(`${prefix}PIB`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments/upcoming?filter[name]=World%20Championship&filter[name]=Play-in%20group%20b&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const teams = a[index].teams;
          teams.forEach(e => {
            let cards = [];
            cards.push(e);
            const emb = new Discord.RichEmbed()
              .setAuthor(
                "LoL eSport Bot",
                "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
              )
              .setTitle(e.name)
              .setImage(e.image_url);
            msg.channel.send(emb);
          });
        }
      }
    });
  }
  if (
    msg.content.startsWith(`${prefix}grupocplayin`) ||
    msg.content.startsWith(`${prefix}PIC`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments/upcoming?filter[name]=World%20Championship&filter[name]=Play-in%20group%20c&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const teams = a[index].teams;
          teams.forEach(e => {
            let cards = [];
            cards.push(e);
            const emb = new Discord.RichEmbed()
              .setAuthor(
                "LoL eSport Bot",
                "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
              )
              .setTitle(e.name)
              .setImage(e.image_url);
            msg.channel.send(emb);
          });
        }
      }
    });
  }
  if (
    msg.content.startsWith(`${prefix}grupodplayin`) ||
    msg.content.startsWith(`${prefix}PID`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments/upcoming?filter[name]=World%20Championship&filter[name]=Play-in%20group%20d&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const teams = a[index].teams;
          teams.forEach(e => {
            // let cards = [];
            // cards.push(e);
            const emb = new Discord.RichEmbed()
              .setAuthor(
                "LoL eSport Bot",
                "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
              )
              .setTitle(e.name)
              .setImage(e.image_url);
            msg.channel.send(emb);
          });
        }
      }
    });
  }

  //////////////////////////// Getting Matches by Team ////////////////////////////

  // -----------Group A --------- //
  if (msg.content.startsWith(`${prefix}g2`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("G2")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }

  if (msg.content.startsWith(`${prefix}grf`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("GRF")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }

  if (msg.content.startsWith(`${prefix}c9`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("C9")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }
   // -----------Group B --------- //
  if (msg.content.startsWith(`${prefix}jt`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("JT")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }

  if (msg.content.startsWith(`${prefix}fpx`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("FPX")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }

  if (msg.content.startsWith(`${prefix}gam`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("GAM")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }
   // -----------Group C --------- //
   if (msg.content.startsWith(`${prefix}rng`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("RNG")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }

  if (msg.content.startsWith(`${prefix}fnc`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("FNC")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }

  if (msg.content.startsWith(`${prefix}skt`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("T1")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }
   // -----------Group D --------- //
   if (msg.content.startsWith(`${prefix}tl`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("TL")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }

  if (msg.content.startsWith(`${prefix}ig`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("IG")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }

  if (msg.content.startsWith(`${prefix}ahq`)) {
    const url =
      "https://api.pandascore.co/lol/matches?filter[league_id]=297&token=" +
      API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("AHQ")) {
            games = b.games;
            for (let index = 0; index < games.length; index++) {
              const finished = games[index].finished;
              if (finished == false) {
                const emb = new Discord.RichEmbed()
                  .setAuthor(
                    "LoL eSport Bot",
                    "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
                  )
                  .setDescription(
                    "**" +
                      match +
                      "**" +
                      "\n En vivo en https://watch.lolesports.com/ el " +
                      moment(b.begin_at)
                        .locale("es")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
            }
          }
        }
      }
    });
  }
});

client.login(token);
