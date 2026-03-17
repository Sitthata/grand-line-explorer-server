const pool = require("./pool");

const ISLANDS = [
  {
    name: "Marineford",
    description:
      "The Marine Headquarters, site of the legendary Summit War where Whitebeard made his last stand.",
    image_url: "/images/islands/marineford.svg",
    sea: "Grand Line",
  },
  {
    name: "Enies Lobby",
    description:
      "The Judicial Island of the World Government, where the Straw Hats declared war to save Robin.",
    image_url: "/images/islands/enies-lobby.svg",
    sea: "Grand Line",
  },
  {
    name: "Whole Cake Island",
    description:
      "Big Mom's territory and the centerpiece of Totto Land, a candy-coated island of sweets and terror.",
    image_url: "/images/islands/whole-cake-island.svg",
    sea: "New World",
  },
  {
    name: "Dressrosa",
    description:
      "The kingdom of passion and toys, ruled by the tyrant Doflamingo behind a web of lies.",
    image_url: "/images/islands/dressrosa.svg",
    sea: "New World",
  },
  {
    name: "Wano Country",
    description:
      "The isolated samurai nation under Kaido's iron rule, steeped in tradition and sorrow.",
    image_url: "/images/islands/wano-country.svg",
    sea: "New World",
  },
  {
    name: "Alabasta",
    description:
      "A desert kingdom nearly torn apart by civil war, saved by the Straw Hats and Princess Vivi.",
    image_url: "/images/islands/alabasta.svg",
    sea: "Grand Line",
  },
];

// Characters grouped by island index (0-based, matches ISLANDS array order)
// Image URLs sourced from MyAnimeList CDN via Jikan API (pre-fetched, static)
const CHARACTERS = [
  // Marineford (island index 0)
  [
    {
      name: "Portgas D. Ace",
      bounty: "550,000,000",
      role: "2nd Division Commander",
      image_url: "https://cdn.myanimelist.net/images/characters/2/72220.jpg",
      devil_fruit: "Mera Mera no Mi (Flame)",
      description:
        "Luffy's sworn brother who gave his life at Marineford.",
    },
    {
      name: "Edward Newgate",
      bounty: "5,046,000,000",
      role: "Captain",
      image_url: "https://cdn.myanimelist.net/images/characters/3/100236.jpg",
      devil_fruit: "Gura Gura no Mi (Quake)",
      description:
        "The Strongest Man in the World, died standing in Marineford.",
    },
    {
      name: "Sengoku",
      bounty: "None",
      role: "Fleet Admiral",
      image_url: "https://cdn.myanimelist.net/images/characters/7/88938.jpg",
      devil_fruit: "Hito Hito no Mi, Model: Daibutsu",
      description:
        "The Buddha of the Marines who orchestrated the Summit War.",
    },
  ],
  // Enies Lobby (island index 1)
  [
    {
      name: "Monkey D. Luffy",
      bounty: "3,000,000,000",
      role: "Captain",
      image_url: "https://cdn.myanimelist.net/images/characters/9/310307.jpg",
      devil_fruit: "Gomu Gomu no Mi (Rubber)",
      description:
        "The future Pirate King who stormed Enies Lobby for his crew.",
    },
    {
      name: "Rob Lucci",
      bounty: "None",
      role: "CP9 Assassin",
      image_url: "https://cdn.myanimelist.net/images/characters/14/71509.jpg",
      devil_fruit: "Neko Neko no Mi, Model: Leopard",
      description:
        "The strongest CP9 agent, defeated by Luffy in Enies Lobby.",
    },
    {
      name: "Spandam",
      bounty: "None",
      role: "CP9 Chief",
      image_url: "https://cdn.myanimelist.net/images/characters/6/71512.jpg",
      devil_fruit: "None",
      description:
        "The cowardly chief of CP9 who tried to sacrifice Robin.",
    },
  ],
  // Whole Cake Island (island index 2)
  [
    {
      name: "Charlotte Linlin",
      bounty: "4,388,000,000",
      role: "Captain (Yonko)",
      image_url: "https://cdn.myanimelist.net/images/characters/14/337166.jpg",
      devil_fruit: "Soru Soru no Mi (Soul)",
      description: "One of the Four Emperors, ruler of Totto Land.",
    },
    {
      name: "Charlotte Katakuri",
      bounty: "1,057,000,000",
      role: "Sweet Commander",
      image_url: "https://cdn.myanimelist.net/images/characters/8/342776.jpg",
      devil_fruit: "Mochi Mochi no Mi (Mochi)",
      description:
        "Big Mom's strongest son, a man of honor and mochi.",
    },
    {
      name: "Vinsmoke Sanji",
      bounty: "1,032,000,000",
      role: "Cook",
      image_url: "https://cdn.myanimelist.net/images/characters/5/136769.jpg",
      devil_fruit: "None",
      description:
        "The Straw Hat cook whose past was revealed on Whole Cake.",
    },
  ],
  // Dressrosa (island index 3)
  [
    {
      name: "Donquixote Doflamingo",
      bounty: "340,000,000",
      role: "King / Warlord",
      image_url: "https://cdn.myanimelist.net/images/characters/5/349513.jpg",
      devil_fruit: "Ito Ito no Mi (String)",
      description:
        "The Heavenly Demon who enslaved Dressrosa with strings.",
    },
    {
      name: "Trafalgar Law",
      bounty: "3,000,000,000",
      role: "Captain / Surgeon",
      image_url: "https://cdn.myanimelist.net/images/characters/10/258757.jpg",
      devil_fruit: "Ope Ope no Mi (Op-Op)",
      description:
        "The Surgeon of Death who allied with Luffy to take down Doffy.",
    },
    {
      name: "Rebecca",
      bounty: "None",
      role: "Gladiator / Princess",
      image_url: "https://cdn.myanimelist.net/images/characters/11/284339.jpg",
      devil_fruit: "None",
      description: "The undefeated gladiator princess of Dressrosa.",
    },
  ],
  // Wano Country (island index 4)
  [
    {
      name: "Kaido",
      bounty: "4,611,100,000",
      role: "Captain (Yonko)",
      image_url: "https://cdn.myanimelist.net/images/characters/4/492819.jpg",
      devil_fruit: "Uo Uo no Mi, Model: Seiryu",
      description:
        "The King of Beasts, the strongest creature in the world.",
    },
    {
      name: "Roronoa Zoro",
      bounty: "1,111,000,000",
      role: "Swordsman",
      image_url: "https://cdn.myanimelist.net/images/characters/3/100534.jpg",
      devil_fruit: "None",
      description:
        "The Straw Hat swordsman who inherited Oden's will in Wano.",
    },
    {
      name: "Kin'emon",
      bounty: "None",
      role: "Samurai / Retainer",
      image_url: "https://cdn.myanimelist.net/images/characters/8/230765.jpg",
      devil_fruit: "Fuku Fuku no Mi (Garment)",
      description:
        "The leader of the Nine Red Scabbards, loyal to Oden.",
    },
  ],
  // Alabasta (island index 5)
  [
    {
      name: "Crocodile",
      bounty: "1,965,000,000",
      role: "Warlord / Captain",
      image_url: "https://cdn.myanimelist.net/images/characters/6/100535.jpg",
      devil_fruit: "Suna Suna no Mi (Sand)",
      description:
        "The desert king who nearly destroyed Alabasta from within.",
    },
    {
      name: "Nefertari Vivi",
      bounty: "None",
      role: "Princess",
      image_url: "https://cdn.myanimelist.net/images/characters/9/298188.jpg",
      devil_fruit: "None",
      description:
        "The brave princess who infiltrated Baroque Works to save her kingdom.",
    },
    {
      name: "Nico Robin",
      bounty: "930,000,000",
      role: "Archaeologist",
      image_url: "https://cdn.myanimelist.net/images/characters/16/363700.jpg",
      devil_fruit: "Hana Hana no Mi (Flower)",
      description:
        "The Devil Child who joined the Straw Hats after Alabasta.",
    },
  ],
];

