import { PlantList } from '../datas/PlantList'
import "../styles/ShoppingList.css"

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
			<ul className='imj-plant-list'>
				{PlantList.map((plant) => (
					<li key={plant.id} className="imj-plant-item">{plant.name}{plant.isBestSale && <span>🔥</span>}
                    {plant.isSpecialOffer && <div className='imj-sales'>Solde</div>}</li>
				))}
                
			</ul>
            
		</div>
	)
}

export default ShoppingList