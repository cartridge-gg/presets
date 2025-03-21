// src/generated/controller-configs.ts
var configs = {
  "blob-arena": {
    origin: "blobarena.xyz",
    theme: {
      colors: {
        primary: "#980f06"
      },
      cover: "https://static.cartridge.gg/presets/blob-arena/cover.png",
      icon: "https://static.cartridge.gg/presets/blob-arena/icon.png",
      name: "Blob Arena"
    }
  },
  budokan: {
    origin: "budokan.gg",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x05fb427962210ac4b3be5e23419b0d9e91ca6a9c57b0665d2ca7783092506f6e": {
              name: "Budokan",
              methods: [
                {
                  entrypoint: "create_tournament"
                },
                {
                  entrypoint: "enter_tournament"
                },
                {
                  entrypoint: "submit_score"
                },
                {
                  entrypoint: "claim_prize"
                },
                {
                  entrypoint: "add_prize"
                },
                {
                  entrypoint: "register_token"
                }
              ]
            }
          }
        }
      }
    },
    theme: {
      colors: {
        primary: "#B1B97A"
      },
      cover: "https://static.cartridge.gg/presets/budokan/cover.png",
      icon: "https://static.cartridge.gg/presets/budokan/icon.png",
      name: "Budokan"
    }
  },
  cartridge: {
    origin: "*",
    theme: {
      name: "Cartridge",
      icon: "https://static.cartridge.gg/presets/cartridge/icon.svg",
      cover: {
        light: "https://static.cartridge.gg/presets/cartridge/cover-light.png",
        dark: "https://static.cartridge.gg/presets/cartridge/cover-dark.png"
      }
    }
  },
  credit: {
    origin: "*",
    theme: {
      name: "Credit",
      icon: "https://static.cartridge.gg/presets/credit/icon.svg",
      cover: "https://static.cartridge.gg/presets/credit/cover.png"
    }
  },
  "dark-shuffle": {
    origin: ["darkshuffle.io", "darkshuffle.dev"],
    theme: {
      colors: {
        primary: "#F59100"
      },
      cover: "https://static.cartridge.gg/presets/dark-shuffle/cover.png",
      icon: "https://static.cartridge.gg/presets/dark-shuffle/icon.svg",
      name: "Dark Shuffle"
    },
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x020fc3c9efd0dde5f53642dac7f53638aeaae98ff9af5f1642546f389ce9dec5": {
              name: "game_systems",
              methods: [
                {
                  entrypoint: "mint"
                },
                {
                  entrypoint: "start_game"
                }
              ]
            },
            "0x036d27fb8604302b7e4f747a73a84b7c9ae9106f3c5f65e51e934fac9f7c753f": {
              name: "battle_systems",
              methods: [
                {
                  entrypoint: "battle_actions"
                }
              ]
            },
            "0x046f9c2f2f3144059f7332bd989151f782f462f4ea6e3755c2f7b3eac49be73d": {
              name: "draft_systems",
              methods: [
                {
                  entrypoint: "pick_card"
                }
              ]
            },
            "0x045543452215a2b416d8c52e5a475e7e0eed2e7cbaf5a699ae5fc0599f4afae9": {
              name: "map_systems",
              methods: [
                {
                  entrypoint: "generate_tree"
                },
                {
                  entrypoint: "select_node"
                }
              ]
            },
            "0x0530d9693304c79b5b506aa2fa09c27681373d71b69a839378ff5fd108aa5fc6": {
              name: "tournament_component",
              methods: [
                {
                  entrypoint: "enter_tournament"
                }
              ]
            }
          }
        }
      }
    }
  },
  dominion: {
    origin: "https://dominion.fun",
    theme: {
      colors: {
        primary: "#19cfff"
      },
      cover: "https://static.cartridge.gg/presets/dominion/cover.png",
      icon: "https://static.cartridge.gg/presets/dominion/icon.svg",
      name: "Dominion"
    }
  },
  "dope-wars": {
    origin: "dopewars.game",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x051Fea4450Da9D6aeE758BDEbA88B2f665bCbf549D2C61421AA724E9AC0Ced8F": {
              name: "VRF Provider",
              description: "Provides verifiable random functions",
              methods: [
                {
                  name: "Request Random",
                  description: "Request a random number",
                  entrypoint: "request_random"
                }
              ]
            },
            "0x0410466536b5ae074f7fea81e5533b8134a9fa08b3dd077dd9db08f64997d113": {
              name: "Paper Token",
              description: "Manages paper approvals",
              methods: [
                {
                  name: "Approve",
                  description: "Approve paper usage",
                  entrypoint: "approve"
                }
              ]
            },
            "0x044a23BbfE03FFe90D3C23Fb6e5A8AD0341036C039363DfA6F3513278Aa51fCA": {
              name: "Game Contract",
              description: "Core game mechanics",
              methods: [
                {
                  name: "Create Game",
                  description: "Start a new game",
                  entrypoint: "create_game"
                },
                {
                  name: "Travel",
                  description: "Travel to a new location",
                  entrypoint: "travel"
                },
                {
                  name: "Decide",
                  description: "Make a game decision",
                  entrypoint: "decide"
                },
                {
                  name: "End Game",
                  description: "End the current game",
                  entrypoint: "end_game"
                }
              ]
            },
            "0x0412445e644070C69fEa16b964cC81Cd6dEBF6A4DBf683E2E9686a45ad088de8": {
              name: "Laundromat Contract",
              description: "Manages game scoring and laundering",
              methods: [
                {
                  name: "Register Score",
                  description: "Register a game score",
                  entrypoint: "register_score"
                },
                {
                  name: "Claim",
                  description: "Claim rewards",
                  entrypoint: "claim"
                },
                {
                  name: "Launder",
                  description: "Launder resources",
                  entrypoint: "launder"
                }
              ]
            }
          }
        }
      }
    },
    theme: {
      colors: {
        primary: "#11ED83"
      },
      cover: "https://static.cartridge.gg/presets/dope-wars/cover.png",
      icon: "https://static.cartridge.gg/presets/dope-wars/icon.png",
      name: "Dope Wars"
    }
  },
  dragark: {
    origin: "dragark.net",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x62525c1337037a6a50a61f12045630a271758a350e57616e79a6ed14004ce74": {
              name: "Achievement Systems",
              description: "Allows you to interact with achievement features.",
              methods: [
                {
                  name: "Claim Achievement Reward",
                  description: "A method to claim your achievement reward.",
                  entrypoint: "claim_achievement_reward"
                }
              ]
            },
            "0xa5a3284a1e3ce9887b50876acee14a1af9705659b3ad053deff80d84c5555a": {
              name: "Dragon Systems",
              description: "Allows you to interact with dragon features.",
              methods: [
                {
                  name: "Activate Dragon",
                  description: "A method to activate the Dragark NFT into the game.",
                  entrypoint: "activate_dragon"
                },
                {
                  name: "Deactivate Dragon",
                  description: "A method to deactivate Dragark NFT out of the game.",
                  entrypoint: "deactivate_dragon"
                },
                {
                  name: "Claim Default Dragon",
                  description: "A method to claim the default Dragark.",
                  entrypoint: "claim_default_dragon"
                },
                {
                  name: "Upgrade Dragon",
                  description: "A method to upgrade the Dragark's level.",
                  entrypoint: "upgrade_dragon"
                }
              ]
            },
            "0x456e9a70c1a8ce2e340592d1a885f2ac152349d785a6aef4d640d9a09f9a1bd": {
              name: "Island Systems",
              description: "Allows you to interact with island features.",
              methods: [
                {
                  name: "Claim Resources",
                  description: "A method to claim the island's rescources.",
                  entrypoint: "claim_resources"
                },
                {
                  name: "Claim Resources Islands",
                  description: "A method to claim rescources on multiple islands.",
                  entrypoint: "claim_resources_islands"
                }
              ]
            },
            "0x2f77a88ac64fd1473ea067ea176ae3805224a2ba5173c63c77d0f214c01ac5d": {
              name: "Journey Systems",
              description: "Allows you to interact with journey features.",
              methods: [
                {
                  name: "Start Journey",
                  description: "A method to start a new journey to other island.",
                  entrypoint: "start_journey"
                },
                {
                  name: "Finish Journey",
                  description: "A method to finish a started journey.",
                  entrypoint: "finish_journey"
                }
              ]
            },
            "0x1ca130b614f063a24dafad53db11cbb914fa7cff2eac23df1c32f5ff71a8ec2": {
              name: "Map Systems",
              description: "Allows you to interact with map features.",
              methods: [
                {
                  name: "Join Map",
                  description: "A method to join the map.",
                  entrypoint: "join_map"
                },
                {
                  name: "Rejoin Map",
                  description: "A method to rejoin the map.",
                  entrypoint: "re_join_map"
                }
              ]
            },
            "0x272741bbe4abc02c8be4b094ca642e1df573e99e06f85f649bc35dd26ae4543": {
              name: "Mission Systems",
              description: "Allows you to interact with mission features.",
              methods: [
                {
                  name: "Claim Mission Reward",
                  description: "A method to claim your mission reward.",
                  entrypoint: "claim_mission_reward"
                }
              ]
            },
            "0x54ad7af1fc62a786c9023d9f3ef8e8abf8cf332649b784188c1b25d2cb384b2": {
              name: "Player Systems",
              description: "Allows you to interact with player features.",
              methods: [
                {
                  name: "Buy Energy",
                  description: "A method to buy energy used in scouting the map.",
                  entrypoint: "buy_energy"
                },
                {
                  name: "Claim Reward",
                  description: "A method to claim your reward.",
                  entrypoint: "claim_reward"
                },
                {
                  name: "Upgrade Account Level",
                  description: "A method to upgrade your account level.",
                  entrypoint: "upgrade_account_level"
                },
                {
                  name: "Upgrade Invitation Level",
                  description: "A method to upgrade your invitation level.",
                  entrypoint: "upgrade_invitation_level"
                },
                {
                  name: "Redeem Invite Code",
                  description: "A method to redeem invite code.",
                  entrypoint: "redeem_invite_code"
                },
                {
                  name: "Buy Resources Pack",
                  description: "A method to buy resources pack.",
                  entrypoint: "buy_resources_pack"
                },
                {
                  name: "Activate Element NFT",
                  description: "A method to activate the Element NFT into the game.",
                  entrypoint: "activate_element_nft"
                },
                {
                  name: "Claim Pool Share Reward",
                  description: "A method to claim your Pool Share reward.",
                  entrypoint: "claim_pool_share_reward"
                }
              ]
            },
            "0x68717880bd76fda6790e895e937e2c638213e7b9aa07385231bbf17dfe8a78c": {
              name: "Scout Systems",
              description: "Allows you to interact with scout features.",
              methods: [
                {
                  name: "Scout",
                  description: "A method to scout the map.",
                  entrypoint: "scout"
                }
              ]
            },
            "0x14705481d28fab7bb37d6cb19d3392d39f838a1d5572b8c8f18e85e0c4b8918": {
              name: "Shield Systems",
              description: "Allows you to interact with shield features.",
              methods: [
                {
                  name: "Activate Shield",
                  description: "A method to activate a shield to protect your island.",
                  entrypoint: "activate_shield"
                },
                {
                  name: "Deactivate Shield",
                  description: "A method to deactivate a shield from your island.",
                  entrypoint: "deactivate_shield"
                },
                {
                  name: "Buy Shield",
                  description: "A method to buy a shield.",
                  entrypoint: "buy_shield"
                }
              ]
            },
            "0x23d6a41c06e2d7b60437ba4da3eca857cf9a0b94f3548396829365a0a299c63": {
              name: "Star Shop Systems",
              description: "Allows you to interact with star shop features.",
              methods: [
                {
                  name: "Buy Item Star Shop",
                  description: "A method to buy item from the Star Shop.",
                  entrypoint: "buy_item_star_shop"
                }
              ]
            },
            "0x511a78a1c4b33bedc4ff7d9b37eb7481bcdff77c5c2cb6f67390d43657749d0": {
              name: "Treasure Hunt Systems",
              description: "Allows you to interact with treasure hunt features.",
              methods: [
                {
                  name: "Insert Dragon Treasure Hunt",
                  description: "A method to insert your Dragarks to start a new treasure hunt.",
                  entrypoint: "insert_dragon_treasure_hunt"
                },
                {
                  name: "End Treasure Hunt",
                  description: "A method to end an existing treasure hunt and claim rewards.",
                  entrypoint: "end_treasure_hunt"
                }
              ]
            }
          }
        }
      }
    },
    theme: {
      colors: {
        primary: "#71EB34"
      },
      cover: "https://static.cartridge.gg/presets/dragark/cover.png",
      icon: "https://static.cartridge.gg/presets/dragark/icon.png",
      name: "Dragark"
    }
  },
  eternum: {
    origin: ["eternum.realms.world", "empire.realms.world"],
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x4ed3a7c5f53c6e96186eaf1b670bd2e2a3699c08e070aedf4e5fc6ac246ddc1": {
              name: "Pillage",
              description: "Allows you to raid a structure and pillage resources",
              methods: [
                {
                  name: "Battle Pillage",
                  description: "Pillage a structure",
                  entrypoint: "battle_pillage"
                }
              ]
            },
            "0x2620f65aa2fd72d705306ada1ee7410023a3df03da9291f1ccb744fabfebc0": {
              name: "Battle contract",
              description: "Required to engage in battles",
              methods: [
                {
                  name: "Battle Start",
                  description: "Start a battle",
                  entrypoint: "battle_start"
                },
                {
                  name: "Battle Force Start",
                  description: "Force start a battle",
                  entrypoint: "battle_force_start"
                },
                {
                  name: "Battle Join",
                  description: "Join a battle",
                  entrypoint: "battle_join"
                },
                {
                  name: "Battle Leave",
                  description: "Leave a battle",
                  entrypoint: "battle_leave"
                },
                {
                  name: "Battle Claim",
                  description: "Claim a structure after a battle",
                  entrypoint: "battle_claim"
                },
                {
                  name: "Battle Resolve",
                  description: "Reopens the bank after battle",
                  entrypoint: "battle_resolve"
                }
              ]
            },
            "0x6bf57710571fd159e71b1ed155bb0759027e416c88a06556f321c94c214e768": {
              name: "Leave battle contract",
              description: "Allows armies to leave a battle",
              methods: [
                {
                  name: "Leave Battle",
                  description: "Leave a battle",
                  entrypoint: "leave_battle"
                },
                {
                  name: "Leave Battle If Ended",
                  description: "Leave a battle if its ended",
                  entrypoint: "leave_battle_if_ended"
                }
              ]
            },
            "0x4b6a35c0c541467674ebb9640113a6d79c6f5a468796e9299b8e484a770032a": {
              name: "Building contract",
              description: "Allows to manage buildings",
              methods: [
                {
                  name: "Create",
                  description: "Create a building",
                  entrypoint: "create"
                },
                {
                  name: "Pause Production",
                  description: "Pause the production of a building",
                  entrypoint: "pause_production"
                },
                {
                  name: "Resume Production",
                  description: "Resume production of a building",
                  entrypoint: "resume_production"
                },
                {
                  name: "Destroy a building",
                  description: "Destroy a building",
                  entrypoint: "destroy"
                }
              ]
            },
            "0x57d514154bb4dc319539d4e338312a41c248fb6a5122f82b2f2e11ddd3e67e4": {
              name: "Guild contract",
              description: "Allows guild utilities",
              methods: [
                {
                  name: "Create Guild",
                  description: "Creates a new guild",
                  entrypoint: "create_guild"
                },
                {
                  name: "Join Guild",
                  description: "Join an existing guild",
                  entrypoint: "join_guild"
                },
                {
                  name: "Whitelist Player",
                  description: "Add a player to the guild's whitelist",
                  entrypoint: "whitelist_player"
                },
                {
                  name: "Transfer Guild Ownership",
                  description: "Transfer ownership of the guild to another player",
                  entrypoint: "transfer_guild_ownership"
                },
                {
                  name: "Remove Guild Member",
                  description: "Remove a member from the guild",
                  entrypoint: "remove_guild_member"
                },
                {
                  name: "Remove Player From Whitelist",
                  description: "Remove a player from the guild's whitelist",
                  entrypoint: "remove_player_from_whitelist"
                }
              ]
            },
            "0x2fcc3c1691387321c2f4d6310eda7a14365bd274c1a37ed3948d2e93a56f821": {
              name: "Hyperstructure contract",
              description: "Handles the creation and management of hyperstructures",
              methods: [
                {
                  name: "Get Points",
                  description: "Gets your total number of points",
                  entrypoint: "get_points"
                },
                {
                  name: "Create",
                  description: "Create a new hyperstructure",
                  entrypoint: "create"
                },
                {
                  name: "Contribute To Construction",
                  description: "Contribute resources to hyperstructure construction",
                  entrypoint: "contribute_to_construction"
                },
                {
                  name: "Set Co Owners",
                  description: "Set additional owners for the hyperstructure",
                  entrypoint: "set_co_owners"
                },
                {
                  name: "End Game",
                  description: "Terminates the current game season once you've reached enough points",
                  entrypoint: "end_game"
                },
                {
                  name: "Set Access",
                  description: "Configure access permissions for contributions to the hyperstructure",
                  entrypoint: "set_access"
                }
              ]
            },
            "0xa052c5ca082356bcc8457f0f805eaf18f97d0fdddde3f90f5b238923859ed4": {
              name: "AMM liquidity contract",
              description: "Manages liquidity for the Automated Market Maker",
              methods: [
                {
                  name: "Add",
                  description: "Add liquidity to the pool",
                  entrypoint: "add"
                },
                {
                  name: "Remove",
                  description: "Remove liquidity from the pool",
                  entrypoint: "remove"
                }
              ]
            },
            "0x4a212c52c4035bc9bd170125216604f406dcd75b41be11d3b4d89047366d84d": {
              name: "Exploration contract",
              description: "Allows you to move to unexplored hexes on the map",
              methods: [
                {
                  name: "Explore",
                  description: "Explore an uncharted hex on the game map",
                  entrypoint: "explore"
                }
              ]
            },
            "0x7e3bae0e253a0131063b63ee4d7b27b50329c617ae88b82d529a70f1a11c63": {
              name: "Naming contract",
              description: "Manages entity naming in the game",
              methods: [
                {
                  name: "Set Entity Name",
                  description: "Assign a custom name to a game entity",
                  entrypoint: "set_entity_name"
                },
                {
                  name: "Set Address Name",
                  description: "Assign a custom name to a user's address",
                  entrypoint: "set_address_name"
                }
              ]
            },
            "0x1b480f620ea35431ab43dba634795b14f547ef3e77370db6f0a31f2fdc21d86": {
              name: "Realms contract",
              description: "Manages realm-related actions",
              methods: [
                {
                  name: "Create a realm",
                  description: "Create a new realm",
                  entrypoint: "create"
                },
                {
                  name: "Upgrade Level",
                  description: "Upgrade the level of a realm",
                  entrypoint: "upgrade_level"
                },
                {
                  name: "Quest Claim",
                  description: "Claim rewards from completed quests",
                  entrypoint: "quest_claim"
                }
              ]
            },
            "0x691a60b709ca5c1c5ff86824831f84deb26f0f5d07d70c0f807eab48110d2f6": {
              name: "Resource bridge contract",
              description: "Manages bridge transfers between L2 and Eternum",
              methods: [
                {
                  name: "Deposit Initial",
                  description: "Initial deposit of resources for bridge transfer",
                  entrypoint: "deposit_initial"
                },
                {
                  name: "Deposit",
                  description: "Deposit additional resources for bridge transfer",
                  entrypoint: "deposit"
                },
                {
                  name: "Start Withdraw",
                  description: "Initiate a withdrawal process",
                  entrypoint: "start_withdraw"
                },
                {
                  name: "Finish Withdraw",
                  description: "Finalize a withdrawal process",
                  entrypoint: "finish_withdraw"
                }
              ]
            },
            "0x42c0303a2119a9e20daa60e83c48221cdf1bb2a4c009bab031d1cd3555a127e": {
              name: "Resource contract",
              description: "In-game resource management",
              methods: [
                {
                  name: "Approve",
                  description: "Approve resource transfer",
                  entrypoint: "approve"
                },
                {
                  name: "Send",
                  description: "Send resources to another entity",
                  entrypoint: "send"
                },
                {
                  name: "Pickup",
                  description: "Collect available resources after approval",
                  entrypoint: "pickup"
                }
              ]
            },
            "0x4f92a1d00d3aec8cece60fc2d0fc236fe1d95c54ff0ceb2f393fbc7e0863d8e": {
              name: "AMM swap contract",
              description: "Handles token swaps in the Automated Market Maker",
              methods: [
                {
                  name: "Buy",
                  description: "Purchase tokens from the liquidity pool",
                  entrypoint: "buy"
                },
                {
                  name: "Sell",
                  description: "Sell tokens to the liquidity pool",
                  entrypoint: "sell"
                }
              ]
            },
            "0x7e2b1334398fafbe640f34bacae99b649d633417960ee397b6a8fb117fec819": {
              name: "Market contract",
              description: "Manages trading orders in the in-game market",
              methods: [
                {
                  name: "Create Order",
                  description: "Create a new trading order",
                  entrypoint: "create_order"
                },
                {
                  name: "Accept Order",
                  description: "Accept a trading order",
                  entrypoint: "accept_order"
                },
                {
                  name: "Accept Partial Order",
                  description: "Accept a partial trading order",
                  entrypoint: "accept_partial_order"
                },
                {
                  name: "Cancel Order",
                  description: "Cancel a trading order",
                  entrypoint: "cancel_order"
                }
              ]
            },
            "0x4069c2be57f08fef9f31afc85a5b4c03c208ebdb278b9d853606caa7a9cbee6": {
              name: "Map travel contract",
              description: "Manages player movement across the game map",
              methods: [
                {
                  name: "Travel Hex",
                  description: "Move to a specific hex on the map",
                  entrypoint: "travel_hex"
                }
              ]
            },
            "0x26be0ed574aa9ee6f73b53b12f0a199ddbf4ac697470316cdb3d9d1f5680cab": {
              name: "Army contract",
              description: "Manages army-related actions",
              methods: [
                {
                  name: "Army Create",
                  description: "Create a new army",
                  entrypoint: "army_create"
                },
                {
                  name: "Army Delete",
                  description: "Delete an existing army",
                  entrypoint: "army_delete"
                },
                {
                  name: "Army Buy Troops",
                  description: "Buy troops for an army",
                  entrypoint: "army_buy_troops"
                },
                {
                  name: "Army Merge Troops",
                  description: "Merge troops from multiple armies",
                  entrypoint: "army_merge_troops"
                }
              ]
            },
            "0x051fea4450da9d6aee758bdeba88b2f665bcbf549d2c61421aa724e9ac0ced8f": {
              name: "VRF Provider",
              description: "Verifiable Random Function contract, allows randomness in the game",
              methods: [
                {
                  name: "Request Random",
                  description: "Allows requesting random numbers from the VRF provider",
                  entrypoint: "request_random"
                }
              ]
            },
            "0x057675b9c0bd62b096a2e15502a37b290fa766ead21c33eda42993e48a714b80": {
              name: "Season pass ERC20 contract",
              description: "Manages the season passes",
              methods: [
                {
                  name: "Approve for all",
                  description: "Approves transfer of season pass",
                  entrypoint: "set_approval_for_all"
                }
              ]
            },
            "0x4b5e65a9617c7ba3c7ea64324ff4338a400adb1a3cfe903b3f8b647cbb59fb7": {
              name: "Season Systems",
              description: "Register and claim",
              methods: [
                {
                  name: "Register",
                  description: "Registers to leaderboard",
                  entrypoint: "register_to_leaderboard"
                },
                {
                  name: "Claim",
                  description: "Claim",
                  entrypoint: "claim_leaderboard_rewards"
                }
              ]
            }
          },
          messages: [
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring"
                  },
                  {
                    name: "version",
                    type: "shortstring"
                  },
                  {
                    name: "chainId",
                    type: "shortstring"
                  },
                  {
                    name: "revision",
                    type: "shortstring"
                  }
                ],
                "s0_eternum-Message": [
                  {
                    name: "identity",
                    type: "ContractAddress"
                  },
                  {
                    name: "channel",
                    type: "shortstring"
                  },
                  {
                    name: "content",
                    type: "string"
                  },
                  {
                    name: "timestamp",
                    type: "felt"
                  },
                  {
                    name: "salt",
                    type: "felt"
                  }
                ]
              },
              primaryType: "s0_eternum-Message",
              domain: {
                name: "Eternum",
                version: "1",
                chainId: "SN_MAIN",
                revision: "1"
              }
            }
          ]
        }
      }
    },
    theme: {
      name: "Eternum",
      icon: "https://static.cartridge.gg/presets/eternum/icon.svg",
      cover: "https://static.cartridge.gg/presets/eternum/cover.png",
      colors: {
        primary: "#dc8b07"
      }
    }
  },
  flippyflop: {
    origin: "flippyflop.gg",
    theme: {
      colors: {
        primary: "#F38332"
      },
      cover: "https://static.cartridge.gg/presets/flippyflop/cover.png",
      icon: "https://static.cartridge.gg/presets/flippyflop/icon.png",
      name: "FlippyFlop"
    }
  },
  "force-prime": {
    origin: "forceprime.io",
    theme: {
      colors: {
        primary: "#E1CC89"
      },
      cover: "https://static.cartridge.gg/presets/force-prime/cover.png",
      icon: "https://static.cartridge.gg/presets/force-prime/icon.png",
      name: "Force Prime"
    }
  },
  "jokers-of-neon": {
    origin: "jokersofneon.com",
    theme: {
      colors: {
        primary: "#A144B2"
      },
      cover: "https://static.cartridge.gg/presets/jokers-of-neon/cover.png",
      icon: "https://static.cartridge.gg/presets/jokers-of-neon/icon.png",
      name: "Jokers of Neon"
    }
  },
  "loot-survivor": {
    origin: "lootsurvivor.io",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x0305f26ad19e0a10715d9f3137573d3a543de7b707967cd85d11234d6ec0fb7e": {
              methods: [
                {
                  entrypoint: "attack"
                },
                {
                  entrypoint: "drop"
                },
                {
                  entrypoint: "equip"
                },
                {
                  entrypoint: "explore"
                },
                {
                  entrypoint: "flee"
                },
                {
                  entrypoint: "new_game"
                },
                {
                  entrypoint: "transfer_from"
                },
                {
                  entrypoint: "upgrade"
                }
              ]
            },
            "0x3347382d530ff6acb9283ac1d78471187aae8a4690e9316bb4e3c3365ff7a86": {
              methods: [
                {
                  entrypoint: "enter_tournament"
                },
                {
                  entrypoint: "start_tournament"
                }
              ]
            }
          }
        }
      }
    },
    theme: {
      colors: {
        primary: "#33FF33"
      },
      cover: "https://static.cartridge.gg/presets/loot-survivor/cover.png",
      icon: "https://static.cartridge.gg/presets/loot-survivor/icon.png",
      name: "Loot Survivor"
    }
  },
  nums: {
    origin: ["nums.gg", "www.nums.gg"],
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x07ccfbc43c109efd466638defa52702382ace922051d35a0554b5ccd02a8f155": {
              name: "Game Actions",
              methods: [
                {
                  name: "Create Game",
                  entrypoint: "create_game",
                  description: "Creates a new game"
                },
                {
                  name: "Set Slot",
                  entrypoint: "set_slot",
                  description: "Sets one slot for the game"
                }
              ]
            },
            "0x00ea44dd8e971d3af9f99568577bf14b0a80a7f7763fa6281840ab68a8a53ba9": {
              name: "Claim Actions",
              methods: [
                {
                  name: "Claim Appchain Reward",
                  entrypoint: "claim_reward",
                  description: "Claims token rewards on Appchain"
                }
              ]
            },
            "0x03ee42961dc151d740df95c44b929abe85cf66e8444e0279252dd99b055c64b0": {
              name: "Rewards Claim",
              methods: [
                {
                  name: "Consume Reward on Starknet",
                  entrypoint: "consume_claim_reward",
                  description: "Consumes a claim reward message on Starknet"
                }
              ]
            },
            "0x7ed472bdde3b19a5cf2334ad0f368426272f477938270b1b04259f159bdc0e2": {
              name: "VRF Provider",
              methods: [
                {
                  name: "Request Random",
                  entrypoint: "request_random",
                  description: "Requests a random number from the VRF contract"
                }
              ]
            },
            "0x4d776373427434a22f7d60d0f7fe0e336fd830edf4294acec33d9f2e1275327": {
              name: "Social",
              description: "Social contract to manage your social activities",
              methods: [
                {
                  name: "pin",
                  entrypoint: "pin",
                  description: "Pin an achievement."
                },
                {
                  name: "unpin",
                  entrypoint: "unpin",
                  description: "Unpin an achievement."
                }
              ]
            }
          }
        }
      }
    },
    theme: {
      colors: {
        primary: "#9E84E9"
      },
      cover: "https://static.cartridge.gg/presets/nums/cover.png",
      icon: "https://static.cartridge.gg/presets/nums/icon.png",
      name: "Nums"
    }
  },
  paved: {
    origin: "paved.gg",
    theme: {
      colors: {
        primary: "#B0CAF8"
      },
      cover: "https://static.cartridge.gg/presets/paved/cover.png",
      icon: "https://static.cartridge.gg/presets/paved/icon.svg",
      name: "Paved"
    }
  },
  pistols: {
    origin: [
      "pistols.underware.gg",
      "pistols.stage.underware.gg",
      "play.pistols.gg",
      "stage.pistols.gg",
      "alpha.pistols.gg",
      "beta.pistols.gg",
      "prerelease.pistols.gg"
    ],
    theme: {
      colors: {
        primary: "#EF9758"
      },
      cover: "https://static.cartridge.gg/presets/pistols/cover.png",
      icon: "https://static.cartridge.gg/presets/pistols/icon.png",
      name: "Pistols at Dawn"
    },
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x0619c7bd5d5d635e010ef3bf9a59ecc49fa055f19bb2202e530554cfda655b59": {
              description: "Game loop contract",
              methods: [
                {
                  entrypoint: "commit_moves",
                  description: "Commit moves of a Duelist in a Duel"
                },
                {
                  entrypoint: "reveal_moves",
                  description: "Reveal moves of a Duelist in a Duel"
                },
                {
                  entrypoint: "clear_required_action",
                  description: "Clear the required action call for a duelist"
                },
                {
                  entrypoint: "collect_duel",
                  description: "Close expired duels"
                },
                {
                  entrypoint: "collect_season",
                  description: "Close the current season and start the next one"
                }
              ]
            },
            "0x07b04bc75c3d4ba5b37d2dfc91501424dd23f517a820aee89adeeef4ececb391": {
              description: "Packs ERC721 contract",
              methods: [
                {
                  entrypoint: "claim_starter_pack",
                  description: "Claim the starter pack, mint Duelists"
                },
                {
                  entrypoint: "purchase",
                  description: "Purchase a closed pack"
                },
                {
                  entrypoint: "open",
                  description: "Open a pack, mint its contents"
                }
              ]
            },
            "0x00899524b10391115869ab095fe4385e17dd3dfd27b3a01bcc579ed939552e4c": {
              description: "Duel ERC721 contract",
              methods: [
                {
                  entrypoint: "create_duel",
                  description: "Create a Duel, mint its token"
                },
                {
                  entrypoint: "reply_duel",
                  description: "Reply to a Duel (accept or reject)"
                }
              ]
            },
            "0x0611b5c48d17de65d8015d48d491e0d120361a85099e28f3630600b3a91a98b0": {
              description: "Duelist ERC721 contract",
              methods: [
                {
                  entrypoint: "poke",
                  description: "Reactivates an inactive Duelist"
                },
                {
                  entrypoint: "sacrifice",
                  description: "Sacrifices a Duelist"
                },
                {
                  entrypoint: "memorialize",
                  description: "Memorializes a Duelist"
                }
              ]
            },
            "0x05c3c66f68bf24a4f61263d18622f97769ef62497f07a0ce9b07c7f02d6aa435": {
              description: "Bank contract",
              methods: [
                {
                  entrypoint: "sponsor_duelists",
                  description: "Sponsor duelist starter packs with $LORDS"
                },
                {
                  entrypoint: "sponsor_season",
                  description: "Sponsor the current season with $LORDS"
                },
                {
                  entrypoint: "sponsor_tournament",
                  description: "Sponsor a tournament with $LORDS"
                }
              ]
            },
            "0x05355768013cba6f96d985d189c0a69362d1a79a962e0d595ba7ea114ead720c": {
              description: "Cartridge VRF Provider",
              methods: [
                {
                  entrypoint: "request_random",
                  description: "Request a random number"
                }
              ]
            }
          },
          messages: [
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring"
                  },
                  {
                    name: "version",
                    type: "shortstring"
                  },
                  {
                    name: "chainId",
                    type: "shortstring"
                  },
                  {
                    name: "revision",
                    type: "shortstring"
                  }
                ],
                "pistols-PlayerOnline": [
                  {
                    name: "identity",
                    type: "ContractAddress"
                  },
                  {
                    name: "timestamp",
                    type: "felt"
                  }
                ]
              },
              primaryType: "pistols-PlayerOnline",
              domain: {
                name: "Underware_gg",
                version: "1.0.0",
                chainId: "SN_MAIN",
                revision: "1"
              },
              name: "PlayerOnline",
              description: "Notify the server that a player is online"
            },
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring"
                  },
                  {
                    name: "version",
                    type: "shortstring"
                  },
                  {
                    name: "chainId",
                    type: "shortstring"
                  },
                  {
                    name: "revision",
                    type: "shortstring"
                  }
                ],
                "pistols-PlayerBookmark": [
                  {
                    name: "identity",
                    type: "ContractAddress"
                  },
                  {
                    name: "target_address",
                    type: "ContractAddress"
                  },
                  {
                    name: "target_id",
                    type: "u128"
                  },
                  {
                    name: "enabled",
                    type: "bool"
                  }
                ]
              },
              primaryType: "pistols-PlayerBookmark",
              domain: {
                name: "Underware_gg",
                version: "1.0.0",
                chainId: "SN_MAIN",
                revision: "1"
              },
              name: "PlayerBookmark",
              description: "Notify the server that a player follows another player or token"
            }
          ]
        }
      }
    }
  },
  pixelaw: {
    origin: "dojo.pixelaw.xyz",
    theme: {
      colors: {
        primary: "#7C00B1",
        primaryForeground: "white"
      },
      cover: "https://static.cartridge.gg/presets/pixelaw/cover.png",
      icon: "https://static.cartridge.gg/presets/pixelaw/icon.svg",
      name: "Pixelaw"
    }
  },
  "realm-of-ra": {
    origin: "mancala.realmofra.com",
    theme: {
      colors: {
        primary: "#de9534"
      },
      cover: "https://static.cartridge.gg/presets/realm-of-ra/cover.png",
      icon: "https://static.cartridge.gg/presets/realm-of-ra/icon.png",
      name: "Realm of Ra"
    }
  },
  "savage-summit": {
    origin: "savagesummit.io",
    theme: {
      colors: {
        primary: "#fbf7da"
      },
      cover: "https://static.cartridge.gg/presets/savage-summit/cover.png",
      icon: "https://static.cartridge.gg/presets/savage-summit/icon.png",
      name: "Savage Summit"
    }
  },
  "tale-weaver": {
    origin: "",
    theme: {
      colors: {
        primary: "#fce377"
      },
      cover: "https://static.cartridge.gg/presets/tale-weaver/cover.png",
      icon: "https://static.cartridge.gg/presets/tale-weaver/icon.png",
      name: "Tale Weaver"
    }
  },
  zkastle: {
    origin: "zkastle.vercel.app",
    theme: {
      colors: {
        primary: "#E50D2C"
      },
      cover: "https://static.cartridge.gg/presets/zkastle/cover.png",
      icon: "https://static.cartridge.gg/presets/zkastle/icon.svg",
      name: "zKastle"
    }
  },
  zktt: {
    origin: "zktable.top",
    theme: {
      colors: {
        primary: "#FFFFFF"
      },
      cover: "https://static.cartridge.gg/presets/zktt/cover.png",
      icon: "https://static.cartridge.gg/presets/zktt/icon.png",
      name: "zKTT"
    }
  },
  zkube: {
    origin: "app.zkube.xyz",
    theme: {
      colors: {
        primary: "#5bc3e6"
      },
      cover: "https://static.cartridge.gg/presets/zkube/cover.png",
      icon: "https://static.cartridge.gg/presets/zkube/icon.png",
      name: "zKube"
    }
  }
};

