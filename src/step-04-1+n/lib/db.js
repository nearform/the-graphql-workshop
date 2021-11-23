import SQL from '@nearform/sql'

export async function loadPets(db) {
  const { rows } = await db.query('SELECT name FROM pets')

  return rows
}

export async function ownersByName(db, names) {
  const { rows } = await db.query(
    SQL`
      SELECT o.name
      FROM owners o
      INNER JOIN pets p
        ON p.owner = o.id
        AND p.name = ANY(${names})
    `
  )

  return rows
}
