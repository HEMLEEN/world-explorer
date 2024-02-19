import React, { useState } from 'react'
import { Button, Icon, Modal, ModalActions, ModalContent } from 'semantic-ui-react'

const ModelContainer = (props: any) => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <Modal
                closeIcon
                open={open}
                trigger={<Button>{props.buttonName}</Button>}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
            >
                <ModalActions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        <Icon name='remove' /> Close
                    </Button>
                </ModalActions>
                <ModalContent >
                    <div className='modelContent'>
                        <ul>
                            <li>{props.modelContent}</li>
                            <img src={props.modelExample} alt="" />
                        </ul>
                    </div>
                </ModalContent>

            </Modal>
        </>
    )
}

export default ModelContainer