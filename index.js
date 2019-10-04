const Discord = require("discord.js");
const { prefix } = require("./config.json");
const client = new Discord.Client();
const Request = require("request");
const moment = require("moment");
const timezone = require("moment-timezone");
moment().locale("es");
moment().tz("Buenos_Aires");


const API = process.env.API;
// // const API = process.env.API;
// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, {
//       "Content-type": "text/plain"
//     });
//     res.write("Hey");
//     res.end();
//   })
//   .listen(4000);

client.login(process.env.token);

client.on("ready", () => {
  console.log("Ready!");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${prefix}calendario`)) {
    msg.channel.send("https://watch.lolesports.com/schedule?leagues=worlds");
  }

  //////////////////////////// Getting Groups ////////////////////////////
  if (
    msg.content.startsWith(`${prefix}grupoa`) ||
    msg.content.startsWith(`${prefix}GA`) ||
    msg.content.startsWith(`${prefix}ga`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments?filter[name]=Group%20A&token=" +
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
    msg.content.startsWith(`${prefix}GB`) ||
    msg.content.startsWith(`${prefix}gb`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments?filter[name]=Group%20B&token=" +
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
    msg.content.startsWith(`${prefix}GC`) ||
    msg.content.startsWith(`${prefix}gc`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments?filter[name]=Group%20C&token=" +
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
    msg.content.startsWith(`${prefix}GD`) ||
    msg.content.startsWith(`${prefix}gd`)
  ) {
    const url =
      "https://api.pandascore.co/lol/tournaments?filter[name]=Group%20D&token=" +
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
    msg.content.startsWith(`${prefix}PIA`) ||
    msg.content.startsWith(`${prefix}pia`)
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
    msg.content.startsWith(`${prefix}PIB`) ||
    msg.content.startsWith(`${prefix}pib`)
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
    msg.content.startsWith(`${prefix}PIC`) ||
    msg.content.startsWith(`${prefix}pic`)
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
    msg.content.startsWith(`${prefix}PID`) ||
    msg.content.startsWith(`${prefix}pid`)
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
  if (
    msg.content.startsWith(`${prefix}g2`) ||
    msg.content.startsWith(`${prefix}G2`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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

  if (
    msg.content.startsWith(`${prefix}grf`) ||
    msg.content.startsWith(`${prefix}GRF`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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

  if (
    msg.content.startsWith(`${prefix}c9`) ||
    msg.content.startsWith(`${prefix}C9`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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
  if (
    msg.content.startsWith(`${prefix}jt`) ||
    msg.content.startsWith(`${prefix}JT`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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

  if (
    msg.content.startsWith(`${prefix}fpx`) ||
    msg.content.startsWith(`${prefix}FPX`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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

  if (
    msg.content.startsWith(`${prefix}gam`) ||
    msg.content.startsWith(`${prefix}GAM`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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
  if (
    msg.content.startsWith(`${prefix}rng`) ||
    msg.content.startsWith(`${prefix}RNG`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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

  if (
    msg.content.startsWith(`${prefix}fnc`) ||
    msg.content.startsWith(`${prefix}FNC`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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

  if (
    msg.content.startsWith(`${prefix}skt`) ||
    msg.content.startsWith(`${prefix}SKT`) ||
    msg.content.startsWith(`${prefix}T1`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")

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
  if (
    msg.content.startsWith(`${prefix}tl`) ||
    msg.content.startsWith(`${prefix}TL`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")
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

  if (
    msg.content.startsWith(`${prefix}ig`) ||
    msg.content.startsWith(`${prefix}IG`)
  ) {
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
                        .tz("America/Argentina/Buenos_Aires")
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
                        .tz("America/Argentina/Buenos_Aires")
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

  ////// Play In /////
  if (
    msg.content.startsWith(`${prefix}isg`) ||
    msg.content.startsWith(`${prefix}ISG`)
  ) {
    const url = "https://api.pandascore.co/lol/matches/upcoming?token=" + API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("ISG")) {
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
                        .tz("America/Argentina")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send(emb);
              }
              if (finished == true) {
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
                        .tz("America/Argentina/Buenos_Aires")
                        .format("dddd DD, MMMM, HH:mm")
                  );
                msg.channel.send("||" + emb + "||");
              }
            }
          }
        }
      }
    });
  }

  if (
    msg.content.startsWith(`${prefix}DWG`) ||
    msg.content.startsWith(`${prefix}dwg`)
  ) {
    const url = "https://api.pandascore.co/lol/matches/upcoming?token=" + API;
    Request.get(url, (err, req, res) => {
      if (err) {
        console.error(err);
      } else {
        let a = [];
        a = JSON.parse(res);
        for (let index = 0; index < a.length; index++) {
          const b = a[index];
          const match = a[index].name;
          if (match.includes("DWG")) {
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
                        .tz("America/Argentina/Buenos_Aires")
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

  // Resultados Damwon //
  if (msg.content.startsWith(`${prefix}resdwg`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("DWG")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados Isuru //
  if (msg.content.startsWith(`${prefix}resisg`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("ISG")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }

  // Resultados Griffin //
  if (msg.content.startsWith(`${prefix}resgrf`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("GRF")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }

  // Resultados G2 //
  if (msg.content.startsWith(`${prefix}resg2`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("G2")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }

  // Resultados Cloud9 //
  if (msg.content.startsWith(`${prefix}resc9`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("C9")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados FPX //
  if (msg.content.startsWith(`${prefix}resfpx`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("FPX")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados FPX //
  if (msg.content.startsWith(`${prefix}resfpx`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("FPX")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados JT //
  if (msg.content.startsWith(`${prefix}resjt`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("JT")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados GAM //
  if (msg.content.startsWith(`${prefix}resgam`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("GAM")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados RNG //
  if (msg.content.startsWith(`${prefix}resrng`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("RNG")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados FNC //
  if (msg.content.startsWith(`${prefix}resfnc`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("FNC")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados T1 //
  if (
    msg.content.startsWith(`${prefix}resskt`) ||
    msg.content.startsWith(`${prefix}rest1`)
  ) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("T1")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados TL //
  if (msg.content.startsWith(`${prefix}restl`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("TL")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados IG //
  if (msg.content.startsWith(`${prefix}resig`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("IG")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
  // Resultados AHQ //
  if (msg.content.startsWith(`${prefix}resahq`)) {
    const url2 =
      "https://api.pandascore.co/lol/matches/past?filter[league_id]=297&finished[true]&token=" +
      API;
    Request.get(url2, (err, req, res) => {
      if (err) {
        console.error(err);
      }
      if (!res) {
        msg.channel.send("No tiene partidos jugados");
      }
      let a = [];
      a = JSON.parse(res);
      for (let index = 0; index < a.length; index++) {
        const b = a[index];
        const m = a[index].name;
        if (m.includes("AHQ")) {
          const emb = new Discord.RichEmbed()
            .setAuthor(
              "LoL eSport Bot",
              "https://www.sccpre.cat/mypng/detail/405-4055154_syndra-syndralol-starguardian-starguardians-leagueoflegends-star-guardian-syndra.png"
            )
            .setDescription(
              "**" +
                b.name +
                "**" +
                "\n Terminó el " +
                moment(b.end_at)
                  .locale("es")
                  .tz("America/Argentina/Buenos_Aires")
                  .format("dddd DD, MMMM, HH:mm") +
                " **Ganador:** ||" +
                b.winner.acronym +
                "||"
            );
          msg.channel.send(emb);
        }
      }
    });
  }
});
