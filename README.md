# Grand Line Explorer - Server

Implement the following 5 API endpoints to power the frontend.

The Express app and database pool are already set up for you. You only need to write the route handlers in:

- `routes/islands.js`
- `routes/characters.js`

## Database Schema

```sql
islands (id, name, description, image_url, sea)
characters (id, name, bounty, role, image_url, island_id, devil_fruit, description)
```

`characters.island_id` references `islands.id` with `ON DELETE CASCADE`.

---

## Endpoints

### 1. GET `/api/islands`

Return all islands.

**Response (200):**

```json
{
  "data": [
    {
      "id": 1,
      "name": "Marineford",
      "description": "The Marine Headquarters...",
      "image_url": "/images/islands/marineford.jpg",
      "sea": "Grand Line"
    }
  ]
}
```

---

### 2. GET `/api/islands/:id/characters`

Return a single island and all its characters.

**Response (200):**

```json
{
  "data": {
    "island": {
      "id": 1,
      "name": "Marineford",
      "description": "...",
      "image_url": "...",
      "sea": "Grand Line"
    },
    "characters": [
      {
        "id": 1,
        "name": "Ace",
        "bounty": "550,000,000",
        "role": "2nd Division Commander",
        "image_url": "...",
        "island_id": 1,
        "devil_fruit": "Mera Mera no Mi (Flame)",
        "description": "Luffy's sworn brother..."
      }
    ]
  }
}
```

**Error (404):**

```json
{
  "error": "Island not found"
}
```

---

### 3. GET `/api/characters`

Return all characters with their island name.

**Response (200):**

```json
{
  "data": [
    {
      "id": 1,
      "name": "Ace",
      "bounty": "550,000,000",
      "role": "2nd Division Commander",
      "image_url": "...",
      "island_id": 1,
      "devil_fruit": "Mera Mera no Mi (Flame)",
      "description": "Luffy's sworn brother...",
      "island_name": "Marineford"
    }
  ]
}
```

**Hint:** You need a `JOIN` to get `island_name`.

---

### 4. POST `/api/characters`

Create a new character.

**Request body:**

```json
{
  "name": "Nami",
  "bounty": "366,000,000",
  "role": "Navigator",
  "image_url": "https://placehold.co/400x600?text=Nami",
  "island_id": 2,
  "devil_fruit": "None",
  "description": "The Straw Hat navigator."
}
```

**Response (201):**

```json
{
  "data": {
    "id": 19,
    "name": "Nami",
    "bounty": "366,000,000",
    "role": "Navigator",
    "image_url": "https://placehold.co/400x600?text=Nami",
    "island_id": 2,
    "devil_fruit": "None",
    "description": "The Straw Hat navigator."
  }
}
```

---

### 5. DELETE `/api/characters/:id`

Delete a character by ID.

**Response (200):**

```json
{
  "data": {
    "message": "Character deleted successfully"
  }
}
```

**Error (404):**

```json
{
  "error": "Character not found"
}
```

---

## Error Format

All errors follow this format:

```json
{
  "error": "Error message here"
}
```

## SQL Hints

- Use `$1`, `$2`, etc. for parameterized queries
- Use `RETURNING *` to get the inserted/deleted row back
- Use `LEFT JOIN` to combine characters with island names
- Use `ORDER BY id` for consistent ordering
