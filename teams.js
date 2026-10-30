const teams = {

    "Amazon": [
        {
            position: "Eagle Warrior",
            max: 16,
            cost: 50000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge"]
        }
        ,
        {
            position: "Jaguar Warrior",
            max: 2,
            cost: 110000,
            ma: 6,
            st: 4,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Defensive", "Dodge"]
        }
        ,
        {
            position: "Piranha Warrior",
            max: 2,
            cost: 90000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "Hit and Run", "Jump up"]
        }
        ,
        {
            position: "Python Warrior",
            max: 2,
            cost: 80000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "8+",
            skills: ["Dodge", "On the Ball", "Pass", "Safe Pass"]
        }
    ],

    "Black Orc": [
        {
            position: "Goblin Bruiser",
            max: 16,
            cost: 45000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "Right Stuff*", "Stunty*", "Thick Skull"]
        }
        ,
        {
            position: "Black Orc",
            max: 6,
            cost: 90000,
            ma: 4,
            st: 4,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Brawler", "Grab"]
        }
        ,
        {
            position: "Trained Troll",
            max: 1,
            cost: 115000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "5+",
            av: "10+",
            skills: ["Always Hungry*", "Mighty Blow", "Projectile Vomit", "Really Stupid*", "Regeneration", "Throw Team-mate"]
        }
    ],

    "Bretonnian": [
        {
            position: "Bretonnian Squire",
            max: 16,
            cost: 50000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Wrestle"]
        }
        ,
        {
            position: "Bretonnian Knight Thrower",
            max: 2,
            cost: 80000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "9+",
            skills: ["Dauntless", "Nerves of Steel", "Pass"]
        }
        ,
        {
            position: "Bretonnian Knight Catcher",
            max: 2,
            cost: 85000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Catch", "Dauntless", "Nerves of Steel"]
        }
        ,
        {
            position: "Grail Knight",
            max: 2,
            cost: 95000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "10+",
            skills: ["Block", "Dauntless", "Steady Footing"]
        }
    ],

    "Chaos Chosen": [
        {
            position: "Beastman Lineman",
            max: 16,
            cost: 55000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "9+",
            skills: ["Horns", "Thick Skull"]
        }
        ,
        {
            position: "Chaos Chosen Blocker",
            max: 4,
            cost: 100000,
            ma: 5,
            st: 4,
            ag: "3+",
            pa: "5+",
            av: "10+",
            skills: ["Arm Bar"]
        }
        ,
        {
            position: "Chaos Ogre",
            max: 1,
            cost: 140000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Bone Head*", "Loner (4+)*", "Mighty Blow", "Thick Skull", "Throw Team-mate"]
        }
        ,
        {
            position: "Chaos Troll",
            max: 1,
            cost: 115000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "5+",
            av: "10+",
            skills: ["Always Hungry*", "Loner (4+)*", "Mighty Blow", "Projectile Vomit", "Really Stupid*", "Regeneration", "Throw Team-mate"]
        }
        ,
        {
            position: "Minotaur",
            max: 1,
            cost: 150000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Frenzy*", "Horns", "Loner (4+)*", "Mighty Blow", "Thick Skull", "Unchannelled Fury*"]
        }
    ],

    "Chaos Dwarf": [
        {
            position: "Hobgoblin Lineman",
            max: 16,
            cost: 40000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: []
        }
        ,
        {
            position: "Sneaky Stabba",
            max: 2,
            cost: 60000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "5+",
            av: "8+",
            skills: ["Shadowing", "Stab"]
        }
        ,
        {
            position: "Chaos Dwarf Blocker",
            max: 4,
            cost: 70000,
            ma: 4,
            st: 3,
            ag: "4+",
            pa: "6+",
            av: "10+",
            skills: ["Block", "Iron Hard Skin", "Thick Skull"]
        }
        ,
        {
            position: "Flamesmith",
            max: 2,
            cost: 80000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "6+",
            av: "10+",
            skills: ["Brawler", "Breathe Fire", "Disturbing Presence*", "Thick Skull"]
        }
        ,
        {
            position: "Bull Centaur",
            max: 2,
            cost: 130000,
            ma: 6,
            st: 4,
            ag: "4+",
            pa: "6+",
            av: "10+",
            skills: ["Sprint", "Sure Feet", "Thick Skull", "Unsteady*"]
        }
        ,
        {
            position: "Minotaur",
            max: 1,
            cost: 150000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Frenzy*", "Horns", "Loner (4+)*", "Mighty Blow", "Thick Skull", "Unchannelled Fury*"]
        }
    ],

    "Chaos Renegades": [
        {
            position: "Renegade Human",
            max: 16,
            cost: 50000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Animosity (all)*"]
        }
        ,
        {
            position: "Renegade Human Thrower",
            max: 1,
            cost: 75000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "9+",
            skills: ["Animosity (all)*", "Pass", "Sure Hands"]
        }
        ,
        {
            position: "Renegade Orc",
            max: 1,
            cost: 50000,
            ma: 5,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "10+",
            skills: ["Animosity (all)*"]
        }
        ,
        {
            position: "Renegade Skaven",
            max: 1,
            cost: 50000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Animosity (all)*"]
        }
        ,
        {
            position: "Renegade Goblin",
            max: 1,
            cost: 40000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Animosity (all)*", "Dodge", "Right Stuff*", "Stunty*"]
        }
        ,
        {
            position: "Renegade Dark Elf",
            max: 1,
            cost: 65000,
            ma: 6,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "9+",
            skills: ["Animosity (all)*"]
        }
        ,
        {
            position: "Minotaur",
            max: 1,
            cost: 150000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Frenzy*", "Horns", "Loner (4+)*", "Mighty Blow", "Thick Skull", "Unchannelled Fury*"]
        }
        ,
        {
            position: "Chaos Troll",
            max: 1,
            cost: 140000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Always Hungry*", "Loner (4+)*", "Mighty Blow", "Projectile Vomit", "Really Stupid*", "Regeneration", "Throw Team-mate"]
        }
        ,
        {
            position: "Rat Ogre",
            max: 1,
            cost: 150000,
            ma: 6,
            st: 5,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Animal Savagery*", "Frenzy*", "Loner (4+)*", "Mighty Blow", "Prehensile Tail"]
        }
        ,
        {
            position: "Chaos Ogre",
            max: 1,
            cost: 115000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "5+",
            av: "10+",
            skills: ["Bone Head*", "Loner (3+)*", "Mighty Blow", "Thick Skull", "Throw Team-mate"]
        }
    ],

    "Dark Elf": [
        {
            position: "Dark Elf Lineman",
            max: 16,
            cost: 65000,
            ma: 6,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "9+",
            skills: []
        }
        ,
        {
            position: "Dark Elf Runner",
            max: 2,
            cost: 80000,
            ma: 7,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "8+",
            skills: ["Dump-off", "Punt"]
        }
        ,
        {
            position: "Dark Elf Assassin",
            max: 2,
            cost: 90000,
            ma: 7,
            st: 3,
            ag: "2+",
            pa: "4+",
            av: "8+",
            skills: ["Hit and Run", "Shadowing", "Stab"]
        }
        ,
        {
            position: "Dark Elf Blitzer",
            max: 2,
            cost: 105000,
            ma: 7,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "9+",
            skills: ["Block"]
        }
        ,
        {
            position: "Witch Elf",
            max: 2,
            cost: 110000,
            ma: 7,
            st: 3,
            ag: "2+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "Frenzy*", "Jump up"]
        }
    ],

    "Dwarf": [
        {
            position: "Dwarf Lineman",
            max: 16,
            cost: 70000,
            ma: 4,
            st: 3,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Block", "Defensive", "Thick Skull"]
        }
        ,
        {
            position: "Dwarf Runner",
            max: 2,
            cost: 80000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Sprint", "Sure Hands", "Thick Skull"]
        }
        ,
        {
            position: "Troll Slayer",
            max: 2,
            cost: 95000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "5+",
            av: "9+",
            skills: ["Block", "Dauntless", "Frenzy*", "Hatred (Troll)*", "Thick Skull"]
        }
        ,
        {
            position: "Dwarf Blitzer",
            max: 2,
            cost: 100000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "4+",
            av: "10+",
            skills: ["Block", "Diving Tackle", "Tackle", "Thick Skull"]
        }
        ,
        {
            position: "Deathroller",
            max: 1,
            cost: 170000,
            ma: 5,
            st: 7,
            ag: "5+",
            pa: "-",
            av: "11+",
            skills: ["Break Tackle", "Dirty Player", "Juggernaut", "Loner (4+)*", "Mighty Blow", "No Ball*", "Secret Weapon*", "Stand Firm"]
        }
    ],

    "Elven Union": [
        {
            position: "Elf Lineman",
            max: 16,
            cost: 65000,
            ma: 6,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "8+",
            skills: ["Fumblerooski"]
        }
        ,
        {
            position: "Elf Thrower",
            max: 2,
            cost: 75000,
            ma: 6,
            st: 3,
            ag: "2+",
            pa: "2+",
            av: "8+",
            skills: ["Hail Mary Pass", "Pass"]
        }
        ,
        {
            position: "Elf Catcher",
            max: 2,
            cost: 100000,
            ma: 8,
            st: 3,
            ag: "2+",
            pa: "4+",
            av: "8+",
            skills: ["Catch", "Diving Catch", "Nerves of Steel"]
        }
        ,
        {
            position: "Elf Blitzer",
            max: 2,
            cost: 115000,
            ma: 7,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "9+",
            skills: ["Block", "Sidestep"]
        }
    ],

    "Gnome": [
        {
            position: "Gnome Lineman",
            max: 16,
            cost: 40000,
            ma: 5,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "7+",
            skills: ["Jump up", "Right Stuff*", "Stunty*", "Wrestle"]
        }
        ,
        {
            position: "Gnome Illusionist",
            max: 2,
            cost: 50000,
            ma: 5,
            st: 2,
            ag: "3+",
            pa: "3+",
            av: "7+",
            skills: ["Jump up", "Stunty*", "Trickster", "Wrestle"]
        }
        ,
        {
            position: "Gnome Beastmaster",
            max: 2,
            cost: 55000,
            ma: 5,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Guard", "Jump up", "Stunty*", "Wrestle"]
        }
        ,
        {
            position: "Woodland Fox",
            max: 2,
            cost: 50000,
            ma: 7,
            st: 2,
            ag: "2+",
            pa: "-",
            av: "6+",
            skills: ["Dodge", "My Ball*", "Sidestep", "Stunty*"]
        }
        ,
        {
            position: "Altern Forest Treeman",
            max: 1,
            cost: 120000,
            ma: 2,
            st: 6,
            ag: "5+",
            pa: "5+",
            av: "11+",
            skills: ["Loner (4+)*", "Mighty Blow", "Stand Firm", "Strong Arm", "Take Root*", "Thick Skull", "Throw Team-mate", "Timmm-ber!"]
        }
    ],

    "Goblin": [
        {
            position: "Goblin Lineman",
            max: 16,
            cost: 40000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "Right Stuff*", "Stunty*"]
        }
        ,
        {
            position: "'Ooligan",
            max: 1,
            cost: 60000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "5+",
            av: "8+",
            skills: ["Dirty Player", "Disturbing Presence*", "Dodge", "Right Stuff*", "Stunty*", "Taunt"]
        }
        ,
        {
            position: "Bomma",
            max: 1,
            cost: 45000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Bombardier", "Dodge", "Secret Weapon*", "Stunty*"]
        }
        ,
        {
            position: "Doom Diver",
            max: 1,
            cost: 65000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "6+",
            av: "8+",
            skills: ["Dodge", "Right Stuff*", "Stunty*", "Swoop"]
        }
        ,
        {
            position: "Fanatic",
            max: 1,
            cost: 70000,
            ma: 3,
            st: 7,
            ag: "3+",
            pa: "-",
            av: "8+",
            skills: ["Ball & Chain*", "No Ball*", "Secret Weapon*", "Stunty*"]
        }
        ,
        {
            position: "Loony",
            max: 1,
            cost: 40000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "-",
            av: "8+",
            skills: ["Chainsaw*", "No Ball*", "Secret Weapon*", "Stunty*"]
        }
        ,
        {
            position: "Pogoer",
            max: 1,
            cost: 75000,
            ma: 7,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "Pogo", "Stunty*"]
        }
        ,
        {
            position: "Trained Troll",
            max: 2,
            cost: 115000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "5+",
            av: "10+",
            skills: ["Always Hungry*", "Mighty Blow", "Projectile Vomit", "Really Stupid*", "Regeneration", "Throw Team-mate"]
        }
    ],

    "Halfling": [
        {
            position: "Halfling Hopeful",
            max: 16,
            cost: 30000,
            ma: 5,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "7+",
            skills: ["Dodge", "Right Stuff*", "Stunty*"]
        }
        ,
        {
            position: "Halfling Hefty",
            max: 2,
            cost: 50000,
            ma: 5,
            st: 2,
            ag: "3+",
            pa: "3+",
            av: "8+",
            skills: ["Dodge", "Fend", "Stunty*"]
        }
        ,
        {
            position: "Halfling Catcher",
            max: 2,
            cost: 55000,
            ma: 5,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "7+",
            skills: ["Catch", "Dodge", "Right Stuff*", "Sprint", "Stunty*"]
        }
        ,
        {
            position: "Altern Forest Treeman",
            max: 1,
            cost: 120000,
            ma: 2,
            st: 6,
            ag: "5+",
            pa: "5+",
            av: "11+",
            skills: ["Loner (4+)*", "Mighty Blow", "Stand Firm", "Strong Arm", "Take Root*", "Thick Skull", "Throw Team-mate", "Timmm-ber!"]
        }
    ],

    "High Elf": [
        {
            position: "High Elf Lineman",
            max: 16,
            cost: 65000,
            ma: 6,
            st: 3,
            ag: "2+",
            pa: "2+",
            av: "9+",
            skills: []
        }
        ,
        {
            position: "Phoenix Warrior",
            max: 2,
            cost: 90000,
            ma: 6,
            st: 3,
            ag: "2+",
            pa: "2+",
            av: "9+",
            skills: ["Cloud Burster", "Pass", "Safe Pass"]
        }
        ,
        {
            position: "White Lion",
            max: 2,
            cost: 110000,
            ma: 7,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "9+",
            skills: ["Claws", "Wrestle"]
        }
        ,
        {
            position: "Dragon Prince",
            max: 2,
            cost: 110000,
            ma: 8,
            st: 3,
            ag: "2+",
            pa: "4+",
            av: "9+",
            skills: ["Block", "My Ball*", "Steady Footing"]
        }
    ],

    "Human": [
        {
            position: "Human Lineman",
            max: 16,
            cost: 50000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: []
        }
        ,
        {
            position: "Human Thrower",
            max: 2,
            cost: 75000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "9+",
            skills: ["Pass", "Sure Hands"]
        }
        ,
        {
            position: "Human Catcher",
            max: 2,
            cost: 75000,
            ma: 8,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Catch", "Dodge"]
        }
        ,
        {
            position: "Human Blitzer",
            max: 2,
            cost: 85000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Block", "Tackle"]
        }
        ,
        {
            position: "Halfling Hopeful",
            max: 3,
            cost: 30000,
            ma: 5,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "7+",
            skills: ["Dodge", "Right Stuff*", "Stunty*"]
        }
        ,
        {
            position: "Ogre",
            max: 1,
            cost: 140000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Bone Head*", "Loner (3+)*", "Mighty Blow", "Thick Skull", "Throw Team-mate"]
        }
    ],

    "Imperial Nobiliti": [
        {
            position: "Imperial Retainer",
            max: 16,
            cost: 45000,
            ma: 5,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Stand Firm", "Wrestle"]
        }
        ,
        {
            position: "Body Guard",
            max: 4,
            cost: 85000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Fend"]
        }
        ,
        {
            position: "Imperial Thrower",
            max: 2,
            cost: 78000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "2+",
            av: "9+",
            skills: ["Give and Go", "Pass", "Pro"]
        }
        ,
        {
            position: "Noble Blitzer",
            max: 2,
            cost: 90000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Block", "Catch", "Pro"]
        }
        ,
        {
            position: "Ogre",
            max: 1,
            cost: 140000,
            ma: 8,
            st: 3,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Bone Head*", "Loner (3+)*", "Mighty Blow", "Thick Skull", "Throw Team-mate"]
        }
    ],

    "Khorne": [
        {
            position: "Bloodborn Marauder",
            max: 16,
            cost: 50000,
            ma: 6,
            st: 4,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Frenzy*"]
        }
        ,
        {
            position: "Bloodseeker",
            max: 4,
            cost: 105000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "6+",
            av: "10+",
            skills: ["Frenzy*"]
        }
        ,
        {
            position: "Khorngor",
            max: 2,
            cost: 70000,
            ma: 6,
            st: 4,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Horns", "Juggernaut", "Jump up", "Thick Skull"]
        }
        ,
        {
            position: "Bloodspawn",
            max: 1,
            cost: 160000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Claws", "Frenzy*", "Loner (4+)*", "Mighty Blow", "Unchannelled Fury*"]
        }
    ],

    "Lizardmen": [
        {
            position: "Skink Lineman",
            max: 16,
            cost: 60000,
            ma: 8,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "On the Ball", "Shadowing", "Stunty*"]
        }
        ,
        {
            position: "Chameleon Skink",
            max: 2,
            cost: 70000,
            ma: 7,
            st: 2,
            ag: "3+",
            pa: "3+",
            av: "8+",
            skills: ["Dodge", "Stunty*"]
        }
        ,
        {
            position: "Saurus Blocker",
            max: 6,
            cost: 90000,
            ma: 6,
            st: 4,
            ag: "5+",
            pa: "6+",
            av: "10+",
            skills: ["Juggernaut", "Unsteady*"]
        }
        ,
        {
            position: "Kroxigor",
            max: 1,
            cost: 140000,
            ma: 6,
            st: 5,
            ag: "5+",
            pa: "6+",
            av: "10+",
            skills: ["Bone Head*", "Loner (4+)*", "Mighty Blow", "Prehensile Tail", "Thick Skull"]
        }
    ],

    "Necromantic Horror": [
        {
            position: "Zombie Lineman",
            max: 16,
            cost: 40000,
            ma: 4,
            st: 3,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Eye Gouge", "Regeneration", "Unsteady*"]
        }
        ,
        {
            position: "Ghoul Runner",
            max: 2,
            cost: 75000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "8+",
            skills: ["Dodge", "Regeneration"]
        }
        ,
        {
            position: "Wraith",
            max: 2,
            cost: 85000,
            ma: 8,
            st: 3,
            ag: "3+",
            pa: "-",
            av: "9+",
            skills: ["Block", "Foul Appearance", "No Ball*", "Regeneration", "Sidestep"]
        }
        ,
        {
            position: "Flesh Golem",
            max: 2,
            cost: 110000,
            ma: 4,
            st: 4,
            ag: "4+",
            pa: "6+",
            av: "10+",
            skills: ["Regeneration", "Stand Firm", "Thick Skull", "Unsteady*"]
        }
        ,
        {
            position: "Werewolf",
            max: 2,
            cost: 120000,
            ma: 8,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "9+",
            skills: ["Claws", "Frenzy*", "Regeneration"]
        }
    ],

    "Norse": [
        {
            position: "Beer Boar",
            max: 2,
            cost: 20000,
            ma: 5,
            st: 1,
            ag: "3+",
            pa: "-",
            av: "6+",
            skills: ["Dodge", "No Ball*", "Pick-me-up", "Stunty*", "Titchy*"]
        }
        ,
        {
            position: "Norse Raider",
            max: 16,
            cost: 50000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Block", "Drunkard*", "Thick Skull", "Unsteady*"]
        }
        ,
        {
            position: "Norse Berserker",
            max: 2,
            cost: 90000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "5+",
            av: "8+",
            skills: ["Block", "Frenzy*", "Jump up"]
        }
        ,
        {
            position: "Valkyrie",
            max: 2,
            cost: 95000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "8+",
            skills: ["Catch", "Dauntless", "Pass", "Strip Ball"]
        }
        ,
        {
            position: "Ulfwerener",
            max: 2,
            cost: 105000,
            ma: 6,
            st: 4,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Claws", "Disturbing Presence*", "Frenzy*", "Loner (4+)*", "Unchannelled Fury*"]
        }
    ],

    "Nurgle": [
        {
            position: "Rotter Lineman",
            max: 16,
            cost: 40000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Decay*", "Plague Ridden"]
        }
        ,
        {
            position: "Pestigor",
            max: 2,
            cost: 70000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Horns", "Plague Ridden", "Regeneration", "Steady Footing", "Thick Skull"]
        }
        ,
        {
            position: "Bloater",
            max: 4,
            cost: 110000,
            ma: 4,
            st: 4,
            ag: "4+",
            pa: "6+",
            av: "10+",
            skills: ["Disturbing Presence*", "Foul Appearance", "Plague Ridden", "Regeneration", "Stand Firm", "Unsteady*"]
        }
        ,
        {
            position: "Rotspawn",
            max: 1,
            cost: 140000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "6+",
            av: "10+",
            skills: ["Disturbing Presence*", "Foul Appearance", "Loner (4+)*", "Mighty Blow", "Pick-me-up", "Plague Ridden", "Really Stupid*", "Regeneration", "Tentacles"]
        }
    ],

    "Ogre": [
        {
            position: "Gnoblar Linemen",
            max: 16,
            cost: 15000,
            ma: 5,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "6+",
            skills: ["Dodge", "Right Stuff*", "Sidestep", "Stunty*", "Titchy*"]
        }
        ,
        {
            position: "Ogre Blocker",
            max: 5,
            cost: 140000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Bone Head*", "Mighty Blow", "Thick Skull", "Throw Team-mate"]
        }
        ,
        {
            position: "Ogre Runt Punter",
            max: 1,
            cost: 145000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "4+",
            av: "10+",
            skills: ["Bone Head*", "Kick Team-mate", "Mighty Blow", "Thick Skull"]
        }
    ],

    "Old World Alliance": [
        {
            position: "Dwarf Blitzer",
            max: 1,
            cost: 100000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "4+",
            av: "10+",
            skills: ["Block", "Diving Tackle", "Tackle", "Thick Skull"]
        }
        ,
        {
            position: "Dwarf Lineman",
            max: 3,
            cost: 70000,
            ma: 4,
            st: 3,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Block", "Defensive", "Thick Skull"]
        }
        ,
        {
            position: "Dwarf Runner",
            max: 1,
            cost: 80000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Sprint", "Sure Hands", "Thick Skull"]
        }
        ,
        {
            position: "Halfling Hopeful",
            max: 3,
            cost: 30000,
            ma: 5,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "7+",
            skills: ["Dodge", "Right Stuff*", "Stunty*"]
        }
        ,
        {
            position: "Human Blitzer",
            max: 1,
            cost: 85000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Block", "Tackle"]
        }
        ,
        {
            position: "Human Catcher",
            max: 1,
            cost: 75000,
            ma: 8,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Catch", "Dodge"]
        }
        ,
        {
            position: "Human Lineman",
            max: 16,
            cost: 50000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: []
        }
        ,
        {
            position: "Human Thrower",
            max: 1,
            cost: 75000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "9+",
            skills: ["Pass", "Sure Hands"]
        }
        ,
        {
            position: "Troll Slayer",
            max: 1,
            cost: 95000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "5+",
            av: "9+",
            skills: ["Block", "Dauntless", "Frenzy*", "Hatred (Troll)*", "Thick Skull"]
        }
        ,
        {
            position: "Altern Forest Treeman",
            max: 1,
            cost: 120000,
            ma: 2,
            st: 6,
            ag: "5+",
            pa: "5+",
            av: "11+",
            skills: ["Loner (4+)*", "Mighty Blow", "Stand Firm", "Strong Arm", "Take Root*", "Thick Skull", "Throw Team-mate", "Timmm-ber!"]
        }
        ,
        {
            position: "Ogre",
            max: 1,
            cost: 140000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "5+",
            av: "10+",
            skills: ["Bone Head*", "Loner (3+)*", "Mighty Blow", "Thick Skull", "Throw Team-mate"]
        }
    ],

    "Orc": [
        {
            position: "Big Un Blocker",
            max: 2,
            cost: 95000,
            ma: 5,
            st: 4,
            ag: "4+",
            pa: "6+",
            av: "10+",
            skills: ["Mighty Blow", "Taunt", "Thick Skull", "Unsteady*"]
        }
        ,
        {
            position: "Goblin Lineman",
            max: 4,
            cost: 40000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "Right Stuff*", "Stunty*"]
        }
        ,
        {
            position: "Orc Blitzer",
            max: 2,
            cost: 85000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "10+",
            skills: ["Block", "Break Tackle"]
        }
        ,
        {
            position: "Orc Lineman",
            max: 16,
            cost: 50000,
            ma: 5,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "10+",
            skills: []
        }
        ,
        {
            position: "Orc Thrower",
            max: 2,
            cost: 75000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "9+",
            skills: ["Pass", "Sure Hands"]
        }
        ,
        {
            position: "Troll",
            max: 1,
            cost: 115000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "5+",
            av: "10+",
            skills: ["Always Hungry*", "Loner (4+)*", "Mighty Blow", "Projectile Vomit", "Really Stupid*", "Regeneration", "Throw Team-mate"]
        }
    ],

    "Shambling Undead": [
        {
            position: "Ghoul Runner",
            max: 2,
            cost: 75000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "3+",
            av: "8+",
            skills: ["Dodge", "Regeneration"]
        }
        ,
        {
            position: "Mummy",
            max: 2,
            cost: 125000,
            ma: 3,
            st: 5,
            ag: "5+",
            pa: "6+",
            av: "10+",
            skills: ["Mighty Blow", "Regeneration"]
        }
        ,
        {
            position: "Skeleton Lineman",
            max: 16,
            cost: 40000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "6+",
            av: "8+",
            skills: ["Regeneration", "Thick Skull"]
        }
        ,
        {
            position: "Wight Blitzer",
            max: 2,
            cost: 95000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "5+",
            av: "9+",
            skills: ["Block", "Regeneration", "Tackle", "Thick Skull"]
        }
        ,
        {
            position: "Zombie Lineman",
            max: 16,
            cost: 40000,
            ma: 4,
            st: 3,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Eye Gouge", "Regeneration", "Unsteady"]
        }
    ],

    "Skaven": [
        {
            position: "Gutter Runner",
            max: 2,
            cost: 85000,
            ma: 9,
            st: 2,
            ag: "2+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "Stab"]
        }
        ,
        {
            position: "Skaven Blitzer",
            max: 2,
            cost: 90000,
            ma: 8,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Block", "Strip Ball"]
        }
        ,
        {
            position: "Skaven Clanrat",
            max: 16,
            cost: 50000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: []
        }
        ,
        {
            position: "Skaven Thrower",
            max: 2,
            cost: 80000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "2+",
            av: "8+",
            skills: ["Pass", "Sure Hands"]
        }
        ,
        {
            position: "Rat Ogre",
            max: 1,
            cost: 150000,
            ma: 6,
            st: 5,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Animal Savagery*", "Frenzy*", "Loner (4+)*", "Mighty Blow", "Prehensile Tail"]
        }
    ],

    "Slann": [
        {
            position: "Slann Blitzer",
            max: 2,
            cost: 100000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Diving Tackle", "Hit and Run", "Jump up", "Pogo"]
        }
        ,
        {
            position: "Slann Catcher",
            max: 2,
            cost: 80000,
            ma: 7,
            st: 2,
            ag: "2+",
            pa: "3+",
            av: "8+",
            skills: ["Diving Catch", "On the Ball", "Pogo", "Very Long Legs"]
        }
        ,
        {
            position: "Slann Lineman",
            max: 16,
            cost: 60000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Pogo"]
        }
        ,
        {
            position: "Kroxigor",
            max: 1,
            cost: 140000,
            ma: 6,
            st: 5,
            ag: "5+",
            pa: "6+",
            av: "10+",
            skills: ["Bone Head*", "Loner (4+)*", "Mighty Blow", "Prehensile Tail", "Thick Skull"]
        }
    ],

    "Snotling": [
        {
            position: "Fun Hoppa",
            max: 2,
            cost: 20000,
            ma: 6,
            st: 1,
            ag: "3+",
            pa: "4+",
            av: "6+",
            skills: ["Dodge", "Pogo", "Right Stuff*", "Sidestep", "Stunty*"]
        }
        ,
        {
            position: "Fungus Flinga",
            max: 2,
            cost: 30000,
            ma: 5,
            st: 1,
            ag: "3+",
            pa: "4+",
            av: "6+",
            skills: ["Bombardier", "Dodge", "Right Stuff*", "Secret Weapon*", "Sidestep", "Stunty*", "Titchy*"]
        }
        ,
        {
            position: "Pump Wagon",
            max: 2,
            cost: 100000,
            ma: 5,
            st: 5,
            ag: "5+",
            pa: "6+",
            av: "9+",
            skills: ["Dirty Player", "Juggernaut", "Mighty Blow", "Really Stupid*", "Stand Firm"]
        }
        ,
        {
            position: "Snotling Lineman",
            max: 16,
            cost: 15000,
            ma: 5,
            st: 1,
            ag: "3+",
            pa: "4+",
            av: "6+",
            skills: ["Dodge", "Insignificant*", "Right Stuff*", "Sidestep", "Stunty*", "Titchy*"]
        }
        ,
        {
            position: "Stilty Runna",
            max: 2,
            cost: 20000,
            ma: 6,
            st: 1,
            ag: "3+",
            pa: "4+",
            av: "6+",
            skills: ["Dodge", "Right Stuff*", "Sidestep", "Sprint", "Stunty*"]
        }
        ,
        {
            position: "Trained Troll",
            max: 2,
            cost: 115000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "5+",
            av: "10+",
            skills: ["Always Hungry*", "Mighty Blow", "Projectile Vomit", "Really Stupid*", "Regeneration", "Throw Team-mate"]
        }
    ],

    "Tomb Kings": [
        {
            position: "Skeleton Linemen",
            max: 16,
            cost: 40000,
            ma: 5,
            st: 3,
            ag: "4+",
            pa: "8+",
            av: "8+",
            skills: ["Regeneration", "Thick Skull"]
        }
        ,
        {
            position: "Tomb Guardian",
            max: 4,
            cost: 115000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "10+",
            av: "10+",
            skills: ["Brawler", "Decay*", "Regeneration"]
        }
        ,
        {
            position: "Tomb Kings Blitzer",
            max: 2,
            cost: 85000,
            ma: 6,
            st: 3,
            ag: "4+",
            pa: "9+",
            av: "9+",
            skills: ["Block", "Regeneration", "Thick Skull"]
        }
        ,
        {
            position: "Tomb Kings Thrower",
            max: 2,
            cost: 65000,
            ma: 6,
            st: 3,
            ag: "4+",
            pa: "9+",
            av: "9+",
            skills: ["Pass", "Regeneration", "Sure Hands", "Thick Skull"]
        }
    ],

    "Underworld Denizens": [
        {
            position: "Goblin Lineman",
            max: 16,
            cost: 40000,
            ma: 6,
            st: 2,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Dodge", "Right Stuff*", "Stunty*"]
        }
        ,
        {
            position: "Gutter Runner",
            max: 1,
            cost: 85000,
            ma: 9,
            st: 2,
            ag: "2+",
            pa: "4+",
            av: "8+",
            skills: ["Animosity (Goblin)*", "Dodge", "Stab"]
        }
        ,
        {
            position: "Skaven Blitzer",
            max: 1,
            cost: 90000,
            ma: 8,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "9+",
            skills: ["Animosity (Goblin)*", "Block", "Strip Ball"]
        }
        ,
        {
            position: "Skaven Clanrat",
            max: 3,
            cost: 50000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: ["Animosity (Goblin)*"]
        }
        ,
        {
            position: "Skaven Thrower",
            max: 1,
            cost: 80000,
            ma: 7,
            st: 3,
            ag: "3+",
            pa: "2+",
            av: "8+",
            skills: ["Animosity (Goblin)*", "Pass", "Sure Hands"]
        }
        ,
        {
            position: "Snotling Lineman",
            max: 6,
            cost: 15000,
            ma: 5,
            st: 1,
            ag: "3+",
            pa: "4+",
            av: "6+",
            skills: ["Dodge", "Insignificant*", "Right Stuff*", "Sidestep", "Stunty*", "Titchy*"]
        }
        ,
        {
            position: "Rat Ogre",
            max: 1,
            cost: 150000,
            ma: 6,
            st: 5,
            ag: "4+",
            pa: "6+",
            av: "9+",
            skills: ["Animal Savagery*", "Frenzy*", "Loner (4+)*", "Mighty Blow", "Prehensile Tail"]
        }
        ,
        {
            position: "Troll",
            max: 1,
            cost: 115000,
            ma: 4,
            st: 5,
            ag: "5+",
            pa: "5+",
            av: "10+",
            skills: ["Always Hungry*", "Loner (4+)*", "Mighty Blow", "Projectile Vomit", "Really Stupid*", "Regeneration", "Throw Team-mate"]
        }
    ],

    "Vampire": [
        {
            position: "Thral Linemen",
            max: 16,
            cost: 40000,
            ma: 6,
            st: 3,
            ag: "3+",
            pa: "4+",
            av: "8+",
            skills: []
        }
        ,
        {
            position: "Vampire Thrower",
            max: 2,
            cost: 110000,
            ma: 6,
            st: 4,
            ag: "2+",
            pa: "4+",
            av: "9+",
            skills: ["Bloodlust (2+)*", "Hypnotic Gaze", "Pass", "Regeneration"]
        }
        ,
        {
            position: "Vampire Runner",
            max: 2,
            cost: 100000,
            ma: 8,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "8+",
            skills: ["Bloodlust (2+)*", "Hypnotic Gaze", "Regeneration"]
        }
        ,
        {
            position: "Vampire Blitzer",
            max: 2,
            cost: 110000,
            ma: 6,
            st: 4,
            ag: "2+",
            pa: "2+",
            av: "9+",
            skills: ["Bloodlust (3+)*", "Hypnotic Gaze", "Juggernaut", "Regeneration"]
        }
        ,
        {
            position: "Vargheist",
            max: 1,
            cost: 150000,
            ma: 5,
            st: 5,
            ag: "4+",
            pa: "6+",
            av: "10+",
            skills: ["Bloodlust (3+)*", "Claws", "Frenzy*", "Loner (4+)*", "Regeneration"]
        }
    ],

    "Wood Elf": [
        {
            position: "Wood Elf Linemen",
            max: 16,
            cost: 65000,
            ma: 7,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "8+",
            skills: []
        }
        ,
        {
            position: "Wood Elf Thrower",
            max: 2,
            cost: 85000,
            ma: 7,
            st: 3,
            ag: "2+",
            pa: "3+",
            av: "8+",
            skills: ["Pass", "Safe Pair of Hands"]
        }
        ,
        {
            position: "Wood Elf Catcher",
            max: 2,
            cost: 90000,
            ma: 8,
            st: 2,
            ag: "2+",
            pa: "3+",
            av: "8+",
            skills: ["Catch", "Dodge", "Sprint"]
        }
        ,
        {
            position: "Wardancer",
            max: 2,
            cost: 130000,
            ma: 8,
            st: 3,
            ag: "2+",
            pa: "2+",
            av: "8+",
            skills: ["Block", "Dodge", "Leap"]
        }
        ,
        {
            position: "Altern Forest Treeman",
            max: 1,
            cost: 120000,
            ma: 2,
            st: 6,
            ag: "5+",
            pa: "5+",
            av: "11+",
            skills: ["Loner (4+)*", "Mighty Blow", "Stand Firm", "Strong Arm", "Take Root*", "Thick Skull", "Throw Team-mate", ""]
        }
    ]

};
window.teamLeagues = {
    "Amazon": ["Lustrian Superleague"],
    "Black Orc": ["Badlands Brawl"],
    "Chaos Chosen": ["Chaos Clash"],
    "Chaos Dwarfs": ["Badlands Brawl", "Chaos Clash"],
    "Chaos Renegades": ["Chaos Clash"],
    "Dark Elves": ["Elven Kingdoms League"],
    "Dwarfs": ["Old World Classic", "Worlds Edge Superleague"],
    "Elven Union": ["Elven Kingdoms League"],
    "Gnomes": ["Halfling Thimble Cup", "Woodland League"],
    "Goblins": ["Badlands Brawl", "Underworld Challenge"],
    "Halflings": ["Halfling Thimble Cup", "Woodland League"],
    "High Elves": ["Elven Kingdoms League"],
    "Humans": ["Old World Classic"],
    "Imperial Nobility": ["Old World Classic"],
    "Khorne": ["Chaos Clash"],
    "Lizardmen": ["Lustrian Superleague"],
    "Necromantic Horror": ["Sylvanian Spotlight"],
    "Norse": ["Chaos Clash", "Old World Classic"],
    "Nurgle": ["Chaos Clash"],
    "Ogres": ["Badlands Brawl", "Old World Classic"],
    "Old World Alliance": ["Old World Classic"],
    "Orcs": ["Badlands Brawl"],
    "Shambling Undead": ["Sylvanian Spotlight"],
    "Skaven": ["Underworld Challenge"],
    "Slann": ["Lustrian Superleague"],
    "Snotlings": ["Underworld Challenge"],
    "Tomb Kings": ["Sylvanian Spotlight"],
    "Underworld Denizens": ["Underworld Challenge"],
    "Vampires": ["Sylvanian Spotlight"],
    "Wood Elves": ["Elven Kingdoms League", "Woodland League"]
};

