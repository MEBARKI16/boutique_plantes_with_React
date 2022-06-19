import { PlantList } from '../datas/PlantList'

function ShoppingList() {
	const categories = PlantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{PlantList.map((plant) => (
					<li key={plant.id}>{plant.name}{plant.isBestSale && <span>🔥</span>}</li>
				))}
                
			</ul>
            
		</div>
	)
}

export default ShoppingList