// src/generated/erc20-metadata.ts
var metadata = [
  {
    name: "Wrapped BTC",
    symbol: "WBTC",
    decimals: 8,
    l2_token_address: "0x03fe2b97c1fd336e750087d68b9b867997fd64a2661ff3ca5a7c771641e8e7ac",
    sort_order: 0,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/7dcb2db2-a7a7-44af-660b-8262e057a100/logo"
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    decimals: 6,
    l2_token_address: "0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
    sort_order: 5,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e5aaa970-a998-47e8-bd43-4a3b56b87200/logo"
  },
  {
    name: "LUSD Stablecoin",
    symbol: "LUSD",
    decimals: 18,
    l2_token_address: "0x070a76fd48ca0ef910631754d77dd822147fe98a569b826ec85e3c33fde586ac",
    sort_order: 3,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/dc0ae733-5498-4afa-f475-48dba677aa00/logo"
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    decimals: 6,
    l2_token_address: "0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8",
    sort_order: 4,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/c8a721d1-07c3-46e4-ab4e-523977c30b00/logo"
  },
  {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    l2_token_address: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    sort_order: 3,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e07829b7-0382-4e03-7ecd-a478c5aa9f00/logo"
  },
  {
    name: "Dai Stablecoin",
    symbol: "DAIv0",
    decimals: 18,
    l2_token_address: "0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3",
    sort_order: 4,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/919e761b-56f7-4f53-32aa-5e066f7f6200/logo"
  },
  {
    name: "Dai Stablecoin",
    symbol: "DAI",
    decimals: 18,
    l2_token_address: "0x05574eb6b8789a91466f902c380d978e472db68170ff82a5b650b95a58ddf4ad",
    sort_order: 4,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/919e761b-56f7-4f53-32aa-5e066f7f6200/logo"
  },
  {
    name: "Legacy Starknet Wrapped Staked Ether",
    symbol: "wstETH-legacy",
    decimals: 18,
    l2_token_address: "0x042b8f0484674ca266ac5d08e4ac6a3fe65bd3129795def2dca5c34ecc5f96d2",
    sort_order: 1,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/26162dcc-29c2-4f5e-3acd-5e6be1f07a00/logo"
  },
  {
    name: "Wrapped Staked Ether",
    symbol: "wstETH",
    decimals: 18,
    l2_token_address: "0x0057912720381af14b0e5c87aa4718ed5e527eab60b3801ebf702ab09139e38b",
    sort_order: 1,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/dbbcbdea-1a92-437d-3701-4a5ee129d000/logo"
  },
  {
    name: "Rocket Pool ETH",
    symbol: "rETH",
    decimals: 18,
    l2_token_address: "0x0319111a5037cbec2b3e638cc34a3474e2d2608299f3e62866e9cc683208c610",
    sort_order: 1,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/c9f2d6fe-fbc6-4384-0990-923dfcb7a200/logo"
  },
  {
    name: "LORDS",
    symbol: "LORDS",
    decimals: 18,
    l2_token_address: "0x0124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49",
    sort_order: 1,
    total_supply: 509e5,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a3bfe959-50c4-4f89-0aef-b19207d82a00/logo"
  },
  {
    name: "R Stablecoin",
    symbol: "R",
    decimals: 18,
    l2_token_address: "0x01fa2fb85f624600112040e1f3a848f53a37ed5a7385810063d5fe6887280333",
    sort_order: 3,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/77612e4e-f7ee-4dba-2066-af321843ef00/logo"
  },
  {
    name: "Frax",
    symbol: "FRAX",
    decimals: 18,
    l2_token_address: "0x009c6b4fb13dfaa025c1383ed6190af8ed8cbb09d9588a3bb020feb152442406",
    sort_order: 1,
    total_supply: 649462235,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/eeaf0779-e492-474c-ef19-b27843525600/logo"
  },
  {
    name: "Frax Share",
    symbol: "FXS",
    decimals: 18,
    l2_token_address: "0x0058efd0e73c33a848ffaa88738d128ebf0af98ea78cf3c14dc757bb02d39ffb",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/98bea621-1e4f-4d63-9689-bdaef0d56500/logo"
  },
  {
    name: "Staked Frax Ether",
    symbol: "sfrxETH",
    decimals: 18,
    l2_token_address: "0x04578fffc279e61b5cb0267a5f8e24b6089d40f93158fbbad2cb23b8622c9233",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/cd6fe18a-25db-4de9-758a-daf3b364ea00/logo"
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    decimals: 18,
    l2_token_address: "0x049210ffc442172463f3177147c1aeaa36c51d152c1b0630f2364c300d4f48ee",
    sort_order: 1,
    total_supply: 1e9,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/361b018e-bd53-4019-27c8-7cf8d9031b00/logo"
  },
  {
    name: "Paper",
    symbol: "PAPER",
    decimals: 18,
    l2_token_address: "0x0410466536b5ae074f7fea81e5533b8134a9fa08b3dd077dd9db08f64997d113",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/811f019a-0461-4cff-6c1e-442102863f00/logo"
  },
  {
    name: "StarkPepe",
    symbol: "xSPEPE",
    decimals: 18,
    l2_token_address: "0x06f15ec4b6ff0b7f7a216c4b2ccdefc96cbf114d6242292ca82971592f62273b",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    disabled: true
  },
  {
    name: "StarkNet Token",
    symbol: "STRK",
    decimals: 18,
    l2_token_address: "0x04718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d",
    sort_order: 2,
    total_supply: 1e10,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/1b126320-367c-48ed-cf5a-ba7580e49600/logo"
  },
  {
    name: "zkLend Token",
    symbol: "ZEND",
    decimals: 18,
    l2_token_address: "0x00585c32b625999e6e5e78645ff8df7a9001cf5cf3eb6b80ccdd16cb64bd3a34",
    sort_order: 1,
    total_supply: null,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/95515b0e-1230-4158-10f1-56888f613c00/logo"
  },
  {
    name: "Ekubo Protocol",
    symbol: "EKUBO",
    decimals: 18,
    l2_token_address: "0x075afe6402ad5a5c20dd25e10ec3b3986acaa647b77e4ae24b0cbc9a54a27a87",
    sort_order: 1,
    total_supply: 1e7,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/634d9c36-2f0b-4781-93e6-72d701b5af00/logo"
  },
  {
    name: "SOCKS",
    symbol: "SOCKS",
    decimals: 18,
    l2_token_address: "0x023ed2ba4fb5709302c5dfd739fa7613359042f143286c115b6c7f7dc2601015",
    sort_order: 1,
    total_supply: 1e11,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/2db5a2a6-c98e-4b80-35e0-31b489132100/logo"
  },
  {
    name: "Nostra",
    symbol: "NSTR",
    decimals: 18,
    l2_token_address: "0x00c530f2c0aa4c16a0806365b0898499fba372e5df7a7172dc6fe9ba777e8007",
    sort_order: 1,
    total_supply: 1e8,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/a45c2224-17a7-4269-ea7e-3924e9755800/logo"
  },
  {
    name: "Carmine",
    symbol: "CRM",
    decimals: 18,
    l2_token_address: "0x51c4b1fe3bf6774b87ad0b15ef5d1472759076e42944fff9b9f641ff13e5bbe",
    sort_order: 1,
    total_supply: 1e8,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/6ab817f1-8075-4a94-6e14-f112f1f89d00/logo"
  },
  {
    name: "Cash",
    symbol: "CASH",
    decimals: 18,
    l2_token_address: "0x498edfaf50ca5855666a700c25dd629d577eb9afccdf3b5977aec79aee55ada",
    sort_order: 3,
    total_supply: null,
    hidden: false,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/6bd6d156-f509-4b51-5dfc-3ee566143600/logo"
  },
  {
    name: "Nums",
    symbol: "NUMS",
    decimals: 18,
    l2_token_address: "0xe5f10eddc01699dc899a30dbc3c9858148fa4aa0a47c0ffd85f887ffc4653e",
    sort_order: 1,
    total_supply: 1,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/90868d05-cb75-4c42-278c-5a540db2cf00/logo"
  },
  {
    name: "Flip",
    symbol: "FLIP",
    decimals: 18,
    l2_token_address: "0x01bfe97d729138fc7c2d93c77d6d1d8a24708d5060608017d9b384adf38f04c7",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/275f0fa8-a691-471c-ace6-0eb0315dde00/logo"
  },
  {
    name: "Eternum Stone",
    symbol: "STONE",
    decimals: 18,
    l2_token_address: "0x439a1c010e3e1bb2d43d43411000893c0042bd88f6c701611a0ea914d426da4",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/932e7f83-a4c2-40f0-3048-35af3b194100/logo"
  },
  {
    name: "Eternum Coal",
    symbol: "COAL",
    decimals: 18,
    l2_token_address: "0xce635e3f241b0ae78c46a929d84a9101910188f9c4024eaa7559556503c31a",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/cf2ee180-06bf-4443-e3aa-724d7c28e800/logo"
  },
  {
    name: "Eternum Wood",
    symbol: "WOOD",
    decimals: 18,
    l2_token_address: "0x40d8907cec0f7ae9c364dfb12485a1314d84c129bf1898d2f3d4b7fcc7d44f4",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/1db5f954-c1ef-447e-9f8f-05bd9f3b2b00/logo"
  },
  {
    name: "Eternum Copper",
    symbol: "COPPER",
    decimals: 18,
    l2_token_address: "0x66ed5c928ee027a9419ace1cbea8389885161db5572a7c5c4fef2310e9bf494",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/6bbcdcc9-6146-404d-9501-92a664cf3100/logo"
  },
  {
    name: "Eternum Ironwood",
    symbol: "IRONWOOD",
    decimals: 18,
    l2_token_address: "0x1720cf6318bff45e62acc588680ae3cd4d5f8465b1d52cb710533c9299b031a",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/5af7c03b-e4ae-4aee-eba4-a4e2160a1d00/logo"
  },
  {
    name: "Eternum Obsidian",
    symbol: "OBSIDIAN",
    decimals: 18,
    l2_token_address: "0x3b6448d09dcd023507376402686261f5d6739455fa02f804907b066e488da66",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/8be9bc66-486b-4181-6804-725a1db8ad00/logo"
  },
  {
    name: "Eternum Gold",
    symbol: "GOLD",
    decimals: 18,
    l2_token_address: "0xdff9dca192609c4e86ab3be22c7ec1e968876c992d21986f3c542be97fa2f",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/fb9e90f7-3c2f-4c64-7e43-c3f694f35e00/logo"
  },
  {
    name: "Eternum Silver",
    symbol: "SILVER",
    decimals: 18,
    l2_token_address: "0x6fe21d2d4a8a05bdb70f09c9250af9870020d5dcc35f410b4a39d6605c3e353",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e443afeb-850b-46a0-a7ba-a473306d6b00/logo"
  },
  {
    name: "Eternum Mithral",
    symbol: "MITHRAL",
    decimals: 18,
    l2_token_address: "0x67ba235c569c23877064b2ac6ebd4d79f32d3c00f5fab8e28a3b5700b957f6",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/33dc517f-8a66-45eb-f2c5-de5388e47500/logo"
  },
  {
    name: "Eternum Alchemical Silver",
    symbol: "ALCHEMICALSILVER",
    decimals: 18,
    l2_token_address: "0x3956a5301e99522038a2e7dcb9c2a89bf087ffa79310ee0a508b5538efd8ddd",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/3d2e0fd8-4af8-49a0-4bdb-691a4d6ef800/logo"
  },
  {
    name: "Eternum Cold Iron",
    symbol: "COLDIRON",
    decimals: 18,
    l2_token_address: "0x555d713e59d4ff96b7960447e9bc9e79bfdeab5b0eea74e3df81bce61cfbc77",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/878c0d8a-8e2c-4281-0896-9cbbb2ef9400/logo"
  },
  {
    name: "Eternum Deep Crystal",
    symbol: "DEEPCRYSTAL",
    decimals: 18,
    l2_token_address: "0x1d655ac834d38df7921074fc1588411e202b1af83307cbd996983aff52db3a8",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/1c2c954f-448c-476b-a4a6-19b52efe3e00/logo"
  },
  {
    name: "Eternum Ruby",
    symbol: "RUBY",
    decimals: 18,
    l2_token_address: "0x3d9b66720959d0e7687b898292c10e62e78626f2dba5e1909961a2ce3f86612",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/6a45b34d-3bfe-4994-45b0-f2bee8abac00/logo"
  },
  {
    name: "Eternum Diamonds",
    symbol: "DIAMONDS",
    decimals: 18,
    l2_token_address: "0xe03ea8ae385f64754820af5c01c36abf1b8130dd6797d3fd9d430e4114e876",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/b1fa609d-8799-4754-cdea-ab69514ca700/logo"
  },
  {
    name: "Eternum Hartwood",
    symbol: "HARTWOOD",
    decimals: 18,
    l2_token_address: "0x5620aa7170cd66dbcbc37d03087bfe4633ffef91d3e4d97b501de906004f79b",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/27e37e85-91bd-4ee1-0552-1e0795077400/logo"
  },
  {
    name: "Eternum Ignium",
    symbol: "IGNIUM",
    decimals: 18,
    l2_token_address: "0x625c1f789b03ebebc7a9322366f38ebad1f693b84b2abd8cb8f5b2748b0cdd5",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/58591e20-24fb-4353-417a-81d877a5a200/logo"
  },
  {
    name: "Eternum Twilight Quartz",
    symbol: "TWILIGHTQUARTZ",
    decimals: 18,
    l2_token_address: "0x35e24c02409c3cfe8d5646399a62c4d102bb782938d5f5180e92c9c62d3faf7",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/2f8cb892-e82a-4af3-bd09-316061faec00/logo"
  },
  {
    name: "Eternum True Ice",
    symbol: "TRUEICE",
    decimals: 18,
    l2_token_address: "0x4485f5a6e16562e1c761cd348e63256d00389e3ddf4f5d98afe7ab44c57c481",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/fe4bfc17-6553-4dc5-58d2-f452b4aa8a00/logo"
  },
  {
    name: "Eternum Adamantine",
    symbol: "ADAMANTINE",
    decimals: 18,
    l2_token_address: "0x367f838f85a2f5e1580d6f011e4476f581083314cff8721ba3dda9706076eed",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/13bd026b-3612-480e-0119-04cf4c505a00/logo"
  },
  {
    name: "Eternum Sapphire",
    symbol: "SAPPHIRE",
    decimals: 18,
    l2_token_address: "0x2f8dd022568af8f9f718aa37707a9b858529db56910633a160456838b6cbcbc",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/0ebf555f-e732-4054-f8e5-55b2ed49ba00/logo"
  },
  {
    name: "Eternum Ethereal Silica",
    symbol: "ETHEREALSILICA",
    decimals: 18,
    l2_token_address: "0x68b6e23cbbd58a644700f55e96c83580921e9f521b6e5175396b53ba7910e7d",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/f02a5b43-bfcf-408c-7d1b-fcfe68b02d00/logo"
  },
  {
    name: "Eternum Dragon Hide",
    symbol: "DRAGONHIDE",
    decimals: 18,
    l2_token_address: "0x3bf856515bece3c93f5061b7941b8645f817a0acab93c758b8c7b4bc0afa3c6",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/e74955fc-5c8a-4dff-4882-a49a46a5a800/logo"
  },
  {
    name: "Eternum Ancient Fragment",
    symbol: "ANCIENTFRAGMENT",
    decimals: 18,
    l2_token_address: "0x0695b08ecdfdd828c2e6267da62f59e6d7543e690ef56a484df25c8566b332a5",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/9af855b7-4790-4390-9466-6bed4481ab00/logo"
  },
  {
    name: "Eternum Donkey",
    symbol: "DONKEY",
    decimals: 18,
    l2_token_address: "0x264be95a4a2ace20add68cb321acdccd2f9f8440ee1c7abd85da44ddab01085",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/20817378-a45e-4521-f464-10f6dd13c500/logo"
  },
  {
    name: "Eternum Knight",
    symbol: "KNIGHT",
    decimals: 18,
    l2_token_address: "0xac965f9e67164723c16735a9da8dbc9eb8e43b1bd0323591e87c056badf606",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/8787ed1f-af5c-4873-c01a-55f05e999a00/logo"
  },
  {
    name: "Eternum Crossbowman",
    symbol: "CROSSBOWMAN",
    decimals: 18,
    l2_token_address: "0x67e4ac00a241be06ba6afc11fa2715ec7da0c42c05a67ef6ecfcfeda725aaa8",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/dec7f31b-4b1d-46bb-4fca-c0253cf55a00/logo"
  },
  {
    name: "Eternum Paladin",
    symbol: "PALADIN",
    decimals: 18,
    l2_token_address: "0x3bc86299bee061c7c8d7546ccb62b9daf9bffc653b1508facb722c6593874bc",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/7d2cd5a5-f38a-49f6-11f8-ba3b59a59e00/logo"
  },
  {
    name: "Eternum Wheat",
    symbol: "WHEAT",
    decimals: 18,
    l2_token_address: "0x57a3f1ee475e072ce3be41785c0e889b7295d7a0dcc22b992c5b9408dbeb280",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/c338b6a8-77c4-4dd6-34f5-1af0d3fb1e00/logo"
  },
  {
    name: "Eternum Fish",
    symbol: "FISH",
    decimals: 18,
    l2_token_address: "0x27719173cfe10f1aa38d2aaed0a075b6077290f1e817aa3485d2b828394f4d9",
    sort_order: 1,
    total_supply: null,
    hidden: true,
    logo_url: "https://imagedelivery.net/0xPAQaDtnQhBs8IzYRIlNg/6deef27f-df40-4248-4e1b-ed1d79a3f000/logo"
  }
];

// src/index.ts
var controllerConfigs = configs;
var erc20Metadata = metadata;
var defaultTheme = configs["cartridge"].theme;
export {
  controllerConfigs,
  defaultTheme,
  erc20Metadata
};
//# sourceMappingURL=index.js.map