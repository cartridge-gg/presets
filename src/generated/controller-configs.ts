// This file is auto-generated. DO NOT EDIT IT MANUALLY.
import { ControllerConfigs } from "../";

export const configs: ControllerConfigs = {
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
  coloniz: {
    origin: ["coloniz.xyz"],
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
            "0x0444834e7b71749832f0db8c64f17ed1c3af8462c1682c10dcd6068b1c57494b":
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
            "0x06633dc0c8e3956fd8d87f68e5a4324cb20270b442a532f4d4179d85c389b324":
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
            "0x4ed3a7c5f53c6e96186eaf1b670bd2e2a3699c08e070aedf4e5fc6ac246ddc1":
              {
                name: "Pillage",
                description:
                  "Allows you to raid a structure and pillage resources",
                methods: [
                  {
                    name: "Battle Pillage",
                    description: "Pillage a structure",
                    entrypoint: "battle_pillage",
                  },
                ],
              },
            "0x2620f65aa2fd72d705306ada1ee7410023a3df03da9291f1ccb744fabfebc0":
              {
                name: "Battle contract",
                description: "Required to engage in battles",
                methods: [
                  {
                    name: "Battle Start",
                    description: "Start a battle",
                    entrypoint: "battle_start",
                  },
                  {
                    name: "Battle Force Start",
                    description: "Force start a battle",
                    entrypoint: "battle_force_start",
                  },
                  {
                    name: "Battle Join",
                    description: "Join a battle",
                    entrypoint: "battle_join",
                  },
                  {
                    name: "Battle Leave",
                    description: "Leave a battle",
                    entrypoint: "battle_leave",
                  },
                  {
                    name: "Battle Claim",
                    description: "Claim a structure after a battle",
                    entrypoint: "battle_claim",
                  },
                  {
                    name: "Battle Resolve",
                    description: "Reopens the bank after battle",
                    entrypoint: "battle_resolve",
                  },
                ],
              },
            "0x6bf57710571fd159e71b1ed155bb0759027e416c88a06556f321c94c214e768":
              {
                name: "Leave battle contract",
                description: "Allows armies to leave a battle",
                methods: [
                  {
                    name: "Leave Battle",
                    description: "Leave a battle",
                    entrypoint: "leave_battle",
                  },
                  {
                    name: "Leave Battle If Ended",
                    description: "Leave a battle if its ended",
                    entrypoint: "leave_battle_if_ended",
                  },
                ],
              },
            "0x4b6a35c0c541467674ebb9640113a6d79c6f5a468796e9299b8e484a770032a":
              {
                name: "Building contract",
                description: "Allows to manage buildings",
                methods: [
                  {
                    name: "Create",
                    description: "Create a building",
                    entrypoint: "create",
                  },
                  {
                    name: "Pause Production",
                    description: "Pause the production of a building",
                    entrypoint: "pause_production",
                  },
                  {
                    name: "Resume Production",
                    description: "Resume production of a building",
                    entrypoint: "resume_production",
                  },
                  {
                    name: "Destroy a building",
                    description: "Destroy a building",
                    entrypoint: "destroy",
                  },
                ],
              },
            "0x57d514154bb4dc319539d4e338312a41c248fb6a5122f82b2f2e11ddd3e67e4":
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
                    name: "Remove Player From Whitelist",
                    description: "Remove a player from the guild's whitelist",
                    entrypoint: "remove_player_from_whitelist",
                  },
                ],
              },
            "0x2fcc3c1691387321c2f4d6310eda7a14365bd274c1a37ed3948d2e93a56f821":
              {
                name: "Hyperstructure contract",
                description:
                  "Handles the creation and management of hyperstructures",
                methods: [
                  {
                    name: "Get Points",
                    description: "Gets your total number of points",
                    entrypoint: "get_points",
                  },
                  {
                    name: "Create",
                    description: "Create a new hyperstructure",
                    entrypoint: "create",
                  },
                  {
                    name: "Contribute To Construction",
                    description:
                      "Contribute resources to hyperstructure construction",
                    entrypoint: "contribute_to_construction",
                  },
                  {
                    name: "Set Co Owners",
                    description: "Set additional owners for the hyperstructure",
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
            "0xa052c5ca082356bcc8457f0f805eaf18f97d0fdddde3f90f5b238923859ed4":
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
            "0x4a212c52c4035bc9bd170125216604f406dcd75b41be11d3b4d89047366d84d":
              {
                name: "Exploration contract",
                description:
                  "Allows you to move to unexplored hexes on the map",
                methods: [
                  {
                    name: "Explore",
                    description: "Explore an uncharted hex on the game map",
                    entrypoint: "explore",
                  },
                ],
              },
            "0x7e3bae0e253a0131063b63ee4d7b27b50329c617ae88b82d529a70f1a11c63":
              {
                name: "Naming contract",
                description: "Manages entity naming in the game",
                methods: [
                  {
                    name: "Set Entity Name",
                    description: "Assign a custom name to a game entity",
                    entrypoint: "set_entity_name",
                  },
                  {
                    name: "Set Address Name",
                    description: "Assign a custom name to a user's address",
                    entrypoint: "set_address_name",
                  },
                ],
              },
            "0x1b480f620ea35431ab43dba634795b14f547ef3e77370db6f0a31f2fdc21d86":
              {
                name: "Realms contract",
                description: "Manages realm-related actions",
                methods: [
                  {
                    name: "Create a realm",
                    description: "Create a new realm",
                    entrypoint: "create",
                  },
                  {
                    name: "Upgrade Level",
                    description: "Upgrade the level of a realm",
                    entrypoint: "upgrade_level",
                  },
                  {
                    name: "Quest Claim",
                    description: "Claim rewards from completed quests",
                    entrypoint: "quest_claim",
                  },
                ],
              },
            "0x691a60b709ca5c1c5ff86824831f84deb26f0f5d07d70c0f807eab48110d2f6":
              {
                name: "Resource bridge contract",
                description: "Manages bridge transfers between L2 and Eternum",
                methods: [
                  {
                    name: "Deposit Initial",
                    description:
                      "Initial deposit of resources for bridge transfer",
                    entrypoint: "deposit_initial",
                  },
                  {
                    name: "Deposit",
                    description:
                      "Deposit additional resources for bridge transfer",
                    entrypoint: "deposit",
                  },
                  {
                    name: "Start Withdraw",
                    description: "Initiate a withdrawal process",
                    entrypoint: "start_withdraw",
                  },
                  {
                    name: "Finish Withdraw",
                    description: "Finalize a withdrawal process",
                    entrypoint: "finish_withdraw",
                  },
                ],
              },
            "0x42c0303a2119a9e20daa60e83c48221cdf1bb2a4c009bab031d1cd3555a127e":
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
                    description: "Collect available resources after approval",
                    entrypoint: "pickup",
                  },
                ],
              },
            "0x4f92a1d00d3aec8cece60fc2d0fc236fe1d95c54ff0ceb2f393fbc7e0863d8e":
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
            "0x7e2b1334398fafbe640f34bacae99b649d633417960ee397b6a8fb117fec819":
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
                    name: "Accept Partial Order",
                    description: "Accept a partial trading order",
                    entrypoint: "accept_partial_order",
                  },
                  {
                    name: "Cancel Order",
                    description: "Cancel a trading order",
                    entrypoint: "cancel_order",
                  },
                ],
              },
            "0x4069c2be57f08fef9f31afc85a5b4c03c208ebdb278b9d853606caa7a9cbee6":
              {
                name: "Map travel contract",
                description: "Manages player movement across the game map",
                methods: [
                  {
                    name: "Travel Hex",
                    description: "Move to a specific hex on the map",
                    entrypoint: "travel_hex",
                  },
                ],
              },
            "0x26be0ed574aa9ee6f73b53b12f0a199ddbf4ac697470316cdb3d9d1f5680cab":
              {
                name: "Army contract",
                description: "Manages army-related actions",
                methods: [
                  {
                    name: "Army Create",
                    description: "Create a new army",
                    entrypoint: "army_create",
                  },
                  {
                    name: "Army Delete",
                    description: "Delete an existing army",
                    entrypoint: "army_delete",
                  },
                  {
                    name: "Army Buy Troops",
                    description: "Buy troops for an army",
                    entrypoint: "army_buy_troops",
                  },
                  {
                    name: "Army Merge Troops",
                    description: "Merge troops from multiple armies",
                    entrypoint: "army_merge_troops",
                  },
                ],
              },
            "0x051fea4450da9d6aee758bdeba88b2f665bcbf549d2c61421aa724e9ac0ced8f":
              {
                name: "VRF Provider",
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
            "0x057675b9c0bd62b096a2e15502a37b290fa766ead21c33eda42993e48a714b80":
              {
                name: "Season pass ERC20 contract",
                description: "Manages the season passes",
                methods: [
                  {
                    name: "Approve for all",
                    description: "Approves transfer of season pass",
                    entrypoint: "set_approval_for_all",
                  },
                ],
              },
            "0x4b5e65a9617c7ba3c7ea64324ff4338a400adb1a3cfe903b3f8b647cbb59fb7":
              {
                name: "Season Systems",
                description: "Register and claim",
                methods: [
                  {
                    name: "Register",
                    description: "Registers to leaderboard",
                    entrypoint: "register_to_leaderboard",
                  },
                  {
                    name: "Claim",
                    description: "Claim",
                    entrypoint: "claim_leaderboard_rewards",
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
                "s0_eternum-Message": [
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
              primaryType: "s0_eternum-Message",
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
            "0x0154d9a74e8106255d8146b250683ba939f4db3e98b586997caf9514163ca963":
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
                    entrypoint: "clear_call_to_action",
                    description: "Clear the required action call for a duelist",
                  },
                  {
                    entrypoint: "collect_duel",
                    description: "Close expired duels",
                  },
                  {
                    entrypoint: "collect_season",
                    description:
                      "Close the current season and start the next one",
                  },
                ],
              },
            "0x0320a19527bb1e661df4e41639c755353f6a401b24a8922a1d086a9667391428":
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
                ],
              },
            "0x032fecc3b90057da30d74fa450abcdd55621cd88000fe709384f8a6b1a910c9f":
              {
                description: "Packs ERC721 contract",
                methods: [
                  {
                    entrypoint: "claim_starter_pack",
                    description: "Claim the starter pack, mint Duelists",
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
            "0x03e1da8b8d6208af7d90ae32d1c3a6f597223022bc0e72b5abc2ba07009c560f":
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
            "0x03d042d2022519481f424b01f1a68268f773d0220275a102e809f49dee62c1c3":
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
              description: "Notify the server that a player is online",
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
                "Notify the server that a player follows another player or token",
            },
          ],
        },
      },
      SN_SEPOLIA: {
        policies: {
          contracts: {
            "0x008e63a48288f4672d955f97dc5d3e026712f927fc4262dde1b49070c3b98397":
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
                    entrypoint: "collect_season",
                    description:
                      "Close the current season and start the next one",
                  },
                  {
                    entrypoint: "clear_call_to_action",
                    description: "Clear the required action call for a duelist",
                  },
                ],
              },
            "0x05aadbdf456aa5c8be5438e8e7465c5e6b7bb48fc2e9339f30ced197315d8896":
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
                ],
              },
            "0x0578b4e302d95d233a1e5a45b648b7066a21896f288a31a98f77e8bd177b7b9b":
              {
                description: "Packs ERC721 contract",
                methods: [
                  {
                    entrypoint: "claim_starter_pack",
                    description: "Claim the starter pack, mint Duelists",
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
            "0x0377acc27a0ca83d1894a1ae62636ba3998197505b20b918e3e74effe395c6a7":
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
            "0x06012ef19b1a4c6d0b06f583c4d5fa13ba39e56297760073da636ab48e5ee6c8":
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
              description: "Notify the server that a player is online",
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
                "Notify the server that a player follows another player or token",
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
  "blob-arena",
  "blob-arena-amma",
  "budokan",
  "bytebeasts-tamagotchi",
  "cartridge",
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
