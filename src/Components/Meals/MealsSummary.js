import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Dog treats, Delivered To You</h2>
      <p>
        Choose your favorite items from our ever growing selection of available snacks
        and enjoy at home or on the go.
      </p>
      <p>
        All our items are cooked with high-quality hypoallergenic ingredients,
         to ensure a tasty and healthy snack for your furry friends!
      </p>
    </section>
  );
};

export default MealsSummary;