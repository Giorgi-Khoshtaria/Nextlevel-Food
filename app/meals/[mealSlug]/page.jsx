import classes from "./page.module.css";
import Image from "next/image";
import { getMeals } from "@/lib/meals";
import { notFound } from "next/navigation";

export default function MealDetailsPage({ params }) {
  const meals = getMeals(params.mealSlug);
  if (!meals) {
    notFound();
  }

  // Correct the typo in `replace` and ensure HTML string format for new lines
  meals.instructions = meals.instructions.replace(/\n/g, "<br />");

  return (
    <div>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meals.image} alt={meals.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meals.title}</h1>
          <p className={classes.creator}>
            By <a href={`mailto:${meals.creator_email}`}>{meals.creator}</a>
          </p>
          <p className={classes.summary}>{meals.summery}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meals.instructions,
          }}
        ></p>
      </main>
    </div>
  );
}
