 import classes from './top-earners.module.css'
 import Users from '../model/registerSchema'
import connectDB from '@/utils/connectmongo'
import UsersList from '@/component/users/usersList'


function TopEarners(props) {
    return (
        <div className={classes.header}>
            <h1>Top Earners</h1>

            <UsersList users={props.users} />
        </div>
    )
}
export async function getStaticProps() {
    await connectDB()
    
    // rearrange()
    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    const Allusers = await Users.find({})
    let users
    
    function rearrangeArray() {
        users = shuffleArray([...Allusers]);
        return users;
    }
    // Example usage:
    rearrangeArray(); // Output will be a shuffled version of the 'vendors' array



    return {
        props: {
            users: users.map((user) => ({
                firstname: user.firstname,

                lastname: user.lastname,
                username: user.username,
                prefferedUsername: user.prefferedUsername,

                phone: user.phone,
                 
               
                passport: user.passport,
                bank: user.bank,
                
                welcomeBonus: user.welcomeBonus,
                referalBonus: user.referalBonus,
                indirectReferalBonus: user.indirectReferalBonus,
                secondIndirectRBonus: user.secondIndirectRBonus,
                hivepostOne: user.hivepostOne,
                hivepostTwo: user.hivepostTwo,
                dailyLogin: user.dailyLogin,
                hiveGame: user.hiveGame,
                referral: user.referral,
                totalWithdrawal: user.totalWithdrawal,
                
                
                id: user._id.toString(),
                
                
                 
            })),
            revalidate: 1,
        }
    }
}

export default TopEarners