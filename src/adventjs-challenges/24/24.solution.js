export default function checkIsSameTree(treeA, treeB) {
  const { leff: leftA, right: rightA, value: valueA } = treeA
  const { leff: leftB, right: rightB, value: valueB } = treeB
  if(
    valueA !== valueB ||
    !!leftA !== !!leftB ||
    !!rightA !== !!rightB
  ) return false
  
  const bothBranchLeftAreEqual = !!leftA && !!leftB ? checkIsSameTree(leftA, leftB) : true
  const bothBranchRightAreEqual = !!rightA && !!rightB ? checkIsSameTree(rightA, rightB) : true
 
  return bothBranchLeftAreEqual && bothBranchRightAreEqual
}