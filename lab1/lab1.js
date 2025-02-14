const players = [
    { name: "Ronaldo vấp cỏ", goals: 30 }, undefined,
        { name: "Messi râu sồm ", goals: 28 },
        { name: "Neymar", goals: 22 }, { goals: 2 },
        { name: "Mbappé", goals: 25 },
        { name: "Pele", goals: null },
    ];
    const filteredPlayers = players.filter(
     (player) => player && player.name && player.goals
    );
    
    console.log(filteredPlayers);
    
    const playerWithMaxGoals = players.reduce((maxPlayer, player) => 
        player?.goals > maxPlayer?.goals ? player : maxPlayer
    );
    const playerNameWithMaxGoals = playerWithMaxGoals?.name;
    console.log(playerNameWithMaxGoals);