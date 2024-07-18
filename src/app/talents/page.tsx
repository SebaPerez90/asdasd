import UserCard from '@/components/Users/UserCard';
// import './talents.css';
import UsersFilter from '@/components/Filters/UsersFilter';
import styles from './talents.module.css'


const Talents = () => {
  return (
    <div className={styles.main_container}>
      <UsersFilter />
      <UserCard />
    </div>
  );
};

export default Talents;
