export default function fixFiles(files)  {
  const counterFiles = {} 
  return files.map(file => {
    counterFiles[file] = typeof counterFiles[file] == 'number' 
    ? counterFiles[file] + 1 
    : 0
    return counterFiles[file] > 0 ? `${file}(${counterFiles[file]})` : file
  })
}