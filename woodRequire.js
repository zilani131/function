// chairwood=3cft/chair
// tablewood=10cft/table
// bedwood=50cft/bed
function woodCalcaulator(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood=3, perTableWood=10,perBedWood=40;
    const chairQuantityWood=perChairWood*chairQuantity;
    const tableQuantityWood = perTableWood*tableQuantity;
    const bedQuantityWood=perBedWood*bedQuantity;
    const totalWood=chairQuantityWood+tableQuantityWood+bedQuantityWood;
    return totalWood;
}
let result=woodCalcaulator(2,4,6)
console.log(result)