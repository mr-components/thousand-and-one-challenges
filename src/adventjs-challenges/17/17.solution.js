export default function countPackages(carriers, carrierID)  {
  const dataCarriers = {}
  for(let carrier of carriers) {
    const [name, packsManaged, team] = carrier
    dataCarriers[name] = {
      packsManaged,
      team
    }
  } 
  const packsCounter = id => {
    let packages = dataCarriers[id]?.packsManaged
    if(!packages) return 0
    if (dataCarriers[id].team.length > 0) {
      for(let teammateId of dataCarriers[id].team) {
        packages += packsCounter(teammateId)
      }
    }
     return  packages 
  }
  let packages = packsCounter(carrierID)
  return packages
} 