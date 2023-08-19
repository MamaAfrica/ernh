import classes from '../adminDashboard/vendorlist.module.css'
import UsersItem from './usersItem'

function UsersList(props){
return(
    
    <ul className={classes.list}>
        {props.users.map((user)=>(
            <UsersItem 
            key={user.id}
            id={user.id}
             firstname = {user.firstname}
             lastname = {user.lastname}
            referalBonus = {user.referalBonus}
            in
            indirectReferalBonus = {user.indirectReferalBonus}
            secondIndirectRBonus = {user.secondIndirectRBonus}
            passport = {user.passport}
            
            prefferedUsername = {user.prefferedUsername}
       
            
            />
        ))}
    </ul>
)
}

export default UsersList