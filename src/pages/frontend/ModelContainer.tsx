import  { useState } from 'react'
import { Button, Modal, ModalActions, ModalContent, ModalHeader } from 'semantic-ui-react'
import ButtonProps from '../../components/Button';

const ModelContainer = (props: any) => {

    const [open, setOpen] = useState(false)

    return (
        <>
           <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={<ButtonProps className='button' buttonName={props.buttonName}/>}
      >
        <ModalHeader>     
          {props.modelHeader}
        </ModalHeader>
        <ModalContent image>
          {props.modelContent}
        </ModalContent>
        <ModalActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
         <ButtonProps buttonName='Downloads' onClick={props.downloadTextFile}/>
        </ModalActions>
      </Modal>
        </>
    )
}

export default ModelContainer