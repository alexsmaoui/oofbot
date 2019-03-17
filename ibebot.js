const discord = require ('discord.js');

 var client = new discord.Client();

 const cooldowns = new Set();

 const coolguy = new Set();


 client.on ("ready", () => {
     console.log ("ready!");

     client.user.setActivity ("cheacking 5 servers | !helpp");
     
     

     answered = true;
     cAnswer = "";
     userAnswer = "";
     });

 const fs = require("fs");
 client.msgs = require ("./msgs.json");

 client.on ("guildMemberAdd", member => {

    var role = member.guild.roles.find ("name", "Members");
    member.addRole (role);

 })

 client.on('guildMemberAdd' , member => {
     const channel = member.guild.channels.find ('name', 'welcome');
     if (!channel) return;
    channel.send(`:wave: Welcome to the server, :smile: ${member} :smile:`);
    });
 
client.on('guildMemberRemove' , member => {
    const channel = member.guild.channels.find ('name', 'welcome');
    if (!channel) return;
    channel.send(`:wave: Bye We will miss you ,:sob: ${member} :sob:`);
});

 const prefix = "!";
 client.on ("message", (message) => {

    if (message.author.bot) return;

    let msg = message.content.toLowerCase();

    let mention = message.mentions.users.first() || message.author

    let b = ['thebigkid27@gmail.com:Cardinals27', 'fengyyml@163.com:356126153f', 'andron2002@outlook.com:Andron2001', 'crazyaussy@hotmail.ca:Austyn2002', 'samsung5000@gmail.com:G3d3g4fl3r', 'sinkay_gw2@hotmail.com:soloyo90', 'ascalonn@hotmail.co.uk:12ax7wbB', 'laclin127@gmail.com:hello1234', 'devilsagony3@gmail.com:Happyzone1', 'courtney.valentin@yahoo.com:Kangaroo1964']

    let a = ['thebigkid27@gmail.com:Cardinals27', 'fengyyml@163.com:356126153f', 'andron2002@outlook.com:Andron2001', 'crazyaussy@hotmail.ca:Austyn2002', 'samsung5000@gmail.com:G3d3g4fl3r', 'sinkay_gw2@hotmail.com:soloyo90', 'ascalonn@hotmail.co.uk:12ax7wbB', 'laclin127@gmail.com:hello1234', 'devilsagony3@gmail.com:Happyzone1', 'courtney.valentin@yahoo.com:Kangaroo1964']

    if (msg.startsWith (prefix + "send")) {
        if (mention == null) { return; }
        message.delete();
        mentionMessage = message.content.slice (8)
        mention.send (mentionMessage);
        message.channel.send ("Message has been sent!");
    }
    

    if (answered == false) {
        userAnswer = msg;
        if (userAnswer == cAnswer) {
            message.reply ("got it right! :smile:");
        }
        else {
            message.reply ("got it wrong :sob:");
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }

    if (msg.startsWith(prefix + "quiz")) {
        number = 3;
        var random4 = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        switch (random4) {
            case 1: message.channel.send ("How amazing is Ibbe: \n`A ) Godly \nB ) Amazing \nC ) Okay \nD ) Meh`"); cAnswer = "a"; break;
            case 2: message.channel.send ("How many dogs live on the moon?"); cAnswer = "0"; break;
            case 3: message.channel.send ("When was Kilroy created?"); cAnswer = "1940"; break;
        }
        answered = false;
    }

    function cooldown(user, time) {
        cooldowns.add(user);
        setTimeout(() => cooldowns.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`U have to wait ${time} seconds before using this command again, ${user.tag}`)
       .setColor ("00ff00")
       message.channel.send (embed);
      }      

      function skanherooo(user, time) {
        coolguy.add(user);
        setTimeout(() => coolguy.delete(user), time * 1000);
       embed = new discord.RichEmbed ()
       .setDescription (`U have to wait ${time} seconds before using this command again, ${user.tag}`)
       .setColor ("00ff00")
       message.channel.send (embed);
      }      
    
    
    if (msg.startsWith (prefix + "infosss")) {
        embed = new discord.RichEmbed ()
            .setAuthor ("?? INVITE REWARDS ??")
            .setDescription ("These are the invite rewards ! \n 2: Random account (1+ skin) \n --More income..")
            .setFooter ("This invite rewards was created by Ibbe")
            .setThumbnail ("https://cdn.discordapp.com/attachments/550018287405367306/550712951485759508/JPEG_20190228_155714.jpg")
            .setColor ("00ff00")

        message.channel.send (embed);    
    }

    if (msg.startsWith (prefix + "helpp")) {
        embed2 = new discord.RichEmbed ()
            .setAuthor ("What's the server for ? ?? Looking for info ? here is the commands ?? :")
            .setDescription (" --!infos \n --!helpp \n --!owner \n --!hello \n --!write + write something and then !get \n -- ??More coming soon??...!")
            .setFooter ("This commands was created by Skanheroo.")
            .setThumbnail ("https://cdn.discordapp.com/attachments/550018287405367306/550712951485759508/JPEG_20190228_155714.jpg")
            .setColor ("00ff00")

        message.channel.send (embed2);
    }

    if (msg.startsWith (prefix + "creator")) {
        embed = new discord.RichEmbed ()
        .setAuthor ("Creator of FriendlyBot") 
        .setDescription ("Credits to Skanheroo for : \n coding and creating me !")
        .setFooter ("Thank Skanheroo#5277 for creating me!")
        .setThumbnail ("https://cdn.discordapp.com/attachments/553669028564959290/553856357753946112/unknown.png")
        .setColor ("00ff00")
        message.channel.send (embed);
    }

    if (msg.startsWith (prefix + "kick")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("KICK_MEMBERS")) return;
        let reason = message.content.slice (prefix.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been kicked for" + reason);
        mention.send ("You have been kicked because: \n" + reason).then (d_msg => {
            message.guild.member(mention).kick(reason);
        })
            
    }


    if (msg.startsWith (prefix + "ban")) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        if (mention == null) return;
        if (message.guild.member(mention).hasPermission("BAN_MEMBERS")) return;
        let reason = message.content.slice (prefix.length + mention.toString().length + 5);
        message.channel.send (mention.username + " has been banned for " + reason);
        mention.send ("You have been banned because: \n" + reason).then (d_msg => {
            message.guild.member(mention).ban(reason);
        })
            
    }

    if (msg.startsWith (prefix + "crole") && message.member.hasPermission ("MANAGE_ROLES")) {
        messageSplit = message.content.split (" ", 3);
        roleName = messageSplit[1];
        roleColor = messageSplit[2].toUpperCase();
        addRolePerson = message.member;
        if (mention != null) { addRolePerson = message.guild.member(mention);}
        message.guild.createRole ( { 
            name: roleName,
            color: roleColor,
            mentionable: true,
         }).then (role => addRolePerson.addRole(role));
         message.channel.send ("**The Role** " + roleName + " **has been added.**").then (d_msg => d_msg.delete(3000));
         message.delete(3000);
    }

    if(message.content.startsWith(`${prefix}createchannel`)) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return;
        const args = message.content.slice(15);
        message.guild.createChannel(`${args}`).then(channel => {
            channel.setTopic(`This is Ibbe channel!`)
        })
    }

    if (msg.startsWith ("!owner")) {
        message.channel.send ("This guy is the owner !", {files: ["./images/Ibbbe.PNG"]});
    }

        if (message.content.startsWith ("+gen") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
            if (message.channel.id !== '524572831573344276') return
            if (message.author.bot || coolguy.has(message.author)) return
            mention.send('**Your acc is: **' + a[Math.floor(Math.random() * 10)])
            embed = new discord.RichEmbed ()
            .setDescription ("I Have Successfully Sent You The Fortnite Account ! Please Check Your DMs:thumbup:")
            .setColor ("#")
            message.channel.send(embed);
          skanherooo(message.author, 180);
            }

            if (message.content.startsWith ("+pgen") && message.member.hasPermission ("USE_EXTERNAL_EMOJIS")) {
                if (message.channel.id !== '528718495375163402') return
                if (message.author.bot || cooldowns.has(message.author)) return
                mention.send('**Your Premuim Acc Is: **' + b[Math.floor(Math.random() * 10)])
                embed = new discord.RichEmbed ()
                    .setDescription ("I Have Successfully Sent You The Premuim Fortnite Account ! Please Check Your DMs:thumbup:")
                    .setColor ("#FF00FF")
                    message.channel.send(embed);
              cooldown(message.author, 120);
                }
            
           
    
    if (msg.startsWith ("!write")) {
        editedmessage = message.content.slice (6);

        client.msgs [message.author.username] = {
            message: editedmessage
        }
fs.writeFile ("./msgs.json", JSON.stringify (client.msgs, null, 4), err => {
            if (err) throw err;
            message.channel.send ("Message written!");
        });

    }

    if (msg.startsWith("+stock")) {
        embed = new discord.RichEmbed ()
        .setAuthor("STOCK")
        .setDescription("There Is Currectly 300 Fortnite Account In Stock \n There Is Currently 400 Premuim Forntite Account In Stock")
        .setFooter("We will be restocking everyday!")
        .setColor("#FF00FF")
        message.channel.send(embed);
    }

    if (msg.startsWith ("!get")) {
        let _message = client.msgs[message.author.username].message;
        message.channel.send ("" + _message);
    }


    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "nice")) {
              if (!message.member.hasPermission("ADMINISTRATOR"))  return;

              if (!args[1]) {

                     let embed3 = new discord.RichEmbed()
                         .setDescription(":white_check_mark: | Nice")
                           .setColor("#FF00FF")
                              message.channel.send (embed3);
                              message.delete();

                            } else {


                               let embed4 = new discord.RichEmbed()
                                                .setDescription(':white_check_mark: | Hello..')
                                                    .setColor("#99999")

                                                    message.channel.send (embed4);
                                          message.delete();
                }
              }
});


client.on('message', message => {
    if (message.content.split(' ')[0] == '!dm')
       message.guild.members.forEach( member => {
         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
           member.send(message.content.substr(3));
                                                      message.delete();

                                                    });

                                                  });



client.login (process.env.tunisia);
