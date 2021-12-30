export default function countDecorations(bigTree) {
  const walkTree = branch => {
    const leftBranch = branch.left ? walkTree(branch.left) : 0
    const rightBranch = branch.right ? walkTree(branch.right) : 0
    return leftBranch + rightBranch + branch.value
  }
  return walkTree(bigTree, 0)
}