import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Peanut Delight Biscuit Bones x 5',
    description: 'Peanut butter and chicken stock ',
    price: 4.99,
  },
  {
    id: 'm2',
    name: 'Fish twists',
    description: 'Salmon and Basa jerky twists',
    price: 4.99,
  },
  {
    id: 'm3',
    name: 'Chicken nuggets (Box of 10)',
    description: '100% chicken breast with pumpkin and light crumb',
    price: 6.99,
  },
  {
    id: 'm4',
    name: 'Frozen yoghurt cups',
    description: 'Cooling and refreshing',
    price: 4.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;