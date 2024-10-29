import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/Components/Meals/meals-grid";
import { getMeeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeeals();
  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  return (
    <div>
      <header className={classes.header}>
        <h1>
          Selacious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself, It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">sare Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </div>
  );
}
