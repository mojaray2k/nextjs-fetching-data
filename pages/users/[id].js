import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function UserDetails({ user }) {
  return (
    <div className={styles.container}>
      <table id='users'>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td>{user.website}</td>
        </tr>
      </table>
      <Link href={`/`}>
        <a style={{ marginTop: '3rem' }}>Go Back</a>
      </Link>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  );

  const user = await res.json();

  return {
    props: {
      user,
    },
  };
};
