import UserCard from '@/components/Users/UserCard';
import './talents.css';
import UsersFilter from '@/components/Filters/UsersFilter';
// import UserList from '@/components/Users/UserList/UserList';

const Talents = () => {
  return (
    <div className='main_container'>
      <UsersFilter />
      <UserCard />
    </div>
  );
};

export default Talents;
