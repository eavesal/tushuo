import { InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import { getAll } from './api/game'

import styles from './index.module.scss'

export const getStaticProps = async () => {
  return {
    props: {
      games: getAll(),
    },
  }
}

export default function Home({ games }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={styles.main}>
      <NavBar />
      <h1>图说您的游戏旅程</h1>
      <h6>传奇装备、未知宝藏、会心彩蛋，一切皆可图说</h6>
      <div className="view">
        <ul className={styles.games}>
          {games.map(x => (
            <Link href={`/${x.id}`} key={x.id}>
              <li>
                <div className={styles.wrapper}>
                  <img className={styles.cover} src={x.cover} />
                  <img className={styles.logo} src={x.logo} />
                  <span>{x.name}</span>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}
