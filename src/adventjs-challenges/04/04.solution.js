export default function createXmasTree(height) {
  const sideTreeStem = '_'.repeat(height - 1)
  const treeStem = `${sideTreeStem}#${sideTreeStem}`
  let tree = ''
  for (let level = 1; level < height + 1; level ++ ) {
    const side = '_'.repeat(height - level)
    const treeLeaves = '*'.repeat(2 * level - 1)
    tree += `${side}${treeLeaves}${side}\n`
  }
  return tree + treeStem + '\n' + treeStem
}