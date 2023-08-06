import classes from './ernhv-vendors.module.css'
import UserList from '@/component/adminDashboard/userlist'
import Users from '../model/registerSchema'
import connectDB from '@/utils/connectmongo'


function ErnhvUsers(props) {
    return (
        <div className={classes.header}>
            <h1>Users Withdrawal</h1>
            <UserList users={props.users} />

        </div>
    )
}
export async function getStaticProps() {
    await connectDB()
    const users = await Users.find({})
    //    console.log(users)

    return {
        props: {
            users: users.map((user) => ({
                firstname: user.firstname,

                lastname: user.lastname,
                username: user.username,
                prefferedUsername: user.prefferedUsername,
                accountNumber: user.accountNumber,
                phone: user.phone,
                bankName: user.bankName,
                bank: user.bank,
                requestedWithdrawal: user.requestedWithdrawal,
                withdrawalRequestDate: user.withdrawalRequestDate,

                id: user._id.toString(),
            })),
            revalidate: 1,
        }
    }
}

export default ErnhvUsers