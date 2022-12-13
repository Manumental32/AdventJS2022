function getFilesToBackup(lastBackup, changes) {
  let backups = [];
  changes.filter(c=> c[1] > lastBackup).forEach(e=>backups.push(e[0]))
  return [...new Set(backups)].sort((a,b) => a - b)
}

const lastBackup = 1546300800
const changes = [
  [ 1, 1546300800 ],
  [ 2, 1546300800 ],
  [ 1, 1546300900 ],
  [ 1, 1546301000 ],
  [ 3, 1546301100 ],
]

getFilesToBackup(lastBackup, changes) // => [ 1, 3 ]
// El archivo con id 1 ha sido modificado dos veces
// después del último backup.

// El archivo con id 2 no ha sido modificado después
// del último backup.

// El archivo con id 3 ha sido modificado una vez
// después del último backup.

// Tenemos que hacer una copia de seguridad
// de los archivos 1 y 3.
