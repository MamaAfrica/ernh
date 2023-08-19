import classes from './vendorlist.module.css'
import UserItem from './useritems'

function UserList(props){

    console.log(props.users)
return(
    
    <ul className={classes.list}>
        {props.users.map((user)=>(
            <UserItem 
            key={user.id}
            id={user.id}
            firstname={user.firstname}
            lastname={user.lastname}
            
            prefferedUsername = {user.prefferedUsername}
            accountNumber = {user.accountNumber}
            phone={user.phone}
            bankName={user.bankName}
            bank={user.bank}
            requestedWithdrawal={user.requestedWithdrawal}
            totalWithdrawal={user.totalWithdrawal}
            referalBonus={user.referalBonus}
            secondIndirectRBonus={user.secondIndirectRBonus}
            
            withdrawalRequestDate={user.withdrawalRequestDate}
          
            
            />
        ))}
    </ul>
)
}

export default UserList