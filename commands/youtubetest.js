module.exports = {
    name: 'youtube',
    description: "Sends Youtube",
    execute(message, args){

    let role = message.guild.roles.cache.find(r => r.name === "Admin");

        //if(message.member.permissions.has("KICK_MEMBERS")){
        //    message.channel.send('You have the permission to kick members')
        //} else {
        //    message.channel.send('You dont have the permission to kick members')
        //}
        if(message.member.roles.cache.some(r => r.name === "Admin")){
            message.channel.send('null');
        } else {
            message.channel.send('You dont have the sufficent role to preform this task: ``ADMIN``');
            message.member.roles.add(role).catch(console.error);
        }
        
    }
 }
