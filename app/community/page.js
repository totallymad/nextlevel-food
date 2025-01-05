import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";
import classes from "./page.module.css";

export default function CommunityPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
        Одна общая страсть: <span className={classes.highlight}>Еда</span>
        </h1>
        <p>Присоединяйтесь к нашему сообществу и делитесь своими любимыми рецептами!</p>
      </header>
      <main className={classes.main}>
        <h2>Преимущества сообщества</h2>

        <ul className={classes.perks}>
          <li>
            <Image src={mealIcon} alt="A delicious meal" />
            <p>Делитесь рецептами и открывайте их для себя</p>
          </li>
          <li>
            <Image src={communityIcon} alt="A crowd of people, cooking" />
            <p>Найдите новых друзей и единомышленников</p>
          </li>
          <li>
            <Image
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p>Участвуйте в эксклюзивных мероприятиях</p>
          </li>
        </ul>
      </main>
    </>
  );
}
