import styles from '../../styles/Events.module.css'
import Link from 'next/link'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { users: data }
    }
  }
  
  export default function About({users}) {
    return <div>
    <h1>All Users</h1>
    {users.map(user => (
      <Link href={'/ninjas/' + user.id} key={user.id} className={styles.single}>
          <h3>{ user.name }</h3>
      </Link>
    ))}
  </div>
  }