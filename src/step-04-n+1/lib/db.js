import SQL from '@nearform/sql'

export async function loadPets(db) {
  const { rows } = await db.query('SELECT * FROM pets')

  return rows
}

export async function ownersByPetNames(db, petNames) {
  const { rows } = await db.query(
    SQL`
    SELECT owners.*
    FROM owners
    INNER JOIN pets
      ON pets.owner = owners.id
      AND pets.name = ANY(${petNames})
    ORDER BY
      ARRAY_POSITION((${petNames}), pets.name)`
  )

  return rows
}
