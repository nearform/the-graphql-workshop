import SQL from '@nearform/sql'

export async function loadDogs(db) {
  const { rows } = await db.query('SELECT name FROM dogs')

  return rows
}

export async function ownersByName(db, names) {
  const { rows } = await db.query(
    SQL`
      SELECT o.name
      FROM owners o
      INNER JOIN dogs d
        ON d.owner = o.id
        AND d.name = ANY(${names})
    `
  )

  return rows
}
