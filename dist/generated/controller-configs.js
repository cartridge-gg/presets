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
            "0x0320f977f47f0885e376b781d9e244d9f59f10154ce844ae1815c919f0374726": {
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
            "0x0062cfee20a5be4b305f610a23291aa27f3fca7a5fd14bd8e2d0389556003e12": {
              name: "battle_systems",
              methods: [
                {
                  entrypoint: "battle_actions"
                }
              ]
            },
            "0x00ae7393b60ad9fd5c26851341b9a4afe61c6ae34326dee79cf5d096e9f55a36": {
              name: "draft_systems",
              methods: [
                {
                  entrypoint: "pick_card"
                }
              ]
            },
            "0x07c9a684813410b39c776c49544d8ecb2d39f0b91bd83ffec31ebc938e053e25": {
              name: "map_systems",
              methods: [
                {
                  entrypoint: "generate_tree"
                },
                {
                  entrypoint: "select_node"
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
export {
  configs
};
//# sourceMappingURL=controller-configs.js.map