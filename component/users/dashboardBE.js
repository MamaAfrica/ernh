import { signIn, signOut, useSession } from 'next-auth/react'
import Modal from "react-overlays/Modal";
import { useState } from 'react';
import classes from './dashboardBE.module.css'
import ModalCard from './modalCard';
import { useRouter } from 'next/router';

function DashboardBE() {
    const { data: session, status } = useSession()
    const [showModal, setShowModal] = useState(false);
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;
   

//   var handleClose = () => setShowModal(false);

  function handleClose(){
    setShowModal(false)
     
  }



    return (
        <div className={classes.banner}>

            <div className={classes.earning}>
                
                    <div className={classes.hiveCash}>
                        <p>Hive Cash</p>
                        <h1>{
                            session.user.dailyLogin +
                            session.user.hivepostOne +
                            session.user.hivepostTwo +
                            session.user.welcomeBonus

                        } H</h1>

                    </div>
               
               
                <div className={classes.divTotal} >
                    <div className={classes.total}>
                        <div className={classes.totalBalance}>
                            <p>Total Balance</p>
                            <h1>N {session.user.referalBonus +
                                session.user.indirectReferalBonus +
                                session.user.secondIndirectRBonus

                            } </h1>
                        </div>
                        <div className={classes.bank}>
                            <p>Bank</p>
                            <div>
                                <p>ACE</p><span></span>
                            </div>

                        </div>
                    </div>
                  


                </div>
                 
                <div className={classes.hiveGame} onClick={() => setShowModal(true)}>
                    <p>Hive Game</p>
                    <h1>{session.user.hiveGame
                    } H</h1>

                </div>
                <Modal
        className={classes.modal}
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <div className={classes.modalHeader}>
             
            <div>
              <span className={classes.closeButton} onClick={handleClose}>
               <button>Close</button>
              </span>
            </div>
          </div>
          <div className={classes.modalDesc}>
            <ModalCard/>
          </div>
         
        </div>
      </Modal>
            </div>
            </div>
      
    )
}
export default DashboardBE