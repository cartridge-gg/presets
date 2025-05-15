// This file is auto-generated. DO NOT EDIT IT MANUALLY.
import { ControllerConfigs } from "../";

export const configs: ControllerConfigs = {
  arcade: {
    origin: "*.cartridge.gg",
    theme: {
      name: "Arcade",
      icon: "https://static.cartridge.gg/presets/arcade/icon.svg",
      cover: {
        light: "https://static.cartridge.gg/presets/arcade/cover-light.png",
        dark: "https://static.cartridge.gg/presets/arcade/cover-dark.png",
      },
      optimizedCover: {
        light: {
          webp: {
            "768": "cover-light@768.webp",
            "1024": "cover-light@1024.webp",
            "1440": "cover-light@1440.webp",
          },
          jpg: {
            "768": "cover-light@768.jpg",
            "1024": "cover-light@1024.jpg",
            "1440": "cover-light@1440.jpg",
          },
          png: {
            "768": "cover-light@768.png",
            "1024": "cover-light@1024.png",
            "1440": "cover-light@1440.png",
          },
        },
        dark: {
          webp: {
            "768": "cover-dark@768.webp",
            "1024": "cover-dark@1024.webp",
            "1440": "cover-dark@1440.webp",
          },
          jpg: {
            "768": "cover-dark@768.jpg",
            "1024": "cover-dark@1024.jpg",
            "1440": "cover-dark@1440.jpg",
          },
          png: {
            "768": "cover-dark@768.png",
            "1024": "cover-dark@1024.png",
            "1440": "cover-dark@1440.png",
          },
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x270562dd0e4fd973c7606567f80be50a1e09cea45996e3c84131369b9b5c147":
              {
                name: "Social",
                description: "Social contract to manage your social activities",
                methods: [
                  {
                    name: "pin",
                    entrypoint: "pin",
                    description: "Pin an achievement.",
                  },
                  {
                    name: "unpin",
                    entrypoint: "unpin",
                    description: "Unpin an achievement.",
                  },
                  {
                    name: "follow",
                    entrypoint: "follow",
                    description: "Follow another player.",
                  },
                  {
                    name: "unfollow",
                    entrypoint: "unfollow",
                    description: "Unfollow a player.",
                  },
                  {
                    name: "create_guild",
                    entrypoint: "create_guild",
                    description: "Create a guild.",
                  },
                  {
                    name: "open_guild",
                    entrypoint: "open_guild",
                    description: "Open a guild.",
                  },
                  {
                    name: "close_guild",
                    entrypoint: "close_guild",
                    description: "Close a guild.",
                  },
                  {
                    name: "crown_member",
                    entrypoint: "crown_member",
                    description: "Crown a member to lead the guild.",
                  },
                  {
                    name: "promote_member",
                    entrypoint: "promote_member",
                    description: "Promote a member to officer.",
                  },
                  {
                    name: "demote_member",
                    entrypoint: "demote_member",
                    description: "Demote an officer to member.",
                  },
                  {
                    name: "hire_member",
                    entrypoint: "hire_member",
                    description: "Hire a member to the guild.",
                  },
                  {
                    name: "fire_member",
                    entrypoint: "fire_member",
                    description: "Fire a member from the guild.",
                  },
                  {
                    name: "create_alliance",
                    entrypoint: "create_alliance",
                    description: "Create an alliance.",
                  },
                  {
                    name: "open_alliance",
                    entrypoint: "open_alliance",
                    description: "Open an alliance.",
                  },
                  {
                    name: "close_alliance",
                    entrypoint: "close_alliance",
                    description: "Close an alliance.",
                  },
                  {
                    name: "crown_guild",
                    entrypoint: "crown_guild",
                    description: "Crown a guild to lead the alliance.",
                  },
                  {
                    name: "hire_guild",
                    entrypoint: "hire_guild",
                    description: "Hire a guild in the alliance.",
                  },
                  {
                    name: "fire_guild",
                    entrypoint: "fire_guild",
                    description: "Fire a guild from the alliance.",
                  },
                  {
                    name: "request_alliance",
                    entrypoint: "request_alliance",
                    description: "Request to join an alliance.",
                  },
                  {
                    name: "cancel_alliance",
                    entrypoint: "cancel_alliance",
                    description: "Cancel a request to join an alliance.",
                  },
                  {
                    name: "leave_alliance",
                    entrypoint: "leave_alliance",
                    description: "Leave an alliance.",
                  },
                ],
              },
            "0x1df0247ca7ab848ce0a66cd81ad910305e6be89a1cab9190417655f7dcd0bb7":
              {
                name: "Registry",
                description: "Registry contract for games and editions",
                methods: [
                  {
                    name: "register_game",
                    entrypoint: "register_game",
                    description: "Register a game.",
                  },
                  {
                    name: "update_game",
                    entrypoint: "update_game",
                    description: "Update a game.",
                  },
                  {
                    name: "publish_game",
                    entrypoint: "publish_game",
                    description: "Publish a game.",
                  },
                  {
                    name: "hide_game",
                    entrypoint: "hide_game",
                    description: "Hide a game.",
                  },
                  {
                    name: "whitelist_game",
                    entrypoint: "whitelist_game",
                    description: "Whitelist a game.",
                  },
                  {
                    name: "blacklist_game",
                    entrypoint: "blacklist_game",
                    description: "Blacklist a game.",
                  },
                  {
                    name: "remove_game",
                    entrypoint: "remove_game",
                    description: "Remove a game.",
                  },
                  {
                    name: "register_edition",
                    entrypoint: "register_edition",
                    description: "Register an edition.",
                  },
                  {
                    name: "update_edition",
                    entrypoint: "update_edition",
                    description: "Update edition.",
                  },
                  {
                    name: "prioritize_edition",
                    entrypoint: "prioritize_edition",
                    description: "Set edition priority.",
                  },
                  {
                    name: "publish_edition",
                    entrypoint: "publish_edition",
                    description: "Publish edition.",
                  },
                  {
                    name: "hide_edition",
                    entrypoint: "hide_edition",
                    description: "Hide edition.",
                  },
                  {
                    name: "whitelist_edition",
                    entrypoint: "whitelist_edition",
                    description: "Whitelist edition.",
                  },
                  {
                    name: "blacklist_edition",
                    entrypoint: "blacklist_edition",
                    description: "Blacklist edition.",
                  },
                  {
                    name: "remove_edition",
                    entrypoint: "remove_edition",
                    description: "Remove edition.",
                  },
                ],
              },
          },
        },
      },
    },
  },
  "blob-arena": {
    origin: ["*.blobarena.xyz", "blobarena.xyz", "development.blobarena.xyz"],
    theme: {
      colors: {
        primary: "#980f06",
      },
      cover: "https://static.cartridge.gg/presets/blob-arena/cover.png",
      icon: "https://static.cartridge.gg/presets/blob-arena/icon.png",
      name: "Blob Arena",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
    chains: {
      SN_SEPOLIA: {
        policies: {
          contracts: {
            "0x771a2807aa479dacd207c1f12018d0fa6e92ef1eb994169ff4f8904a8845e3f":
              {
                name: "Lobby Contract",
                description: "Game invites and responses",
                methods: [
                  {
                    name: "Send Invite",
                    entrypoint: "send_invite",
                    description: "Send users an invite",
                  },
                  {
                    name: "Rescind Invite",
                    entrypoint: "rescind_invite",
                    description: "Rescind a previously sent invite",
                  },
                  {
                    name: "Respond Invite",
                    entrypoint: "respond_invite",
                    description: "Respond to a received invite",
                  },
                  {
                    name: "Rescind Response",
                    entrypoint: "rescind_response",
                    description: "Rescind a previous response to an invite",
                  },
                  {
                    name: "Reject Invite",
                    entrypoint: "reject_invite",
                    description: "Reject a received invite",
                  },
                  {
                    name: "Reject Response",
                    entrypoint: "reject_response",
                    description: "Reject a response to an invite",
                  },
                  {
                    name: "Accept Response",
                    entrypoint: "accept_response",
                    description: "Accept a response to an invite",
                  },
                ],
              },
            "0x6040ee8b2aee6cbcc482b5cb712d1c206f8ad070e98d7e07a70d4e4a6b5e261":
              {
                name: "PVP Contract",
                description: "Manages core gameplay interactions",
                methods: [
                  {
                    name: "Start Game",
                    entrypoint: "start",
                    description: "Start the game",
                  },
                  {
                    name: "Commit Attack",
                    entrypoint: "commit",
                    description: "Commit an attack in the game",
                  },
                  {
                    name: "Reveal Attack",
                    entrypoint: "reveal",
                    description: "Reveal the committed attack in the game",
                  },
                  {
                    name: "Run Round",
                    entrypoint: "run",
                    description: "Run the next round of the game",
                  },
                  {
                    name: "Forfeit",
                    entrypoint: "forfeit",
                    description: "Forfeit the game",
                  },
                  {
                    name: "Kick Player",
                    entrypoint: "kick_player",
                    description: "Kick an inactive player from the game",
                  },
                ],
              },
            "0x69f9cd86938bae98a413c2b4dddee1ab8005d72202466ef4fd35a625596e619":
              {
                name: "Betsy Contract",
                description: "Wager operations",
                methods: [
                  {
                    name: "Set Owner's Fee",
                    entrypoint: "set_owners_fee",
                    description: "Set the owner's fee",
                  },
                  {
                    name: "Create Wager",
                    entrypoint: "create",
                    description: "Create a wager",
                  },
                  {
                    name: "Accept Wager",
                    entrypoint: "accept",
                    description: "Accept a wager",
                  },
                  {
                    name: "Reject Wager",
                    entrypoint: "reject",
                    description: "Reject a wager",
                  },
                  {
                    name: "Revoke Wager",
                    entrypoint: "revoke",
                    description: "Revoke a wager",
                  },
                  {
                    name: "Claim Win",
                    entrypoint: "claim_win",
                    description: "Claim the win",
                  },
                  {
                    name: "Approve Release",
                    entrypoint: "approve_release",
                    description: "Approve fund release",
                  },
                  {
                    name: "Revoke Release",
                    entrypoint: "revoke_release",
                    description: "Revoke fund release",
                  },
                  {
                    name: "Release Funds",
                    entrypoint: "release_funds",
                    description: "Release funds",
                  },
                ],
              },
            "0x11088b79a397c2fb9d2570acbf711e6972e75e3a28b6bcf36267501d96c781b":
              {
                name: "Arcade Contract",
                description: "Minting of arcade Bloberts",
                methods: [
                  {
                    name: "Mint Arcade Blobert",
                    entrypoint: "mint",
                    description: "Mint arcade blobert",
                  },
                ],
              },
            "0x645aec04e61f286691b91d6589d010890bb66ca0af91bf24d12c8bc4387c868":
              {
                name: "AMMA Contract",
                description: "Minting of AMMA Bloberts",
                methods: [
                  {
                    name: "Mint AMMA Blobert",
                    entrypoint: "mint",
                    description: "Mint AMMA blobert",
                  },
                ],
              },
            "0x1ad613db1957a576c1a9bae913f1d22a41add2f1d64d822d9e097f219b34954":
              {
                name: "Arcade Contract",
                description: "Arcade mode contract",
                methods: [
                  {
                    name: "Start Game",
                    entrypoint: "start_game",
                    description: "Start the game",
                  },
                  {
                    name: "Attack",
                    entrypoint: "attack",
                    description: "Submit an attack",
                  },
                  {
                    name: "Start Challenge",
                    entrypoint: "start_challenge",
                    description: "Start a challenge",
                  },
                  {
                    name: "Next Challenge Round",
                    entrypoint: "next_challenge_round",
                    description: "Go forward",
                  },
                  {
                    name: "Respawn Challenge",
                    entrypoint: "respawn_challenge",
                    description: "Restart a challenge",
                  },
                  {
                    name: "End Challenge",
                    entrypoint: "end_challenge",
                    description: "End a challenge",
                  },
                  {
                    name: "Claim Free Game",
                    entrypoint: "claim_free_game",
                    description: "Claim an arcade game",
                  },
                ],
              },
          },
        },
      },
    },
  },
  "blob-arena-amma": {
    origin: ["*.blobarena.xyz", "blobarena.xyz", "development.blobarena.xyz"],
    theme: {
      colors: {
        primary: "#D7B000",
      },
      cover: "https://static.cartridge.gg/presets/blob-arena-amma/cover.png",
      icon: "https://static.cartridge.gg/presets/blob-arena-amma/icon.png",
      name: "Blob Arena AMMA",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
    chains: {
      SN_SEPOLIA: {
        policies: {
          contracts: {
            "0x771a2807aa479dacd207c1f12018d0fa6e92ef1eb994169ff4f8904a8845e3f":
              {
                name: "Lobby Contract",
                description: "Game invites and responses",
                methods: [
                  {
                    name: "Send Invite",
                    entrypoint: "send_invite",
                    description: "Send users an invite",
                  },
                  {
                    name: "Rescind Invite",
                    entrypoint: "rescind_invite",
                    description: "Rescind a previously sent invite",
                  },
                  {
                    name: "Respond Invite",
                    entrypoint: "respond_invite",
                    description: "Respond to a received invite",
                  },
                  {
                    name: "Rescind Response",
                    entrypoint: "rescind_response",
                    description: "Rescind a previous response to an invite",
                  },
                  {
                    name: "Reject Invite",
                    entrypoint: "reject_invite",
                    description: "Reject a received invite",
                  },
                  {
                    name: "Reject Response",
                    entrypoint: "reject_response",
                    description: "Reject a response to an invite",
                  },
                  {
                    name: "Accept Response",
                    entrypoint: "accept_response",
                    description: "Accept a response to an invite",
                  },
                ],
              },
            "0x6040ee8b2aee6cbcc482b5cb712d1c206f8ad070e98d7e07a70d4e4a6b5e261":
              {
                name: "PVP Contract",
                description: "Manages core gameplay interactions",
                methods: [
                  {
                    name: "Start Game",
                    entrypoint: "start",
                    description: "Start the game",
                  },
                  {
                    name: "Commit Attack",
                    entrypoint: "commit",
                    description: "Commit an attack in the game",
                  },
                  {
                    name: "Reveal Attack",
                    entrypoint: "reveal",
                    description: "Reveal the committed attack in the game",
                  },
                  {
                    name: "Run Round",
                    entrypoint: "run",
                    description: "Run the next round of the game",
                  },
                  {
                    name: "Forfeit",
                    entrypoint: "forfeit",
                    description: "Forfeit the game",
                  },
                  {
                    name: "Kick Player",
                    entrypoint: "kick_player",
                    description: "Kick an inactive player from the game",
                  },
                ],
              },
            "0x69f9cd86938bae98a413c2b4dddee1ab8005d72202466ef4fd35a625596e619":
              {
                name: "Betsy Contract",
                description: "Wager operations",
                methods: [
                  {
                    name: "Set Owner's Fee",
                    entrypoint: "set_owners_fee",
                    description: "Set the owner's fee",
                  },
                  {
                    name: "Create Wager",
                    entrypoint: "create",
                    description: "Create a wager",
                  },
                  {
                    name: "Accept Wager",
                    entrypoint: "accept",
                    description: "Accept a wager",
                  },
                  {
                    name: "Reject Wager",
                    entrypoint: "reject",
                    description: "Reject a wager",
                  },
                  {
                    name: "Revoke Wager",
                    entrypoint: "revoke",
                    description: "Revoke a wager",
                  },
                  {
                    name: "Claim Win",
                    entrypoint: "claim_win",
                    description: "Claim the win",
                  },
                  {
                    name: "Approve Release",
                    entrypoint: "approve_release",
                    description: "Approve fund release",
                  },
                  {
                    name: "Revoke Release",
                    entrypoint: "revoke_release",
                    description: "Revoke fund release",
                  },
                  {
                    name: "Release Funds",
                    entrypoint: "release_funds",
                    description: "Release funds",
                  },
                ],
              },
            "0x11088b79a397c2fb9d2570acbf711e6972e75e3a28b6bcf36267501d96c781b":
              {
                name: "Arcade Contract",
                description: "Minting of arcade Bloberts",
                methods: [
                  {
                    name: "Mint Arcade Blobert",
                    entrypoint: "mint",
                    description: "Mint arcade blobert",
                  },
                ],
              },
            "0x645aec04e61f286691b91d6589d010890bb66ca0af91bf24d12c8bc4387c868":
              {
                name: "AMMA Contract",
                description: "Minting of AMMA Bloberts",
                methods: [
                  {
                    name: "Mint AMMA Blobert",
                    entrypoint: "mint",
                    description: "Mint AMMA blobert",
                  },
                ],
              },
            "0x1ad613db1957a576c1a9bae913f1d22a41add2f1d64d822d9e097f219b34954":
              {
                name: "Arcade Contract",
                description: "Arcade mode contract",
                methods: [
                  {
                    name: "Start Game",
                    entrypoint: "start_game",
                    description: "Start the game",
                  },
                  {
                    name: "Attack",
                    entrypoint: "attack",
                    description: "Submit an attack",
                  },
                  {
                    name: "Start Challenge",
                    entrypoint: "start_challenge",
                    description: "Start a challenge",
                  },
                  {
                    name: "Next Challenge Round",
                    entrypoint: "next_challenge_round",
                    description: "Go forward",
                  },
                  {
                    name: "Respawn Challenge",
                    entrypoint: "respawn_challenge",
                    description: "Restart a challenge",
                  },
                  {
                    name: "End Challenge",
                    entrypoint: "end_challenge",
                    description: "End a challenge",
                  },
                  {
                    name: "Claim Free Game",
                    entrypoint: "claim_free_game",
                    description: "Claim an arcade game",
                  },
                ],
              },
          },
        },
      },
    },
  },
  budokan: {
    origin: "budokan.gg",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x05fb427962210ac4b3be5e23419b0d9e91ca6a9c57b0665d2ca7783092506f6e":
              {
                name: "Budokan",
                methods: [
                  {
                    entrypoint: "create_tournament",
                  },
                  {
                    entrypoint: "enter_tournament",
                  },
                  {
                    entrypoint: "submit_score",
                  },
                  {
                    entrypoint: "claim_prize",
                  },
                  {
                    entrypoint: "add_prize",
                  },
                  {
                    entrypoint: "register_token",
                  },
                ],
              },
          },
        },
      },
    },
    theme: {
      colors: {
        primary: "#B1B97A",
      },
      cover: "https://static.cartridge.gg/presets/budokan/cover.png",
      icon: "https://static.cartridge.gg/presets/budokan/icon.png",
      name: "Budokan",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  "bytebeasts-tamagotchi": {
    origin: "bytebeasts.games",
    theme: {
      colors: {
        primary: "#ECECDA",
      },
      cover:
        "https://static.cartridge.gg/presets/bytebeasts-tamagotchi/cover.png",
      icon: "https://static.cartridge.gg/presets/bytebeasts-tamagotchi/icon.png",
      name: "Tamagotchi",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  cartridge: {
    origin: "*",
    theme: {
      name: "Cartridge",
      icon: "https://static.cartridge.gg/presets/cartridge/icon.svg",
      cover: {
        light: "https://static.cartridge.gg/presets/cartridge/cover-light.png",
        dark: "https://static.cartridge.gg/presets/cartridge/cover-dark.png",
      },
      optimizedCover: {
        light: {
          webp: {
            "768": "cover-light@768.webp",
            "1024": "cover-light@1024.webp",
            "1440": "cover-light@1440.webp",
          },
          jpg: {
            "768": "cover-light@768.jpg",
            "1024": "cover-light@1024.jpg",
            "1440": "cover-light@1440.jpg",
          },
          png: {
            "768": "cover-light@768.png",
            "1024": "cover-light@1024.png",
            "1440": "cover-light@1440.png",
          },
        },
        dark: {
          webp: {
            "768": "cover-dark@768.webp",
            "1024": "cover-dark@1024.webp",
            "1440": "cover-dark@1440.webp",
          },
          jpg: {
            "768": "cover-dark@768.jpg",
            "1024": "cover-dark@1024.jpg",
            "1440": "cover-dark@1440.jpg",
          },
          png: {
            "768": "cover-dark@768.png",
            "1024": "cover-dark@1024.png",
            "1440": "cover-dark@1440.png",
          },
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
  },
  "chaos-surfer": {
    origin: ["*.cartridge.gg", "*.popularium.com"],
    theme: {
      colors: {
        primary: "#E66666",
      },
      cover: "https://static.cartridge.gg/presets/chaos-surfer/cover.png",
      icon: "https://static.cartridge.gg/presets/chaos-surfer/icon.png",
      name: "Chaos Surfers",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
    chains: {
      WP_POPULARIUMDEMO_GAME: {
        policies: {
          contracts: {
            "0x02bc1da15a889c1ed9281bfce4fba5130a07e753e6dad3972215da657423baab":
              {
                methods: [
                  {
                    name: "claim_card_pack",
                    entrypoint: "claim_card_pack",
                    description: "Claim a card pack",
                  },
                  {
                    name: "draft_agent",
                    entrypoint: "draft_agent",
                    description: "Add an agent to the trial",
                  },
                ],
              },
            "0x07cd4db7a78abbf92a4b846803388b51d8f1f85b27de36c9f1625e0d5d074b8e":
              {
                methods: [
                  {
                    name: "issue_card",
                    entrypoint: "issue_card",
                    description: "Issue a card",
                  },
                  {
                    name: "transfer_from",
                    entrypoint: "transfer_from",
                    description: "Transfer a card",
                  },
                ],
              },
          },
        },
      },
    },
  },
  coloniz: {
    origin: ["*.coloniz.xyz", "coloniz.xyz"],
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x430d7262fb9ad2c830d793471c3a07e08afe54f9a5f0d28db48712bc918f5f":
              {
                name: "Tokenbound Sessions",
                methods: [
                  {
                    name: "Execute",
                    entrypoint: "execute",
                    description: "Session proxy",
                  },
                ],
              },
            "0x56977e22ad4751ea5b3df958da3080971c7f26036127452b98c154fbea86d06":
              {
                name: "Profile Creation",
                methods: [
                  {
                    name: "Create A Coloniz Profile",
                    entrypoint: "create_profile",
                    description: "Create a profile on Coloniz",
                  },
                ],
              },
            "0x5cc4644374e3f91b52cfe64937dacaec91b2d81fe2f146a860ab5b3bb751ce8":
              {
                name: "Handles Minting",
                methods: [
                  {
                    name: "Mint Handle",
                    entrypoint: "mint_handle",
                    description: "Mint Coloniz Profile Handle",
                  },
                ],
              },
            "0x79914426e3cc5336c479ee87770380ceeda4b60496657e70c3ee7d57a992226":
              {
                name: "Handle Registry",
                methods: [
                  {
                    name: "Link Handle",
                    entrypoint: "link",
                    description: "Link handle to Coloniz Profile",
                  },
                ],
              },
          },
          messages: [
            {
              name: "Sign in to Coloniz",
              description: "Sign the message to login to Coloniz",
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                Signin: [
                  {
                    name: "content",
                    type: "string",
                  },
                  {
                    name: "nonce",
                    type: "string",
                  },
                  {
                    name: "timestamp",
                    type: "string",
                  },
                ],
              },
              primaryType: "Signin",
              domain: {
                name: "Coloniz",
                version: "1",
                revision: "1",
                chainId: "SN_MAIN",
              },
            },
          ],
        },
      },
    },
    theme: {
      colors: {
        primary: "#4285F4",
      },
      cover: "https://static.cartridge.gg/presets/coloniz/cover.png",
      icon: "https://static.cartridge.gg/presets/coloniz/icon.png",
      name: "Coloniz",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  credit: {
    origin: "*",
    theme: {
      name: "Credit",
      icon: "https://static.cartridge.gg/presets/credit/icon.svg",
      cover: "https://static.cartridge.gg/presets/credit/cover.png",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
  },
  "dark-shuffle": {
    origin: ["darkshuffle.io", "darkshuffle.dev"],
    theme: {
      colors: {
        primary: "#F59100",
      },
      cover: "https://static.cartridge.gg/presets/dark-shuffle/cover.png",
      icon: "https://static.cartridge.gg/presets/dark-shuffle/icon.svg",
      name: "Dark Shuffle",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x051Fea4450Da9D6aeE758BDEbA88B2f665bCbf549D2C61421AA724E9AC0Ced8F":
              {
                name: "VRF Provider",
                description: "Provides verifiable random functions",
                methods: [
                  {
                    name: "Request Random",
                    description: "Request a random number",
                    entrypoint: "request_random",
                  },
                ],
              },
            "0x01e1c477f2ef896fd638b50caa31e3aa8f504d5c6cb3c09c99cd0b72523f07f7":
              {
                name: "game_systems",
                description: "Game mechanics",
                methods: [
                  {
                    entrypoint: "mint",
                  },
                  {
                    entrypoint: "start_game",
                  },
                  {
                    entrypoint: "pick_card",
                  },
                  {
                    entrypoint: "generate_tree",
                  },
                  {
                    entrypoint: "select_node",
                  },
                ],
              },
            "0x003befa9c969bf82bbfa0a96374da9f7aab172101298c0ff2611ec8c2fd02692":
              {
                name: "battle_systems",
                description: "Battle mechanics",
                methods: [
                  {
                    entrypoint: "battle_actions",
                  },
                ],
              },
          },
        },
      },
    },
  },
  dominion: {
    origin: "https://dominion.fun",
    theme: {
      colors: {
        primary: "#19cfff",
      },
      cover: "https://static.cartridge.gg/presets/dominion/cover.png",
      icon: "https://static.cartridge.gg/presets/dominion/icon.svg",
      name: "Dominion",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
  },
  "dope-wars": {
    origin: "dopewars.game",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x051Fea4450Da9D6aeE758BDEbA88B2f665bCbf549D2C61421AA724E9AC0Ced8F":
              {
                name: "VRF Provider",
                description: "Provides verifiable random functions",
                methods: [
                  {
                    name: "Request Random",
                    description: "Request a random number",
                    entrypoint: "request_random",
                  },
                ],
              },
            "0x0410466536b5ae074f7fea81e5533b8134a9fa08b3dd077dd9db08f64997d113":
              {
                name: "Paper Token",
                description: "Manages paper approvals",
                methods: [
                  {
                    name: "Approve",
                    description: "Approve paper usage",
                    entrypoint: "approve",
                  },
                ],
              },
            "0x044a23BbfE03FFe90D3C23Fb6e5A8AD0341036C039363DfA6F3513278Aa51fCA":
              {
                name: "Game Contract",
                description: "Core game mechanics",
                methods: [
                  {
                    name: "Create Game",
                    description: "Start a new game",
                    entrypoint: "create_game",
                  },
                  {
                    name: "Travel",
                    description: "Travel to a new location",
                    entrypoint: "travel",
                  },
                  {
                    name: "Decide",
                    description: "Make a game decision",
                    entrypoint: "decide",
                  },
                  {
                    name: "End Game",
                    description: "End the current game",
                    entrypoint: "end_game",
                  },
                ],
              },
            "0x0412445e644070C69fEa16b964cC81Cd6dEBF6A4DBf683E2E9686a45ad088de8":
              {
                name: "Laundromat Contract",
                description: "Manages game scoring and laundering",
                methods: [
                  {
                    name: "Register Score",
                    description: "Register a game score",
                    entrypoint: "register_score",
                  },
                  {
                    name: "Claim",
                    description: "Claim rewards",
                    entrypoint: "claim",
                  },
                  {
                    name: "Launder",
                    description: "Launder resources",
                    entrypoint: "launder",
                  },
                ],
              },
          },
        },
      },
    },
    theme: {
      colors: {
        primary: "#11ED83",
      },
      cover: "https://static.cartridge.gg/presets/dope-wars/cover.png",
      icon: "https://static.cartridge.gg/presets/dope-wars/icon.png",
      name: "Dope Wars",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  dragark: {
    origin: ["*.dragark.net", "dragark.net"],
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x05553fcb6da57decacce3306d8e0b3bf65b656dceda96c90ba55bde8980253ce":
              {
                name: "Achievement Systems",
                description:
                  "Allows you to interact with achievement features.",
                methods: [
                  {
                    name: "Claim Achievement Reward",
                    description: "A method to claim your achievement reward.",
                    entrypoint: "claim_achievement_reward",
                  },
                ],
              },
            "0x059ffaee1d7068332ea8f084a9685b99a5c2a74197ef99e093a10fa25f887402":
              {
                name: "Dragon Systems",
                description: "Allows you to interact with dragon features.",
                methods: [
                  {
                    name: "Activate Dragon",
                    description:
                      "A method to activate the Dragark NFT into the game.",
                    entrypoint: "activate_dragon",
                  },
                  {
                    name: "Deactivate Dragon",
                    description:
                      "A method to deactivate Dragark NFT out of the game.",
                    entrypoint: "deactivate_dragon",
                  },
                  {
                    name: "Upgrade Dragon",
                    description: "A method to upgrade the Dragark's level.",
                    entrypoint: "upgrade_dragon",
                  },
                ],
              },
            "0x0760d029c7b49069ece425285afb592152da1fff59038e697a5554f1b94150f2":
              {
                name: "Island Systems",
                description: "Allows you to interact with island features.",
                methods: [
                  {
                    name: "Claim Resources",
                    description: "A method to claim the island's rescources.",
                    entrypoint: "claim_resources",
                  },
                  {
                    name: "Claim Resources Islands",
                    description:
                      "A method to claim rescources on multiple islands.",
                    entrypoint: "claim_resources_islands",
                  },
                ],
              },
            "0x000ccb9e596c7d3298b670d91b6c3ed305aeed3eb1335d702265f53f1d0ad68a":
              {
                name: "Journey Systems",
                description: "Allows you to interact with journey features.",
                methods: [
                  {
                    name: "Start Journey",
                    description:
                      "A method to start a new journey to other island.",
                    entrypoint: "start_journey",
                  },
                  {
                    name: "Finish Journey",
                    description: "A method to finish a started journey.",
                    entrypoint: "finish_journey",
                  },
                ],
              },
            "0x0002d12498d7b7f5e4d57a9895f8684fa58f4edb06ba6edb879723d8acb16507":
              {
                name: "Map Systems",
                description: "Allows you to interact with map features.",
                methods: [
                  {
                    name: "Join Map",
                    description: "A method to join the map.",
                    entrypoint: "join_map",
                  },
                ],
              },
            "0x01ba78267fd97db89b8ac0316ce0a2d71aaef87ad4f300e5468dc20232a2ff20":
              {
                name: "Mission Systems",
                description: "Allows you to interact with mission features.",
                methods: [
                  {
                    name: "Claim Mission Reward",
                    description: "A method to claim your mission reward.",
                    entrypoint: "claim_mission_reward",
                  },
                ],
              },
            "0x063b168f01cbac52b5d2ad82696eeaddde33b38d24364523ad0a3ca400361489":
              {
                name: "Player Systems",
                description: "Allows you to interact with player features.",
                methods: [
                  {
                    name: "Buy Energy",
                    description:
                      "A method to buy energy used in scouting the map.",
                    entrypoint: "buy_energy",
                  },
                  {
                    name: "Claim Reward",
                    description: "A method to claim your reward.",
                    entrypoint: "claim_reward",
                  },
                  {
                    name: "Upgrade Account Level",
                    description: "A method to upgrade your account level.",
                    entrypoint: "upgrade_account_level",
                  },
                  {
                    name: "Upgrade Invitation Level",
                    description: "A method to upgrade your invitation level.",
                    entrypoint: "upgrade_invitation_level",
                  },
                  {
                    name: "Redeem Invite Code",
                    description: "A method to redeem invite code.",
                    entrypoint: "redeem_invite_code",
                  },
                  {
                    name: "Claim Pool Share Reward",
                    description: "A method to claim your Pool Share reward.",
                    entrypoint: "claim_pool_share_reward",
                  },
                ],
              },
            "0x03284bb4684703a368db8fd538c39b30e51822dbab9ad398e66311e820318444":
              {
                name: "Scout Systems",
                description: "Allows you to interact with scout features.",
                methods: [
                  {
                    name: "Scout",
                    description: "A method to scout the map.",
                    entrypoint: "scout",
                  },
                ],
              },
            "0x04a8b7e4106719e75653595c1e55da9ac88fbf1ae29124fca325c0537f00e908":
              {
                name: "Shield Systems",
                description: "Allows you to interact with shield features.",
                methods: [
                  {
                    name: "Activate Shield",
                    description:
                      "A method to activate a shield to protect your island.",
                    entrypoint: "activate_shield",
                  },
                  {
                    name: "Deactivate Shield",
                    description:
                      "A method to deactivate a shield from your island.",
                    entrypoint: "deactivate_shield",
                  },
                  {
                    name: "Buy Shield",
                    description: "A method to buy a shield.",
                    entrypoint: "buy_shield",
                  },
                ],
              },
            "0x060a67334aed80a5403bd2b727337f29ccdcbf51784cc7ddb73f10ceb92e61f1":
              {
                name: "Star Shop Systems",
                description: "Allows you to interact with star shop features.",
                methods: [
                  {
                    name: "Buy Item Star Shop",
                    description: "A method to buy item from the Star Shop.",
                    entrypoint: "buy_item_star_shop",
                  },
                ],
              },
            "0x0655a9a38cb8dd7087a206b7d885528f8994e03dd6449105ef0f068caa502d25":
              {
                name: "Treasure Hunt Systems",
                description:
                  "Allows you to interact with treasure hunt features.",
                methods: [
                  {
                    name: "Insert Dragon Treasure Hunt",
                    description:
                      "A method to insert your Dragarks to start a new treasure hunt.",
                    entrypoint: "insert_dragon_treasure_hunt",
                  },
                  {
                    name: "End Treasure Hunt",
                    description:
                      "A method to end an existing treasure hunt and claim rewards.",
                    entrypoint: "end_treasure_hunt",
                  },
                ],
              },
          },
        },
      },
    },
    theme: {
      colors: {
        primary: "#71EB34",
      },
      cover: "https://static.cartridge.gg/presets/dragark/cover.png",
      icon: "https://static.cartridge.gg/presets/dragark/icon.png",
      name: "Dragark",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  eternum: {
    origin: ["eternum.realms.world", "empire.realms.world"],
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x787a18ab98c12ed0336f79037a92ed18807d8716529722196ecb8c91238806b":
              {
                name: "Bank systems",
                description: "Manages bank functions",
                methods: [
                  {
                    name: "Create Banks",
                    description: "Create a new bank",
                    entrypoint: "create_banks",
                  },
                ],
              },
            "0x7ad410c472c1d61ce318dd617a479c977c85275afbf7991a1e1461ffe626a3d":
              {
                name: "Village pass contract",
                description: "ERC721 Village pass contract",
                methods: [
                  {
                    name: "Set Approval For All",
                    description: "Sets approval",
                    entrypoint: "set_approval_for_all",
                  },
                ],
              },
            "0x690b17cee4b7f2b67459b5a17b51ecdb6961134df6ed4257d5ee9ae3da9e20f":
              {
                name: "Guild contract",
                description: "Allows guild utilities",
                methods: [
                  {
                    name: "Create Guild",
                    description: "Creates a new guild",
                    entrypoint: "create_guild",
                  },
                  {
                    name: "Join Guild",
                    description: "Join an existing guild",
                    entrypoint: "join_guild",
                  },
                  {
                    name: "Leave Guild",
                    description: "Leaves a guild",
                    entrypoint: "leave_guild",
                  },
                  {
                    name: "Whitelist Player",
                    description: "Add a player to the guild's whitelist",
                    entrypoint: "whitelist_player",
                  },
                  {
                    name: "Transfer Guild Ownership",
                    description:
                      "Transfer ownership of the guild to another player",
                    entrypoint: "transfer_guild_ownership",
                  },
                  {
                    name: "Remove Guild Member",
                    description: "Remove a member from the guild",
                    entrypoint: "remove_guild_member",
                  },
                  {
                    name: "Remove Player from Whitelist",
                    description: "Remove a player from the guild's whitelist",
                    entrypoint: "remove_player_from_whitelist",
                  },
                  {
                    name: "Update Whitelist",
                    description: "Update the guild's whitelist",
                    entrypoint: "update_whitelist",
                  },
                  {
                    name: "Remove Member",
                    description: "Remove a member from the guild",
                    entrypoint: "remove_member",
                  },
                ],
              },
            "0x3bd8ab5ff0f6b9cac2580b65d04b1249d62a8eec450bd259379182ae22f7d74":
              {
                name: "Hyperstructure contract",
                description:
                  "Handles the creation and management of hyperstructures",
                methods: [
                  {
                    name: "Initialize hyperstructure",
                    description: "Initializes a new hyperstructure",
                    entrypoint: "initialize",
                  },
                  {
                    name: "Contribute to Construction",
                    description:
                      "Contribute resources to hyperstructure construction",
                    entrypoint: "contribute_to_construction",
                  },
                  {
                    name: "Set Co-Owners",
                    description: "Set the co-owners of the hyperstructure",
                    entrypoint: "set_co_owners",
                  },
                  {
                    name: "End Game",
                    description:
                      "Terminates the current game season once you've reached enough points",
                    entrypoint: "end_game",
                  },
                  {
                    name: "Set Access",
                    description:
                      "Configure access permissions for contributions to the hyperstructure",
                    entrypoint: "set_access",
                  },
                ],
              },
            "0x49c9f205f61e9b908e7eb656ec8b346d48084e65d2c3da77daa3ea943e6de46":
              {
                name: "AMM liquidity contract",
                description: "Manages liquidity for the Automated Market Maker",
                methods: [
                  {
                    name: "Add",
                    description: "Add liquidity to the pool",
                    entrypoint: "add",
                  },
                  {
                    name: "Remove",
                    description: "Remove liquidity from the pool",
                    entrypoint: "remove",
                  },
                ],
              },
            "0x601421e73dfd18852d7eb35d8a133a82d9ec3d116fae048a1991fa8dc12c45c":
              {
                name: "Naming contract",
                description: "Manages names",
                methods: [
                  {
                    name: "Set Address Name",
                    description: "Set the name of the address",
                    entrypoint: "set_address_name",
                  },
                ],
              },
            "0x7a541dcbffaa4a2d503f40e0f839f4558d7022e7c2cfed483e6304846f8612f":
              {
                name: "Ownership contract",
                description: "Manages ownership of structures and agents",
                methods: [
                  {
                    name: "Transfer Structure Ownership",
                    description: "Transfer the ownership of a structure",
                    entrypoint: "transfer_structure_ownership",
                  },
                  {
                    name: "Transfer Agent Ownership",
                    description: "Transfer the ownership of an agent",
                    entrypoint: "transfer_agent_ownership",
                  },
                ],
              },
            "0x382def3c478f0beb5cf4c63ddd084169466aa56f27d805be6e0d4098cb2e2d1":
              {
                name: "Production contract",
                description: "Enables management of production of buildings",
                methods: [
                  {
                    name: "Create Building",
                    description: "Create a new building",
                    entrypoint: "create_building",
                  },
                  {
                    name: "Destroy Building",
                    description: "Destroy a building",
                    entrypoint: "destroy_building",
                  },
                  {
                    name: "Pause Building Production",
                    description: "Pause the production of a building",
                    entrypoint: "pause_building_production",
                  },
                  {
                    name: "Resume Building Production",
                    description: "Resume the production of a building",
                    entrypoint: "resume_building_production",
                  },
                  {
                    name: "Burn Resource for Labor Production",
                    description: "Burn resources for labor production",
                    entrypoint: "burn_resource_for_labor_production",
                  },
                  {
                    name: "Burn Labor for Resource Production",
                    description: "Burn labor for resource production",
                    entrypoint: "burn_labor_for_resource_production",
                  },
                  {
                    name: "Burn Resource for Resource Production",
                    description: "Burn resources for resource production",
                    entrypoint: "burn_resource_for_resource_production",
                  },
                  {
                    name: "Claim Wonder Production Bonus",
                    description: "Claim the production bonus for a wonder",
                    entrypoint: "claim_wonder_production_bonus",
                  },
                ],
              },
            "0x31973536315f0915760065cdbe90accf397a7163e77fcf57a570ae9e0210560":
              {
                name: "Realm contract",
                description: "Manages realm-related actions",
                methods: [
                  {
                    name: "Create a realm",
                    description: "Create a new realm",
                    entrypoint: "create",
                  },
                ],
              },
            "0x4525466d50e8c007d1fe2b0c916b8a8e3b5f05e2f562eb08033e1dba0ba721b":
              {
                name: "Resource contract",
                description: "In-game resource management",
                methods: [
                  {
                    name: "Approve",
                    description: "Approve resource transfer",
                    entrypoint: "approve",
                  },
                  {
                    name: "Send",
                    description: "Send resources to another entity",
                    entrypoint: "send",
                  },
                  {
                    name: "Pickup",
                    description: "Collect available resources after transfer",
                    entrypoint: "pickup",
                  },
                  {
                    name: "Arrivals Offload",
                    description: "Offload resources from an arrival",
                    entrypoint: "arrivals_offload",
                  },
                  {
                    name: "Transfer resources",
                    description: "Transfer resources from troop to structure",
                    entrypoint: "troop_structure_adjacent_transfer",
                  },
                  {
                    name: "Transfer resources",
                    description: "Transfer resources from structure to troop",
                    entrypoint: "structure_troop_adjacent_transfer",
                  },
                  {
                    name: "structure_burn",
                    entrypoint: "structure_burn",
                  },
                  {
                    name: "troop_burn",
                    entrypoint: "troop_burn",
                  },
                  {
                    name: "Structure regularize weight",
                    description: "Regularizes the weight of a structure",
                    entrypoint: "structure_regularize_weight",
                  },
                ],
              },
            "0x69c3c02987c4259663d80aee1d6c32f4c8298e51a61fa1dcd52c1062bfc1932":
              {
                name: "Season contract",
                description: "Manages season-related actions",
                methods: [
                  {
                    name: "Register to Leaderboard",
                    description: "Register to the leaderboard",
                    entrypoint: "register_to_leaderboard",
                  },
                  {
                    name: "Claim Leaderboard Rewards",
                    description: "Claim rewards from the leaderboard",
                    entrypoint: "claim_leaderboard_rewards",
                  },
                ],
              },
            "0x783cf5277eeaa10eb065dbd36a4bfc06719820c182e2e152831f898485d251c":
              {
                name: "Structure contract",
                description: "Manages structure-related actions",
                methods: [
                  {
                    name: "Level Up",
                    description: "Level up a structure",
                    entrypoint: "level_up",
                  },
                ],
              },
            "0x489701e7d386b42de3b20a598c96090b9cbfbbc54397f44819789da19b99532":
              {
                name: "AMM swap contract",
                description:
                  "Handles token swaps in the Automated Market Maker",
                methods: [
                  {
                    name: "Buy",
                    description: "Purchase tokens from the liquidity pool",
                    entrypoint: "buy",
                  },
                  {
                    name: "Sell",
                    description: "Sell tokens to the liquidity pool",
                    entrypoint: "sell",
                  },
                ],
              },
            "0x7b6286417020ff6b82c3bb719115271ffd9b04dd5940382690a4e122ae6f7b9":
              {
                name: "Market contract",
                description: "Manages trading orders in the in-game market",
                methods: [
                  {
                    name: "Create Order",
                    description: "Create a new trading order",
                    entrypoint: "create_order",
                  },
                  {
                    name: "Accept Order",
                    description: "Accept a trading order",
                    entrypoint: "accept_order",
                  },
                  {
                    name: "Cancel Order",
                    description: "Cancel a trading order",
                    entrypoint: "cancel_order",
                  },
                ],
              },
            "0x1ea013a75ea125643e745e71dd800e4b08dfc26263c9f4731f05e01f067ff9e":
              {
                name: "Troop battle contract",
                description: "Manages troop battles",
                methods: [
                  {
                    name: "Attack Explorer vs Explorer",
                    description: "Combat: explorer vs explorer",
                    entrypoint: "attack_explorer_vs_explorer",
                  },
                  {
                    name: "Attack Explorer vs Guard",
                    description: "Combat: explorer vs guard",
                    entrypoint: "attack_explorer_vs_guard",
                  },
                  {
                    name: "Attack Guard vs Explorer",
                    description: "Combat: guard vs explorer",
                    entrypoint: "attack_guard_vs_explorer",
                  },
                ],
              },
            "0x765e7a70d3dd78829d643dea6d3524b16115f3c1510ca04f3133c0092d9adb8":
              {
                name: "Troop management contract",
                description: "Manages troop management",
                methods: [
                  {
                    name: "Add Guard",
                    description: "Add a guard to the troop",
                    entrypoint: "guard_add",
                  },
                  {
                    name: "Delete Guard",
                    description: "Delete a guard from the troop",
                    entrypoint: "guard_delete",
                  },
                  {
                    name: "Create Explorer",
                    description: "Create a new explorer",
                    entrypoint: "explorer_create",
                  },
                  {
                    name: "Add Explorer",
                    description: "Add an explorer to the troop",
                    entrypoint: "explorer_add",
                  },
                  {
                    name: "Delete Explorer",
                    description: "Delete an explorer from the troop",
                    entrypoint: "explorer_delete",
                  },
                  {
                    name: "Explorer Explorer Swap",
                    description: "Swap an explorer for another explorer",
                    entrypoint: "explorer_explorer_swap",
                  },
                  {
                    name: "Explorer Guard Swap",
                    description: "Swap an explorer for a guard",
                    entrypoint: "explorer_guard_swap",
                  },
                  {
                    name: "Guard Explorer Swap",
                    description: "Swap a guard for an explorer",
                    entrypoint: "guard_explorer_swap",
                  },
                ],
              },
            "0x2c2c42a9c63f9f5eb1cd22fe4d55b228dec3bfc91ec8f37a37d3aea27d0ab27":
              {
                name: "Troop movement contract",
                description: "Manages troop movement",
                methods: [
                  {
                    name: "Explorer Move",
                    description: "Move an explorer",
                    entrypoint: "explorer_move",
                  },
                ],
              },
            "0xb695bc2b53c60be0db549b8c4faf42a8df3f440d321dc38eb7d1bca58c71ed":
              {
                name: "Raid systems",
                description: "Raid systems",
                methods: [
                  {
                    name: "Raid Explorer vs Guard",
                    description: "Raid an explorer vs guard",
                    entrypoint: "raid_explorer_vs_guard",
                  },
                ],
              },
            "0x4eda0975e3b6eaf78bac5626c5bf06ee51297365134dc5f70d0074ece0f63dd":
              {
                name: "Village systems",
                description: "Village systems",
                methods: [
                  {
                    name: "Create",
                    description: "Create a new village",
                    entrypoint: "create",
                  },
                ],
              },
            "0x051fea4450da9d6aee758bdeba88b2f665bcbf549d2c61421aa724e9ac0ced8f":
              {
                name: "Cartridge VRF Provider",
                description:
                  "Verifiable Random Function contract, allows randomness in the game",
                methods: [
                  {
                    name: "Request Random",
                    description:
                      "Allows requesting random numbers from the VRF provider",
                    entrypoint: "request_random",
                  },
                ],
              },
            "0x60e8836acbebb535dfcd237ff01f20be503aae407b67bb6e3b5869afae97156":
              {
                name: "Season passes",
                description: "ERC721 Season passes contract",
                methods: [
                  {
                    name: "Set Approval For All",
                    description: "Approves transfer of season pass",
                    entrypoint: "set_approval_for_all",
                  },
                ],
              },
            "0x5441c5b2d141d9e6b299ad88e5e3f0d5b0653830c8dbf565594deb8c497ddc5":
              {
                name: "Quests",
                description: "Start and claim quests",
                methods: [
                  {
                    name: "Start Quest",
                    description: "Start a quest",
                    entrypoint: "start_quest",
                  },
                  {
                    name: "Claim Quest Reward",
                    description: "Claim a quest reward",
                    entrypoint: "claim_reward",
                  },
                ],
              },
          },
          messages: [
            {
              name: "Eternum Message Signing",
              description: "Allows signing messages for Eternum",
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                "s1_eternum-Message": [
                  {
                    name: "identity",
                    type: "ContractAddress",
                  },
                  {
                    name: "channel",
                    type: "shortstring",
                  },
                  {
                    name: "content",
                    type: "string",
                  },
                  {
                    name: "timestamp",
                    type: "felt",
                  },
                  {
                    name: "salt",
                    type: "felt",
                  },
                ],
              },
              primaryType: "s1_eternum-Message",
              domain: {
                name: "Eternum",
                version: "1",
                chainId: "SN_MAIN",
                revision: "1",
              },
            },
          ],
        },
      },
    },
    theme: {
      name: "Eternum",
      icon: "https://static.cartridge.gg/presets/eternum/icon.svg",
      cover: "https://static.cartridge.gg/presets/eternum/cover.png",
      colors: {
        primary: "#dc8b07",
      },
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
  },
  flippyflop: {
    origin: "flippyflop.gg",
    theme: {
      colors: {
        primary: "#F38332",
      },
      cover: "https://static.cartridge.gg/presets/flippyflop/cover.png",
      icon: "https://static.cartridge.gg/presets/flippyflop/icon.png",
      name: "FlippyFlop",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  "force-prime": {
    origin: "forceprime.io",
    theme: {
      colors: {
        primary: "#E1CC89",
      },
      cover: "https://static.cartridge.gg/presets/force-prime/cover.png",
      icon: "https://static.cartridge.gg/presets/force-prime/icon.png",
      name: "Force Prime",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  "jokers-of-neon": {
    origin: "jokersofneon.com",
    theme: {
      colors: {
        primary: "#A144B2",
      },
      cover: "https://static.cartridge.gg/presets/jokers-of-neon/cover.png",
      icon: "https://static.cartridge.gg/presets/jokers-of-neon/icon.png",
      name: "Jokers of Neon",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  "loot-survivor": {
    origin: "lootsurvivor.io",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x0305f26ad19e0a10715d9f3137573d3a543de7b707967cd85d11234d6ec0fb7e":
              {
                methods: [
                  {
                    entrypoint: "attack",
                  },
                  {
                    entrypoint: "drop",
                  },
                  {
                    entrypoint: "equip",
                  },
                  {
                    entrypoint: "explore",
                  },
                  {
                    entrypoint: "flee",
                  },
                  {
                    entrypoint: "new_game",
                  },
                  {
                    entrypoint: "transfer_from",
                  },
                  {
                    entrypoint: "upgrade",
                  },
                ],
              },
            "0x3347382d530ff6acb9283ac1d78471187aae8a4690e9316bb4e3c3365ff7a86":
              {
                methods: [
                  {
                    entrypoint: "enter_tournament",
                  },
                  {
                    entrypoint: "start_tournament",
                  },
                ],
              },
          },
        },
      },
    },
    theme: {
      colors: {
        primary: "#33FF33",
      },
      cover: "https://static.cartridge.gg/presets/loot-survivor/cover.png",
      icon: "https://static.cartridge.gg/presets/loot-survivor/icon.png",
      name: "Loot Survivor",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  "mage-duel": {
    origin: ["devmageduel.evolute.network", "mageduel.evolute.network"],
    theme: {
      colors: {
        primary: "#BD835B",
      },
      cover: "https://static.cartridge.gg/presets/mage-duel/cover.png",
      icon: "https://static.cartridge.gg/presets/mage-duel/icon.png",
      name: "Evolute: Mage Duel",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  metacube: {
    origin: ["*.metacube.games", "metacube.games"],
    theme: {
      colors: {
        primary: "#11ffbb",
      },
      cover: "https://static.cartridge.gg/presets/metacube/cover.png",
      icon: "https://static.cartridge.gg/presets/metacube/icon.png",
      name: "Metacube",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  "metal-slug": {
    origin: "https://metalslug.starkarcade.com/",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x6aa878dfaa2710b66f26c02e52cbcc8adddd0c3e9b0d766fb045c8250490be0":
              {
                name: "Metal Slug Systems",
                description: "Allows you to interact with metal slug features.",
                methods: [
                  {
                    name: "Claim end match reward",
                    description:
                      "A method to claim reward after finishing a match.",
                    entrypoint: "claim_end_match_reward",
                  },
                  {
                    name: "Claim Points",
                    description:
                      "A method to claim points after finishing suvival match.",
                    entrypoint: "claim_points",
                  },
                  {
                    name: "Graft Treasure Chest",
                    description:
                      "A method to graft a treasure chest after collect enough materials.",
                    entrypoint: "graft_treasure_chest",
                  },
                  {
                    name: "Open Treasure Chest",
                    description: "A method to open a treasure chest.",
                    entrypoint: "open_treasure_chest",
                  },
                ],
              },
          },
        },
      },
    },
    theme: {
      colors: {
        primary: "#C00F0C",
      },
      cover: "https://static.cartridge.gg/presets/metal-slug/cover.png",
      icon: "https://static.cartridge.gg/presets/metal-slug/icon.png",
      name: "Dragark",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  nums: {
    origin: ["*.nums.gg", "nums.gg"],
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x07ccfbc43c109efd466638defa52702382ace922051d35a0554b5ccd02a8f155":
              {
                name: "Game Actions",
                methods: [
                  {
                    name: "Create Game",
                    entrypoint: "create_game",
                    description: "Creates a new game",
                  },
                  {
                    name: "Set Slot",
                    entrypoint: "set_slot",
                    description: "Sets one slot for the game",
                  },
                ],
              },
            "0x00ea44dd8e971d3af9f99568577bf14b0a80a7f7763fa6281840ab68a8a53ba9":
              {
                name: "Claim Actions",
                methods: [
                  {
                    name: "Claim Appchain Reward",
                    entrypoint: "claim_reward",
                    description: "Claims token rewards on Appchain",
                  },
                ],
              },
            "0x03ee42961dc151d740df95c44b929abe85cf66e8444e0279252dd99b055c64b0":
              {
                name: "Rewards Claim",
                methods: [
                  {
                    name: "Consume Reward on Starknet",
                    entrypoint: "consume_claim_reward",
                    description: "Consumes a claim reward message on Starknet",
                  },
                ],
              },
            "0x7ed472bdde3b19a5cf2334ad0f368426272f477938270b1b04259f159bdc0e2":
              {
                name: "VRF Provider",
                methods: [
                  {
                    name: "Request Random",
                    entrypoint: "request_random",
                    description:
                      "Requests a random number from the VRF contract",
                  },
                ],
              },
            "0x4d776373427434a22f7d60d0f7fe0e336fd830edf4294acec33d9f2e1275327":
              {
                name: "Social",
                description: "Social contract to manage your social activities",
                methods: [
                  {
                    name: "pin",
                    entrypoint: "pin",
                    description: "Pin an achievement.",
                  },
                  {
                    name: "unpin",
                    entrypoint: "unpin",
                    description: "Unpin an achievement.",
                  },
                ],
              },
          },
        },
      },
    },
    theme: {
      colors: {
        primary: "#9E84E9",
      },
      cover: "https://static.cartridge.gg/presets/nums/cover.png",
      icon: "https://static.cartridge.gg/presets/nums/icon.png",
      name: "Nums",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  paved: {
    origin: "paved.gg",
    theme: {
      colors: {
        primary: "#B0CAF8",
      },
      cover: "https://static.cartridge.gg/presets/paved/cover.png",
      icon: "https://static.cartridge.gg/presets/paved/icon.svg",
      name: "Paved",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
  },
  pistols: {
    origin: ["*.pistols.gg", "*.underware.gg"],
    theme: {
      colors: {
        primary: "#EF9758",
      },
      cover: "https://static.cartridge.gg/presets/pistols/cover.png",
      icon: "https://static.cartridge.gg/presets/pistols/icon.png",
      name: "Pistols at Dawn",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x02c6a7c98a9dea8322b51018eef7be99ebedd209cebdaacb9f4c5bbf661c1cc9":
              {
                description: "Game loop contract",
                methods: [
                  {
                    entrypoint: "commit_moves",
                    description: "Commit moves of a Duelist in a Duel",
                  },
                  {
                    entrypoint: "reveal_moves",
                    description: "Reveal moves of a Duelist in a Duel",
                  },
                  {
                    entrypoint: "collect_duel",
                    description: "Close expired duels",
                  },
                  {
                    entrypoint: "clear_call_to_action",
                    description: "Clear the required action call for a duelist",
                  },
                ],
              },
            "0x0426c16fe76f12586718c07e47c8e4312e9fee5e7dc849a75f3c587ad9e70b4f":
              {
                description: "Bank contract",
                methods: [
                  {
                    entrypoint: "sponsor_duelists",
                    description: "Sponsor duelist starter packs with $LORDS",
                  },
                  {
                    entrypoint: "sponsor_season",
                    description: "Sponsor the current season with $LORDS",
                  },
                  {
                    entrypoint: "sponsor_tournament",
                    description: "Sponsor a tournament with $LORDS",
                  },
                  {
                    entrypoint: "collect_season",
                    description:
                      "Close the current season and start the next one",
                  },
                ],
              },
            "0x071333ac75b7d5ba89a2d0c2b67d5b955258a4d46eb42f3428da6137bbbfdfd9":
              {
                description: "Packs ERC721 contract",
                methods: [
                  {
                    entrypoint: "claim_starter_pack",
                    description: "Claim the starter pack, mint Duelists",
                  },
                  {
                    entrypoint: "claim_gift",
                    description: "Claim gift pack, if available",
                  },
                  {
                    entrypoint: "purchase",
                    description: "Purchase a closed pack",
                  },
                  {
                    entrypoint: "open",
                    description: "Open a pack, mint its contents",
                  },
                ],
              },
            "0x02e9c711b1a7e2784570b1bda5082a92606044e836ba392d2b977d280fb74b3c":
              {
                description: "Duel ERC721 contract",
                methods: [
                  {
                    entrypoint: "create_duel",
                    description: "Create a Duel, mint its token",
                  },
                  {
                    entrypoint: "reply_duel",
                    description: "Reply to a Duel (accept or reject)",
                  },
                ],
              },
            "0x07aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f":
              {
                description: "Duelist ERC721 contract",
                methods: [
                  {
                    entrypoint: "poke",
                    description: "Reactivates an inactive Duelist",
                  },
                  {
                    entrypoint: "sacrifice",
                    description: "Sacrifices a Duelist",
                  },
                  {
                    entrypoint: "memorialize",
                    description: "Memorializes a Duelist",
                  },
                ],
              },
            "0x051fea4450da9d6aee758bdeba88b2f665bcbf549d2c61421aa724e9ac0ced8f":
              {
                description: "Cartridge VRF Provider",
                methods: [
                  {
                    entrypoint: "request_random",
                    description: "Request a random number",
                  },
                ],
              },
          },
          messages: [
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                Message: [
                  {
                    name: "duelId",
                    type: "felt",
                  },
                  {
                    name: "duelistId",
                    type: "felt",
                  },
                ],
              },
              primaryType: "Message",
              domain: {
                name: "Underware_gg",
                version: "1.0.0",
                chainId: "SN_MAIN",
                revision: "1",
              },
              description: "Verify the identity of a player in a Duel",
            },
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                "pistols-PlayerOnline": [
                  {
                    name: "identity",
                    type: "ContractAddress",
                  },
                  {
                    name: "timestamp",
                    type: "felt",
                  },
                ],
              },
              primaryType: "pistols-PlayerOnline",
              domain: {
                name: "Underware_gg",
                version: "1.0.0",
                chainId: "SN_MAIN",
                revision: "1",
              },
              name: "PlayerOnline",
              description: "Notify when a player is online",
            },
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                "pistols-PlayerBookmark": [
                  {
                    name: "identity",
                    type: "ContractAddress",
                  },
                  {
                    name: "target_address",
                    type: "ContractAddress",
                  },
                  {
                    name: "target_id",
                    type: "u128",
                  },
                  {
                    name: "enabled",
                    type: "bool",
                  },
                ],
              },
              primaryType: "pistols-PlayerBookmark",
              domain: {
                name: "Underware_gg",
                version: "1.0.0",
                chainId: "SN_MAIN",
                revision: "1",
              },
              name: "PlayerBookmark",
              description:
                "Notify when a player follows another player or token",
            },
          ],
        },
      },
      SN_SEPOLIA: {
        policies: {
          contracts: {
            "0x02c6a7c98a9dea8322b51018eef7be99ebedd209cebdaacb9f4c5bbf661c1cc9":
              {
                description: "Game loop contract",
                methods: [
                  {
                    entrypoint: "commit_moves",
                    description: "Commit moves of a Duelist in a Duel",
                  },
                  {
                    entrypoint: "reveal_moves",
                    description: "Reveal moves of a Duelist in a Duel",
                  },
                  {
                    entrypoint: "collect_duel",
                    description: "Close expired duels",
                  },
                  {
                    entrypoint: "clear_call_to_action",
                    description: "Clear the required action call for a duelist",
                  },
                ],
              },
            "0x0426c16fe76f12586718c07e47c8e4312e9fee5e7dc849a75f3c587ad9e70b4f":
              {
                description: "Bank contract",
                methods: [
                  {
                    entrypoint: "sponsor_duelists",
                    description: "Sponsor duelist starter packs with $LORDS",
                  },
                  {
                    entrypoint: "sponsor_season",
                    description: "Sponsor the current season with $LORDS",
                  },
                  {
                    entrypoint: "sponsor_tournament",
                    description: "Sponsor a tournament with $LORDS",
                  },
                  {
                    entrypoint: "collect_season",
                    description:
                      "Close the current season and start the next one",
                  },
                ],
              },
            "0x071333ac75b7d5ba89a2d0c2b67d5b955258a4d46eb42f3428da6137bbbfdfd9":
              {
                description: "Packs ERC721 contract",
                methods: [
                  {
                    entrypoint: "claim_starter_pack",
                    description: "Claim the starter pack, mint Duelists",
                  },
                  {
                    entrypoint: "claim_gift",
                    description: "Claim gift pack, if available",
                  },
                  {
                    entrypoint: "purchase",
                    description: "Purchase a closed pack",
                  },
                  {
                    entrypoint: "open",
                    description: "Open a pack, mint its contents",
                  },
                ],
              },
            "0x02e9c711b1a7e2784570b1bda5082a92606044e836ba392d2b977d280fb74b3c":
              {
                description: "Duel ERC721 contract",
                methods: [
                  {
                    entrypoint: "create_duel",
                    description: "Create a Duel, mint its token",
                  },
                  {
                    entrypoint: "reply_duel",
                    description: "Reply to a Duel (accept or reject)",
                  },
                ],
              },
            "0x07aaa9866750a0db82a54ba8674c38620fa2f967d2fbb31133def48e0527c87f":
              {
                description: "Duelist ERC721 contract",
                methods: [
                  {
                    entrypoint: "poke",
                    description: "Reactivates an inactive Duelist",
                  },
                  {
                    entrypoint: "sacrifice",
                    description: "Sacrifices a Duelist",
                  },
                  {
                    entrypoint: "memorialize",
                    description: "Memorializes a Duelist",
                  },
                ],
              },
            "0x051fea4450da9d6aee758bdeba88b2f665bcbf549d2c61421aa724e9ac0ced8f":
              {
                description: "Cartridge VRF Provider",
                methods: [
                  {
                    entrypoint: "request_random",
                    description: "Request a random number",
                  },
                ],
              },
          },
          messages: [
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                Message: [
                  {
                    name: "duelId",
                    type: "felt",
                  },
                  {
                    name: "duelistId",
                    type: "felt",
                  },
                ],
              },
              primaryType: "Message",
              domain: {
                name: "Underware_gg",
                version: "1.0.0",
                chainId: "SN_SEPOLIA",
                revision: "1",
              },
              description: "Verify the identity of a player in a Duel",
            },
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                "pistols-PlayerOnline": [
                  {
                    name: "identity",
                    type: "ContractAddress",
                  },
                  {
                    name: "timestamp",
                    type: "felt",
                  },
                ],
              },
              primaryType: "pistols-PlayerOnline",
              domain: {
                name: "Underware_gg",
                version: "1.0.0",
                chainId: "SN_SEPOLIA",
                revision: "1",
              },
              name: "PlayerOnline",
              description: "Notify when a player is online",
            },
            {
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                "pistols-PlayerBookmark": [
                  {
                    name: "identity",
                    type: "ContractAddress",
                  },
                  {
                    name: "target_address",
                    type: "ContractAddress",
                  },
                  {
                    name: "target_id",
                    type: "u128",
                  },
                  {
                    name: "enabled",
                    type: "bool",
                  },
                ],
              },
              primaryType: "pistols-PlayerBookmark",
              domain: {
                name: "Underware_gg",
                version: "1.0.0",
                chainId: "SN_SEPOLIA",
                revision: "1",
              },
              name: "PlayerBookmark",
              description:
                "Notify when a player follows another player or token",
            },
          ],
        },
      },
    },
  },
  pixelaw: {
    origin: "dojo.pixelaw.xyz",
    theme: {
      colors: {
        primary: "#7C00B1",
        primaryForeground: "white",
      },
      cover: "https://static.cartridge.gg/presets/pixelaw/cover.png",
      icon: "https://static.cartridge.gg/presets/pixelaw/icon.svg",
      name: "Pixelaw",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
  },
  ponziland: {
    origin: ["*.ponzi.land"],
    theme: {
      colors: {
        primary: "#F38332",
      },
      cover: "https://static.cartridge.gg/presets/ponziland/cover.png",
      icon: "https://static.cartridge.gg/presets/ponziland/icon.svg",
      name: "PonziLand",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x77eeeef469121d1761bb25efbfce7650f5c7fbf00d63cb1b778b774783b2c6":
              {
                name: "PonziLand Systems",
                description: "Main game contract",
                methods: [
                  {
                    name: "Bid",
                    entrypoint: "bid",
                    description: "Bid for auction land",
                  },
                  {
                    name: "Buy",
                    entrypoint: "buy",
                    description: "Buy land from another player",
                  },
                  {
                    name: "Claim",
                    entrypoint: "claim",
                    description: "Claim rewards for a single land",
                  },
                  {
                    name: "Claim All",
                    entrypoint: "claim_all",
                    description: "Claim rewards for lands",
                  },
                  {
                    name: "Increase Price",
                    entrypoint: "increase_price",
                    description: "Increase price of the land",
                  },
                  {
                    name: "Increase Stake",
                    entrypoint: "increase_stake",
                    description: "Increase stake of the land",
                  },
                  {
                    name: "Level Up",
                    entrypoint: "level_up",
                    description: "Level up the land",
                  },
                ],
              },
            "0x524624cb89898776386140c36093d1bc4dd1654d125f0f677c9cd2b122463ff":
              {
                name: "PonziLand Auth System",
                description: "Contract to allow authorized players to play",
                methods: [
                  {
                    name: "Add Authorized",
                    entrypoint: "add_authorized_with_signature",
                    description: "Add authorized with signature",
                  },
                ],
              },
            "0x5735fa6be5dd248350866644c0a137e571f9d637bb4db6532ddd63a95854b58":
              {
                name: "eSTRK Token",
                description: "eSTRK ERC20 methods",
                methods: [
                  {
                    name: "Approve",
                    entrypoint: "approve",
                    description: "eSTRK allowance",
                  },
                ],
              },
            "0x415c058a41cc80e7368562564c96fc4e3c03b23e32ba07a5c8cadc262b50c3c":
              {
                name: "ePAPER Token",
                description: "ePAPER ERC20 approval",
                methods: [
                  {
                    name: "Approve",
                    entrypoint: "approve",
                    description: "ePAPER allowance",
                  },
                ],
              },
            "0x4b66d22d3001daad50fb853c0c1cb3b96d1745acb295bae4a6d54b29125ed09":
              {
                name: "eLORDS Token",
                description: "eLORDS ERC20 approval",
                methods: [
                  {
                    name: "Approve",
                    entrypoint: "approve",
                    description: "eLORDS allowance",
                  },
                ],
              },
            "0x1920ef3c5e765454dd3f6aeb5420ef524830e0b5f9a95ec2e1b9ee2073a16d1":
              {
                name: "eBROTHER Token",
                description: "eBROTHER ERC20 approval",
                methods: [
                  {
                    name: "Approve",
                    entrypoint: "approve",
                    description: "eBROTHER allowance",
                  },
                ],
              },
            "0x79aba4c89e9cc3495318d2479fe93601e1188ff5d9a8823e3dc736d74bb437f":
              {
                name: "ePAL Token",
                description: "ePAL ERC20 approval",
                methods: [
                  {
                    name: "Approve",
                    entrypoint: "approve",
                    description: "ePAL allowance",
                  },
                ],
              },
            "0x38217779933c147320af3239e2dd098312e3074e0898001c79939c2e676fe8c":
              {
                name: "eETH Token",
                description: "eETH ERC20 approval",
                methods: [
                  {
                    name: "Approve",
                    entrypoint: "approve",
                    description: "eETH allowance",
                  },
                ],
              },
            "0x4c090a1a34a3ba423e63a498ce23de7c7a4f0f1a8128fa768a09738606cbb9e":
              {
                name: "eBTC Token",
                description: "eBTC ERC20 approval",
                methods: [
                  {
                    name: "Approve",
                    entrypoint: "approve",
                    description: "eBTC allowance",
                  },
                ],
              },
          },
          messages: [
            {
              name: "Socialink - Register",
              description:
                "Registers your controller wallet to a new Socialink account",
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                register: [
                  {
                    name: "username",
                    type: "felt",
                  },
                  {
                    name: "timestamp",
                    type: "felt",
                  },
                ],
              },
              primaryType: "register",
              domain: {
                name: "socialink",
                version: "1",
                chainId: "SN_MAIN",
                revision: "1",
              },
            },
            {
              name: "Socialink - Link",
              description: "Links your social account to a Socialink account",
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                link: [
                  {
                    name: "token",
                    type: "string",
                  },
                  {
                    name: "provider",
                    type: "string",
                  },
                  {
                    name: "nonce",
                    type: "felt",
                  },
                  {
                    name: "timestamp",
                    type: "felt",
                  },
                ],
              },
              primaryType: "link",
              domain: {
                name: "socialink",
                version: "1",
                chainId: "SN_MAIN",
                revision: "1",
              },
            },
            {
              name: "Socialink - Mint",
              description:
                "Confirms your selection of token for the tournament mint",
              types: {
                StarknetDomain: [
                  {
                    name: "name",
                    type: "shortstring",
                  },
                  {
                    name: "version",
                    type: "shortstring",
                  },
                  {
                    name: "chainId",
                    type: "shortstring",
                  },
                  {
                    name: "revision",
                    type: "shortstring",
                  },
                ],
                mint: [
                  {
                    name: "token",
                    type: "string",
                  },
                  {
                    name: "nonce",
                    type: "felt",
                  },
                  {
                    name: "timestamp",
                    type: "felt",
                  },
                ],
              },
              primaryType: "mint",
              domain: {
                name: "socialink",
                version: "1",
                chainId: "SN_MAIN",
                revision: "1",
              },
            },
          ],
        },
      },
    },
  },
  "realm-of-ra": {
    origin: "mancala.realmofra.com",
    theme: {
      colors: {
        primary: "#de9534",
      },
      cover: "https://static.cartridge.gg/presets/realm-of-ra/cover.png",
      icon: "https://static.cartridge.gg/presets/realm-of-ra/icon.png",
      name: "Realm of Ra",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  "savage-summit": {
    origin: "savagesummit.io",
    theme: {
      colors: {
        primary: "#fbf7da",
      },
      cover: "https://static.cartridge.gg/presets/savage-summit/cover.png",
      icon: "https://static.cartridge.gg/presets/savage-summit/icon.png",
      name: "Savage Summit",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  "tale-weaver": {
    origin: "",
    theme: {
      colors: {
        primary: "#fce377",
      },
      cover: "https://static.cartridge.gg/presets/tale-weaver/cover.png",
      icon: "https://static.cartridge.gg/presets/tale-weaver/icon.png",
      name: "Tale Weaver",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  wardens: {
    origin: "app.wardens.xyz",
    theme: {
      colors: {
        primary: "#f7ac18",
      },
      cover: "https://static.cartridge.gg/presets/wardens/cover.jpg",
      icon: "https://static.cartridge.gg/presets/wardens/icon.png",
      name: "Wardens",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  zkastle: {
    origin: "zkastle.vercel.app",
    theme: {
      colors: {
        primary: "#E50D2C",
      },
      cover: "https://static.cartridge.gg/presets/zkastle/cover.png",
      icon: "https://static.cartridge.gg/presets/zkastle/icon.svg",
      name: "zKastle",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
        svg: {
          "16": "icon@16.svg",
          "32": "icon@32.svg",
          "64": "icon@64.svg",
          "128": "icon@128.svg",
          "256": "icon@256.svg",
        },
      },
    },
  },
  zktt: {
    origin: "zktable.top",
    theme: {
      colors: {
        primary: "#FFFFFF",
      },
      cover: "https://static.cartridge.gg/presets/zktt/cover.png",
      icon: "https://static.cartridge.gg/presets/zktt/icon.png",
      name: "zKTT",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
  zkube: {
    origin: "app.zkube.xyz",
    chains: {
      SN_MAIN: {
        policies: {
          contracts: {
            "0x051Fea4450Da9D6aeE758BDEbA88B2f665bCbf549D2C61421AA724E9AC0Ced8F":
              {
                name: "VRF Provider",
                description: "Provides verifiable random functions",
                methods: [
                  {
                    name: "Request Random",
                    description: "Request a random number",
                    entrypoint: "request_random",
                  },
                ],
              },
            "0x4fd5df500e6c6615e4423258639f189455672bc841ba58f1c781ac7c5ff4bd8":
              {
                name: "zKube Game",
                description: "Manages zKube game",
                methods: [
                  {
                    name: "Create Game",
                    description: "Create a new zKube game",
                    entrypoint: "create",
                  },
                  {
                    name: "Surrender Game",
                    description: "Forfeit the current game",
                    entrypoint: "surrender",
                  },
                  {
                    name: "Make a Move",
                    description: "Make a move in the current game",
                    entrypoint: "move",
                  },
                  {
                    name: "Use Bonus",
                    description: "Apply a special bonus",
                    entrypoint: "apply_bonus",
                  },
                  {
                    name: "Mint Game NFT",
                    description: "Mint a new zKube game NFT",
                    entrypoint: "mint",
                  },
                  {
                    name: "Safe Transfer NFT",
                    description:
                      "Safely transfer ownership of a zKube game NFT",
                    entrypoint: "safe_transfer_from",
                  },
                  {
                    name: "Transfer NFT",
                    description: "Transfer ownership of a zKube game NFT",
                    entrypoint: "transfer_from",
                  },
                  {
                    name: "Approve NFT Transfer",
                    description:
                      "Approve another address to transfer your zKube game NFT",
                    entrypoint: "approve",
                  },
                  {
                    name: "Set Approval For All NFTs",
                    description:
                      "Approve an operator to transfer all your zKube game NFTs",
                    entrypoint: "set_approval_for_all",
                  },
                  {
                    name: "Safe Transfer NFT",
                    description:
                      "Alternative method to safely transfer a zKube game NFT",
                    entrypoint: "safeTransferFrom",
                  },
                  {
                    name: "Transfer NFT",
                    description:
                      "Alternative method to transfer a zKube game NFT",
                    entrypoint: "transferFrom",
                  },
                  {
                    name: "Set Approval For All NFTs",
                    description:
                      "Alternative method to approve an operator for all your NFTs",
                    entrypoint: "setApprovalForAll",
                  },
                ],
              },
          },
        },
      },
    },
    theme: {
      colors: {
        primary: "#5bc3e6",
      },
      cover: "https://static.cartridge.gg/presets/zkube/cover.png",
      icon: "https://static.cartridge.gg/presets/zkube/icon.png",
      name: "zKube",
      optimizedCover: {
        webp: {
          "768": "cover@768.webp",
          "1024": "cover@1024.webp",
          "1440": "cover@1440.webp",
        },
        jpg: {
          "768": "cover@768.jpg",
          "1024": "cover@1024.jpg",
          "1440": "cover@1440.jpg",
        },
        png: {
          "768": "cover@768.png",
          "1024": "cover@1024.png",
          "1440": "cover@1440.png",
        },
      },
      optimizedIcon: {
        webp: {
          "16": "icon@16.webp",
          "32": "icon@32.webp",
          "64": "icon@64.webp",
          "128": "icon@128.webp",
          "256": "icon@256.webp",
        },
        png: {
          "16": "icon@16.png",
          "32": "icon@32.png",
          "64": "icon@64.png",
          "128": "icon@128.png",
          "256": "icon@256.png",
        },
      },
    },
  },
};

// List of all available configs that can be loaded from CDN
export const availableConfigs = [
  "arcade",
  "blob-arena",
  "blob-arena-amma",
  "budokan",
  "bytebeasts-tamagotchi",
  "cartridge",
  "chaos-surfer",
  "coloniz",
  "credit",
  "dark-shuffle",
  "dominion",
  "dope-wars",
  "dragark",
  "eternum",
  "flippyflop",
  "force-prime",
  "jokers-of-neon",
  "loot-survivor",
  "mage-duel",
  "metacube",
  "metal-slug",
  "nums",
  "paved",
  "pistols",
  "pixelaw",
  "ponziland",
  "realm-of-ra",
  "savage-summit",
  "tale-weaver",
  "wardens",
  "zkastle",
  "zktt",
  "zkube",
];