async function seed() {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");

    // Clear existing data
    await client.query("DELETE FROM characters");
    await client.query("DELETE FROM islands");
    await client.query("ALTER SEQUENCE characters_id_seq RESTART WITH 1");
    await client.query("ALTER SEQUENCE islands_id_seq RESTART WITH 1");

    console.log("Seeding islands...");

    // Insert islands
    const islandIds = [];
    for (const island of ISLANDS) {
      const result = await client.query(
        "INSERT INTO islands (name, description, image_url, sea) VALUES ($1, $2, $3, $4) RETURNING id",
        [island.name, island.description, island.image_url, island.sea]
      );
      islandIds.push(result.rows[0].id);
      console.log(`  + ${island.name} (id: ${result.rows[0].id})`);
    }

    console.log("\nSeeding characters...");

    // Insert characters
    for (let i = 0; i < CHARACTERS.length; i++) {
      const islandId = islandIds[i];
      const islandName = ISLANDS[i].name;

      console.log(`\n  ${islandName}:`);

      for (const character of CHARACTERS[i]) {
        await client.query(
          `INSERT INTO characters (name, bounty, role, image_url, island_id, devil_fruit, description)
           VALUES ($1, $2, $3, $4, $5, $6, $7)`,
          [
            character.name,
            character.bounty,
            character.role,
            character.image_url,
            islandId,
            character.devil_fruit,
            character.description,
          ]
        );

        console.log(`    + ${character.name}`);
      }
    }

    await client.query("COMMIT");
    console.log("\nSeeding complete! 6 islands and 18 characters inserted.");
  } catch (error) {
    await client.query("ROLLBACK");
    console.error("Seeding failed:", error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

seed();
