
import { useState } from "react";
import { useRouter } from 'next/router';
import { signIn, signOut, useSession } from 'next-auth/react'
import classes from './profileimage.module.css'
import Link from "next/link";

const Getpin = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [dpin, setDpin] = useState(" ")



    async function submitHandler(event) {
        event.preventDefault()
        setDpin(session.user.pin)
        setTimeout(() => {
            setDpin(" ")
        }, 1200);



    }

    return (

        <div className={classes.section}>

            <div className={classes.card}>

                <form onSubmit={submitHandler} className={classes.form}>
                    <div className={classes.control}>
                       
                        <input type='text'
                            required id="passport"
                            name="passport"
                            value={dpin}

                        />

                    </div>
                    <p>You can change your withdrawal PIN after setting up your withdrawal account . You can do that by clicking on the Bank icon or <Link href='/bank'>here</Link></p>

                    <div className={classes.actions}>
                        <button type="submit">Get Your Default Pin</button>
                    </div>


                </form>

            </div>
        </div>

    );
}

export default Getpin;