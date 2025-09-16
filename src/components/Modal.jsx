import React from 'react'

function Modal({closeModal}) {
    return (
<>
        <div className="modal-background" style={{
            backgroundColor: 'rgba(42, 33, 75, 0.8)',
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'fixed',
            top: '0',
            zIndex: '1'

        }}>
            <div className='modal-contiainer' style={{
                backgroundColor: 'rgba(15, 23, 42, 0.5)',
                width: '550px',
                borderRadius: '15px',
                display: 'flex',
                flexDirection: 'column',
                padding: '25px',
                boxShadow: 'rgba(15, 23, 42, 0.7) 0px 5px 15px'
            }}>
                <div className="title-close-btn" style={{
                    display: 'inline-block',
                    textAlign: 'right',
                }}>
                    <button onClick={() => closeModal(false)} style={{
                        backgroundColor: 'transparent',
                        borderStyle: 'none',
                        color: 'white',
                        fontSize: '24px'
                    }}> X </button>
                </div>
                
                <div className="modal-title" style={{
                    display: 'inline-block',
                    textAlign: 'center',
                    marginBottom: '30px',
                    fontFamily: 'montserrat, sans-serif',
                    fontSize: '16px',
                    color: 'rgba(232, 76, 138, 1)'
                }}>
                    <h1>Send a message.</h1>
                </div>
                <form action="https://formsubmit.co/sarmientoiverson12@gmail.com" method="POST">
                <div className="modal-body" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    fontFamily: 'montserrat, sans-serif',
                    fontSize: '12px',
                    gap: '10px',
                    color: 'rgba(228, 63, 129, 1)'
                }}>
                    <h2>Name</h2>
                    <input type="text" name="name" required placeholder='John' className='name-input' style={{
                        height: '18px',
                        padding: '8px',
                        marginLeft: '20px',
                        borderRadius: '5px',
                        borderStyle: 'none'
                    }}></input>
                    <h2>Email</h2>
                    <input type="email" name="email" recquired placeholder="example@gmail.com" className='email-input'style={{
                        height: '18px',
                        padding: '8px',
                        marginLeft: '20px',
                        borderRadius: '5px',
                        borderStyle: 'none'

                    }}></input>
                    <h2>Subject</h2>
                    <input type="text" name="subject " required placeholder='ex. Web Design' className='subject-input' style={{
                        height: '18px',
                        padding: '8px',
                        marginLeft: '20px',
                        borderRadius: '5px',
                        borderStyle: 'none'

                    }}></input>
                    <h2>Message</h2>
                    <textarea name='msg' recquired placeholder='Message...' className='message-input' style={{
                        minHeight: '100px',
                        minWidth: '510px',
                        padding: '8px',
                        marginLeft: '20px',
                        borderRadius: '5px',
                        borderStyle: 'none'
                    }}></textarea>
                </div>
                <div className="modal-footer" style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '20px'
                }}> 
                    <input type="hidden" name="_template" value="table"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <button className='send-button' style={{
                        backgroundColor: 'rgba(70, 205, 104, 1)',
                        height: '50px',
                        width: '50%',
                        borderRadius: '8px',
                        fontFamily: 'montressat, sans-serif',
                        fontSize: '16px',
                        fontWeight: 'bolder',
                        borderStyle: 'none',
                        color: 'rgba(42, 33, 75,1 )'
                    }}>Send Message</button>
                </div>
                    </form>
            </div>
        </div>
</>
    )
}

export default Modal;
